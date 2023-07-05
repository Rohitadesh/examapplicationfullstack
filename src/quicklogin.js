 const Quizcustompage = () =>{

    return (
        <>
            <header className=" bg-blue-100 h-1/3 w-full bg-[url('../public/img/exam.png')] bg-contain bg-no-repeat bg-center">
            </header>
            <main className="h-2/3 scroll bg-indigo-200 border-2 border-black flex flex-wrap flex-col gap-4 justify-center items-center">
                <label htmlfor="" className="border-dashed rounded-lg h-1/2 w-3/5 border-2 border-green-300 flex flex-wrap flex-col justify-center items-center">
                    <h1>UPLOAD FILE HERE</h1>
                    <input type="file" multiple />
                </label>
                <button className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center rounded-lg">SUBMIT</button>
            </main> 
        
        </>
        
    )
}
export default Quizcustompage