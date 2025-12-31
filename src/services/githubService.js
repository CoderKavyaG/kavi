// GitHub service to fetch user statistics and commits - with Caching

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'CoderKavyaG';
const CACHE_PREFIX = 'github_cache_';
const CACHE_TTL = 3600 * 1000; // 1 hour

class GitHubService {
  // Helper to manage caching
  async getWithCache(key, fetchFn) {
    const cacheKey = `${CACHE_PREFIX}${key}`;
    const cached = localStorage.getItem(cacheKey);

    // Check if we have valid cached data
    if (cached) {
      try {
        const { value, timestamp } = JSON.parse(cached);
        const isFresh = Date.now() - timestamp < CACHE_TTL;

        // If it's fresh, return it immediately
        if (isFresh) {
          return value;
        }

        // If it's stale, we try to fetch, but keep this as backup
      } catch (e) {
        localStorage.removeItem(cacheKey);
      }
    }

    // Try fetching fresh data
    try {
      const data = await fetchFn();

      // If successful, cache it
      localStorage.setItem(cacheKey, JSON.stringify({
        value: data,
        timestamp: Date.now()
      }));

      return data;
    } catch (error) {
      // If fetch failed (e.g. Rate Limit), but we have stale cache, use it
      if (cached && error.message.includes('403')) {
        console.warn(`GitHub API Rate Limit. Using cached data for ${key}.`);
        try {
          return JSON.parse(cached).value;
        } catch (e) { /* ignore */ }
      }
      throw error;
    }
  }

  async getUserStats() {
    try {
      return await this.getWithCache('userStats', async () => {
        const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);

        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const data = await response.json();

        return {
          followers: data.followers || 0,
          following: data.following || 0,
          publicRepos: data.public_repos || 0,
          avatar: data.avatar_url,
          bio: data.bio,
          company: data.company,
          blog: data.blog,
        };
      });
    } catch (error) {
      console.error('Error fetching GitHub user stats:', error);
      return { publicRepos: 0 };
    }
  }

  async getTodayCommits() {
    try {
      return await this.getWithCache('todayCommits', async () => {
        const response = await fetch(
          `${GITHUB_API_BASE}/users/${USERNAME}/events?per_page=100`
        );

        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const events = await response.json();
        const today = new Date().toDateString();

        let commitsToday = 0;

        events.forEach(event => {
          if (event.type === 'PushEvent' && event.payload && event.payload.commits) {
            const eventDate = new Date(event.created_at).toDateString();
            if (eventDate === today) {
              commitsToday += event.payload.commits.length;
            }
          }
        });
        return commitsToday;
      });
    } catch (error) {
      console.error('Error fetching today commits:', error);
      return 0;
    }
  }

  async getPublicRepos() {
    try {
      return await this.getWithCache('publicRepos', async () => {
        const response = await fetch(
          `${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=10&type=owner`
        );
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);
        return await response.json();
      });
    } catch (error) {
      console.error('Error fetching public repos:', error);
      return [];
    }
  }
}

export default new GitHubService();
