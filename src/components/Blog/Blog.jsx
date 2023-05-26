import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    const options = {
        // Use cors-anywhere as a proxy server to bypass CORS restrictions
        // Note: This is not recommended for production use
        proxy: "https://cors-anywhere.herokuapp.com/",
        filename: "code-example.pdf"}
    return (
        
        <>
          <Pdf targetRef={ref} options={options}>
      {({ toPdf }) => (
        <button className='btn btn-primary text-white' onClick={toPdf}>
          Generate Pdf
        </button>
      )}
    </Pdf>
        <div className='px-20' >
            <div className='bg-blue-500 mb-5 rounded-xl p-5 text-white'>
            <h1 className='text-2xl font-semibold'>1.What is the differences between uncontrolled and controlled components?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span> An uncontrolled component is one where the form data is handled by the DOM instead of React. In contrast, a controlled component is one where the value of the form element is controlled by React through its state.  </p>
        </div>
            <div  className='bg-yellow-400 mb-5 rounded-xl p-5'>
            <h1 className='text-2xl font-semibold'>2. How to validate React props using PropTypes?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span> At first validation the props passed to componentName using props type. Then check such as the title,description etc. props are all of type string and are required. If any of these props are not passed to the component, or are of the wrong type, PropTypes will throw an error in the console, helping you to catch the issue early on.</p>
        </div>
            <div  className='bg-green-500 mb-5 rounded-xl p-5'>
            <h1 className='text-2xl font-semibold'>3.What is the difference between nodejs and express js?</h1>
            <p> <span className='text-xl font-semibold'>Ans:</span>  Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side. It provides an environment for executing JavaScript code outside of a web browser. With Node.js, you can create web servers, run scripts, and perform other server-side tasks.Express.js, on the other hand, is a web framework that is built on top of Node.js. It provides a set of tools and utilities for building web applications and APIs. Express.js is designed to simplify the process of building web applications with Node.js by providing features like routing, middleware, and template engines.  </p>
        </div>
            <div  className='bg-red-500 mb-5 rounded-xl p-5 text-white'>
            <h1 className='text-2xl font-semibold'>4.What is a custom hook, and why will you create a custom hook?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span>   a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks let you extract component logic into reusable functions. By using custom hooks, you can abstract away complex logic from your components, make them more reusable, and make your code more organized.

Creating a custom hook can be useful in a variety of scenarios. For example:

When you find yourself duplicating logic across multiple components, you can create a custom hook to reuse that logic.
When you need to share stateful logic between two or more components, you can use a custom hook to share that logic.
When you have complex logic that you want to simplify and make reusable, you can create a custom hook to encapsulate that logic.</p>
        </div>
        </div>
        </>
    );
};

export default Blog;