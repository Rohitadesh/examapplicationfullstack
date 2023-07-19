import TimeSetting from "./timeset" 
import { api_post } from "./api"
import { split } from "postcss/lib/list";
// import { useState } from "react";

// const setData=createContext
const Quizcustompage = () =>{
    // const [file_data,setfile]=useState('')
    // const setData=useContext('')
    
    function handlefile(files){
        let file_reader=new FileReader();
        file_reader.onload = async ()=>{
            let contents = file_reader.result;
            data_get(contents)
        }
        file_reader.readAsText(files)
    }
    function data_get(data){
        // let question_bank;
        let split_data=data.split('\n')
        // split_data.map((element)=>({elment}))
        console.log(split_data)
        split_data.map((element)=>{
            {element[0]=element[1]}
        }) 
        console.log()

    }




    return (
        <div className="h-screen w-screen bg-sky-100">
            <header className=" h-1/3 w-full bg-[url('../public/img/exam.png')] bg-contain bg-no-repeat bg-center">
            </header>
            <main className="h-2/3 scroll">
              <form action="/"  method="post">
                <div className="h-[30%] flex flex-wrap flex-row justify-center items-center">
                <select className="bg-sky-100 h-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>hour:</option>
                        <TimeSetting timeinput="4" />
                    </select>
                    <select name="time" className="bg-sky-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 h-14 dark:focus:border-blue-500">
                        <option>minutes:</option>
                        <TimeSetting timeinput="60" />
                    </select>
                    <select name="time" className="bg-sky-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 h-14 dark:focus:border-blue-500">
                        <option>seconds :</option>
                        <TimeSetting timeinput="60" />
                    </select>
                </div>
                    <div className="h-[70%] flex-wrap flex flex-row justify-center items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>    
                        <input id="file_input" accept="txt" type="file" name="file" onChange={e=>handlefile(e.target.files[0])} className="block bg-sky-100 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                        <button type="submit" onClick={()=>api_post()} className="bg-blue-200 hover:bg-blue-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center rounded-lg">SUBMIT</button>
                    </div>
                </form> 
               
            </main> 
        
        </div>
        
    )
}
export default Quizcustompage;