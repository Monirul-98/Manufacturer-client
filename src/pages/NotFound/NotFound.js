import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <h3 className="text-4xl text-red-700 my-7">Sorry!Page not Found!</h3>
      <img
        className="h-screen mx-auto"
        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
        alt="404"
      />
    </div>
  );
};

export default NotFound;
