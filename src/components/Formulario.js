import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/Formulario.css";

const Formulario = () => {
  const tab = '\u00A0';
  return (
    <div>
      <Container className="PrincipalContainer">
        <Row>
          <Col
            md={3}
            className="SquadStandCol0"
          >

            <img
              style={{
                height: "100%",
                width: "100%",
                padding: "0px",
                margin: "0px",
              }}
              src={require("../images/Logo2.jpg")}
            />

          </Col>
          <Col
          >
            <Row>
              <Col
                className="SquadStandCol0_1"
                style={{
                  backgroundColor: "#5D5B5E",
                }}
              >
                FORMULARIO CONOZCA A SU CLIENTE
              </Col>
            </Row>
            <Row>
              <Col
                className="SquadStandCol0_2"
                style={{
                  backgroundColor: "#FDCA04",
                }}
              >
                PERSONAS NATURALES
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol0_6"
          >
            Formulario FOR-GP-GPV-002
          </Col>
        </Row>
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
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Otros
          </Col>
          <Col className="SquadStandCol5">Ama de casa</Col>
          <Col className="SquadStandCol5">Jubilado:</Col>
          <Col className="SquadStandCol5">Estudiante</Col>
          <Col className="SquadStandCol5" md={3}>
            Si tiene otra actividad especifique:
          </Col>
        </Row>
        <Row>
          <Col className="SquadStandCol5" md={1}>
            Otros
          </Col>
          <Col className="SquadStandCol5">
            ¿Usted ha ocupado en el ultimo año un cargo de elección popular o de
            responsabilidad política y social?
          </Col>
          <Col className="SquadStandCol5" md={1}>
            SI
          </Col>
          <Col className="SquadStandCol5" md={3}>
            NO
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            DATOS DEL CÓNYUGE
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#FDCA04",
          }}
        >
          <Col className="SquadStandCol5">Apellidos</Col>
          <Col className="SquadStandCol5">Nombres</Col>
          <Col className="SquadStandCol5">
            Tipo de identificación (marque una "x")
          </Col>
          <Col className="SquadStandCol5">Número de identificación</Col>
          <Col className="SquadStandCol5">Lugar de Nacimiento</Col>
          <Col className="SquadStandCol5">Fecha de Nacimiento (dd/mm/aaaa)</Col>
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
          <Col className="SquadStandCol2" md={2}>
            Nivel de Instrucción:
          </Col>
          <Col className="SquadStandCol2" md={2}></Col>
          <Col className="SquadStandCol2" md={2}>
            Etica:
          </Col>
          <Col className="SquadStandCol2"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol2">Teléfono convencional</Col>
          <Col className="SquadStandCol2">Teléfono celular</Col>
          <Col className="SquadStandCol2">Correo electrónico</Col>
          <Col className="SquadStandCol2">Actividad Económica</Col>
          <Col className="SquadStandCol2">Cargo</Col>
          <Col className="SquadStandCol2">
            Teléfono convencional del trabajo
          </Col>
          <Col className="SquadStandCol2">Teléfono celular del trabajo</Col>
        </Row>
        <Row>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
          <Col className="SquadStandCol3"></Col>
        </Row>
        <Row>
          <Col className="SquadStandCol3">
            ¿Su cónyuge ha ocupado en el ultimo año un cargo de elección popular
            o de responsabilidad política y social?
          </Col>
          <Col className="SquadStandCol3" md={2}>
            {" "}
            SI{" "}
          </Col>
          <Col className="SquadStandCol3" md={3}>
            {" "}
            NO{" "}
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            INFORMACIÓN FINANCIERA
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
          >
            Ingrese la información financiera del último ejercicio económico
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
            md={2}
          >
            Total de activos
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
            md={2}
          >
            Total Ingresos Fijos
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
            md={2}
          >
            Total de pasivos
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
            md={2}
          >
            Total de Ingresos Variables
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol3"
            style={{
              backgroundColor: "#FDCA04",
            }}
            md={2}
          >
            Total de patrimonio
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            md={2}
            style={{
              backgroundColor: "#FDCA04",
            }}
          >
            <Row>
              <Col className="SquadStandCol3">Si tiene ingresos variables indique específicamente por que concepto</Col>
            </Row>
            <Row>
              <Col className="SquadStandCol3">Total Egresos</Col>
            </Row>
          </Col>
          <Col
          >

            <Row>
              <Col className="SquadStandCol7"></Col>
            </Row>
            <Row>
              <Col className="SquadStandCol7"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            CUENTAS BANCARIAS
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#FDCA04",
          }}>
          <Col
            className="SquadStandCol2"
          >

            Institución
          </Col>
          <Col
            className="SquadStandCol2"
          >
            Tipo de cuenta
          </Col>
          <Col
            className="SquadStandCol2"
          >
            Número de cuenta
          </Col>
        </Row>
        <Row
        >
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
          >
          </Col>
          <Col
            className="SquadStandCol3"
          >
          </Col>
        </Row>

        <Row
        >
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
          >
          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
        </Row>
        <Row>
          <Col
            className="SquadStandCol2"
            style={{
              backgroundColor: "#5D5B5E",
              color: "white",
            }}
          >
            REFERENCIAS FAMILIARES
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: "#FDCA04",
          }}
        >
          <Col
            className="SquadStandCol3"
          >
            Nombres y Apellidos
          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >
            Parentezco
          </Col>
          <Col
            className="SquadStandCol3"
          >
            Dirección Domiciliaria
          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >
            Teléfono convencional
          </Col>
          <Col
            className="SquadStandCol3"
          >
            Teléfono celular
          </Col>
        </Row>

        <Row
        >
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"

          >

          </Col>
        </Row>

        <Row
        >
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"

          >

          </Col>
        </Row>

        <Row
        >
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"
          >

          </Col>
          <Col
            className="SquadStandCol3"
            md={1}
          >

          </Col>
          <Col
            className="SquadStandCol3"

          >

          </Col>
        </Row>

        <Row
        >
          <Col
            className="SquadStandCol3"
          >
            Certifico haber leído y comprendido este cuestionario, que la información provista es completa y veraz. Expresamente señalo que los bienes, ingreso y operaciones detalles, no han sido adquiridos ni tienen vinculación con actividades de narcotráfico o delitos tipificados en la ley para reprimir el lavado de activos, tampoco he sido enjuiciado y condenando por el cometimiento de actividades ilícitas.

          </Col>

        </Row>
        <Row
        >
          <Col
            className="SquadStandCol3"
          >
            Autorizo a la Cooperativa de Ahorro y Crédito Inteligencia de Negocios, a confirmar por cualquier medio, la veracidad de la información proporcionada así como realizar análisis y seguimiento que considere pertinentes e informar de manera inmediata y documentada a la autoridad competente en caso de investigación o cuando se detectare transacciones financieras, depósitos, captaciones, etc. inusuales e injustificadas. Renuncio a ejecutar cualquier pretensión, tanto en ámbito civil como penal por estos hechos.

          </Col>

        </Row>
        <Row
        >
          <Col
            className="SquadStandCol3"
          >
            Todos los datos recopilados en el presente formulario serán tratados de manera confidencial y serán utilizados únicamente para los fines pertinentes.
            Los datos proporcionados serán utilizados exclusivamente para el propósito específico de este formulario y no serán compartidos con terceros, salvo que usted otorgue su consentimiento explícito o que la ley lo permita o lo requiera.
            Los datos recopilados serán almacenados de manera segura y protegidos contra accesos no autorizados durante el tiempo que sea necesario para poder cumplir con el propósito específico de este formulario o durante el tiempo que la ley lo requiera.
            Se tomarán las medidas técnicas y adecuadas para proteger la confidencialidad, integridad y disponibilidad de los datos recopilados.
            Uste tiene el derecho de acceder, rectificar, eliminar sus datos personales, oponerse al tratamiento de estos, limitar el uso y solicitar su portabilidad en los términos establecidos por la Ley Orgánica de Protección de Datos Personales.

            Para ejercer estos derechos por favor comuníquese con nuestro responsable de protección de datos a través de la abogada Daniela Sánchez Herrera, responsable del área legal de la Cooperativa.


          </Col>

        </Row>
        <Row
        >
          <Col
            className="SquadStandCol8"
          >
            <p style={{ margin: "0px" }}> Firma del socio</p>
            <p style={{ margin: "0px" }}> Quien realiza la declaración</p>
          </Col>
          <Col
            className="SquadStandCol8"
          >
            Firma del asesor
          </Col>

        </Row>
        <Row
        >
          <Col
            className="SquadStandCol9"
            md={3}
          >
            Revisado en las listas de control:
          </Col>
          <Col
            className="SquadStandCol9"
            md={1}
          >
            SI
          </Col>
          <Col
            className="SquadStandCol9"
            md={1}
          >
            NO
          </Col>

        </Row>
        <Row
        >
          <Col
            className="SquadStandCol10"
            md={4}
          >
            <p style={{ margin: "0px" }}>Para uso exclusivo de la Cooperativa: </p>
            <p style={{ margin: "0px" }}>Función judicial{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>Empresas USA {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>ONU {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>Interpol {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>OFAC {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>Homónimos {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>Sentenciados {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>PEPS {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>
            <p style={{ margin: "0px" }}>Coactivas {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} SI {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} NO</p>


          </Col>
          <Col
            className="SquadStandCol11"
          >
            Observaciones :

          </Col>
          <Col
            className="SquadStandCol12"
          >
            <p style={{ margin: "0px" }}> Firma Oficial de Cumplimiento</p>
            <p style={{ margin: "0px" }}> Fecha de Revisión:</p>


          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Formulario;
