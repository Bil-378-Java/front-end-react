export default class NewsService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url} status ${res.status}`);
        }

        return await res.json();
    }

    // getAllNews = async () => {
    //     const res = await this.getResource('/characters?page=5&pageSize=10');
    //     return res.map(this._trasformCharacter)
    // }
    // getNews = async (id) => {
    //     const res = await this.getResource(`/characters/${id}`);
    //     return this._trasformCharacter(res);
    // }

    // _trasformNews(news){
    //     return ({
    //         name: char.name,
    //         gender: char.gender,
    //         born: char.born,
    //         died: char.died,
    //         culture: char.culture
    //     })
    // }
    //

}