import React from "react";
import "../App.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AddTodo = ({onTaskAdd}) => {
  const initialValue = { task: "" };

  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // }

  const handleSubmit = (values, { resetForm }) => {
    onTaskAdd(values.task);
    resetForm();
  }

  const validationSchema = Yup.object({
    task: Yup.string().required('Must input task'),
  });

  return (
    <div>
      <label>Add to list</label>
      <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ touched, errors }) => (
          <Form>
            <div className="AddTodoForm">
              <Field type="text" id="task" name="task" />
              <button className="SubmitButton" type="submit" value="+" >+</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddTodo;