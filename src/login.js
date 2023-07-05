import React from "react"
// import { LinkHTMLAttributes } from "react"
// import link from "React"
import {useState}from "react"
const LoginPage = ()=>{
    const[login,setLogin]=useState('');
    
    return(
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 login-container h-screen w-screen  overflow-hidden">
            <header className=" h-[15%]  w-full flex flex-wrap flex-col justify-center items-center bg-[url('../public/img/exam.png')]  bg-no-repeat bg-contain bg-center"></header>
            <main className="h-[100%]  flex flex-wrap  flex-col justity-start items-center ">
                <h1 className="bg-blur-100  text-xl mt-2">Student & Teacher Login</h1>
                <div className="h-4/6 w-2/5 shadow-[0px_20px_20px_10px_#00000024,0px_3px_8px_0px_#00000024] rounded-2xl border border-black mt-6 items-center">
                    <div className="h-1/6  w-full flex flex-wrap justify-start">
                        <button className="h-full w-1/2 border-r border-slate-500 " onClick={()=>setLogin('Students')}>Student</button>
                        <button className="h-full w-1/2 " onClick={()=>setLogin('Teacher')}>
                        Teacher</button>
                    </div>
                    <div className=" flex flex-wrap flex-col justify-center items-center gap-8 h-[84.5%] w-full">
                        <h1 class="text-2xl">{login}</h1>
                        <input type="text" className="border rounded-md bg-neutral-300" placeholder="username" />        
                        <input type="text" className="border  rounded-md bg-neutral-300" placeholder="Password"/>
                        <button class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                            LogIn
                        </button>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}
export default LoginPage