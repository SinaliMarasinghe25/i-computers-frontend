import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

export default function Header(){
    return(
        <header className= "w-full h-[100px] bg-accent flex relative">
            <img src="/logo.png" className="h-full" alt="logo"/>
            <div className="w-full h-full flex text-primary justify-center items-center text-xl gap-30">
                <Link to="/"> Home </Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>

            </div>

            <Link to="/cart" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                <BiShoppingBag />
            </Link>
            
        </header>
)}

    
