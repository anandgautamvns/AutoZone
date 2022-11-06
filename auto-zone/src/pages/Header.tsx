import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Row, Col, Image, Typography } from "antd";
import React from "react";

const Header: React.FC = () => {
  const { Text } = Typography;

  return (
    <header className="header">
      <Row>
        <Col span={8}>
          <div className="left-header">
            <Image src={"https://www.autozone.com/images/az-logo-full.svg"} />
          </div>
        </Col>
        <Col span={12}></Col>
        <Col span={2}>
          <div className="right-header">
            <UserOutlined className="icon" />
            <br />
            <Text strong className="subTilte">
              Sign In
            </Text>
          </div>
        </Col>
        <Col span={2}>
          <div className="right-header">
            <ShoppingCartOutlined className="icon" />
            <br />
            <Text strong className="subTilte">
              Card
            </Text>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
