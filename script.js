let songIndex=0
let audio=new Audio('bayan/1.mp3')
let mainplay =document.getElementById("mainplay")
let progressbar=document.getElementById("progressbar")
let Bicon =document.getElementById("Bicon")
let gif =document.getElementById("gif")
let masterclass =document.getElementById("masterclass")
let bayanItems =Array.from(document.getElementsByClassName("bayanItem"))
let bayanItemPlay=Array.from(document.getElementsByClassName("bayanItemPlay"))


let bayans=[
    {bayanname:"Jannat Ki Nematon Pe Bayan" ,filePath:"bayan/1.mp3" , coverPath:"bayan/1.jpg"},
    {bayanname:"Jahannum Ki Haulnakiyo " ,filePath:"bayan/2.mp3" , coverPath:"bayan/2.jpg"},
    {bayanname:"Akhri Jannati Pe Bayan" ,filePath:"bayan/3.mp3" , coverPath:"bayan/3.jpg"},
    {bayanname:"Nabi-e Kareem Ka Akhri Din" ,filePath:"bayan/4.mp3" , coverPath:"bayan/4.jpg"},
    {bayanname:"Jannat Ki Hoor Pe Bayan" ,filePath:"bayan/5.mp3" , coverPath:"bayan/5.jpg"},
    {bayanname:"Jannat Ka Haseen Manzar Bayan" ,filePath:"bayan/6.mp3" , coverPath:"bayan/6.jpg"}
]

bayanItems.forEach((element ,i)=>{
element.getElementsByTagName("img")[0].src=bayans[i].coverPath;
element.getElementsByClassName("bayanname")[0].innerHTML =bayans[i].bayanname;
})

mainplay.addEventListener('click' , ()=>{
if(audio.paused || audio.currentTime<=0){
    audio.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add("fa-pause-circle"); 
    gif.style.opacity=0.5;

}else{
    audio.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add("fa-play-circle");
    gif.style.opacity=0;
}
})

audio.addEventListener('timeupdate' ,()=>{
progress=parseInt((audio.currentTime/audio.duration)*100);
progressbar.value = progress;
})
progressbar.addEventListener('input' , ()=>{
    audio.currentTime = progressbar.value * audio.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("bayanItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
     
    })
}

Array.from(document.getElementsByClassName("bayanItemPlay")).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        if(audio.paused || audio.currentTime<=0){
        makeAllPlays();
        songIndex =parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audio.src=`bayan/${songIndex+1}.mp3`;
    masterclass.innerText = bayans[songIndex].bayanname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=0.5;
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add("fa-pause-circle");
}else{
        makeAllPlays();
        songIndex =parseInt(e.target.id)
    e.target.classList.remove("fa-pause-circle");
    e.target.classList.add("fa-play-circle");
    audio.src=`bayan/${songIndex+1}.mp3`;
    masterclass.innerText = bayans[songIndex].bayanname;
    audio.currentTime=0;
    audio.pause();
    gif.style.opacity=0;
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add("fa-play-circle");
    }
})
})


document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audio.src=`bayan/${songIndex+1}.mp3`;
    masterclass.innerText=bayans[songIndex].bayanname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=0.5;
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add("fa-pause-circle");
})


document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=5;
    }else{
        songIndex-=1;
    }
    audio.src=`bayan/${songIndex+1}.mp3`;
    masterclass.innerText=bayans[songIndex].bayanname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=0.5;
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add("fa-pause-circle");
})

