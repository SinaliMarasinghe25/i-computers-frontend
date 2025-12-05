import { Link, Route, Routes} from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProduct";
import AdminUpdateProductPage from "./admin/adminUpdateProductPage";
import AdminOrdersPage from "./admin/adminOrdersPage";

export default function AdminPage(){
    return(
        
            <div className="w-full h-full flex bg-accent">
                <div className="w-[300px] bg-accent h-full">
                <div className="w-full h-[100px] flex items-center text-primary border bg-white rounded-2xl">
                    <img src="/logo.png" className="h-full"/>
                    <h1 className="text-2xl">Admin Panel</h1>
                </div>
                <div className="w-full h-[400px] text-2xl text-white flex flex-col pl-[20px] pt-[20px]">

                    <Link to="/admin" className="w-full flex items-center h-[50px] gap-10 "><LuClipboardList />Orders</Link>
                    <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-10 "><MdOutlineLocalGroceryStore />Products</Link>
                    <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-10"><PiUsersBold />Users</Link>
                    <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-10"><MdOutlineReviews />Reviews</Link>
      
                </div>
              </div>
                <div className="w-[calc(100%-300px)] h-full max-h-full border-10 overflow-y-scroll rounded-2xl border-accent bg-primary">
               
                    <Routes>
                    <Route path="/" element={<AdminOrdersPage />} />
                    <Route path ="/products" element={<h1><AdminProductsPage/></h1>}/>
                    <Route path ="/users" element={<h1>Users</h1>}/>
                    <Route path ="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path ="/add-product" element={<h1><AdminAddProductPage/></h1>}/>
                    <Route path="/update-product" element={<AdminUpdateProductPage />} />
                    
                    
                    </Routes>
                
                
                </div>
            </div>
       
)}

    