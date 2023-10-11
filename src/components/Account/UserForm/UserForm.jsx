import React from 'react';
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
  Wrapper,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDataOperation } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Notify } from 'notiflix';
import moment from 'moment';

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

  const {
    values,
    errors,
    dirty,
    isSubmitting,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: onSubmit,
  });

  async function onSubmit(values) {
    const newData = {
      name: values.username,
      email: values.email,
      birthday: moment(values.birthday).format('YYYY-MM-DD'),
      phone: values.phone,
      social: values.skype,
    };
    await dispatch(updateUserDataOperation(newData));
    Notify.success('Data update successfully');
    resetForm();
  }

  const isWeekend = date => {
    const day = date.getDay();
    return day === 0 || day === 6 ? 'weekend' : '';
  };

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
                onChange={handleChange('username')}
                onBlur={handleBlur('username')}
                errors={errors.username}
                touched={
                  values.username !== initialValues.username
                    ? values.username
                    : ''
                }
              />
              {values.username !== initialValues.username && (
                <IconStatus error={errors.username}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.username ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {values.username !== initialValues.username &&
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
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                errors={errors.phone}
                touched={
                  values.phone !== initialValues.phone ? values.phone : ''
                }
              />
              {values.phone !== initialValues.phone && (
                <IconStatus error={errors.phone}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.phone ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {values.phone !== initialValues.phone &&
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
                <Wrapper
                  name="birthday"
                  placeholderText="YYYY-MM-DD"
                  value={values.birthday}
                  dateFormat="yyyy-MM-dd"
                  selected={values.birthday ? new Date(values.birthday) : null}
                  onChange={date => setFieldValue('birthday', date)}
                  calendarStartDay={1}
                  formatWeekDay={weekDay => weekDay.charAt(0)}
                  minDate={new Date(1950, 0, 1)}
                  maxDate={new Date()}
                  // onBlur={handleBlur('birthday')}
                  onBlur={() => setFieldTouched('birthday', true)}
                  showMonthDropdown
                  showYearDropdown
                  shouldCloseOnSelect
                  dropdownMode="select"
                  dayClassName={isWeekend}
                  enableTabLoop={false}
                />
                <ChevronDown>
                  <use href={`${sprite}#icon-chevron-down`}></use>
                </ChevronDown>
                {values.birthday !== initialValues.birthday && (
                  <IconStatus error={errors.birthday} birthday>
                    <use
                      xlinkHref={`${sprite}${
                        errors.birthday ? '#icon-error' : '#icon-done'
                      }`}
                    />
                  </IconStatus>
                )}
                {values.birthday !== initialValues.birthday &&
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
                onChange={handleChange('skype')}
                onBlur={handleBlur('skype')}
                errors={errors.skype}
                touched={
                  values.skype !== initialValues.skype ? values.skype : ''
                }
              />
              {values.skype !== initialValues.skype && (
                <IconStatus error={errors.skype}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.skype ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {values.skype !== initialValues.skype &&
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
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                errors={errors.email}
                touched={
                  values.email !== initialValues.email ? values.email : ''
                }
              />
              {values.email !== initialValues.email && (
                <IconStatus error={errors.email}>
                  <use
                    xlinkHref={`${sprite}${
                      errors.email ? '#icon-error' : '#icon-done'
                    }`}
                  />
                </IconStatus>
              )}
              {values.email !== initialValues.email &&
                (errors.email ? (
                  <ErrorMessageText error>{errors.email}</ErrorMessageText>
                ) : (
                  <ErrorMessageText>This is an CORRECT email</ErrorMessageText>
                ))}
            </Label>
          </FieldContainer>
          <ButtonContainer>
            <Button type="submit" disabled={!dirty || isSubmitting}>
              Save changes
            </Button>
          </ButtonContainer>
        </AddUserForm>
      </Formik>
    </Container>
  );
};
