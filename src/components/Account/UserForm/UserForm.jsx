import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import sprite from '../../../assets/images/icons/icons.svg';
import { UserInfo } from '../UserInfo/UserInfo';
import {
  Container,
  AddUserForm,
  FormField,
  Label,
  Button,
  ButtonContainer,
  ChevronDown,
  Span,
} from './UserForm.styled';

const schema = object({
  username: string().max(16).required(),
  phone: number().required(),
  birthday: date()
    .required()
    .default(() => new Date()),
  skype: string().max(16).required(),
  email: string().email().required(),
});
const initialValues = {
  username: '',
  phone: '',
  birthday: '',
  skype: '',
  email: '',
};

export const UserForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <UserInfo />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <AddUserForm name="userform" autoComplete="off">
          <Label>
            User Name
            <FormField
              type="text"
              name="username"
              placeholder="Enter your name"
            />
            <ErrorMessage name="username" component="div" />
          </Label>
          <Label>
            Phone
            <FormField
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
            <ErrorMessage name="phone" component="div" />
          </Label>

          <Label>
            Birthday
            <Span>
              <FormField type="date" name="birthday" placeholder="DD/MM/YYYY" />
              <ChevronDown>
                <use href={`${sprite}#icon-chevron-down`}></use>
              </ChevronDown>
              <ErrorMessage name="birthday" component="div" />
            </Span>
          </Label>

          <Label>
            Skype
            <FormField
              type="text"
              name="skype"
              placeholder="Add a skype number"
            />
            <ErrorMessage name="skype" component="div" />
          </Label>
          <Label>
            Email
            <FormField
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" />
          </Label>
          <ButtonContainer>
            <Button type="submit">Save changes</Button>
          </ButtonContainer>
        </AddUserForm>
      </Formik>
    </Container>
  );
};
