const countdown = ()=>{
    const countDate = new Date("December 31, 2022 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //how does the time work 
    const seconds = 1000; //milliseconds
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const day = hours * 24;

    //calculating 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hours);
    const textMinutes = Math.floor((gap % hours)/minutes);
    const textSeconds = Math.floor((gap % minutes)/seconds);((gap % hours)/minutes);


    document.querySelector(".day").innerHTML=textDay;
    document.querySelector(".hour").innerHTML=textHour;
    document.querySelector(".minutes").innerHTML=textMinutes;
    document.querySelector(".seconds").innerHTML=textSeconds;
};
setInterval(countdown,1000);