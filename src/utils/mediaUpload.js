import { createClient } from "@supabase/supabase-js";

const url = "https://phyhumfpircgcuckuvmv.supabase.co";
const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoeWh1bWZwaXJjZ2N1Y2t1dm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMDA1MTAsImV4cCI6MjA3OTY3NjUxMH0.-u8JdVelPFwZfoJsDpio78yqLj3urSuL2_r0vzixHzE";

const supabase = createClient(url, key);

export default function uploadFile(file) {
	return new Promise((resolve, reject) => {
		const timeStamp = Date.now();
		const fileName = timeStamp + "_" + file.name;
		supabase.storage.from("images").upload(fileName, file, {
			cacheControl: "3600",
			upsert: false,
		}).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }
        ).catch((error)=>{
            reject(error);
        })
	});
}