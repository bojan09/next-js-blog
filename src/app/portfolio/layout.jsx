import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="md:text-7xl font-bold">Our works</h1>
      <h2 className="text-lg md:text-2xl my-4">Choose a gallery</h2>
      {children}
    </div>
  );
};

export default Layout;
