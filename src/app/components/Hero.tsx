import React from 'react'
import DBimg from '/public/DB.webp'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full h-screen grid grid-cols-2 font-sans' id='home'>
        
        <div className='w-full h-full text-6xl flex flex-col justify-center p-8'>
            <h1 className='font-semibold'>Soluciones Digitales <span className='text-blue-500'>Inteligentes</span></h1>

            <div className='w-full pt-4'>
                  <p className='text-3xl leading-10 font-serif'>
                    ¿Listo para hacer crecer tu negocio? Desarrollamos plataformas y aplicaciones digitales que te ayudan a generar ingresos y escalar de forma sostenible.
                </p>

               
            </div>

             <div className='flex text-base gap-2 w-full pt-10'>
            <button className='w-50  bg-cyan-600 p-4 rounded-full text-white font-bold shadow-md shadow-black hover:bg-cyan-500 transition-all cursor-pointer'>Cotiza Gratis</button>
            
        </div>

        </div>

        <div className='w-full h-full flex justify-center'>

          
                 <Image
                src="/herobg.png"
                alt="Device mockup"
                width={400}
                height={700}
                priority
                className="object-contain "
              />

              

       


        </div>

      
       


    </section>
  )
}

export default Hero
