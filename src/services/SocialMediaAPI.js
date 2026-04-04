import axios from 'axios';

const BASE_URL = 'https://api.freeapi.app/api/v1/social-media';

// 👉 Create axios instance (better for scaling)
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class SocialMedia {
  // 🔐 Get My Profile
  static async getProfile() {
    try {
      const res = await API.get('/profile');
      return res.data;
    } catch (error) {
      console.log(
        'Error in getProfile:',
        error?.response?.data || error.message,
      );
      throw error;
    }
  }

  // ✏️ Update Profile
  static async updateProfile(data) {
    try {
      const res = await API.patch('/profile', data);
      return res.data;
    } catch (error) {
      console.log(
        'Error in updateProfile:',
        error?.response?.data || error.message,
      );
      throw error;
    }
  }

  // 👤 Get Profile by Username
  static async getProfileByUsername(username) {
    try {
      const res = await API.get(`/profile/u/${username}`);
      return res.data;
    } catch (error) {
      console.log(
        'Error in getProfileByUsername:',
        error?.response?.data || error.message,
      );
      throw error;
    }
  }

  // 🏠 Get All Posts (Pagination)
  static async getPosts(page = 1, limit = 10) {
    try {
      const res = await API.get('/posts', {
        params: {
          page,
          limit,
        },
      });
      return res.data;
    } catch (error) {
      console.log('Error in getPosts:', error?.response?.data || error.message);
      throw error;
    }
  }

  // 📸 Create Post (multipart/form-data)
  static async createPost({ content, images = [], tags = [] }) {
    try {
      const formData = new FormData();

      // content
      formData.append('content', content);

      // images (max 6)
      images.slice(0, 6).forEach((img, index) => {
        formData.append('images', {
          uri: img.uri,
          type: img.type || 'image/jpeg',
          name: img.name || `image_${index}.jpg`,
        });
      });

      // tags
      tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });

      const res = await API.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return res.data;
    } catch (error) {
      console.log(
        'Error in createPost:',
        error?.response?.data || error.message,
      );
      throw error;
    }
  }
}
