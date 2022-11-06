import React from "react";
import Content from "./Content";
import Header from "./Header";

const Page: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default Page;
