import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import {
  Container,
  AvatarContainer,
  Avatar,
  AddUserForm,
  FormField,
  Label,
  Button,
  ButtonContainer,
  AvatarName,
  AvatarStatus,
  ChangeDate,
} from '../UserForm.styled';

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

// import { FcAddDatabase } from 'react-icons/fc';
// import css from 'components/ContactForm/ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';

export const UserForm = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     number: '',
  //   });

  //   const handleInputChange = event => {
  //     const { name, value } = event.currentTarget;
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       [name]: value,
  //     }));
  //   };

  //   const reset = () => {
  //     setFormData({
  //       name: '',
  //       number: '',
  //     });
  //   };

  //   const contacts = useSelector(state => state.contacts.data);
  //   const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <AvatarContainer>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="User avatar"
        />
        <AvatarName>Username</AvatarName>
        <AvatarStatus>User</AvatarStatus>
      </AvatarContainer>
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
              // value={formData.name}
              name="username"
              placeholder="Enter your name"
              // onChange={handleInputChange}
              pattern="^[a-zA-Z\s]+$"
            />
            <ErrorMessage name="username" component="div" />
          </Label>
          <Label>
            Phone
            <FormField
              type="tel"
              name="phone"
              // value={formData.number}
              placeholder="Enter your phone number"
              // onChange={handleInputChange}
              pattern="^[0-9]+$"
            />
            <ErrorMessage name="phone" component="div" />
          </Label>
          <Label>
            Birthday
            <FormField
              type="text"
              name="birthday"
              // value={formData.number}
              placeholder="DD/MM/YYYY"
              // onChange={handleInputChange}
              pattern="^[0-9]+$"
            />
            <ChangeDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="black"
              >
                <path
                  d="M4.5 6.75L9 11.25L13.5 6.75"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ChangeDate>
            <ErrorMessage name="birthday" component="div" />
          </Label>
          <Label>
            Skype
            <FormField
              type="text"
              name="skype"
              // value={formData.number}
              placeholder="Add a skype number"
              // onChange={handleInputChange}
              pattern="^[0-9]+$"
            />
            <ErrorMessage name="skype" component="div" />
          </Label>
          <Label>
            Email
            <FormField
              type="email"
              name="email"
              // value={formData.number}
              placeholder="Enter your email"
              // onChange={handleInputChange}
              pattern="^[0-9]+$"
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
