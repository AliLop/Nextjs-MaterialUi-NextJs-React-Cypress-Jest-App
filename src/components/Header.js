import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

function Header({ subtitle }) {
  return (
    <Container>
      <div style={{ margin: '15px 0' }} data-cy="header">
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          style={{ fontWeight: '800' }}
        >
          <span data-cy="subtitle">{subtitle}</span>
        </Typography>
      </div>
    </Container>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Header;
