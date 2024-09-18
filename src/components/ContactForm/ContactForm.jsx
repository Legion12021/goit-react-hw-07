import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import style from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    values.id = nanoid();
    const action = addContact(values);
    dispatch(action);
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        number: Yup.string()
          .matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
            message: "Number format: XXX-XX-XX",
            excludeEmptyString: false,
          })
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" id={nameId} name="name" />
        <ErrorMessage className={style.error} name="name" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field type="text" id={numberId} name="number" />
        <ErrorMessage name="number" component="span" className={style.error} />

        <button className={style.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
