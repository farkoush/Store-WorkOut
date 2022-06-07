import axios from 'axios';

const SearchProductsByTitleService = queryString => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.malltina.net/search/v2?q=${queryString}`)
      .then(response => {
        if(response && response.data && response.data.products){
          resolve(response.data.products);
        } else {
          resolve([])
        }
        
      })
      .catch(error => reject('error on Fetching data'));
  });
};

export default SearchProductsByTitleService;
