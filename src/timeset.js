const TimeSetting = ({timeinput}) =>{
    let timing=[]
    for(let i=0;i<=timeinput;i++){
        timing.push({id:i,r:i})
        }
    return (
        <>
            { timing.map(element => (
                <option key={element.id}>{element.r}</option>
            ))}        
            hour: hour:</>
    )

}
export default  TimeSetting