import { useState } from "react"
import Question from "./question"
// import Option from "./option"
import {api_post} from "./api"
const Quiz = ({new_data}) =>{
    const [select,setselect]=useState({})
    const [show,setShow]=useState(0)
    // setfreshdata(new_  data)
    // console.log(new_data);
    
    return(
            <div className="exam-container rounded-md shadow-2xl h-[85%] w-1/2 ">
                
               
                <Question input_data={new_data} showselect={setselect} shows={select} move={show} />           

                <div className="h-[15%]  flex flex-wrap flex-row justify-center items-center gap-24">
                            <button disabled={!(show>=0 && show<new_data.length-1)} className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{setShow(show+1)}}>next</button> 
                            <button disabled={(show===0)} className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setShow(show-1)}} >Prev</button>
                            <button className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
                            onClick={()=>{api_post(select)}}>Submit</button>
                </div>
            </div>
        )    
}

export default Quiz;