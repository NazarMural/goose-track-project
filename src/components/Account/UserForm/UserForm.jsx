import React from 'react';
// import moment from 'moment';
import { Formik, useFormik } from 'formik';
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
  IconStatus,
  FieldContainer,
  ErrorMessageText,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDataOperation } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Notify } from 'notiflix';

const schema = object().shape({
  username: string().max(16).required(),
  phone: number(),
  birthday: date(),
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

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
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
  // const now = moment().format('YYYY - MM - DD');
  return (
    <Container>
      <UserInfo />
      <Formik>
        <AddUserForm name="userform" autoComplete="off" onSubmit={handleSubmit}>
          <FieldContainer>
            <Label>
              User Name
              <FormField
                type="text"
                name="username"
                placeholder="Enter your name"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.username}
                // touched={touched.username}
              />
              {touched.username && (
                <IconStatus error={errors.username}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.username ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {touched.username &&
                (errors.username ? (
                  <ErrorMessageText error>{errors.username}</ErrorMessageText>
                ) : (
                  <ErrorMessageText>This is an CORRECT name</ErrorMessageText>
                ))}
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Phone
              <FormField
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.phone}
                // touched={touched.phone}
              />
              {touched.phone && (
                <IconStatus error={errors.phone}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.phone ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {touched.phone &&
                (errors.phone ? (
                  <ErrorMessageText error>{errors.phone}</ErrorMessageText>
                ) : (
                  <ErrorMessageText>This is an CORRECT phone</ErrorMessageText>
                ))}
            </Label>
          </FieldContainer>
          <Span>
            <FieldContainer>
              <Label>
                Birthday
                <FormField
                  type="date"
                  name="birthday"
                  placeholder="YYYY - MM - DD"
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.birthday}
                  // touched={touched.birthday}
                />
                <ChevronDown>
                  <use href={`${sprite}#icon-chevron-down`}></use>
                </ChevronDown>
                {touched.birthday && (
                  <IconStatus error={errors.birthday}>
                    <use
                      xlinkHref={`${sprite}${
                        errors.birthday ? '#icon-error' : '#icon-done'
                      }`}
                    />
                  </IconStatus>
                )}
                {touched.birthday &&
                  (errors.birthday ? (
                    <ErrorMessageText error>{errors.birthday}</ErrorMessageText>
                  ) : (
                    <ErrorMessageText>This is an CORRECT date</ErrorMessageText>
                  ))}
              </Label>
            </FieldContainer>
          </Span>
          <FieldContainer>
            <Label>
              Skype
              <FormField
                type="text"
                name="skype"
                placeholder="Add a skype number"
                value={values.skype}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.skype}
                // touched={touched.skype}
              />
              {touched.skype && (
                <IconStatus error={errors.skype}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.skype ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {touched.skype &&
                (errors.skype ? (
                  <ErrorMessageText error>{errors.skype}</ErrorMessageText>
                ) : (
                  <ErrorMessageText>
                    This is an CORRECT skype number
                  </ErrorMessageText>
                ))}
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Email
              <FormField
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                // touched={touched.email}
              />
              {touched.email && (
                <IconStatus error={errors.email}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.email ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {touched.email &&
                (errors.email ? (
                  <ErrorMessageText error>{errors.email}</ErrorMessageText>
                ) : (
                  <ErrorMessageText>This is an CORRECT email</ErrorMessageText>
                ))}
            </Label>
          </FieldContainer>
          <ButtonContainer>
            <Button type="submit">Save changes</Button>
          </ButtonContainer>
        </AddUserForm>
      </Formik>
    </Container>
  );
};
