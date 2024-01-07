import React, {useState } from 'react';
import NavbarForm from './NavBarForm';
const CustomerList = () =>{
    

    return(
        <>
        <div className="row m-3">
          <img src="your_image_url_here" alt="Your Image" className="IMG" />
          <h5 className='display-4 font_wig'>
                <div className='underline-up'><span className="palabra">Contrato de Hospedaje</span><div className="subrayado-OutletPass"></div ></div> 
              </h5> 
          <a className="nav-link active col-md-1">DESCARGAR</a>
          <a className="nav-link active col-md-2">CORREO</a>
        </div>

        <NavbarForm></NavbarForm>

        <hr className="border border-dark" />
  <div className="d-flex align-items-center justify-content-center">

        <section className="Seccion-Pass d-flex align-items-center justify-content-center">

  <div className="container-Exit-pass m-3">

    <form className="row g-3">
      <div className="d-flex align-items-center justify-content-center">
        <h4>Contrato de hospedaje</h4>
      </div>
      <div className="d-flex align-items-center justify-content-center"></div>
      
    </form>
  </div>
  
</section>
</div>
<div className='container'>

  <div className="d-flex align-items-left justify-content-left">
    <h6 className="separacion-texto col-md-12">1. OBJETO</h6>


</div>

  <div className="d-flex align-items-left justify-content-left">
  <text>Por Virtud del presente contrato, el Hotel suministrara al HUÉSPED el servicio de alojamiento en la habitación por el número de noches detallados en el encabezado de la tarjeta de registro hotelero, así como los servicios accesorios que solicite el HUÉSPED.</text>

</div>

  <div className="d-flex align-items-left justify-content-left">
    <h6 className="separacion-texto col-md-12">2. PRECIO</h6>


</div>

  <div className="d-flex align-items-left justify-content-left">
  <text>Por la prestación de los servicios, el HUÉSPED pagará la tarifa por noche que se indica en la presente tarjeta de registro hotelero incluido impuestos, además de los consumos accesorios que realice durante su estadía, todo lo cual se discriminará en el folio informativo anexo a lal factura correspondiente. En caso de operación exenta o excluidas, en la factura se aplicará el valor de la tarifa sin impuestos.</text>

</div>

  <div className="d-flex align-items-left justify-content-left">
    <h6 className="separacion-texto col-md-12">3. ALCANCE DE LOS SERVICIOS:</h6>


</div>

  <div className="d-flex align-items-left justify-content-left">
  <text>I. La prestación de los servicios estará sujeta a la disponibilidad y existencias físicas de insumos, bienes, facilidades o espacios.</text>

</div>


  <div className="d-flex align-items-left justify-content-left">
    <h6 className="separacion-texto col-md-12">4. DERECHOS Y OBLIGACIONES DEL HOTEL:</h6>


</div>

  <div className="d-flex align-items-left justify-content-left">
  <text>I.EL HOTEL podrá en cualquier momento disponer un cambio de habitación, siempre que se trate de una habitación de iguales o mejores condiciones o se deba a una situación de fuerza mayor o caso fortuito.</text>

</div>

  <div className="d-flex align-items-left justify-content-left">
  <text>II. Al momento del registro del HUÉSPED, el HOTEL podrá requerir una tarjeta de crédito que respalde el valor del alojamiento y demás consumos. Con la firma de la presente tarjeta de registro hotelero, el HUÉSPED autoriza al HOTEL utilizar la tarjeta de crédito para el pago de los servicios.</text>

</div>
  <div className="d-flex align-items-left justify-content-left">
  <text> III.La responsabilidad del HOTEL está supeditada a lo dispuesto para el efecto por las normas mercantiles. El HOTEL solo se hace responsable de los elementos entregados bajo recibo por el HUÉSPED para su custodia. El HOTEL podrá negarse a recibir la custodia de objetos de cuantioso valor o excesivamente voluminosos. El HOTEL no es responsable de la pérdida de ningún objeto o elemento de valor dejado por el HUÉSPED en la habitación. El HOTEL tampoco es responsable de la pérdida de objetos o elementos de valor dejados en los salones objeto de este contrato u otros ambientes del establecimiento, por lo cual es responsabilidad exclusiva del HUÉSPED tomar las medidas de cuidado necesarias. En el caso del parqueadero, la única responsabilidad del HOTEL es la custodia del vehículo junto con sus elementos componentes, por lo que no se deben dejar elementos de valor dentro de los vehículos. En caso de solicitar custodia de elementos diferentes al vehículo, se debe hacer la solicitud de custodia en la recepción del HOTEL.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <h6 className="separacion-texto col-md-12">5. DERECHOS Y OBLIGACIONES DEL HUÉSPED:</h6>  
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text>II. El HUÉSPED acepta acatar las indicaciones y políticas del HOTEL y presentará durante toda su estancia un comportamiento que no atente contra la convivencia y seguridad ciudadana, de conformidad con la ley.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> III. Cualquier acompañante que no esté registrado y haga uso del alojamiento exclusivamente reservado para el HUÉSPED deberá registrarse y pagar la tarifa de alojamiento correspondiente, así como los consumos que realice. El HUÉSPED será responsable solidariamente de los valores generados por sus acompañantes.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> IV. El HUÉSPED deberá utilizar las facilidades del establecimiento de manera adecuada y las conservará en el estado en que se encuentren. El HUÉSPED responderá hasta por culpa leve por cualquier daño parcial o total que le sea atribuible o que sea causado por sus acompañantes, de acuerdo con la solidaridad que prevé la ley.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> V. El HUÉSPED conoce y acepta que la práctica de deportes, ejercicios físicos, conducción de naves o vehículos, utilización de instrumentos o herramientas y en general toda actividad peligrosa, es una decisión propia, y para ello declara que él y sus acompañantes son conscientes de asumir dicho riesgo, exonerando al HOTEL y a sus funcionarios o empleados de cualquier responsabilidad en caso de que sufra daños o lesiones.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> VI. El HUÉSPED asume la responsabilidad de supervisar en todo momento de su estancia en el HOTEL a los menores de edad que lo acompañen.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> VII. El HUÉSPED asumirá el cuidado de sus objetos de valor, incluido joyas, equipos de cómputo, celulares, cámaras, dinero, que permanezcan en la habitación o áreas de servicio del HOTEL.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> VIII. A la terminación del contrato, el HUÉSPED deberá retirar sus efectos y equipaje de la habitación. De lo contrario, el HOTEL queda facultado para elaborar y suscribir un inventario en presencia de 2 testigos, y dejar los bienes inventariados en un depósito, por cuenta, riesgo y con costo al HUÉSPED.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <h6 className="separacion-texto col-md-12">6. CAUSALES DE TERMINACIÓN:</h6>  
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <text> I. Por vencimiento del plazo.</text>
  </div>
  <div className="d-flex align-items-left justify-content-left">
  <text>II. Por falta de pago, caso en el cual terminará el contrato aún sin haberse cumplido el plazo, pudiendo el HOTEL exigir la desocupación de la habitación y emplear el mecanismo de pública subasta sobre los efectos o equipaje del HUÉSPED, inventariado previamente ante testigos de conformidad con la ley.</text>
  </div>
  <div className="d-flex align-items-left justify-content-left">
  <text>III. Por incumplimiento de cualquier obligación de las Partes.</text>
  </div>
  <div className="d-flex align-items-left justify-content-left">
  <text>IV. Por comportamientos del HUÉSPED que contraríen la ley.</text>
  </div>
  <div className="d-flex align-items-left justify-content-left">
  <text>V. Por las demás causas legales.</text>
  </div>

  <div className="d-flex align-items-left justify-content-left">
  <h6 className="separacion-texto col-md-12">7. ADVERTENCIA ESCNNA:</h6>  
  </div>
  
  <div className="d-flex align-items-left justify-content-left">
  <text>En desarrollo de lo dispuesto por la Ley 679 de 2001, el HOTEL advierte al HUÉSPED que la explotación sexual comercial de niños, niñas y adolescentes se castiga en Colombia con pena de prisión de 14 a 25 años. El HOTEL denunciará ante las autoridades cualquier comportamiento del que pueda derivarse o sospecharse delitos ESCNNA.</text>
  </div>
  
  <div className="d-flex align-items-left justify-content-left">
  <h6 className="separacion-texto col-md-12">8. AUTORIZACIONES:</h6>  
  </div>
   
  <div className="d-flex align-items-left justify-content-left">
  <text>I. Autorizo al hotel para que con fines estadísticos de control, supervisión o información comercial y dentro del marco de la ley, consulte o reporte ante las centrales de riesgo y/o a cualquier otra entidad que administre bancos de datos sobre el comportamiento crediticio comercial y en general el cumplimiento de todas mis obligaciones.
</text>
  </div>
   
  <div className="d-flex align-items-left justify-content-left">
  <text>II. Autorizo al hotel el tratamiento de datos personales, lo cual comprende la recolección, almacenamiento, uso, circulación, supresión, actualización, trasmisión y transferencia, con la finalidad de prestar los servicios adquiridos e incluirme en sus campañas publicitarias, de acuerdo con las políticas publicadas en www.rivieradelsol.co. Para acceder, rectificar, actualizar y suprimir datos podré contactarme a mercadeoyventas@rivieradelsol.co. He leído, entendido y aceptado el contenido del presente contrato.</text>
  </div>

</div>
 </>
       
    );
};
export default CustomerList;