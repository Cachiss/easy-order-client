
const Restaurant = ({data, index}) => {
  const {name, image, description, tags} = data;
  console.log("data",image)
  return (
    <div className="hero" key={index}>
      <a href={"/restaurant/"+name}>
        <div className="rounded flex flex-col justify-center items-center p-7 min-h-96 cursor-pointer" key={index}>
          <img src={image} alt={"Imagen de "+ name} className="w-2/3"/>
          <div className="flex flex-col w-full mt-3">
            <h3 className="text-4xl text-center">{name}</h3>
            <p className="font-Cavean text-2xl mt-2 ">{description}</p>
          </div>
          <div className="flex flex-wrap mt-5 w-full justify-center items-end h-full">
            {/* List tags*/}
            {tags.map((data,index)=>{
              return (
                <div className="bg-orange rounded-lg text-lg px-1 mr-2 h-6ll" key={index}>{data}</div>
                )
              })
            }
          </div>
        </div>
    </a>
    </div>
  )
}

export default Restaurant