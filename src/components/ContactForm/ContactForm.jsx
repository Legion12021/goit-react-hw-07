import {
  Formik,
  Form as ContactForm,
  Field as InputField,
  ErrorMessage as ErrorText,
} from "formik";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";

import { saveContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const NewContactForm = () => {
  const triggerDispatch = useDispatch();
  const formDefaults = {
    contactName: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
    contactNumber: Yup.string()
      .min(3, "Number is too short!")
      .max(50, "Number is too long!")
      .required("Number is required"),
  });

  const processSubmit = (data, formActions) => {
    const createdContact = { ...data, id: nanoid() };
    triggerDispatch(saveContact(createdContact));

    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={formDefaults}
      onSubmit={processSubmit}
      validationSchema={validationSchema}
    >
      <ContactForm className={styles.formContainer}>
        <label className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>Full Name</span>
          <InputField
            className={styles.textInput}
            type="text"
            name="contactName"
          />
          <ErrorText
            className={styles.errorText}
            name="contactName"
            component="span"
          />
        </label>

        <label className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>Phone Number</span>
          <InputField
            className={styles.textInput}
            type="tel"
            name="contactNumber"
          />
          <ErrorText
            className={styles.errorText}
            name="contactNumber"
            component="span"
          />
        </label>

        <button className={styles.submitButton} type="submit">
          Save Contact
        </button>
      </ContactForm>
    </Formik>
  );
};

export default ContactForm;
