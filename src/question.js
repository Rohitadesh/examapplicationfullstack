// import { useState } from "react"

// import { useState } from "react"

const Question  = ({input_data,move,showselect,shows}) =>{
    
    //  seteach(input_data[move])
    //  console.log(move)
    // console.log(input_data)
    console.log(shows)
    
    return(
        <>
       {
        input_data.map((element,index)=>{
        
            return(                    
                    <div key={index} className={move===index?"block":"hidden"} style={{height:"85%",border:"1px",borderColor:
                    "red",width:"100%"}} >
                       <div className="h-[8%]  flex gap-96">
                            <h1 className="ml-2">Q:{element.id}/{input_data.length}</h1>
                            <h1>time:</h1>
                       </div>
                        <div className="h-[15%] mt-2 w-full  w-full ">
                        <h1 className="text-md ml-2 ">{element.question}</h1>
                      </div>      
                       <div className="  h-[50%] mt-7 w-full  gap-4 flex flex-col gap-2">
                        {
                            element?.option.map((e,i)=>{
                                return(
                                    <div key={i}    className="flex gap-2 ml-2">
                                        <input type="radio" name={e.id}  checked={shows[element.id]===e.slice(0,1)}  value={e.slice(0,1)} onChange={(e)=>{showselect({...shows,[element.id]:e.target.value})}}/>
                                        <h1>{e.slice(2)}</h1>
                                    </div>
                                )
                            })
                        }
                       </div>
                  
                    </div>
            
            )
        })
       }
        </>
    )
}
export default Question