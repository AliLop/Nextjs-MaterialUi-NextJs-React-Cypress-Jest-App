import Image from 'next/image';
import { Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: 'pointer',
  },
  copy: {
    paddingLeft: theme.spacing(2),
    position: 'relative',
    top: '-3px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <Typography
        component="span"
        variant="body2"
        color="textPrimary"
        align="center"
      >
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <span>
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={72}
              height={18}
              className={classes.logo}
            />
          </span>
          <span className={classes.copy}>
            {'Copyright © '}
            {new Date().getFullYear()}.
          </span>
        </Link>
      </Typography>
    </div>
  );
}

export default Footer;
