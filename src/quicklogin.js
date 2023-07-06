 const Quizcustompage = () =>{

    return (
        <div className="h-screen w-screen bg-sky-100">
            <header className=" h-1/3 w-full bg-[url('../public/img/exam.png')] bg-contain bg-no-repeat bg-center">
            </header>
            <main className="h-2/3 scroll">
               <div className="h-[30%] flex flex-wrap flex-row justify-center items-center">
               <select className="bg-sky-100 h-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>hour:</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                </select>
                <select className="bg-sky-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 h-14 dark:focus:border-blue-500">
                    <option>minutes:</option>
                    <option value="1">0</option>
                    <option value="2">5</option>
                    <option value="3">10</option>
                    <option value="4">15</option>
                    <option value="5">20</option>
                    <option value="6">25</option>
                    <option value="7">30</option>
                    <option value="8">35</option>
                    <option value="9">40</option>
                    <option value="10">45</option>
                    <option value="11">40</option>
                    <option value="12">45</option>
                </select>
                <select className="bg-sky-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 h-14 dark:focus:border-blue-500">
                    <option>minutes:</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="1">13</option>
                    <option value="2">14</option>
                    <option value="3">15</option>
                    <option value="4">16</option>
                    <option value="5">17</option>
                    <option value="6">18</option>
                    <option value="7">19</option>
                    <option value="8">20</option>
                    <option value="9">21</option>
                    <option value="10">22</option>
                    <option value="11">23</option>
                    <option value="12">24</option>
                </select>
               </div>
                <div className="h-[70%] flex-wrap flex flex-row justify-center items-center">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>    
                <input class="block bg-sky-100 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                <button className="bg-blue-200 hover:bg-blue-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center rounded-lg">SUBMIT</button>
                </div>
            </main> 
        
        </div>
        
    )
}
export default Quizcustompage