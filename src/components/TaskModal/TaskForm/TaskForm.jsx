import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../../assets/images/icons/icons.svg';
import * as Yup from 'yup';
import moment from 'moment';
import { addTaskOperation, updateTaskOperation } from '../../../redux/tasks/operations';
import { selectTasks } from '../../../redux/tasks/selectors';
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
    TitleField, } from './TaskForm.styled';

const taskFormSchema = Yup.object().shape({
    title: Yup.string('Enter title')
        .max(250, 'Text must be at most 250characters')
        .required('Title is required'),
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
        )
        .required('End time is required'),
    priority: Yup.string()
        .oneOf(['low', 'medium', 'high'])
        .required('Priority is required'),
        date: Yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
        .required('Date is required'),
    category: Yup.string()
        .oneOf(['to-do', 'in-progress', 'done'], 'Invalid category')
        .required('Category is required'),
    });

export const TaskForm = ({ category='to-do', task, onClose =() =>{} }) => {
    const [operation, setOperation] = useState('create');
    const [title, setTitle] = useState(task?.title || '');
    const [start, setStart] = useState(task?.start || '');
    const [end, setEnd] = useState(task?.end || '');
    const [priority, setPriority] = useState(task?.priority || 'low');
    const dispatch = useDispatch();
    const date = useSelector(selectTasks);

    const initialValues = {
        title: '',
        start: '09:00',
        end: '09:30',
        priority: 'low',
        date: date,
        category,
        };
    
    useEffect(() => {
        if (task?._id) setOperation('edit');
    }, [task]);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'title':
            setTitle(value);
            return;
            case 'start':
            setStart(value);
            return;
            case 'end':
            setEnd(value);
            return;
            case 'priority':
            setPriority(value);
            return;
            default:
            return;
        }
    };

    const handleSubmit = values => {
        values.preventDefault();

        const payload = {
            taskId: task?._id,
            updateTaskData: {
                title: title,
                start: start,
                end: end,
                priority: priority,
                date: task?.date || moment().format('YYYY-MM-DD'),
                category: category,
            },
        };

        if (operation === 'edit') {
            dispatch(updateTaskOperation(payload))
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
                dispatch(addTaskOperation({ ...values, date, category }))
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
            initialValues={task || initialValues}
            validationSchema={taskFormSchema}
            // onSubmit={values => {
            // handleSubmit(values);
            // }}
        >
            {({ values }) => (
            <FormContainer>
                <CloseButton
                    type="button"
                    aria-label="close button"
                    onClick={onClose}
                >
                    <CloseIcon>
                        <use href={icons + '#icon-x-close'}></use>
                    </CloseIcon>
                </CloseButton>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Title
                        <ErrorMessage name="title" component="div" />
                        <TitleField type="text" name="title" placeholder="Enter text" value={title} onChange={handleChange}/>
                    </Label>
    
                    <FieldContainer>
                        <Label>
                            Start
                            <ErrorMessage name="start" component="div" />
                            <TimeField type="time" name="start" value={start} onChange={handleChange}/>
                        </Label>
                        <Label>
                            End
                            <ErrorMessage name="end" component="div" />
                            <TimeField type="time" name="end" value={end} onChange={handleChange}/>
                        </Label>
                    </FieldContainer>
    
                    <PriorityContainer role="group">
                        <PriorityLabel>
                            <PriorityField type="radio" name="priority" value="low" onChange={handleChange}/>
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
                            <PriorityField type="radio" name="priority" value="medium" onChange={handleChange}/>
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
                            <PriorityField type="radio" name="priority" value="high" onChange={handleChange}/>
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