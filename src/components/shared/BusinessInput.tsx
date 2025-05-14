"use client";

import {  Form, Input } from "antd";
import React from "react";

const BusinessInput: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
          message: `Please enter your ${label.toLowerCase()}`,
        },
      ]}
    > 

      <Input
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{
            height: 45,
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white",
          }}
      />

    </Form.Item>
  );
};

export default BusinessInput;
