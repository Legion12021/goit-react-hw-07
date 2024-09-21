import styles from './ContactForm.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Invalid name format"
    ),
  number: Yup.string()
    .required("Number is required")
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number format"
    ),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContacts(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name
            <Field
              type="text"
              name="name"
              className={styles.inputField}
            />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              className={styles.inputField}
            />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
