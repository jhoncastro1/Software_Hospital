import React from 'react'
import './StylesPage.css'
import NavBarMain from './NavBarMain'

const Page_Admin = () => {
    return (
        <main>

            <NavBarMain />
            <section className='d-lg-flex  col-lg-12 min-vh-100 room py-5'>
                <div className='col-lg-6 room'>
                    <div className='div_p'>
                        <p className='font_size_four text-center'>Hoteleria</p>
                    </div>
                    <div className='py-4'>
                        <div class="underline-up">
                            <span class="palabra display-1">Bienvenido Instructor Sena </span>
                            <div class="subrayado-one"></div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <h4 className='font_size'>El propósito de este software es revolucionar el método de enseñanza tradicional, con el objetivo de optimizar el tiempo y lograr una educación más rápida y eficiente</h4>
                    </div>
                    <div className='py-5 col-lg-12 d-lg-flex justify-content-center text-center'>
                        <a type='submit' href='/registroReservacion' className='py-5 my-5 col-lg-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" class='svg_width' fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                            <h3 className='font_size py-4'>Reservacion</h3>
                        </a>
                        <a type='submit' href='/registroCheckin' className='py-5 my-5 col-lg-4 border_sp'>
                            <svg xmlns="http://www.w3.org/2000/svg" class='svg_width' fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                            </svg>
                            <h3 className='font_size py-4'>Check-In</h3>
                        </a>
                        <a type='submit' href='/registroCheckout' className='py-5 my-5 col-lg-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" class='svg_width' fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                            </svg>
                            <h3 className='font_size py-4'>Check-out</h3>
                        </a>
                    </div>
                </div>
                <div className='col-xl-7 justify-content-center d-flex'>
                    <div className='col-lg-8 justify-content-center py-4'>
                        <div className='col-lg-8 align-items-end py-5 bg_color_seven contener-two '>

                            <h3 className=' font_color px-5 py-4'>Observar</h3>
                            <p className='font_size_six px-5'>La evaluación del desempeño estudiantil se lleva a cabo mediante la revisión de los archivos producidos en la plataforma</p>
                            <div className='text-center'>
                                <div className='text-center px-4 py-2'>
                                    <a className='div_w_four font_size font_color_one px-5' href="/registroCheckin" role='button'>Ir</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Page_Admin