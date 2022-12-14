import axios from "axios";


export default class PostService {
    static async getAll(page, limit) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params:{
            _limit: limit,
            _page:page,
            }})
        return response;//посты с лимитом и страницами
    }
    static async getOne(postNumber) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`
            )
        return response;//конкретный пост
    }

    static async getComment(postNumber) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`
        )
        return response;//комменты
    }

}