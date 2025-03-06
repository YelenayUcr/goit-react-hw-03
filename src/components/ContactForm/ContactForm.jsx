import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 karakter olmalı')
      .max(50, 'Maximum 50 karakter olabilir')
      .required('Zorunlu alan'),
    number: Yup.string()
      .min(3, 'Minimum 3 karakter olmalı')
      .max(50, 'Maximum 50 karakter olabilir')
      .required('Zorunlu alan'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm(); 
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Number
          <Field name="number" type="text" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
