import { Advertisment } from "../../types/types";

export default class AdService {
    static async getAll(page = 1, limit = 10, filter = {sort: '', query: ''}) {
        const response = await fetch(`http://localhost:3001/advertisements?_page=${page}&_per_page=${limit}&_sort=-${filter.sort}&q=${filter.query}`).then(res => res.json());
        return response;
    }

    static async getById(id: string) {
        const response = await fetch(`http://localhost:3001/advertisements/${id}`).then(res => res.json());
        return response;
    }

    static async addNewAd(imageUrl: string, 
                          name: string, 
                          description: string, 
                          price: number, 
                          ads: Advertisment[], 
                          setAds: (ad: Advertisment[]) => void, 
                          page: number, 
                          setTotalPages: (page: number) => void, 
                          limit: number) {
        await fetch('http://localhost:3001/advertisements', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "name": name,
              "description": description ? description : "",
              "price": price,
              "createdAt": new Date(),
              "views": 0,
              "likes": 0,
              "imageUrl": imageUrl ? imageUrl: ""
            })
        });
    }

    static async addNewAdAnotherPage(imageUrl: string, 
                          name: string, 
                          description: string, 
                          price: number) {
        await fetch('http://localhost:3001/advertisements', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "name": name,
              "description": description ? description : "",
              "price": price,
              "createdAt": new Date(),
              "views": 0,
              "likes": 0,
              "imageUrl": imageUrl ? imageUrl: ""
            })
        });
    }
}