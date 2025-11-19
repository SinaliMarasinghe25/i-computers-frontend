import { useState } from "react";

export default function test(){

    const [ count, setCount ] = useState(0)
    const [status, setStatus] = useState("🌞")

  

    return(
        <div className="w-full h-full  flex flex-col justify-center items-center ">
            <div className="w-[400px] h-[300px]  flex justify-center items-center shadow-2xl">
                <button className="w-[100px] h-[50px] bg-[red] text-[white]  "
                    onClick={()=>{
                        setCount(count-1)
                    }}>
                    
                    Decreament
                </button>

                <h1 className= "w-[100px] h-[50px] text-[30px] text-[green] flex justify-center items-center">
                {count}
                </h1>

                <button className="w-[100px] h-[50px] bg-[blue] text-[white]"
                onClick={()=>{
                        setCount(count+1)
                    }}>
                    Increament
                </button>

            </div>
            <div className="w-[400px] h-[300px]  flex flex-col justify-center items-center shadow-2xl">
                 <span className= " h-[50px] text-[30px] text-[green] ">
                {status}
                </span>
                <div className="w-full h-[50px] flex justify-center">
                <button className="w-[100px] h-[50px] bg-[red] text-[white]  "
                    onClick={()=>{
                        setStatus("🌚")
                    }}>
                    
                    Off
                </button>


                <button className="w-[100px] h-[50px] bg-[blue] text-[white]"
                onClick={()=>{
                        setStatus("🌞")
                    }}>
                    On
                </button>
            </div>
            </div>

        </div>
        
    )
}