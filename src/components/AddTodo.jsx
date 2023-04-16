import React from "react";
import "../App.css";
import { Formik, Form, Field } from 'formik';
import { object, string } from "yup";

const AddTodo = ({onTaskAdd}) => {
  const initialValue = { task: "" };

  const handleSubmit = (values, { resetForm }) => {
    onTaskAdd(values.task);
    resetForm();
  }

  const validationTask = object({
    task: string().nonNullable().trim().required("Must input task"),
  });

  return (
    <div>
      <label>Add to list</label>
      <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationTask} >
        {() => (
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