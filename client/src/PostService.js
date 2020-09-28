/* eslint-disable no-async-promise-executor */
import axios from 'axios';

const url = '/api/tasklist/';

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        dateCreated: new Date(post.dateCreated)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    // Create Posts
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Posts
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;