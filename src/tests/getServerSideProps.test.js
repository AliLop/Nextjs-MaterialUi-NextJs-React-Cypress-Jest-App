import '@testing-library/jest-dom';
import { getServerSideProps } from '../pages/index';
import { cocktails } from './test-utils';

global.fetch = require('node-fetch');

describe('getServerSideProps', () => {
  it('should call the apis', async () => {
    if (typeof window !== 'undefined') {
      const response = await getServerSideProps();
      expect(response).toEqual(
        expect.objectContaining({
          props: {
            data: cocktails,
            favData: [],
          },
        }),
      );
    }
  });
});
