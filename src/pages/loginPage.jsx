import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
    const[email , setEmail] = useState("");
    const[password , setPassword] =useState("");
    const navigate = useNavigate();//smoother travel across pages

     async   function login(){
        console.log("login button clicked")
        console.log("Email :" , email );
        console.log(" Password :" , password )


        try{
        const res= await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login" , {
            email:email,
        password: password
    })

    console.log(res);

    if(res.data.role=="admin"){

        //window.location.href="/admin";
        navigate("/admin");
        
    }else{

       //window.location.href="/";
       navigate("/");

    }

    toast.success("Login successful! Welcome back");

}catch (err) {

    toast.error("Error during login");
    console.log("Error during login");
    console.log(err);
}



    }


return(
        
           <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cove bg-no-repeat flex">
                <div className="w-[50%] h-full flex justify-center items-center flex-col">
                    <img src="/logo.png" alt="logo" className="w-[200px] h-[200px] mt-20 object-cover"></img>

                    <h1 className="text-[45px] font-bold text-shadow-primary text-center text-shadow-2xs text-accent">Plug in. Power up. Play hard</h1>

                        <p className="text-[30px] text-white text-center font-semibold italic ">Your Ultimate Destination for Gaming Gear</p>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center">

                    <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">

                        <h1 className=" text-[40px] font-bold mt-20 text-accent text-shadow-white ">Login</h1>

                        <input
                        onChange={
                            (e)=>{
                                setEmail (e.target.value)
                            }
                        }
                    
                        
                        
                        type="email" placeholder="your email" className="w-full h-1 mt-1.5 rounded-lg border-accent p-10 text-[20px] focus:outline-none focus:ring-2 focus:ring-accent text-white"></input>

                        <input 

                         onChange={
                            (e)=>{
                                setPassword (e.target.value)
                            }
                        }
                    
                    
                        type="password" placeholder="your password" className="w-full h-[50px] mt-5 rounded-lg border-accent p-10 text-[20px] text-white focus:outline-none focus:ring-2 focus:ring-accent"></input>
                            
                            <p className="text-white not italic w-full mb-20 mt-1 text-right">
                                Forget your password ? <Link to="/forget password" className="text-white"> 
                                Reset it here</Link>
                                </p>

                        <button onClick={login} className="w-full h-[50px] bg-accent text-black rounded mt-0.5 border-2 border-accent hover:bg-transparent hover:text-accent">Login</button>

                        <p className="text-white not italic mt-1">Don't have an account ?<Link to="/register" className="text-white italic"> Register here</Link></p>
                    
                    
                    
                    
                    </div>

                </div>
           </div>
       
)
}


