
const Restaurant = ({data}) => {
  const {index, name, image, description, tags} = data;

  return (
    <div className="hero">
      <div className="rounded flex flex-col justify-center items-center p-7" key={index}>
        <img src={image} alt={"Imagen de "+ name} className="w-2/3"/>
        <div className="flex flex-col w-full mt-3">
          <h3 className="text-4xl text-center">{name}</h3>
          <p className="font-Cavean text-2xl mt-2 ">{description}</p>
        </div>
        <div className="flex flex-wrap mt-8">
          {/* List tags*/}
          {tags.map((data)=>{
            return (
              <div className="bg-orange rounded-lg text-lg px-1 h-auto mr-2">{data}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Restaurant