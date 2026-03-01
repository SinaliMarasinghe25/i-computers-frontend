import { Route, Routes } from "react-router-dom";
import Header from "../components/header";   
import ProductPage from "./productPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkOut";
import OrdersPage from "./ordersPage";
import Home from "./homeContent";
import ContactPage from "./contactPage";
import AboutPage from "./aboutPage";
import NotFoundPage from "./notFoundPage";

export default function HomePage(){
    return(
        
           <div className="w-full h-full overflow-y-scroll max-h-full">
            <Header/> 
            <div className="w-full h-[calc(100%-100px)] ">
                <Routes>
                     <Route path="/" element={<Home/>} />
                   <Route path="/products" element={<ProductPage />} />
                   <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/overview/:productID" element={<ProductOverview/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                     <Route path="/orders" element={<OrdersPage />} />

                </Routes>

            </div>
            
           </div>
       
)
}

   