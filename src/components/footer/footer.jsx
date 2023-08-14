import { Facebook, Instagram } from "@mui/icons-material" 
import './footer.module.css';

const Footer = () => {

  return (
    <footer className="bg-black text-white flex flex-col py-3 px-10 ">
        <span className="text-center text-2xl">Síguenos</span>
        <div className="flex justify-center mt-3">
          <Facebook sx={{"width": "40px", "height": "40px"}}/>
          <Instagram sx={{"width": "40px", "height": "40px"}} />
        </div>
        <div className="flex flex-col">

        </div>
    </footer>
  )
}

export default Footer