import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Navbar_Home from './Navbar_Home';

const Home_page = () => {
  return (
    <main>
      <div className='container'>
      <Navbar_Home/>
      <section className='d-xl-flex align-items-center col-xl-12'>
        <div className='col-sm-12 col-lg-6 room'>
        <div>
            <h1 className='display-4 font_wig'>
              Bienvenido a tu <div className='underline-up'><span className="palabra ">Software de hoteleria</span><div className="subrayado-two"></div></div> 
            </h1> 
          </div>
          <div className='room'>
            <div className='py-5'>
              <h4 className='font_size'>Estamos aquí para ayudarte en cada paso de tu formación y crecimiento en la industria hotelera.</h4>
            </div>
          </div>
          <div className='py-5 col-12 d-flex justify-content-center '>
            <a className='py-5 my-5 col-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className='svg_width' fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
              <h3 className='font_size py-4'>"La excelencia en la hospitalidad comienza con una educación sólida."</h3>
            </a>
            <a className='py-5 my-5 col-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className='svg_width' fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
            </svg>
              <h3 className='font_size py-4'>"El conocimiento es el equipaje más valioso que puedes llevar en la industria hotelera."</h3>
            </a>
            
          </div>
          
        </div>
        <div className='col-lg-12 col-xl-6 d-lg-flex'>
          <div className='col-lg-6 room'>
            <div className='col-8 bg_color_two'>
              <div className='p-4'>
                <div className='div_w_two'></div>
              </div>
              <h3 className='font_size font_color px-4'>Aprendiz</h3>
              <p className='font_size_three px-4'>Iniciar sesion como aprendiz </p>
              <p className='font_size_two px-4'>Ingresa con tu cuenta sena</p>
              
              <div className='text-center col-lg-8 px-4 py-3'>
                 <a className='div_w_four font_size font_color px-5' href="/login" role='button'>IR</a>
              </div>
            </div>
          </div>
          
          <div className='col-lg-12 col-xl-6 d-lg-flex '>
            <div className='col-lg-6'>
              <div className='col-lg-6 bg_color_three'>
                <div className='p-4'>
                  <div className='div_w_three'></div>
                </div>
                <h3 className='font_size font_color px-4'>Hotelería</h3>
                <p className='font_size_three px-4'>Explora la hospitalidad y forja tu futuro en la industria hotelera con nuestra plataforma educativa </p>
                
                <p className='font_size_three px-4 py-2'>Leer más -D</p>
                
                
              </div>
              <div className='py-5'></div>
              <div className='col-lg-6 bg_color'>
                <div className='p-4'>
                  <div className='div_w_one'></div>
                </div>
                <h3 className='font_size font_color px-4'>Administrador</h3>
                <p className='font_size_three px-4'>Iniciar sesion como administrador </p>
                <p className='font_size_two px-4'>Ingresa con tu cuenta de instructor sena</p>
                <div className='text-center px-4 py-3'>
                  <a className='div_w_five font_color_two px-5' href="/adminLogin" role='button'>IR</a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        

      </section>

      <section className='d-xl-flex align-items-center col-xl-12'>
      <div className='col-lg-12 room'>
        <div className='col-lg-12'>
            <h1 className='display-4 font_wig text-center '>
              Aprende más
            </h1> 
        </div>

        <div className='py-4 text-center'>
            <h4 className='font_wig'>Un software dedicado a ti.</h4>
        </div>


        <div className='d-lg-flex'>

        <div>
          <div className='row d-xl-flex col-sm-12 col-lg-12 room'>
            <h1 className='font_wig'>Visión
              <p className='font_size_letter_two'>Nuestra visión es convertirnos en el referente líder a nivel global en la educación en línea de hotelería, reconocidos por la excelencia en nuestros contenidos, la innovación tecnológica y la contribución significativa al crecimiento y la profesionalización de la industria hotelera. Nos esforzamos por ofrecer una experiencia de aprendizaje inigualable, impulsada por la tecnología, que inspire a estudiantes de todo el mundo a alcanzar su máximo potencial y aportar de manera positiva a la comunidad global de hotelería.</p>
            </h1>
          </div>
          <div className='row d-xl-flex col-sm-12 col-lg-12 room'>
            <h1 className='font_wig'>Objetivo
              <p className='font_size_letter_two'>El objetivo principal de este software es brindar a los estudiantes del SENA una experiencia de aprendizaje más dinámica y efectiva en el campo de la hotelería. Se busca proporcionar un método de aprendizaje más ágil y eficiente que les permita adquirir habilidades prácticas de manera rápida y efectiva, preparándolos de manera más efectiva para una exitosa carrera en la industria hotelera.</p>
            </h1>
          </div>
        </div>
        <div>
          <div className='row d-xl-flex col-sm-12 col-lg-12 room'>
            <h1 className='font_wig'>Misión
              <p className='font_size_letter_two'>Nuestra misión es proporcionar a estudiantes y futuros profesionales de la industria hotelera las herramientas y recursos necesarios para adquirir conocimientos prácticos y teóricos de alta calidad. A través de nuestra plataforma de software, buscamos facilitar el aprendizaje y el desarrollo de habilidades esenciales en el campo de la hotelería, preparando a los estudiantes para enfrentar con éxito los desafíos del mundo laboral en este sector.</p>
            </h1>
          </div>
          <div className='row d-xl-flex col-sm-12 col-lg-12 room'>
            <h1 className='font_wig'>Objetivo
              <p className='font_size_letter_two'>El objetivo principal de este software es brindar a los estudiantes del SENA una experiencia de aprendizaje más dinámica y efectiva en el campo de la hotelería. Se busca proporcionar un método de aprendizaje más ágil y eficiente que les permita adquirir habilidades prácticas de manera rápida y efectiva, preparándolos de manera más efectiva para una exitosa carrera en la industria hotelera.</p>
            </h1>
          </div>
        </div>


        </div>
        
        
        
        <div className='d-xl-flex col-sm-12 col-lg-12 room'>
          <h1 className='font_wig'>Ventajas
            <p className='font_size_letter_two'>Aprendizaje práctico: Proporciona a los estudiantes la oportunidad de aplicar lo que han aprendido en un entorno virtual realista. Esto les permite practicar y perfeccionar sus habilidades antes de enfrentarse a situaciones reales en un hotel.</p>
            <p className='font_size_letter_two'>Preparación para el empleo: Prepara a los estudiantes para el mundo laboral, ya que les proporciona habilidades prácticas y experiencia en la industria hotelera, lo que puede aumentar sus perspectivas de empleo</p>
            <p className='font_size_letter_two'>Retroalimentación inmediata: Los estudiantes reciben retroalimentación instantánea sobre sus acciones y decisiones, lo que les ayuda a comprender las consecuencias de sus elecciones y a aprender de sus errores.</p>
            <p className='font_size_letter_two'>Seguimiento del progreso: Los instructores pueden realizar un seguimiento del progreso de los estudiantes a través del software y evaluar su desempeño. Esto facilita la identificación de áreas de mejora y la personalización de la formación.</p>
           

          </h1>
        </div>

      </div>
          

      </section>
      </div>
    </main>
    
  )
}

export default Home_page