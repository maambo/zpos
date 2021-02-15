import react from "react";

function Time(){
    const date=new Date();
    const hours= date.getHours();
    let TimeOfTheDay;

    if (hours < 12){
        TimeOfTheDay=("morning");
    }else if(hours >= 12 && hours <17 ){
        TimeOfTheDay=("Afternoon");
    }else{
        TimeOfTheDay=("night");
    }
    return(
        <div><p>the time of the day is {TimeOfTheDay}</p></div>
    )



}
export default Time;