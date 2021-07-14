import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Layout from '../components/Layout';
import probesService from '../ProbesService';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await probesService.getResponse();
    const dataResp = await res;

    console.log('RESP', dataResp);
    return dataResp;
  };

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };

    getData();
  }, []);

  console.log('DATA const', data);

  //  const fetchData = async () => {
  //   const res = await fetch(`node_modules/@happy-health/backend-mp-go-auth-javascript/src/api/ProbesApi.js`, {
  //     method: 'GET',
  //      headers: {
  //        'Content-type': 'application/json',
  //        'apiKey': 'X-HAPPY-MP-SUB'
  //      },
  //     mode: 'no-cors'
  //   })
  //   const data = await res

  //   console.log('RESP', data)
  //   return data
  // }
  // console.log('DATA const', data)

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout title="Nextjs App">
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
