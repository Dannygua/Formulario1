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

                <Row class="row gx-4 justify-content-center">
                    <Col className="SquadStand2">Socio N°:</Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2">Deudor:</Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2">Garante:</Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2">MICROCRÉDITO</Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2">CONSUMO</Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2"></Col>
                    <Col className="SquadStand2">Fecha de solicitud:</Col>
                    <Col className="SquadStand2"></Col>
                </Row>

                <Row className="Seccionador">
                    DATOS DEL CRÉDITO
                </Row>

                <Row>
                    <Col className="SquadStand">
             
                        MONTO SOLICITADO
                      
                        {/* <Row className="SquadStand">
                            <p>$</p>
                            <p>Plazo(Meses)</p>
                        </Row> */}
                    </Col>

                    <Col className="SquadStand">
                            GARANTÍA
                       
                        <Row>
                            {/* <Col>
                                <Col>
                                Quirografía<br/>
                                Hipotecario<br/>
                                Titulo de valor<br/>
                                Otros<br/>
                                </Col>
                            </Col> */}

                                {/* <Col>
                                    <Col className="SquadStand2">
                                        X
                                    </Col>
                                    <Col className="SquadStand2">
                                        X
                                    </Col>
                                    <Col className="SquadStand2">
                                        X
                                    </Col>
                                    <Col className="SquadStand2">
                                        X
                                    </Col>
                                </Col> */}

                        </Row>
                    </Col>

                    <Col className="SquadStand">

                        DESTINO DEL CREDITO
                       
                       
                    </Col>

                 
                    <Col className="SquadStand">
                    
                            Forma de Pago
                    
                        <Row>
                            

                            {/* <Col>
                                <Col className="SquadStand2">
                                    X
                                </Col>
                                <Col className="SquadStand2">
                                    X
                                </Col>
                                <Col className="SquadStand2">
                                    X
                                </Col>
                                <Col className="SquadStand2">
                                    X
                                </Col>
                            </Col> */}

                        </Row>
                    </Col>

                    <Col className="SquadStand">
                        Hola
                    </Col>
                </Row>

                <Row>

                    <Col className="SquadStand">
     
                        <Row>
                            <p>$</p>
                            <p>Plazo(Meses)</p>
                        </Row>
                    </Col>

                    <Col>
                        <Row className="SquadStand justify-content-center">
                            Quirografaria<br />
                            Hipotecario<br />
                            Título de Valor<br />
                            Otros<br />
                        </Row>
                    </Col>

                    <Col className="SquadStand">

                        _________________
                       

                    </Col>

                    <Col>
                        <Row className="SquadStand justify-content-center">
                            Mensual<br />
                            Trimestral<br />
                            Al vencimiento<br />
                            Otros<br />
                        </Row>
                    </Col>
                 
                    <Col className="SquadStand">
                            ¿Cuánto Puede Pagar? $<br />
                            Día propuesto de pago:<br />
                    </Col>
                </Row>

                
                <Row className="Seccionador">
                    Dato del solicitante
                </Row>

               
               
                <Row className="SquadStand2">
                    <Row>
                        <Col>
                            Apellido y Nombre: <u>DANNY ALEXANDER GUAÑUNA AJILA</u>
                        </Col>
                        <Col>
                            Cedula: <u>172598869929</u>
                        </Col>
                        <Col>
                            Estado Civil: <u>CASADO</u>
                        </Col>
                        
                    </Row>
          
                    <Row>
                        <Col>
                            F. Nacimiento: &nbsp;&nbsp; &nbsp; &nbsp;  A 1997/M 07 /D 27
                        </Col>
                        <Col>
                            Años: <u>25</u>
                        </Col>
                        <Col>
                            Nivel Estudio: <u>UNIVERSIDAD</u>
                        </Col>
                        <Col>
                            Ocupación: <u>DESARROLLADOR SOFTWARE</u>
                        </Col>
                        
                        
                    </Row>
                    
                    <Row>
                        <Col>
                            Domicilio/Provincia: <u>POMASQUI, PICHINCHA</u>
                        </Col>
                        <Col>
                            Cantón: <u>QUITO</u>
                        </Col>
                        <Col>
                            Parroquia: <u>CHILLOGALLO</u>
                        </Col>
                        <Col>
                            Comunidad: <u>SOCIAL</u>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            Sector/Barrio: <u>SANTA PRISCA, SEC 5</u>
                        </Col>
                        <Col>
                            Dirección(Calles): <u>CALLE ALFA Y CALLE BETA</u>
                        </Col>
                        <Col>
                            N°Casa: <u>23</u>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            Referencia: <u>PLATAFORMA NORTE</u>
                        </Col>
                        <Col>
                            Telf: <u>258987978</u>
                        </Col>
                        <Col>
                            Cel: <u>0988789965</u>
                        </Col>
                        <Col>
                            E-Mail: <u>dannymail@mail.com</u>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            N° Hijos( ): <u>5</u>
                        </Col>
                        <Col>
                            N° Hijos que estudian( ): <u>8</u>
                        </Col>
                        <Col>
                            Existe separación de Bienes: &nbsp;  SI() &nbsp;  NO(<u>X</u>)
                        </Col>
                        <Col>
                            VIVIENDA: &nbsp;  Propia() &nbsp;  Familiar(<u>X</u>)  &nbsp;  Arriendo()
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            Tiempo de residencia:&nbsp; &nbsp;  (Meses): <u>12</u>
                        </Col>
                        <Col>
                            Nombre del Arrendatario / Familiar: <u>ARRENDATADARIO FAMILIAR</u>
                        </Col>
                        <Col>
                            Telefono: <u>0987418889</u>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            ¿Es familiar de un Directivo de la Cooperativa?: &nbsp;  SI(<u>X</u>) &nbsp;  NO()
                        </Col>
                        <Col>
                            Nombre: <u>ALEXANDER HERRERA</u>
                        </Col>
                        <Col>
                            Parentesco: <u>PRIMO</u>
                        </Col>
                    </Row>

                </Row>


                <Row className="Seccionador">
                    Datos de cónyuge
                </Row>


                <Row className="SquadStand2">
                    <Row>
                        <Col>
                            Apellidos y Nombres:
                        </Col>
                        <Col>
                            Cédula:
                        </Col>
                        <Col>
                            F. Nacimiento: &nbsp;&nbsp; &nbsp; &nbsp;  A____/M_____/D____
                        </Col>
                        
                    </Row>
          
                    <Row>
                        <Col>
                            Edad: &nbsp; Años &nbsp;&nbsp; Es socio # Cuenta
                        </Col>
                        <Col>
                            Nivel de Estudio:
                        </Col>
                        <Col>
                            Ocupación: EMPLEADO() &nbsp;&nbsp; NEGOCIO PROPIO ()
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            Nombre Empresa: 
                        </Col>
                        <Col>
                            Actividad Empresa / Negocio:
                        </Col>
                        <Col>
                            Dir. Ciudad
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            Parroquia:
                        </Col>
                        <Col>
                            Barrio:
                        </Col>
                        <Col>
                            Calle:
                        </Col>
                        <Col>
                            Telf:
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            Tiempo / Experiencia: &nbsp; Años
                        </Col>
                        <Col>
                            Cargo:
                        </Col>
                        <Col>
                            Utilidad / Sueldo Mensual: $:&nbsp; USD
                        </Col>
                        <Col>
                            Local: Propio () &nbsp; Familiar () &nbsp; Arriendo () 
                        </Col>
                        
                    </Row>
                </Row>


                <Row className="Seccionador">
                    Ocupación caso de ser empleado
                </Row>

                <Row className="SquadStand2">
                    <Row>
                        <Col>
                            Nombre de la empresa:
                        </Col>
                        <Col>
                            Dirección de la Empresa:
                        </Col>
                    </Row>
          
                    <Row>
                        <Col>
                            Provincia: 
                        </Col>
                        <Col>
                            Cantón
                        </Col>
                        <Col>
                            Parroquia
                        </Col>
                        <Col>
                            Calle
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            Telefono:
                        </Col>
                        <Col>
                            Tiempo del Negocio: &nsp; Años
                        </Col>
                        <Col>
                            Cargo:
                        </Col>
                        <Col>
                            Utilidad Mensual: $ &nsp; USD.
                        </Col>
                    </Row>

                </Row>


             

                <Row className="Seccionador">
                    Flujo de caja familiar
                </Row>

              


                <Row>
                    <Col className="SquadStand3">INGRESOS MENSUALES</Col>
                    <Col className="SquadStand3">GASTOS MENSUALES</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1</Col>
                    <Col className="SquadStand">Sueldo / Remuneración</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">1</Col>
                    <Col className="SquadStand">Alimentación</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">6</Col>
                    <Col className="SquadStand">Pago de Préstamos</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">2</Col>
                    <Col className="SquadStand">Sueldo / Remuneración del Cónyuge</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">2</Col>
                    <Col className="SquadStand">Arriendos</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">7</Col>
                    <Col className="SquadStand">Transporte</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">3</Col>
                    <Col className="SquadStand">Útilidad Mensual del Negocio</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">3</Col>
                    <Col className="SquadStand">Educación</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">8</Col>
                    <Col className="SquadStand">Otros Gastos</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">4</Col>
                    <Col className="SquadStand">Ingreso por remesas</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">4</Col>
                    <Col className="SquadStand">Servicios Básicos</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">B</Col>
                    <Col className="SquadStand">TOTAL GASTOS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">5</Col>
                    <Col className="SquadStand">Otros Ingresos (justifique)</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">5</Col>
                    <Col className="SquadStand">Salud</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                </Row>
                <Row>
                    <Col className="SquadStand">A</Col>
                    <Col className="SquadStand">TOTAL DE INGRESOS</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand">Ingreso neto familiar (Total Ingreso - Total Gastos)</Col>
                    <Col className="SquadStand">$</Col>
                </Row>


                <Row className="Seccionador">
                    6. Declaracion Patrimonial
                </Row>
                <Row>
                    <Col className="SquadStand3"><b>ACTIVOS</b></Col>
                    <Col className="SquadStand3"></Col>
                    <Col className="SquadStand3"><b>PASIVOS</b></Col>
                </Row>
                <Row>
                    <Col className="SquadStand">1</Col>
                    <Col className="SquadStand">CAJA / BANCOS</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">1</Col>
                    <Col className="SquadStand">DEUDAS / BANCOS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">2</Col>
                    <Col className="SquadStand">CTAS. POR COBRAR</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">2</Col>
                    <Col className="SquadStand">DEUDAS / COOPERATIVAS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">3</Col>
                    <Col className="SquadStand">MERCADERIA / INVNETARIO</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">3</Col>
                    <Col className="SquadStand">PROVEEDORES</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">4</Col>
                    <Col className="SquadStand">TERRENO</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">4</Col>
                    <Col className="SquadStand">CASAS COMERCIALES</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">5</Col>
                    <Col className="SquadStand">CASA</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">5</Col>
                    <Col className="SquadStand">PRESTAMISTAS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">7</Col>
                    <Col className="SquadStand">VEHÍCULO</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">7</Col>
                    <Col className="SquadStand">OTROS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">8</Col>
                    <Col className="SquadStand">ENSERES</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">8</Col>
                    <Col className="SquadStand">TOTAL PASIVOS</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">9</Col>
                    <Col className="SquadStand">OTROS</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">PATRIMONIO = ACTIVO - PASIVO</Col>
                    <Col className="SquadStand">$</Col>
                </Row>
                <Row>
                    <Col className="SquadStand">10</Col>
                    <Col className="SquadStand">TOTAL ACTIVOS</Col>
                    <Col className="SquadStand">$</Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand">PATRIMONIO</Col>
                    <Col className="SquadStand">$</Col>
                </Row>


                <Row className="Seccionador">
                    Referencia
                </Row>
                <Row className="SquadStand3">
                    Referencias Personales
                </Row>
                <Row>
                    <Col className="SquadStand">NOMBRES Y APELLIDOS</Col>
                    <Col className="SquadStand">DIRECCIÓN</Col>
                    <Col className="SquadStand">TELÉFONO</Col>
                    <Col className="SquadStand">PARENTESCO</Col>
                    <Col className="SquadStand">CORREO ELECTRÓNICO / F</Col>
                </Row>
                <Row>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
                    <Col className="SquadStand"></Col>
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


                <Row className="Seccionador">
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

                <Row className="Seccionador">
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
