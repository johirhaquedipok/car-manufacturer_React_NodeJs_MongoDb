/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Blog = () => {
  return (
    <div>
      {/* Q1 */}
      <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
        <div className="mb-2 py-4 text-center lg:py-10 lg:text-left">
          <h2 className="text-2xl font-bold">
            How will you improve the performance of a React Application?
          </h2>
          <p className="py-6">
            React is so smartly build that it already handle the heavylifting
            for us. But there are also several techniques to speed up the
            application.Those are as follows:
          </p>
          <p>
            1.For the production , we should use production version of react.
            2.We should use the -p flag to the build command for production 3.We
            should avoid inline function as they make new instances every
            render. 4.We can reduce the time by writing code in different files
            so browser can transform code faster. and there also so many rules..
          </p>
        </div>
        <div>
          <div className="flex-1 md:flex md:items-center md:justify-center ">
            <img
              src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1622008722227%2FResNcwZyph.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
              alt="performance in react"
            />
          </div>
        </div>
      </div>
      {/* Q2 */}
      <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
        <div className="mb-2 py-4 text-center lg:py-10 lg:text-left order-2">
          <h2 className="text-2xl font-bold">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="py-6">There are many ways managing state in react.</p>
          <p>
            We can manage state with useState, useReducer, useContenxt. There
            are different ways and tools depending on the state of data that is
            in server or local.
          </p>
          <p className="py-6">
            We can count founr types of data state that we need to handle in
            react like local State, Global State, Server State, URL State.
          </p>
        </div>
        <div>
          <div className="flex-1 md:flex md:items-center md:justify-center ">
            <img
              src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg.webp"
              alt="stateManagement"
            />
          </div>
        </div>
      </div>
      {/* Q3 */}
      <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
        <div className="mb-2 py-4 text-center lg:py-10 lg:text-left">
          <h2 className="text-2xl font-bold">
            How does prototypical inheritance work?
          </h2>
          <p className="py-6">
            It's a feature that is used to add methods and properties in
            objects.
          </p>
          <p>
            With this process an objec can get the properties and methods of
            another object. and it's a great advantage that you can add new
            properties to properties afater they created.
          </p>
        </div>
        <div>
          <div className="flex-1 md:flex md:items-center md:justify-center ">
            <img
              src="https://res.cloudinary.com/dillionmegida/image/upload/v1589585860/images/blogs_cover/Javascript_hyywra.png"
              alt="prototypical inheritance"
            />
          </div>
        </div>
      </div>
      {/* Q4 */}
      <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
        <div className="mb-2 py-4 text-center lg:py-10 lg:text-left order-2">
          <h2 className="text-2xl font-bold">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p className="py-6">
            Most importantly react uses a virtual Dom. Every time a changes
            happens inside the dom react makes a new virtual dom for every
            change and compares it with the old dom. And changes found are
            updated to the original dom.
          </p>
          <p>
            So, if we change the data dirctly, the reference of the state will
            be changed in the previous virtual dom react won't understand the
            change.
          </p>
        </div>
        <div>
          <div className="flex-1 md:flex md:items-center md:justify-center ">
            <img
              src="https://miro.medium.com/max/1400/1*hYSKyofnqThnPIsYRfnUUQ.png"
              alt="prototypical inheritance"
            />
          </div>
        </div>
      </div>
      {/* Q5 */}
      <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
        <div className="mb-2 py-4 text-center lg:py-10 lg:text-left ">
          <h2 className="text-2xl font-bold">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p className="py-6">
            I will use array.find method. like this: `arrayofObject.find(data
            =&gt; data.name === "name")`
          </p>
        </div>
        <div>
          <div className="flex-1 md:flex md:items-center md:justify-center ">
            <img
              src="https://soshace.com/wp-content/uploads/2020/08/cover_700x400-1.png"
              alt="prototypical inheritance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
