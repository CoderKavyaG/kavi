// GitHub service to fetch user statistics and commits
import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'CoderKavyaG';

class GitHubService {
  async getUserStats() {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${USERNAME}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });

      return {
        followers: response.data.followers || 0,
        following: response.data.following || 0,
        publicRepos: response.data.public_repos || 0,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        company: response.data.company,
        blog: response.data.blog,
      };
    } catch (error) {
      console.error('Error fetching GitHub user stats:', error);
      return null;
    }
  }

  async getTodayCommits() {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const todayDate = `${year}-${month}-${day}`;

      // Get all events for the user
      const response = await axios.get(
        `${GITHUB_API_BASE}/users/${USERNAME}/events`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
          params: {
            per_page: 100
          }
        }
      );

      // Filter for PushEvent and get commits from today
      let commitsToday = 0;
      const events = response.data || [];
      
      events.forEach(event => {
        if (event.type === 'PushEvent' && event.payload && event.payload.commits) {
          const eventDate = event.created_at.split('T')[0];
          if (eventDate === todayDate) {
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
      const response = await axios.get(
        `${GITHUB_API_BASE}/users/${USERNAME}/repos`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
          params: {
            sort: 'updated',
            per_page: 10,
            type: 'owner'
          }
        }
      );

      return response.data || [];
    } catch (error) {
      console.error('Error fetching public repos:', error);
      return [];
    }
  }
}

export default new GitHubService();
