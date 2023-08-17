
const Result = () =>{
    return(
        <div className="h-screen w-screen bg-sky-100 overflow-scroll">
            <header className=" h-1/3 w-full bg-[url('../public/img/exam.png')] bg-contain bg-no-repeat bg-center">
            </header>
            <main className=" h-[100%] gap-4 w-full   flex flex-wrap flex-col justify-center items-center">
                <h1 className="text-3xl">RESULT</h1>
                <div className=" rounded-xl shadow-2xl h-[50%] w-[50%] border border-solid border-blue-300  flex flex-wrap flex-col justify-center items-center gap-8">
                    {/* <h1>NAME:{}</h1> */}
                    <h1 className="text-2xl">result:{}</h1>
                </div>
            </main>
            
        </div>
    )
}
export default Result;