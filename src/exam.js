import { useEffect, useState } from "react";

const ExamPage = ()=>{  
    const [data,Setdata]=useState([])
    const [slide,Setslide]=useState(0)
    const[clickoption,getoption]=useState('')
    // const [check,setcheck]=useState(false)
    useEffect(()=>{
        // let iscancelled =true;
        const get_data = async () =>{
            let active=true
            let url='http://localhost:5000/exam'
            const response= await fetch(url)
            const result= await response.json();
            // console.log(result)
            if (active){
                Setdata(result)
            }
                
        };
    
        get_data()

    },[]);
    // console.log(clickoption)
    const correct_answer = (input_value) =>{
        console.log(input_value)

    }

    // console.log(data)

    return (
       <div className="login-container h-screen w-screen  border-solid border-black">
            <head className="h-[15%]  w-full flex flex-wrap flex-col justify-center items-center bg-[url('../public/img/exam.png')]  bg-no-repeat bg-contain bg-center"></head>
        
                <main className="h-[85%]  flex flex-wrap  flex-col justify-center items-center ">
                    <div className="exam-container h-[85%] w-1/2 border-2 border-solid border-rose-200">
                        
                        <div className="h-[8%] border flex flex-wrap flex-row justify-between ">


                           {/* <h1></h1> */}
                           {/* {console.log(data.id)} */}
                           
                           {<h1>Q:{data.length?data[slide].id:""}/{data.length}</h1>}    
                            <h1>Time:1:20</h1>

                        </div> 
                        <div className="h-[18%] border flex flex-wrap flex-col justify-center items-center">

                            <h1>{data.length && data[slide].question}</h1>    
                        </div>       

                        <div className="h-[57%] border flex flex-wrap flex-row justify-center items-center">
                            <div className="h-[15%] w-full flex gap-2">
                                <input type="radio" name="data" value={data.length && data[slide].option_a}
                                    checked={data.length && data[slide].option_a===clickoption} onChange={e=>getoption(e.target.value)}  onClick={correct_answer(clickoption)} />
                                 {/* {console.log(data[slide].option)} */}
                                 <h1>
                                    {data.length && data[slide].option_a}
                                 </h1> 
                                 
                            </div>
                            <div className="h-[15%] w-full flex gap-2">
                                <input type="radio" name="data" value={data.length && data[slide].option_b}
                                    checked={data.length && data[slide].option_b===clickoption}onChange={e=>getoption(e.target.value)} onClick={correct_answer(clickoption)} /> 
                                <h1>
                                    {data.length && data[slide].option_b}
                                </h1>
                            </div>
                            <div className="h-[15%] w-full flex gap-2">
                                <input type="radio" name="data" value={data.length && data[slide].option_c} 
                                 checked={data.length && data[slide].option_c===clickoption} onChange={e=>getoption(e.target.value)}  onClick={correct_answer(clickoption)} /> 
                                <h1>
                                    {data.length && data[slide].option_c}

                                </h1>
                            </div>
                            <div className="h-[15%] w-full flex gap-2 border border-solid border-black">
                                <input type="radio" name="data" value={data.length && data[slide].option_d} onChange={e=>getoption(e.target.value)} 
                                onClick={correct_answer(clickoption)} checked={data.length && data[slide].option_d===clickoption} /> 
                                {data.length && data[slide].option_d}
                            </div>

                        </div>

                        <div className="h-[17%] flex flex-wrap flex-row justify-center items-center gap-20">
                            <button className={slide === 0 ? "small outlined" : "small"} disabled={slide===data.length}  onClick={()=>Setslide(slide+1)}>next</button>
                            <button className={slide === 0 ? "small outlined" : "small"} disabled={slide===0?`hidden`:`block`} onClick={()=>Setslide(slide-1)} >Prev</button>
                            <button className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full"
                                >Submit</button>
                        </div>

                    </div>
                </main>
   
         </div>
)}
export default ExamPage;