export default class AdService {
    static async getAll(page = 1, limit = 10, filter = {sort: '', query: ''}) {
        const response = await fetch(`http://localhost:3001/advertisements?_page=${page}&_per_page=${limit}&_sort=-${filter.sort}&q=${filter.query}`).then(res => res.json());
        return response;
    }

    static async getById(id: string) {
        const response = await fetch(`http://localhost:3001/advertisements/${id}`).then(res => res.json());
        return response;
    }
}