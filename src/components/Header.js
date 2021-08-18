import { Container, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

function Header({ subtitle }) {
  return (
    <Container>
      <span data-cy="header">
        <Box
          my={3}
          align="center"
          color="text.secondary"
          sx={{
            fontWeight: 800,
            fontSize: 30,
          }}
        >
          <h3 data-cy="subtitle">{subtitle}</h3>
        </Box>
      </span>
    </Container>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Header;
