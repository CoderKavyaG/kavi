// GitHub service to fetch user statistics and commits

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'CoderKavyaG';

class GitHubService {
  async getUserStats() {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('GitHub API rate limit exceeded');
        }
        throw new Error(`GitHub API Error: ${response.status}`);
      }

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
    } catch (error) {
      console.error('Error fetching GitHub user stats:', error);
      return { publicRepos: 0 };
    }
  }

  async getTodayCommits() {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/users/${USERNAME}/events?per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.status}`);
      }

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
    } catch (error) {
      console.error('Error fetching today commits:', error);
      return 0;
    }
  }

  async getPublicRepos() {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=10&type=owner`
      );

      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching public repos:', error);
      return [];
    }
  }
}

export default new GitHubService();
