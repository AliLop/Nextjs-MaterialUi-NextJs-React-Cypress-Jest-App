import { DefaultApi } from 'cocktail-db-api';

// class ApiService {
//   constructor() {
//     this.api = new DefaultApi();
//   }
//   getRandom = () =>
//     new Promise((resolve, reject) => {
//       this.api.randomPhpGet((error, data) => {
//         if (error) {
//           console.error(error);
//           reject(error);
//         }
//         resolve(data);
//         console.log('API called successfully.');
//       });
//     });
// }
// const apiService = new ApiService();
// export default apiService;

//try 2
//const CocktailDbApi = require('cocktail-db-api');

class ApiService {
  constructor() {
    //   this.api = new CocktailDbApi.DefaultApi();
    this.api = new DefaultApi();
  }
  getRandom = () => {
    new Promise((resolve, reject) => {
      this.api.randomPhpGet((error, data) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        resolve(data);
        console.log('API called successfully.');
      });
    });
  };
}
const apiService = new ApiService();
export default apiService;

//try 3
// const CocktailDbApi = require('cocktail-db-api');
// const defaultApi = new CocktailDbApi.DefaultApi();

// var callback = function (error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully.');
//   }
// };

// const getRandom = defaultApi.randomPhpGet(callback);

// getRandom();

// console.log(getRandom);
