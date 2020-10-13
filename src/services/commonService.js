import SHOP_DATA from '../pages/shop/shop.data';
class CommonService {
    constructor() {
        // super();
        // this.baseURL = baseURLS.service;
      }

    // Pretending this function makes api call to get search results from backend
    getSearchedCollectionItems = async (type, text) => {
        let results = [];
        const collectionTypeData = SHOP_DATA.filter(collection => { return type === collection.id});
        results = collectionTypeData[0].items.filter(item => item.name.includes(text));
        console.log('results', text, results);
        return results;
    }
}

export default new CommonService();