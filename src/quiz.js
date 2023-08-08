import { useState } from "react"

const Quiz = ({new_data}) =>{
    // console.log(new_data.option)
    const [user_option,setoption]=useState()

    const [show,setShow]=useState(0)

    

    return(
            <div className="exam-container h-[85%] w-1/2 border-2 border-solid border-rose-200">
                <div className="h-[15%] border flex flex-wrap flex-row justify-between ">    
                        { new_data.length>0 && <h1 > Q:{new_data[show].id}</h1> }
                        {/* {console.log(new_data.length>0 && new_data[show].id)}        */}
                
                            <h1>Time:1:20</h1>
                </div>
                <div className="h-[18%]  flex flex-wrap flex-col justify-center items-center">

                        {new_data.length>0 && <h1>{new_data[show].question}</h1>}
                </div>
                <div className="h-[67%] border border-black flex flex-wrap flex-row justify-center items-center">
                        
                        {new_data.length>0 && new_data[show].option.map((element,index)=>{
                            
                            return(
                                <div key={index} className="h-[15%] w-full flex gap-2">
                            
                                    <input type="radio" name="option"  value={element.slice(0,1)}  onChange={e=>{setoption({...user_option,[new_data[show].id]:e.target.value})}} />
                                    <h1 key={index}> {element.slice(2)}</h1> 
                                    {console.log(user_option)}

                                </div>)
                           
                        })
                    }
                    
                    <div className="h-[30%]  flex flex-wrap flex-row justify-center items-center gap-20">
                            <button disabled={!(show>=0 && show<new_data.length-1)}  onClick={()=>{setShow(show+1)}}>next</button> 
                            <button disabled={(show===0)} onClick={()=>{setShow(show-1)}} >Prev</button>
                            <button className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full"
                            >Submit</button>
                    </div>
                </div>
            </div>
        )    
}

export default Quiz;