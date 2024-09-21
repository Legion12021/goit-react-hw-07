import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Схема валідації
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
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newObj = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newObj));
    resetForm(); // Очищаємо форму після відправки
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
            <Field
              className={styles.inputField}
              placeholder="Name"
              type="text"
              name="name"
            />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            <Field
              className={styles.inputField}
              placeholder="Phone number"
              type="tel"
              name="number"
            />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
