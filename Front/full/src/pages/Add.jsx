import { ErrorMessage, Field, Formik , Form } from 'formik';
import React from 'react'
import '../sass/add.scss'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Add = () => {

  const navigate = useNavigate()

  function handleAdd(val) {
    fetch("http://localhost:7000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    });
    navigate('/')
    
  }
  return (
    <div className='add'>
      <Formik
        initialValues={{ name: '', price: '', img: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          price: Yup.number().required('Required'),
          img: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price"> Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <label htmlFor="img">Image</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add