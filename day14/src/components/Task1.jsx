import React from 'react';

const Task1 = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Task 1: Introduction to Forms</h2>
      <p>
        In React, forms are used to capture user input through elements like input fields, checkboxes, and buttons.
        React provides a more declarative way of handling form elements through the concept of controlled components.
      </p>
      <h4>Controlled Components:</h4>
      <p>
        Controlled components are form elements that are bound to state using <code>useState</code>. Their value is
        controlled by React, making it easier to validate and manipulate input.
      </p>
      <h4>Uncontrolled Components:</h4>
      <p>
        Uncontrolled components use refs to access values directly from the DOM. They are less flexible and are typically
        used when simple form handling is sufficient or when integrating with non-React libraries.
      </p>
    </div>
  );
};

export default Task1;
