export default class OrderService {
    static async getAll(page = 1, limit = 10, filter = {sort: 'id', query: ''}, status = '') {
        const response = await fetch(`http://localhost:3001/orders?_page=${page}&_per_page=${limit}&_sort=-${filter.sort}&q=${filter.query}&status=${status}`).then(res => res.json());
        return response;
    }
}