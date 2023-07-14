import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/Formulario2.css";



const Formulario2 = () => {
    return (
        <>
            <Container className="PrincipalContainer">
                <Row>
                    <Col className="SquadStand">logo</Col>
                    <Col>
                        <Row className="SquadStand">NOTA: LOS DATOS POR USTED PROPORCIONADOS SON DE CARÁCTER CONFIDENCIALES Y SUJETOS DE APROBACIÓN,
                            CUALQUIER DATO COMPROBADO FALSO SERÁ CAUSA PARA NEGAR EL CRÉDITO</Row>
                        <Row className="SquadStand"><h3>SOLICITUD DE CRÉDITO </h3></Row>
                        <Row>
                            <Col className="SquadStand">Oficina:</Col>
                            <Col className="SquadStand"></Col>
                            <Col className="SquadStand">N° de Crédito:</Col>
                            <Col className="SquadStand"></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="SquadStand">Socio N°:</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">Deudor:</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">Garante:</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">MICROCRÉDITO</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">CONSUMO</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">Fecha de solicitud:</Col>
                    <Col className="SquadStand"></Col>
                </Row>
                <Row className="SquadStand">
                    DATOS DEL CRÉDITO
                </Row>
                <Row>
                    <Col>
                        <Row className="SquadStand">
                            MONTO SOLICITADO
                        </Row>
                        <Row className="SquadStand">
                            <p>$</p>
                            <p>Plazo(Meses)</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="SquadStand">
                            GARANTÍA
                        </Row>
                        <Row>
                            <Col>
                                Quirografía<br />
                                Hipotecario<br />
                                Titulo de valor<br />
                                Otros<br />
                            </Col>

                            <Col>
                                <Col>
                                    X
                                </Col>
                                <Col>
                                    X
                                </Col>
                                <Col>
                                    X
                                </Col>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <Row className="SquadStand">
                            DESTINO DEL CREDITO
                        </Row>
                        <Row>
                            _______
                        </Row>
                        <Row>
                            _______
                        </Row>
                    </Col>
                    <Col>
                        <Row className="SquadStand">
                            Forma de Pago
                        </Row>
                        <Row>
                            <Col>
                                Quirografía<br />
                                Hipotecario<br />
                                Titulo de valor<br />
                                Otros<br />
                            </Col>

                            <Col>
                                <Col>
                                    X
                                </Col>
                                <Col>
                                    X
                                </Col>
                                <Col>
                                    X
                                </Col>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <Row className="SquadStand"></Row>
                        <Row className="SquadStand">
                            Hola
                        </Row>
                    </Col>
                </Row>
                <Row className="SquadStand">
                    Dato del solicitante
                </Row>
                {/*Datos Cliente*/}
                <Row className="SquadStand">
                    <Row>
                        <Col>
                            Apellido y Nombre
                        </Col>
                        <Col>
                            Cedula
                        </Col>
                        <Col>
                            Estado Civil
                        </Col>
                    </Row>
                    <Row>
                        Fecha
                    </Row>
                    <Row>
                        Domicilio
                    </Row>
                    <Row>
                        Sector
                    </Row>
                    <Row>
                        Referencia
                    </Row>
                    <Row>
                        N Hijo
                    </Row>
                    <Row>
                        Tiempo de resindencia
                    </Row>
                    <Row>
                        ¿Es familiar de un Directivo de la Cooperativa?
                    </Row>
                </Row>

                <Row className="SquadStand">
                    Datos de cónyuge
                </Row>
                <Row className="SquadStand">
                    <Row>
                        <Col>
                            Apellido y Nombre
                        </Col>
                        <Col>
                            Cedula
                        </Col>
                        <Col>
                            Estado Civil
                        </Col>
                    </Row>
                    <Row>
                        Fecha
                    </Row>
                    <Row>
                        Domicilio
                    </Row>
                    <Row>
                        Sector
                    </Row>
                    <Row>
                        Referencia
                    </Row>
                </Row>


                <Row className="SquadStand">
                    Ocupación caso de ser empleado
                </Row>
                <Row className="SquadStand">
                    <Row>
                        <Col>
                            Nombre de la empresa
                        </Col>
                        <Col>
                            Provincia
                        </Col>
                        <Col>
                            Telefono
                        </Col>
                    </Row>
                    <Row>
                        Fecha
                    </Row>
                    <Row>
                        Domicilio
                    </Row>
                </Row>

                <Row className="SquadStand">
                    Flujo de caja familiar
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>


                <Row className="SquadStand">
                    Declaracion Patrimonial
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row className="SquadStand">
                    Referencia
                </Row>
                <Row className="SquadStand">
                    Referencias Personales
                </Row>
                <Row>
                    <Col className="SquadStand">NOMBRE Y APELLIDOS</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row className="SquadStand">
                    Referencias Comerciales
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row className="SquadStand">
                    Referencias Bancarias
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>


                <Row className="SquadStand">
                    Croquis
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row className="SquadStand">
                    Declaración y Autorización
                </Row>
                <Row className="SquadStand">
                    <p>
                        1. Efectué el análisis y la verificación de los datos personales proporcionados a efecto de realizar el proceso de precalificación crediticia.
                    </p>
                    <p>
                        2. Obtenga de cualquier fuente de información, incluida la Central de Riesgos, mis (nuestras) referencias e información personal (es) sobre mi ( nuestro) comportamiento
                    </p>
                    <p>
                        3. Pueda utilizar, transferir o entregar dicha de información a autoridades competentes, organismo de control, buro de información crediticia y otras instituciones o personas
                    </p>
                    <p>
                        4. Además declaro (amos) y me (nos) responsabilizo (amos) que de toda mi (nuestra) información contenida en esta solicitud es correcta y verdadera, cualquier dato comprobado
                    </p>
                    <p>
                        5. Así mismo y conforme a lo previsto a lo previsto en la ley de prevención, detección y erradicación del delito de lavado de activos y financiamiento de delitos, manifiesto (amos)
                    </p>
                    <p>
                        6. Realizar cualquier debito de mi cuenta de ahorros y la pre-cancelación de depósitos a plazo fijo, con la finalidad de cumplir con las obligaciones directas o indirectas en caso de
                        encontrarse en mora, así como gastos de cobranza en las respectivas fechas de vencimiento. Así como, por concepto de revaluó de bienes que se encuentren hipotecados a
                        favor de la Institución.
                    </p>
                    <p>
                        7. Envié futuras notificaciones en forma escrita, electrónica (correos, redes sociales, SMS.) y telefónica; y, De manera especial declaro (amos) conocer que toda cuota con atraso
                        se le aplicara honorarios por administración de cobranzas extrajudicial y judicial.

                    </p>

                    <Row>
                        <Col>1 of 1</Col>
                        <Col>1 of 1</Col>
                    </Row>
                </Row>


                <Row className="SquadStand">
                    Uso interno cooperativa
                </Row>

                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>


                <Row>
                    <Col className="SquadStand">Observaciones</Col>
                    <Col className="SquadStand">Resoluciones</Col>
                </Row>

                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1 of 1</Col>
                    <Col className="SquadStand">1 of 1</Col>
                </Row>

            </Container>
        </>
    );
};


export default Formulario2;
