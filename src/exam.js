const ExamPage = ()=>{
    return (
   <div class="login-container h-screen w-screen  border-solid border-black">
        
        <head class="h-[15%]  w-full flex flex-wrap flex-col justify-center items-center bg-[url('../public/img/exam.png')]  bg-no-repeat bg-contain bg-center"></head>
        
        <main className="h-[85%]  flex flex-wrap  flex-col justify-center items-center ">

            <div className="exam-container h-[85%] w-1/2 border-2 border-solid border-rose-200">

                <div className="h-[8%] border flex flex-wrap flex-row justify-between ">
                    
                    <h1>Q:1/2</h1>
                    <h1>Time:1:20</h1>

                </div> 
                <div className="h-[18%] border flex flex-wrap flex-col justify-center items-center">
                    <h1>Q1:location of tag mahal?</h1>    
                </div>       

                <div className="h-[57%] border flex flex-wrap flex-row justify-center items-center">

                    <input type="radio" />{"hello"}
                    <input type="radio" />{"hi"}
                    <input type="radio" />{"goodmorning"}
                    <input type="radio" />{"people"}

                </div>

                <div className="h-[17%] flex flex-wrap flex-row justify-center items-center">
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Next</button> */}
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Prev</button> */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                </div>

            </div>
        </main>
   
   </div>
)}
export default ExamPage;