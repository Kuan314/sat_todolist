import React from "react";
import "../App.css";
import { Formik, Form, Field } from 'formik';
import { object, string } from "yup";

const AddTodo = ({onTaskAdd}) => {

  // initial place to save task temporally
  const initialValue = { task: "" };

  /**
   * The task will pass to App.jsx and save to data
   * 
   * @param {string} values.task
   */
  const handleSubmit = (values, { resetForm }) => {
    onTaskAdd(values.task);
    resetForm();
  }

  // Check if the task is not null and start with space
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