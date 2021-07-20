// import { ProbesApi } from '@happy-health/backend-mp-go-auth-javascript';

// class ProbesService {
//   constructor() {
//     this.api = new ProbesApi();
//   }
//   getResponse = () =>
//     new Promise((resolve, reject) => {
//       this.api.probesHealthzGet((error, data) => {
//         if (error) {
//           console.error(error);
//           reject(error);
//         }
//         resolve(data);
//         console.log('API called successfully.');
//       });
//     });
// }
// const probesService = new ProbesService();
// export default probesService;

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   return await fetch(
//     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
//   );
// }

// /import { useEffect, useState } from 'react';

// const [data, setData] = useState([]);

// const fetchData = async () => {
//   const res = await getStaticProps();
//   const dataResp = await res;

//   console.log('RESP', dataResp);
//   return dataResp;
// };

// useEffect(() => {
//   const getData = async () => {
//     //const dataFromServer = await fetchData();
//     setData(data);
//   };

//   getData();
// }, []);
// console.log('DATA const', data);
