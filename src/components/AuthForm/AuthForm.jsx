import { useFormik } from 'formik';
import React, { useEffect } from 'react';
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
import { Report } from 'notiflix';

const SignUpSchema = object().shape({
  name: string().min(2).max(50).required(),

  email: string().email().required(),

  password: string().required().min(6),
});

const LoginUpSchema = object().shape({
  email: string().email().required(),

  password: string().min(6).required(),
});

const AuthForm = ({ login }) => {
  const isLoading = useSelector(selectIsAuthLoading);
  const isLogIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLogIn && navigate('/calendar/month/');
  }, [isLogIn, navigate]);

  const dispatch = useDispatch();
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
            Report.warning('Warning', 'This email in use!!!', 'Okay', {
              backOverlayClickToClose: true,
            });
            break;

          default:
            Report.failure('Error', 'Server ERROR, please try again.', 'Okay', {
              backOverlayClickToClose: true,
            });
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
          Report.warning(
            'Warning',
            'Password on email is not correct!',
            'Okay',
            {
              backOverlayClickToClose: true,
            }
          );
          break;

        default:
          Report.failure('Error', 'Server ERROR, please try again.', 'Okay', {
            backOverlayClickToClose: true,
          });
          break;
      }
      return;
    }

    resetForm();
  }

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
                <ErrorMessageText error>This is an ERROR name</ErrorMessageText>
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
              <IconStatus>
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
              <ErrorMessageText error>This is an ERROR email</ErrorMessageText>
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
              type="password"
              name="password"
              placeholder="Enter password"
              errors={errors.password}
              touched={touched.password}
            />
            {touched.password && (
              <IconStatus>
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
              <ErrorMessageText error>
                This is an ERROR password
              </ErrorMessageText>
            ) : (
              <ErrorMessageText>This is an CORRECT password</ErrorMessageText>
            ))}
        </Lable>

        <Button type="submit">
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
