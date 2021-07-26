import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

function Header({ subtitle }) {
  return (
    <Container>
      <div style={{ margin: '25px 0' }}>
        <Typography variant="h4" color="textSecondary" align="center">
          {subtitle}
        </Typography>
      </div>
    </Container>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Header;
