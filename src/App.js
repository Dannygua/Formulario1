import "./App.css";
import React, { useState } from "react";
import SendData from "./components/SendData";
import { Button, Form, Input } from "antd";

function App() {
  const [usuarios, setUsers] = useState([]);
  const [usuariosPhone, setusuariosPhone] = useState([]);
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
        console.log(data["soap:Envelope"]["soap:Body"][0].ObtenerDataClickFullResponse[0]
          .ObtenerDataClickFullResult[0]["diffgr:diffgram"][0].NewDataSet[0])

        setUsers(
          data["soap:Envelope"]["soap:Body"][0].ObtenerDataClickFullResponse[0]
            .ObtenerDataClickFullResult[0]["diffgr:diffgram"][0].NewDataSet[0]
        );

        setLoading(false);

      });

    fetch("http://localhost:4000/api/Info/MoreEqui", {
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
        setusuariosPhone(data["soap:Envelope"]["soap:Body"][0].ObtenerNivelDireccionesyTelefonosResponse[0]
          .ObtenerNivelDireccionesyTelefonosResult[0]["diffgr:diffgram"][0].NewDataSet[0])

        console.log(data["soap:Envelope"]["soap:Body"][0].ObtenerNivelDireccionesyTelefonosResponse[0]
          .ObtenerNivelDireccionesyTelefonosResult[0]["diffgr:diffgram"][0].NewDataSet[0])
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
      <SendData loading={loading} usuarios={usuarios} usuariosPhone={usuariosPhone} />
    </div>
  );
}

export default App;
