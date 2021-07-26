import { apiService } from '../service/cocktailApi';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const data = await apiService.getRandom();

  return {
    props: {
      data,
    },
  };
}

export default function Random({ data }) {
  const [drink, setDrink] = useState(data);

  const fetchDrink = async () => {
    const res = await getStaticProps();
    const dataResp = await res;

    console.log('RESP', dataResp);
    return dataResp;
  };

  useEffect(() => {
    const getDrink = async () => {
      const dataFromServer = await fetchDrink();
      setDrink(dataFromServer);
    };

    getDrink();
  }, []);

  return <p>{drink}</p>;
}
