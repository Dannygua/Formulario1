import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs } from "antd";
import Formulario from "./Formulario";
import Formulario2 from "./Formulario2";

const SendData = ({ loading, usuarios, usuariosPhone }) => {
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
        <div>
          <Formulario usuarios={usuarios} usuariosPhone={usuariosPhone} />
        </div>
      ),
    },
    {
      key: "2",
      label: `SOLICITUD DE CREDITO`,
      children: (
        <div>
          <Formulario2 usuarios={usuarios} usuariosPhone={usuariosPhone} />

        </div>
        //   <p
        //   style={{
        //     display: "flex",
        //     position: "absolute",
        //     paddingLeft: "62%",
        //     paddingTop: "29%",
        //     fontSize: "13px",
        //   }}
        // >
        //   {usuarios?.Informacion_x0020_Personal[0]?.NiveldeInstruccion}
        // </p>
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
