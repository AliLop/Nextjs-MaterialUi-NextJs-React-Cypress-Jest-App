import { useState } from 'react';

const PostContactForm = async (values, successCallback, errorCallback) => {
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  fullName: '',
  email: '',
  message: '',
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isHandleSuccess, setIsHandleSuccess] = useState(false);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName.trim()
        ? ''
        : 'This field is required.';

    if ('email' in fieldValues) {
      temp.email = fieldValues.email.trim() ? '' : 'This field is required.';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email.trim())
          ? ''
          : 'Email is not valid.';
    }

    if ('message' in fieldValues)
      temp.message =
        fieldValues.message.trim().length !== 0
          ? ''
          : 'This field is required.';

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value.trim(),
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      fullName: '',
      email: '',
      message: '',
      formSubmitted: true,
      success: true,
    });
    setIsHandleSuccess(true);
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === '');

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formIsValid()) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    isHandleSuccess,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
