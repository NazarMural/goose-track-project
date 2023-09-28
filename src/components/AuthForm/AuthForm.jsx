import { Formik } from 'formik';
import React from 'react';
import {
  Button,
  ButtonImg,
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
  const initialValues = login
    ? { email: '', password: '' }
    : { name: '', email: '', password: '' };

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <ContainerForm>
      <Title>{login ? 'Log In' : 'Sign Up'}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={login ? LoginUpSchema : SignUpSchema}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <FormStyled>
            {!login && (
              <Lable htmlFor="name">
                <LableText>Name</LableText>

                <FieldContainer>
                  <FieldStyled
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    errors={errors.name}
                    touched={touched.name}
                  />
                  {touched.name && (
                    <IconStatus>
                      <use
                        xlinkHref={`${
                          process.env.PUBLIC_URL + '/images/icons/icons.svg'
                        }${errors.name ? '#icon-error' : '#icon-done'}`}
                      />
                      ${console.log(touched)}
                    </IconStatus>
                  )}
                </FieldContainer>

                {touched.name &&
                  (errors.name ? (
                    <ErrorMessageText error>
                      This is an ERROR name
                    </ErrorMessageText>
                  ) : (
                    <ErrorMessageText>This is an CORRECT name</ErrorMessageText>
                  ))}
              </Lable>
            )}

            <Lable htmlFor="email">
              <LableText>Email</LableText>
              <FieldContainer>
                <FieldStyled
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
                      xlinkHref={`${
                        process.env.PUBLIC_URL + '/images/icons/icons.svg'
                      }${errors.email ? '#icon-error' : '#icon-done'}`}
                    />
                    ${console.log(touched)}
                  </IconStatus>
                )}
              </FieldContainer>

              {touched.email &&
                (errors.email ? (
                  <ErrorMessageText error>
                    This is an ERROR email
                  </ErrorMessageText>
                ) : (
                  <ErrorMessageText>This is an CORRECT email</ErrorMessageText>
                ))}
            </Lable>

            <Lable htmlFor="password">
              <LableText>Password</LableText>
              <FieldContainer>
                <FieldStyled
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  errors={errors.password}
                  touched={touched.password}
                />
                {touched.password && (
                  <IconStatus>
                    <use
                      xlinkHref={`${
                        process.env.PUBLIC_URL + '/images/icons/icons.svg'
                      }${errors.password ? '#icon-error' : '#icon-done'}`}
                    />
                    ${console.log(touched)}
                  </IconStatus>
                )}
              </FieldContainer>

              {touched.password &&
                (errors.password ? (
                  <ErrorMessageText error>
                    This is an ERROR password
                  </ErrorMessageText>
                ) : (
                  <ErrorMessageText>
                    This is an CORRECT password
                  </ErrorMessageText>
                ))}
            </Lable>

            <Button type="submit">
              <ButtonText>{login ? 'Log In' : 'Sign Up'}</ButtonText>
              <ButtonImg src="" alt="" />
            </Button>
          </FormStyled>
        )}
      </Formik>
    </ContainerForm>
  );
};

export default AuthForm;
