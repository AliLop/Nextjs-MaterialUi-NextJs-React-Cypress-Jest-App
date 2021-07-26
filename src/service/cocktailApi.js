import { DefaultApi } from 'cocktail-db-api';

class ApiService {
  constructor() {
    this.api = new DefaultApi();
  }
  getRandom = () =>
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
}
const apiService = new ApiService();
export default apiService;

//try 2
// const CocktailDbApi = require('cocktail-db-api');

// class ApiService {
//   constructor() {
//     this.api = new CocktailDbApi.DefaultApi();
//   }

//   getRandom = () => {
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
//   };
// }

// const apiService = new ApiService();
// export default apiService;
