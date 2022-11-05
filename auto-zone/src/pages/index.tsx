import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { isNil } from "lodash";
const Page: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <Row>
          <Col span={24}>AUTO ZONE</Col>
        </Row>
      </header>
      <div className="main-body"></div>
    </div>
  );
};

export default Page;
