/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HiArrowDown } from "react-icons/hi";

const Blog = () => {
    const handleDownload = () => {
        const content = document.getElementById('blog-content');
        html2canvas(content).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0, 210, 0); // Set width to 210mm
          pdf.save('blog.pdf');
        });
      };
    return (
        <div id='blog-content' className='container text-start flex flex-col gap-6 shadow p-6 mb-8'>
             <h2 style={{textAlign:'center',marginTop:'20px',fontSize:'50px',color:'green',fontWeight:'800'}}>Some Questions With Answer</h2>
             <p className='text-center text-danger'>Download All Information. <button className='btn'><HiArrowDown onClick={handleDownload}></HiArrowDown></button> </p>
            <div className='shadow p-5'>
                <h3 className='font-semibold mb-4 p-3 text-white' style={{background:'purple'}}>a.Tell us the differences between uncontrolled and controlled components.
                </h3>
                <h6 style={{background:"skyblue",padding:'20px'}}>Uncontrolled Components: An uncontrolled component is a component where the form data is handled by the DOM itself, rather than being managed by the React component. Here, the input field values are directly accessed using a DOM reference, and the value changes are not monitored by React. It is mostly used in cases where we want to get the value of the input field on a button click or use a third-party library to manipulate the form values. <br />Controlled Components: In a controlled component, the form data is handled by the React component, which means that the input field value is bound to the component state, and any changes to the input value are monitored by the component. It is mostly used in cases where we want to validate the input fields, perform some actions on input change, or use some state management libraries like Redux.</h6>
            </div>
            <div className='shadow p-5'>
                <h3 style={{background:'purple'}} className=' p-3 text-white font-semibold mb-4'>b. How to validate React props using PropTypes
                </h3>
                <h6 style={{background:"skyblue",padding:'20px'}}>PropTypes: PropTypes is a package in React that is used to validate the props passed to a component. It helps in validating the data type and shape of the props passed to a component. PropTypes also provides a warning in the console if the props passed to a component do not match the expected data type or shape. PropTypes can be imported from the prop-types package and used to define the type and shape of the props in a component.</h6>
            </div>
            <div className='shadow p-5'>
                <h3 style={{background:'purple'}} className='p-3 text-white font-semibold mb-4'>c. Tell us the difference between nodejs and express js.
                </h3>
                <h6 style={{background:"skyblue",padding:'20px'}}>Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It provides a server-side platform to build fast, scalable, and efficient network applications using JavaScript. Node.js supports event-driven, non-blocking I/O, which makes it a perfect fit for building fast and scalable network applications. <br />

                    Express.js: Express.js is a web application framework built on top of Node.js. It provides a robust set of features to build web and mobile applications using Node.js. Express.js provides features like routing, middleware, and templating to build complex web applications quickly.</h6>
            </div>
            <div className='shadow p-5'>
                <h3 style={{background:'purple'}} className='font-semibold mb-4 p-3 text-white'> d. What is a custom hook, and why will you create a custom hook?</h3>
                <h6 style={{background:"skyblue",padding:'20px'}}>Custom Hooks: A custom hook is a reusable piece of code that encapsulates some logic that can be shared across multiple components. Custom hooks allow developers to extract common logic from components and reuse it in other components. Custom hooks follow the naming convention of something and should always return an array with at least one element.
                    Developers create custom hooks to avoid repeating the same logic in multiple components, increase code reusability, and make their codebase more maintainable. For example, a custom hook to fetch data from an API can be created and used in multiple components.</h6>
            </div>
        </div>
    );
};

export default Blog;