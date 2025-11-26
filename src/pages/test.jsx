import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import uploadFile from "../utils/mediaUpload.js";



export default function TestPage() {

    const [file, setFile]= useState(null);
    async function handleUpload(){
        
        const url=await uploadFile(file)
        console.log(url);
    }


	return (
		
			<div className="w-full h-full flex justify-center items-center lg:bg-green-900">
				<input type="file" onChange={(e) => {

                    setFile(e.target.files[0]);
                }}/>

                <button onClick={handleUpload} className="bg-red-900 p-2 text-white rounded-2xl">Upload</button>
			</div>

	);
}
