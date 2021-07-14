import { ProbesApi } from '@happy-health/backend-mp-go-auth-javascript';

class ProbesService {
  constructor() {
    this.api = new ProbesApi();
  }
  getResponse = () =>
    new Promise((resolve, reject) => {
      this.api.probesHealthzGet((error, data) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        resolve(data);
        console.log('API called successfully.');
      });
    });
}
const probesService = new ProbesService();
export default probesService;
