import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";


export default function AdminAddProductPage(){

    const [productID , setProductID]= useState("");
    const [name, setName]= useState("");
    const [altNames , setAltNames]= useState("");
    const [description , setDescription]= useState("");
    const [price , setPrice]= useState(0);
    const [labelledPrice , setLabelledPrice]= useState(0);
    const [images , setImages]= useState("");
    const [category , setCategory]= useState("CPU");
    const [brand , setBrand]= useState("");
    const [model , setModel]= useState("");
    const [stock , setStock]= useState(0);
    const [isAvailable , setIsAvailable]= useState("false");
    const navigate = useNavigate()

    async function addProduct() {
        const token = localStorage.getItem("token");
        if(token==null){
            toast.error ("You must be logged in as admin to add products");
            navigate("/login");
            return;
        }

        if(productID=="" || name==""|| description=="" || category==""|| brand==""|| model==""){

        
            toast.error("Please fill all the required fields.");
            return;

        }

        try{

            const altNamesInArray= altNames.split(",")
            const imagesInArray= images.split(",")
            await axios.post ( import.meta.env.VITE_BACKEND_URL + "/products",{
                productID: productID,
                name: name,
                altNames: altNamesInArray,
                description: description,
                price: price,
                labelledPrice: labelledPrice,
                images: imagesInArray,
                category: category,
                brand: brand,
                model: model,
                stock: stock,
                isAvailable: isAvailable,
            },{ 
                     headers: {
                        Authorization:"Bearer "+token

                     }
                    })
                    toast.success("Product added successfully!");
                    navigate("/admin/products");

             }catch(err){ 
                toast.error("Error adding product.Please try again.");
                console.log("Error adding product");
                console.log(err);
            }
        }

    return(
        
            <div className="w-full h-full flex justify-center items-start overflow-y-scroll p-[50px] ">

                <div className=" bg-accent/60 w-[800px] p-[40px] rounded-xl overflow-y-visible">
                <h1 className="w-full text-xl text-primary mb-[20px] flex items-center gap-[5px]"><MdAddShoppingCart />Add New Product</h1>
                <div className="w-full bg-white p-[20px] rounded-2xl">
                    <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between">
                    
                    <div className="my-[10px] w-[40%]">
                    <label>Product ID</label>
                    <input type="text" value={productID} onChange={(e)=>{setProductID(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    <p className="text-sm text-gray-500 w-full text-right">Provide a unique ID</p>
                    </div>
                    
                    <div className="my-[10px] w-[40%]">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                    <div className="my-[10px] w-full">
                    <label>Alternative Names</label>
                    <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    <p className="text-sm text-gray-500 w-full text-right">Seperate multiple names with commas</p>
                    </div>

                    <div className="my-[10px] w-full">
                    <label>Description</label>
                    <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} 
                    className="w-full h-[100px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px] py-[10px]"/>
                    </div>

                    <div className="my-[10px] w-[40%]">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                    <div className="my-[10px] w-[40%]">
                    <label>Labelled Price</label>
                    <input type="number" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                    <div className="my-[10px] w-full">
                    <label>Images</label>
                    <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                    <div className="my-[10px] flex flex-col w-[30%]">
                        <label>Category</label>

                        <select value={category} onChange={(e) => setCategory(e.target.value)}
                        className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]">
                        <option value="CPU">CPU</option>
                        <option value="Graphic Cards">Graphic Cards</option>
                        <option value="Motherboards">Motheboards</option>
                        <option value="Power Supply">Power Supplies</option>
                        <option value="RAM">RAM</option>
                        <option value="Storage Devices">Storage Devices</option>
                        <option value="Cooling Solutions">Cooling Solutions</option>
                        <option value="Computer Cases">Computer Cases</option>
                        <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                        <option value="Accesories">Accesories</option>
                        <option value="Monitors">Monitors</option>
                        <option value="Computers">Computers</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Others">Others</option>
                    </select>
                    </div>

                     <div className="my-[10px] w-[30%]">
                    <label>Brand</label>
                    <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                     <div className="my-[10px] w-[30%]">
                    <label>Model</label>
                    <input type="text" value={model} onChange={(e)=>{setModel(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                     <div className="my-[10px] w-[40%]">
                    <label>Stock</label>
                    <input type="number" value={stock} onChange={(e)=>{setStock(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]"></input>
                    </div>

                     <div className="my-[10px] flex flex-col w-[40%]">
                    <label>Available</label>
                    <select value={isAvailable} onChange={(e)=>{setIsAvailable(e.target.value)}} 
                    className="w-full h-[40px] focus:outline-none focus:ring-accent  border border-accent shadow-2xl rounded-2xl px-[20px]">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                    </select>
                    </div>

                        <Link to="/admin/products" className="w-[40%] h-[50px] bg-red-500 border-2 border-accent text-white flex justify-center items-center font-bold rounded-2xl hover:bg-transparent hover:text-red-800 ">
                        Cancel</Link>
                    <button onClick={addProduct} className="w-[40%] h-[50px] bg-accent border-2 border-accent font-bold text-white rounded-2xl hover:bg-transparent hover:text-accent ">
                        Add Product
                    </button>










                </div>
                </div>

                  </div>




                
            </div>
    )

}