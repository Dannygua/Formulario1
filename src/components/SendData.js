import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs } from "antd";

const SendData = ({ loading, usuarios }) => {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const gridStyleDatos = {
    width: "16.6%",
    textAlign: "center",
  };

  if (loading) return "SIN DATOS";

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `CONOZCA A SU CLIENTE`,
      children: (
        <p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "22%",
              paddingTop: "25%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.Nombres}
          </p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "56%",
              paddingTop: "23%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.Identificacion}
          </p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "41%",
              paddingTop: "31%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.NiveldeInstruccion}
          </p>

          <img
            style={{
              height: "100%",
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            src={require("../images/ImgenFormulario1.jpg")}
          />
          <p style={{ padding: "0px", margin: "0px" }}>
            <img
              style={{
                height: "100%",
                width: "100%",
                padding: "0px",
                margin: "0px",
              }}
              src={require("../images/ImageFormulario2.jpg")}
            />
          </p>
        </p>
      ),
    },
    {
      key: "2",
      label: `SOLICITUD DE CREDITO`,
      children: (
        <p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "22%",
              paddingTop: "26%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.Nombres}
          </p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "58%",
              paddingTop: "26%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.Identificacion}
          </p>
          <p
            style={{
              display: "flex",
              position: "absolute",
              paddingLeft: "62%",
              paddingTop: "29%",
              fontSize: "13px",
            }}
          >
            {usuarios?.Informacion_x0020_Personal[0]?.NiveldeInstruccion}
          </p>

          <img
            style={{
              height: "100%",
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            src={require("../images/solicituddecredito1.jpg")}
          />
          <img
            style={{
              height: "100%",
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            src={require("../images/solicituddecredito2.jpg")}
          />
        </p>
      ),
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default SendData;
