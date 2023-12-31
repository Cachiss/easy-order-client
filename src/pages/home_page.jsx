import { useState, useEffect } from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import EasyOrderIcon from '../assets/icons/easy.png'
import RestaurantCard from '../components/restaurants/card_restaurant'
import ListRestaurant from '../components/restaurants/list_restaurants'
import Footer from '../components/footer/footer';
const HomePage = () => {
  {/* Pendiente por hacer el fetch a la api para obtener la información*/}

  return (
    <div className='max-w-3xl md:w-screen md:max-w-none mx-auto'>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <section className='hero'>
        <div className='container mx-auto flex flex-col items-center justify-center p-10'>
          <img src={EasyOrderIcon} alt={'Easy Order Icon'} className='w-2/3 lg:w-1/4'/>
          <div>
            <h1 className='self-start text-5xl md:text-8xl'>Ordena simple y <span className='block'>rápido</span></h1>
            <p className='font-Cabin mt-5 text-lg md:self-baseline md:text-xl md:mt-10'>Easy order esta hecho para facilitarte la solicitud de platillos en cualquiera de nuestros restaurantes afiliados.</p>
          </div>
          <div className="flex justify-center my-16 w-screen max-w-lg">
            <Link to={'/user/login'} className='rounded-3xl bg-orange text-xl text-white w-5/12 h-11 mr-6 p-1 flex'>
              <button className='w-full'>Empieza a ordenar</button>
            </Link>
            <Link to={'/restaurant/login'} className='rounded-3xl bg-white text-xl text-black w-5/12 h-11 p-1 flex'>
              <button className='w-full'>¿Eres un restaurante?</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='p-10'>
        <h2 className='text-center text-4xl my-10'>Restaurantes</h2>
        <ListRestaurant />
      </section>
    </div>
  )
}

export default HomePage