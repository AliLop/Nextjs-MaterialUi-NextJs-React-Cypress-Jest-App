import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Cocktail Bar',
  keywords: 'Cocktails, bar, drinks, menu',
  description: 'Your Cocktail Bar App',
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};
