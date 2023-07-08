let url="http://localhost:5000/"
export const api_get= async () =>{
    try{
        let response= await fetch(url,{
            method:'post',
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify()
        })
        let result=response.json()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }   
}    

export const api_post= async()=>{
    try{
        let response=await fetch(url,{
            method:'GET',
            headers:{
                'content-type':'application/json ; charset=UTF-8'
            }
        })
        let result=response.json()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
 
}  
 