let url="http://localhost:5000/"
export const api_post= async (values) =>{
    try{
        let response= await fetch(url,{
            method:'POST',
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify(values)
        })
        let result= await response.json()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }   
}    

export const api_get= async(values)=>{
    try{
        let response=await fetch(url,{
            method:'GET',
            headers:{
                'content-type':'application/json ; charset=UTF-8'
            },
            body:JSON.stringify(values)
        })
        let result=await response.json()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
 
}  
 