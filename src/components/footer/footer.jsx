import { Face, Facebook, Instagram, ArrowRight } from "@mui/icons-material" 
import './footer.module.css';

const Footer = () => {

  return (
    <footer className="bg-black text-white flex flex-col py-3 px-10 lg:px-60 ">
        <span className="text-center text-2xl">Síguenos</span>
        <div className="flex justify-center mt-3">
          <Facebook sx={{"width": "40px", "height": "40px"}}/>
          <Instagram sx={{"width": "40px", "height": "40px"}} />
        </div>
        <div className="flex flex-col mt-7">
          <ul className="grid gap-4">
            <li className="flex justify-between">Terminos y condiciones <ArrowRight sx={{"width": "30px", "height": "30px"}} /></li>
            <li className="flex justify-between">Privacidad <ArrowRight sx={{"width": "30px", "height": "30px"}} /></li>
            <li className="flex justify-between">Ayuda <ArrowRight sx={{"width": "30px", "height": "30px"}} /></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer