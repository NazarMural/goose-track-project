import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonLoader,
  ButtonText,
  ContainerForm,
  ErrorMessageText,
  FieldContainer,
  FieldStyled,
  FormStyled,
  IconShowHidePassword,
  IconStatus,
  Lable,
  LableText,
  Title,
} from './AuthForm.styled';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInOperation, signUpOperation } from 'redux/auth/operations';
import sprite from '../../assets/images/icons/icons.svg';
import { selectIsAuthLoading, selectIsLoggedIn } from 'redux/auth/selectors';
import { useNavigate } from 'react-router';
import { Notify } from 'notiflix';

const SignUpSchema = object().shape({
  name: string()
    .min(2, 'This name must contain at least 2 characters')
    .max(50, 'This name must contain a maximum of 50 characters')
    .required('This field is required'),

  email: string()
    .email('This email is not correct')
    .required('This field is required'),

  password: string()
    .min(7, 'This password must contain at least 7 characters')
    .required('This field is required'),
});

const LoginUpSchema = object().shape({
  email: string()
    .email('This email is not correct')
    .required('This field is required'),

  password: string()
    .min(7, 'This password must contain at least 7 characters')
    .required('This field is required'),
});

const AuthForm = ({ login }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsAuthLoading);
  const isLogIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isLogIn && navigate('/calendar/month/');
  }, [isLogIn, navigate]);

  const {
    values,
    errors,
    touched,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: login
      ? { email: '', password: '' }
      : { name: '', email: '', password: '' },
    validationSchema: login ? LoginUpSchema : SignUpSchema,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  async function onSubmit(data) {
    if (!login) {
      const regRes = await dispatch(signUpOperation(data));

      if (regRes.payload.status) {
        switch (regRes.payload.status) {
          case 409:
            Notify.warning('This email in use!!!');
            break;

          default:
            Notify.failure('Server ERROR, please try again.');
            break;
        }

        return;
      }
    }

    const logInRes = await dispatch(
      signInOperation({ email: data.email, password: data.password })
    );

    if (logInRes.payload.status) {
      switch (logInRes.payload.status) {
        case 401:
          Notify.warning('Email or password is wrong!');

          break;

        default:
          Notify.failure('Server ERROR, please try again.');
          break;
      }
      return;
    }

    resetForm();
    localStorage.removeItem('type');
    localStorage.removeItem('date');
  }

  const togglePassword = () => {
    isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
  };

  return (
    <ContainerForm>
      <Title>{login ? 'Log In' : 'Sign Up'}</Title>
      <FormStyled onSubmit={handleSubmit}>
        {!login && (
          <Lable htmlFor="name">
            <LableText>Name</LableText>

            <FieldContainer>
              <FieldStyled
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter your name"
                errors={errors.name}
                touched={touched.name}
              />
              {touched.name && (
                <IconStatus error={errors.name}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.name ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
            </FieldContainer>

            {touched.name &&
              (errors.name ? (
                <ErrorMessageText error>{errors.name}</ErrorMessageText>
              ) : (
                <ErrorMessageText>This is an CORRECT name</ErrorMessageText>
              ))}
          </Lable>
        )}

        <Lable htmlFor="email">
          <LableText>Email</LableText>
          <FieldContainer>
            <FieldStyled
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              name="email"
              // value=""
              autoComplete="off"
              placeholder="Enter email"
              errors={errors.email}
              touched={touched.email}
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
          </FieldContainer>

          {touched.email &&
            (errors.email ? (
              <ErrorMessageText error>{errors.email}</ErrorMessageText>
            ) : (
              <ErrorMessageText>This is an CORRECT email</ErrorMessageText>
            ))}
        </Lable>

        <Lable htmlFor="password">
          <LableText>Password</LableText>
          <FieldContainer>
            <FieldStyled
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              errors={errors.password}
              touched={touched.password}
            />
            <IconShowHidePassword onClick={togglePassword}>
              <use
                xlinkHref={`${sprite}${
                  isShowPassword ? '#icon-hide-password' : '#icon-show-password'
                }`}
              />
            </IconShowHidePassword>
            {touched.password && (
              <IconStatus error={errors.password}>
                <use
                  xlinkHref={`${sprite}${
                    errors.password ? '#icon-error' : '#icon-done'
                  }`}
                />
              </IconStatus>
            )}
          </FieldContainer>

          {touched.password &&
            (errors.password ? (
              <ErrorMessageText error>{errors.password}</ErrorMessageText>
            ) : (
              <ErrorMessageText>This is an CORRECT password</ErrorMessageText>
            ))}
        </Lable>

        <Button type="submit" disabled={isLoading}>
          {isLoading && <ButtonLoader />}
          <ButtonText>{login ? 'Log In' : 'Sign Up'}</ButtonText>
          <ButtonIcon>
            <use xlinkHref={`${sprite}${'#icon-log-in'}`} />
          </ButtonIcon>
        </Button>
      </FormStyled>
    </ContainerForm>
  );
};

export default AuthForm;
