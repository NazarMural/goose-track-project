import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import icons from '../../../assets/images/icons/icons.svg';
import * as Yup from 'yup';

import { addTaskOperation, updateTaskOperation } from '../../../redux/tasks/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  OperationButton,
  AddIcon,
  Blue,
  BlueLine,
  ButtonContainer,
  CancelButton,
  CloseButton,
  CloseIcon,
  EditIcon,
  FieldContainer,
  FormContainer,
  Label,
  Orange,
  OrangeLine,
  PriorityContainer,
  PriorityField,
  PriorityLabel,
  Red,
  RedLine,
  TimeField,
  TitleField,
  TitleFieldContainer,
} from './TaskForm.styled';
import { TaskValidateMessage } from '../TaskValidateMessage/TaskValidateMessage';

const taskFormSchema = Yup.object().shape({
  title: Yup.string('Enter title').max(250, 'Text must be at most 250characters').required('Title is required'),
  start: Yup.string('Enter start')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid start time')
    .required('Start time is required'),
  end: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid end time')
    .when('start', (start, schema) =>
      schema.test({
        test: function (end) {
          if (!start || !end) return true;
          return end > start;
        },
        message: 'End time must be greater than start time',
      })
    ),
});

export const TaskForm = ({ category, task = {}, onClose }) => {
  const [operation, setOperation] = useState('create');

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    start: '09:00',
    end: '09:30',
    priority: 'low',
  };

  useEffect(() => {
    if (task?._id) setOperation('edit');
  }, [task]);

  const onSubmit = values => {
    const taskId = task?._id;
    const taskData = {
      title: values.title,
      start: values.start,
      end: values.end,
      priority: values.priority,
      date: task?.date,
      category: category,
    };

    if (operation === 'edit') {
      dispatch(
        updateTaskOperation({
          taskId,
          updateTaskData: taskData,
        })
      )
        .then(data => {
          if (data.error) {
            throw new Error(data.payload);
          }
          Notify.info('Task has been edited.');
          onClose();
        })
        .catch(error => {
          Notify.failure('Something went wrong.');
        });
    } else {
      dispatch(addTaskOperation(taskData))
        .then(data => {
          if (data.error) {
            throw new Error(data.payload);
          }
          Notify.success('Task has been successfully created.');
          onClose();
        })
        .catch(error => {
          Notify.failure('Something went wrong.');
        });
    }
  };

  return (
    <Formik
      initialValues={{
        ...initialValues,
        ...task,
      }}
      validationSchema={taskFormSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched }) => (
        <FormContainer>
          <CloseButton type="button" aria-label="close button" onClick={onClose}>
            <CloseIcon>
              <use href={icons + '#icon-x-close'}></use>
            </CloseIcon>
          </CloseButton>
          <Form>
            <TitleFieldContainer>
              <Label>
                Title
                <TitleField type="text" name="title" placeholder="Enter text" />
                <TaskValidateMessage errors={errors.title} touched={touched?.title} field="title" />
              </Label>
            </TitleFieldContainer>

            <FieldContainer>
              <Label>
                Start
                <TimeField type="time" name="start" />
                <TaskValidateMessage errors={errors.start} touched={touched?.start} field="start time" />
              </Label>
              <Label>
                End
                <TimeField type="time" name="end" />
                <TaskValidateMessage errors={errors.end} touched={touched?.end} field="end time" />
              </Label>
            </FieldContainer>

            <PriorityContainer role="group">
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="low" />
                {values.priority === 'low' ? (
                  <BlueLine>
                    <use href={icons + '#icon-ellipse-blue-stroke'}></use>
                  </BlueLine>
                ) : (
                  <Blue>
                    <use href={icons + '#icon-ellipse-blue'}></use>
                  </Blue>
                )}
                Low
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="medium" />
                {values.priority === 'medium' ? (
                  <OrangeLine>
                    <use href={icons + '#icon-ellipse-orange-stroke'}></use>
                  </OrangeLine>
                ) : (
                  <Orange>
                    <use href={icons + '#icon-ellipse-orange'}></use>
                  </Orange>
                )}
                Medium
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="high" />
                {values.priority === 'high' ? (
                  <RedLine>
                    <use href={icons + '#icon-ellipse-pink-stroke'}></use>
                  </RedLine>
                ) : (
                  <Red>
                    <use href={icons + '#icon-ellipse-pink'}></use>
                  </Red>
                )}
                High
              </PriorityLabel>
            </PriorityContainer>

            <ButtonContainer>
              {operation === 'edit' ? (
                <OperationButton type="submit">
                  <EditIcon stroke="#fff" fill="none">
                    <use href={icons + '#icon-pencil'}></use>
                  </EditIcon>
                  Edit
                </OperationButton>
              ) : (
                <OperationButton type="submit">
                  <AddIcon stroke="#fff">
                    <use href={icons + '#icon-plus'}></use>
                  </AddIcon>
                  Add
                </OperationButton>
              )}

              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
            </ButtonContainer>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
