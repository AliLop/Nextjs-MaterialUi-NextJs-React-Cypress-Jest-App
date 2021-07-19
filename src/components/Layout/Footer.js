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
    <>
      <hr
        style={{
          color: '#B8860B',
          borderWidth: '1px',
          borderColor: '#B8860B',
          marginBottom: '0px',
          marginTop: '15px',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#FFEFD5',
        }}
      >
        <Typography
          component="span"
          variant="body2"
          color="textPrimary"
          align="center"
          style={{ cursor: 'pointer' }}
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
    </>
  );
}

export default Footer;
