import { useState, useEffect } from "react"
import RestaurantCard from "./card_restaurant";

const ListRestaurant = () => {  
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		//se hace la petición a la API

		//axios get
			//setRestaurants(data)
	}, [])

	return (
  <div className="flex flex-col">
		{!restaurants ?
			restaurants.map((data)=>{
				return(
					<div className="mb-3" key={data.index}>
						<RestaurantCard data={data} />
					</div>
				);
			})
		:
		<div className="flex flex-col items-center">
			<p className="text-2xl text-center">No hay restaurantes disponibles :(</p>
		</div>}
  </div>
)}

export default ListRestaurant