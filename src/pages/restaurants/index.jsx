import {useState, useEffect} from 'react'
import { CircularProgress } from '@nextui-org/react';
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../../api/restaurant.api';
import useShopCar  from '../../hooks/useShopCar';
const IndexRestaurant = () => {
    const {shopCar, addProduct} = useShopCar();
    const {name} = useParams();
    console.log(name);
    const [loading, setLoading] = useState(true);
    const [dishes, setDishes] = useState(null);
    
    useEffect(() => {
        getRestaurant(name)
        .then((response) => {
            console.log(response.data);
            setDishes(response.data.restaurant.dishes)
        })
        .finally(() => setLoading(false))
    }, [name]);
  return (
    <>
        {loading ? 
        <div className='h-screen flex justify-center items-center'>
            <CircularProgress color="warning" aria-label="Loading..."/>

        </div> :
         <div className='max-w-3xl md:w-screen md:max-w-none mx-auto'>
            <div className="flex flex-col justify-center items-center px-10 py-10 rounded">
                <h1 className="text-6xl font-bold ">{name}</h1>

                <div className='flex flex-wrap lg:mt-10'>

                    {dishes?.map((dish) => {
                        return (
                            <Card className='py-2 mt-5 lg:mr-5 ' id='hero-sm'>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className='text-xl'>{dish.name}</h4>
                    </CardHeader>
                    <CardBody className='flex justify-between' >
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl static"
                        src={dish.image}
                        width={270}
                    />

                        <Button color='danger' className='mt-5' onClick={()=>addProduct(dish)}>Agregar al carrito</Button>

                    </CardBody>
                </Card>
                        )
                    })}
                </div>
            </div>
         </div>
        }
    </>
  )
}

export default IndexRestaurant