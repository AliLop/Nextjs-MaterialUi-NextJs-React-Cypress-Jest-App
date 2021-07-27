import { Container, Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

function Contact() {
  const router = useRouter();

  return (
    <>
      <Container>
        <Header subtitle="Contact Us" />
        <ContactForm />
        <Box m={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => router.back()}
            style={{ padding: '20px', color: '#B8860B' }}
          >
            Go back
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
