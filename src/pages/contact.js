import { Container, Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Header from '../components/Header';

function Contact() {
  const router = useRouter();

  return (
    <>
      <Container>
        <Header subtitle="Contact Us" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box m={4}>
            <Button
              onClick={() => router.back()}
              style={{ padding: '20px', color: '#B8860B' }}
            >
              Go back
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default Contact;
