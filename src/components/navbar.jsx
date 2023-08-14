import {useEffect} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ShoppingCartComponent from "./shopping_cart";
import useAuth from "../hooks/useAuth";
export default function NavbarComponent() {
    const {isLogged} = useAuth();
    console.log(isLogged);
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">EasyOrder</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
            {isLogged ? <ShoppingCartComponent /> : <Button color='success' onClick={()=>window.location.href="/user/login"}>Iniciar sesión</Button>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
