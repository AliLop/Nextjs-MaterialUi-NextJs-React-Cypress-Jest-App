import { Typography, Box } from '@material-ui/core';
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
  }

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <Box>
        <Link href="/" passHref>
          <Typography
            style={{ paddingRight: '20px' }}
            color={window === 'home' ? 'textSecondary' : 'secondary'}
          >
            Home
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link href="/favorites" passHref>
          <Typography
            style={{ paddingRight: '20px' }}
            color={window === 'fav' ? 'textSecondary' : 'secondary'}
          >
            Favorites
          </Typography>
        </Link>
      </Box>
      <Box>
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
      </Box>
    </div>
  );
}

export default NavBar;
