export default class AdService {
    static async getAll(page = 1, limit = 10) {
        const response = await fetch(`http://localhost:3001/advertisements?_page=${page}&_per_page=${limit}`).then(res => res.json());
        return response;
    }
}