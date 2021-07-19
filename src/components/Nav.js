import { Typography, Box } from '@material-ui/core';
import Link from 'next/link';

function NavBar() {
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <Box>
        <Link href="/" passHref>
          <Typography color="secondary">
            <span style={{ paddingRight: '10px' }}> Home </span>
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link href="/about" passHref>
          <Typography color="secondary">About</Typography>
        </Link>
      </Box>
    </div>
  );
}

export default NavBar;