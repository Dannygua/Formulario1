import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SendData from "./components/SendData";
import { Button, Checkbox, Form, Input } from "antd";
import Formulario2 from "./components/Formulario2";

function App() {
  const [usuarios, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUserData = (data) => {
    setLoading(true);
    fetch("http://localhost:4000/api/Info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(
          data["soap:Envelope"]["soap:Body"][0].ObtenerDataClickFullResponse[0]
            .ObtenerDataClickFullResult[0]["diffgr:diffgram"][0].NewDataSet[0]
        );

        setLoading(false);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    fetchUserData(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tipo de Cedula"
          name="tipoDocumento"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Numero de cedula"
          name="numeroDocumento"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <Formulario2 />
      <SendData loading={loading} usuarios={usuarios} />
    </div>
  );
}

export default App;
