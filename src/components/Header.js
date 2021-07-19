import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

function Header({ subtitle }) {
  return (
    <Container>
      <div style={{ margin: '15px 0' }}>
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          style={{ fontWeight: '800' }}
        >
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
