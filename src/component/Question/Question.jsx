import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h2>Question and ans:</h2>
            <h3>01:  What is the difference between props and state?</h3>
            <p>ans:-  In React,
                props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

                Components receive data from outside with props, whereas they can create and manage their own data with state. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. The this.setState property is used to update the state values in the component.</p>


            <h3>02:  How do useState work?</h3>
            <p>ans:-  useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>


            <h3>03:  How do useState work?</h3>
            <p>ans:-  In React, useEffect is a Hook that lets you synchronize a component with some external system1. It can be used for many things other than loading data. Here are some examples: <br />
            1. Updating the document title based on the state of the component1. <br />
            2. Setting up event listeners1. <br />
            3. Cleaning up after a component when it’s removed from the DOM1. <br />
            4. Updating state based on changes to props2.</p>

            <h3>04:  How does React work?</h3>
            <p>ans:-  ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
        </div>
    );
};

export default Question;