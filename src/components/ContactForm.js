import { Button, TextField, Box, Grid, Typography } from '@material-ui/core';
import { useFormControls } from '../config/contactFormControls';

const inputFieldValues = [
  {
    name: 'fullName',
    label: 'Full Name',
    id: 'my-name',
  },
  {
    name: 'email',
    label: 'Email',
    id: 'my-email',
  },
  {
    name: 'message',
    label: 'Message',
    id: 'my-message',
    multiline: true,
    rows: 10,
  },
];

function ContactForm() {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    isHandleSuccess,
  } = useFormControls();

  if (isHandleSuccess) {
    return (
      <Grid container spacing={2} justifyContent="center">
        <Box textAlign="center" my={6}>
          <br />
          <br />
          <Typography sx={{ fontSize: '20px' }}>
            Thank you for reaching out to us!
          </Typography>
          <br />
          <br />
          We will get back to you as soon as possible
          <br />
          <br />
        </Box>
      </Grid>
    );
  }
  return (
    <form
      autoComplete="off"
      onSubmit={handleFormSubmit}
      style={{ maxWidth: '500px', margin: 'auto' }}
    >
      {inputFieldValues.map((inputFieldValue) => (
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={{ margin: '15px' }}
          key={inputFieldValue.name}
          onChange={handleInputValue}
          onBlur={handleInputValue}
          name={inputFieldValue.name}
          label={inputFieldValue.label}
          error={!errors}
          multiline={inputFieldValue.multiline ?? false}
          fullWidth
          rows={inputFieldValue.rows ?? 1}
          autoComplete="none"
          {...(errors[inputFieldValue.name] && {
            error: true,
            helperText: errors[inputFieldValue.name],
          })}
        />
      ))}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
        style={{ margin: '15px' }}
      >
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
