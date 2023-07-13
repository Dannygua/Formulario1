import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/Formulario.css";

const Formulario = () => {
  return (
    <div>
      <Container className="PrincipalContainer">
        <Row>
          <Col
            className="SquadStand"
            md={1}
            style={{
              backgroundColor: "#FDCA04",
            }}
          >
            Ciudad
          </Col>
          <Col
            className="SquadStand"
            style={{
              backgroundColor: "#FDCA04",
            }}
          >
            Fecha (dd/mm/aaaa)
          </Col>
          <Col md={1} className="SquadStand">
            Agencia:
          </Col>
          <Col className="SquadStand"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol2" md={1}></Col>
          <Col className="SquadStandCol2"></Col>
          <Col className="SquadStandCol2" md={1}>
            Responsable COAC:
          </Col>
          <Col className="SquadStandCol2"></Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            DATOS PERSONALES
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#FDCA04",
          }}
        >
          <Col className="SquadStandCol3">Apellidos</Col>
          <Col className="SquadStandCol3">Nombres</Col>
          <Col className="SquadStandCol2">
            Tipo de identificación (marque una "x")
          </Col>
          <Col className="SquadStandCol3">Número de identificación</Col>
          <Col className="SquadStandCol3">Lugar de Nacimiento</Col>
          <Col className="SquadStandCol2">Fecha de Nacimiento (dd/mm/aaaa)</Col>
        </Row>
        <Row>
          <Col className="SquadStandCol4"></Col>
          <Col className="SquadStandCol4"></Col>
          <Col className="">
            <Row>
              <Col className="SquadStandCol4_1">Cédula</Col>
              <Col className="SquadStandCol4_1">Pasaporte</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_2"></Col>
              <Col className="SquadStandCol4_2"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol4_3"></Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_4">Número de visa</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_5"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol4_6">País:</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_6">Cantón:</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_6">Ciudad:</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol4_6">Nacionalidad:</Col>
            </Row>
          </Col>
          <Col className="SquadStandCol4"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Sexo:
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Masculino
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Femenino
          </Col>
          <Col className="SquadStandCol5" md={2}>
            Nivel de Instrucción:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Etnia:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#FDCA04",
            }}
          >
            Estado Civil (marque una "x")
          </Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Soltero (a)
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Casado(a)
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Divorciado (a)
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Separado (a )
          </Col>
          <Col className="SquadStandCol5" md={1}>
            Viudo (a){" "}
          </Col>
          <Col className="SquadStandCol5" md={2}>
            Unión de hecho
          </Col>
          <Col className="SquadStandCol5">
            Si su estado civil es casado, tiene separación de bienes
          </Col>
          <Col className="SquadStandCol5" md={2}></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol2" md={1}>
            N° de cargas familiares:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            DIRECCIÓN DOMICILIARIA
          </Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            País:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Provincia / Departamento:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Calle principal:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Teléfono domicilio:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Cantón:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Número:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Celular:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Ciudad:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Calle principal:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Correo electrónico:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Sector o Barrio:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}>
            Punto de referencia:
          </Col>
          <Col className="SquadStandCol5"></Col>
          <Col className="SquadStandCol5" md={1}></Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Tiempo de residencia:
          </Col>
          <Col className="SquadStandCol5"></Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            ACTIVIDAD ECONÓMICA
          </Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Independiente:
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol5">Nombre del Negocio:</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol5">
                Actividad Económica del negocio:
              </Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol5">
                Tiempo de antigüedad del negocio
              </Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol5">
                Dirección exacta del negocio:
              </Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol5">Teléfonos del negocio</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Dependiente: Empleado, marque con una (x) Público Privado
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">Nombre de la Institución</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">Dirección exacta del trabajo</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">Cargo</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">
                Fecha de inicio de la actividad
              </Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">Tiempo en el cargo</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="SquadStandCol6">Teléfonos del trabajo</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol6"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formulario;
