export default class AdService {
    static async getAll() {
        const response = await fetch('http://localhost:3000/advertisements').then(res => res.json());
        return response;
    }
}