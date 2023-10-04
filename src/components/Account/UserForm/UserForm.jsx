import React from 'react';
import { Formik, ErrorMessage, useFormik } from 'formik';
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
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDataOperation } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Notify } from 'notiflix';

const schema = object().shape({
  username: string().max(16).required(),
  phone: number(),
  birthday: date().default(() => new Date()),
  skype: string().max(16),
  email: string().email().required(),
});

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const initialValues = {
    username: user.name,
    phone: user.phone,
    birthday: user.birthday,
    skype: user.social,
    email: user.email,
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  async function onSubmit(values) {
    const newData = {
      name: values.username,
      email: values.email,
      birthday: values.birthday,
      phone: values.phone,
      social: values.skype,
    };

    await dispatch(updateUserDataOperation(newData));

    Notify.success('Data update successfully');
  }

  return (
    <Container>
      <UserInfo />
      <Formik>
        <AddUserForm name="userform" autoComplete="off" onSubmit={handleSubmit}>
          <Label>
            User Name
            <FormField
              type="text"
              name="username"
              placeholder="Enter your name"
              value={values.username}
              onChange={handleChange}
            />
            <ErrorMessage name="username" component="div" />
          </Label>
          <Label>
            Phone
            <FormField
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={handleChange}
            />
            <ErrorMessage name="phone" component="div" />
          </Label>

          <Label>
            Birthday
            <Span>
              <FormField
                type="date"
                name="birthday"
                placeholder="DD/MM/YYYY"
                value={values.birthday}
                onChange={handleChange}
              />
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
              value={values.skype}
              onChange={handleChange}
            />
            <ErrorMessage name="skype" component="div" />
          </Label>
          <Label>
            Email
            <FormField
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
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
