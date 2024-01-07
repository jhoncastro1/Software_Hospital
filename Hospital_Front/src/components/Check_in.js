import React from 'react'
import NavBarCheckIn from './NavBarCheckIn'


const Check_in = () => {
  return (
    <main>

      <NavBarCheckIn />

      <section className='d-xl-flex align-items-center col-lg-12 min-vh-100 room'>
        <div className='col-lg-6 room'>
          <div className='py-5 col-lg-12 d-flex  text-center'>
            <div className='div_p'>
              <p className='font_size_four text-center'>Hoteleria</p>
            </div>
          </div>
          <div className='py-4'>
            <div class="underline-up">
              <span class="palabra display-1">Check-In</span>
              <div class="subrayado-one"></div>
            </div>
          </div>
          <div className='py-5'>
            <h4 className='font_size'>Este proceso es fundamental para garantizar una experiencia suave y cómoda durante la estadía de los huéspedes</h4>
          </div>
          <div className='py-3'>
            <div className='div_t'>
              <p className='font_size_five'>Todos los formatos</p>
            </div>
          </div>
          <div className='py-1 col-lg-12 d-xl-flex justify-content-start '>
            <a type='submit' className='icon-container py-5 my-5 col-lg-6 '>
              <svg xmlns="http://www.w3.org/2000/svg" class='svg_width  border_one' fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
              </svg>
              <div class="line"></div>
            </a>
            <div className='px-4'></div>
            <a type='submit' className='icon-container py-5 my-5 col-lg-6'>
              <svg xmlns="http://www.w3.org/2000/svg" class='svg_width border_one' fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
              </svg>
              <div class="line"></div>
            </a>

          </div>

          <div className='col-lg-12 d-flex'>
            <div className='col-lg-6 '>
              <h3 className='font_size px-2'>El check-in es un momento clave para establecer una primera impresión positiva y proporcionar un servicio de calidad que contribuye a la satisfacción general del huésped</h3>
            </div>
            <div className='px-4'></div>
            <div>
              <h3 className='font_size px-2'>Una vez completado el proceso de check-in, el huésped tiene acceso a su habitación y puede comenzar a disfrutar de su estancia en el hotel</h3>
            </div>
          </div>

        </div>
        <div className='col-xl-7'>
          <div className='col-lg-8 d-flex justify-content-center'>
            <div className='col-lg-8 align-items-end bg_color_four contener-two '>
              <div class='font_size_letter py-4 px-5'>Registro Hotelero</div>
              <h3 className=' font_color px-5'>Check-In</h3>
              <p className='font_size_three px-5'>Aquí encontraras los archivos de la lista de huéspedes y reporte de reservaciones</p>
              <div className='text-center py-5'>

                <div className='text-center px-5'>
                  <a className='div_w_four font_size font_color_one px-5' href="/hotelRegistration" role='button'>Ir</a>
                </div>

              </div>
            </div>
          </div>

          <div className='col-lg-12 d-flex py-5'>
            <div className='col-lg-12 d-flex'>
              <div className='col-xl-8 bg_color_five'>
                <div className='px-4 py-2'>
                </div>
                <h3 className='font_size font_color px-5 py-3'>Reserva grupal</h3>
                <p className='font_size_letter_one px-5 py-2'>Se diligencia únicamente si es una reservación grupal</p>
                <div className='text-center'>
                  <div className='text-center px-4 py-4'>
                    <a className='div_w_one font_size font_color_one px-5' href="/reservacionGrupal" role='button'>Ir</a>
                  </div>
                </div>
              </div>
              <div className='p-5'></div>
              <div className='col-lg-6 '>
                <div className='col-lg-8 bg_color_six'>
                  <div className='px-4 py-3'>
                  </div>
                  <h3 className='font_size font_color px-5'>Facturación</h3>
                  <p className='font_size_letter_one px-5'>la generación de una factura o cuenta para el huésped en el momento en que realiza el registro de entrada en el hotel</p>
                  <div className='text-center'>
                    <div className='text-center px-5 py-3'>
                      <a className='div_w_three font_size font_color_one px-5' href="/facturacion" role='button'>Ir</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Check_in