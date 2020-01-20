import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Button, Col}  from 'react-bootstrap'

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
          <h2 className="estilo_letra_Cinzel color_titulo">Dejanos tu información, nosotros nos pondremos en contacto.</h2>
          <Form.Row className="estilo_letra_Gruppo">
            <Form.Group as={Col}>
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Nombre completo" name="var_nombre"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="var_correo"/>
            </Form.Group>

          </Form.Row>

          <Form.Group as={Col}>
            <Form.Label className="estilo_letra_Gruppo">Télefono</Form.Label>
            <Form.Control className="estilo_letra_Gruppo" placeholder="461 123 4567" name="var_telefono"/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className="estilo_letra_Gruppo">Ciudad</Form.Label>
              <Form.Control className="estilo_letra_Gruppo" placeholder="Celaya" name="var_ciudad"/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className="estilo_letra_Gruppo">Estado</Form.Label>
              <Form.Control className="estilo_letra_Gruppo" as="select" name="var_estado">
                <option>Guanajuato...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>


          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className="estilo_letra_Gruppo">¿En qué servicio estas intersado?</Form.Label>
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
