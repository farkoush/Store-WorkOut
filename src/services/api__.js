import axios from 'axios';

const getApi = queryString => {
  const BaseURL = 'https://api.malltina.net'
  return new Promise((resolve, reject) => {
    axios
      .get(`${BaseURL}/search/v2?q=${queryString}`)
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

export default getApi;
