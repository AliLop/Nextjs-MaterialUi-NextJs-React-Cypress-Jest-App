import { makeStyles } from '@material-ui/core';

import Meta from './Meta';
import TopBar from './TopBar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    height: '92vh',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
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

function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Meta />
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
