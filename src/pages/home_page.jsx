import { useState, useEffect } from 'react'
import EasyOrderIcon from '../assets/icons/easy.png'
import RestaurantCard from '../components/restaurants/card_restaurant'
import ListRestaurant from '../components/restaurants/list_restaurants'

const HomePage = () => {
  {/* Pendiente por hacer el fetch a la api para obtener la información*/}
  const data = {
    'index': 1,
    'name': 'Mcdonals',
    'image': "https://www.svgrepo.com/show/156935/burger.svg",
    'description': 'Lugar rico para comer',
    'tags': ["Hamburguesa", "Grasoso", "Rico", "Barato"]
  }
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='hero'>
        <div className='container mx-auto flex flex-col items-center justify-center p-10'>
          <img src={EasyOrderIcon} alt={'Easy Order Icon'} className='w-2/3'/>
          <h1 className='self-start text-4xl'>Ordena simple y <span className='block'>rápido</span></h1>
          <p className='font-Cabin mt-5'>Easy order esta hecho para facilitarte la solicitud de platillos en cualquiera de nuestros restaurantes afiliados.</p>
          <div className="flex justify-center my-16 w-screen max-w-lg">
            <button className='rounded-3xl bg-orange text-xl text-white w-5/12 h-11 mr-6 p-1'>Empieza a ordenar</button>
            <button className='rounded-3xl bg-white text-xl text-black w-5/12 h-11 p-1'>¿Eres un restaurante?</button>
          </div>
        </div>
      </div>
      <section className='p-10'>
        <h2 className='text-center text-4xl my-10'>Restaurantes</h2>
        <ListRestaurant />
      </section>
    </div>
  )
}

export default HomePage