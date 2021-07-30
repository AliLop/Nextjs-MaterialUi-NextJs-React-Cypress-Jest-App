import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  let window = '';

  if (router.pathname === '/') {
    window = 'home';
  } else if (router.pathname === '/about') {
    window = 'about';
  } else if (router.pathname === '/favorites') {
    window = 'fav';
  } else if (router.pathname === '/contact') {
    window = 'cont';
  }

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <Link href="/" passHref>
        <Typography
          style={{ paddingRight: '20px' }}
          color={window === 'home' ? 'textSecondary' : 'secondary'}
        >
          Home
        </Typography>
      </Link>

      <Link href="/favorites" passHref>
        <Typography
          style={{ paddingRight: '20px' }}
          color={window === 'fav' ? 'textSecondary' : 'secondary'}
        >
          <span data-cy="favorites-btn">Favorites</span>
        </Typography>
      </Link>

      <Link href="/about" passHref>
        <Typography
          style={{
            paddingRight: '20px',
            cursor: window === 'about' ? 'default' : 'pointer',
          }}
          color={window === 'about' ? 'textSecondary' : 'secondary'}
        >
          <span data-cy="about-btn">About</span>
        </Typography>
      </Link>

      <Link href="/contact" passHref>
        <Typography
          style={{
            paddingRight: '20px',
            cursor: window === 'cont' ? 'default' : 'pointer',
          }}
          color={window === 'cont' ? 'textSecondary' : 'secondary'}
        >
          <span data-cy="contact-btn">Contact</span>
        </Typography>
      </Link>
    </div>
  );
}

export default NavBar;
