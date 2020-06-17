import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Button, Col}  from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'interesado_fcesYUsdmo82', e.target, 'user_2aF3kaoC1GNXxj2HDphFY')
      .then((result) => {
          alert("Acción realizada con éxito! Pronto nos pondremos en contacto contigo.");
      }, (error) => {
          alert("No fue posible enviar tu mensaje, puedes contactarnos directamente al 461 214 4359");
      });
  }

  return (
    <div>
      <div className="container border shadow mt-4">
        <Form onSubmit={sendEmail}>
          <h2 className="estilo_letra_Cinzel color_titulo">Déjanos tu información, nosotros nos pondremos en contacto.</h2>

          <Form.Row className="estilo_letra_Gruppo">
            <Form.Group as={Col}>
            <ScrollAnimation animateIn="flipInX" duration="2">
              <Form.Label>Nombre complet</Form.Label>
            </ScrollAnimation>

              <Form.Control type="text" placeholder="Nombre completo" name="var_nombre" required/>
            </Form.Group>
            <Form.Group as={Col}>
              <ScrollAnimation animateIn="flipInX" duration="2">
                <Form.Label>Correo electronico</Form.Label>
              </ScrollAnimation>
              <Form.Control type="email" placeholder="Enter email" name="var_correo" required/>
            </Form.Group>

          </Form.Row>

          <Form.Group as={Col}>
            <ScrollAnimation animateIn="flipInX" duration="2">
              <Form.Label className="estilo_letra_Gruppo">Télefono</Form.Label>
            </ScrollAnimation>
            <Form.Control className="estilo_letra_Gruppo" placeholder="461 123 4567" name="var_telefono" required/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <ScrollAnimation animateIn="flipInX" duration="2">
                <Form.Label className="estilo_letra_Gruppo">¿En qué servicio estas intersado?</Form.Label>
              </ScrollAnimation>
              <Form.Control className="estilo_letra_Gruppo" as="select" name="var_servicio">
                <option>Asesoría Contable - Fiscal</option>
                <option>Consultoría Administrativa</option>
                <option>Administración de Negocios</option>
                <option>Investigación de Mercados</option>
                <option>Recursos Humanos</option>
                <option>Asesoría Legal</option>
                <option>Marketing</option>
                <option>Asesoría Financiera</option>
                <option>Capacitación Empresarial</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <ScrollAnimation animateIn="flipInX" duration="2">
                <Form.Label className="estilo_letra_Gruppo">¿Quieres dejar algún mensaje? (Opcional)</Form.Label>
              </ScrollAnimation>
              <Form.Control className="estilo_letra_Gruppo" placeholder="Mensaje" name="var_mensaje"/>
            </Form.Group>

          </Form.Row>

          <Form.Row className="boton_centrado">
            <br />
            <Button variant="outline-info"  type="submit" value="Send">
              Mandar información
            </Button>
          </Form.Row>
          <br />
        </Form>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
