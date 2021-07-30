import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import PropTypes from 'prop-types';

import TopBar from './TopBar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.dark,
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    height: '90vh',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
    minWidth: 1280,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

function Layout({ children, title }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}

Head.defaultProps = {
  title: 'My Cocktails',
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
