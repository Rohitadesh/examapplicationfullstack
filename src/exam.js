import { useEffect, useState } from "react"
import Quiz from "./quiz"
const ExamPage = ()=>{  
    const [data,setdata]=useState([])
    useEffect(()=>{
        const get_data = async () =>{
            let url='http://localhost:5000/exam'
            const response= await fetch(url)
            const result= await response.json();
            // console.log(result  )
            setdata(result)
        };                
        get_data()
    },[]);


    return (
       <div className="login-container h-screen w-screen bg-sky-100  border-solid border-black">
        <div className="h-[15%]  w-full flex flex-wrap flex-col justify-center items-center bg-[url('../public/img/exam.png')]  bg-no-repeat bg-contain bg-center"></div>
        
                <main className="h-[85%]  flex flex-wrap  flex-col justify-center items-center ">
                    <Quiz new_data={data} />
                </main>
   
         </div>
)}
export default ExamPage;