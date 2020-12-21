// declaring variables for music
const play = document.getElementById('play');
const music = document.querySelector("audio");
const img = document.querySelector("images")
const genre = document.getElementById("genre");
const pre = document.getElementById("previous");
const next= document.getElementById("next");
//array of songs object
const songs =[{
    name:"audio1",
    genre: "Pop",
    img: "images/img1.jpeg",
   

},
{
    name:"audio2",
    genre: "Rock",
    img: "images/img2.jpeg",
},
   
{
    name:"audio3",
    genre: "Rock",
    img: "images/img3.jpeg",
    
}
]

isPlaying = false;
//for play
const playMusic= ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play',"fa-pause")
    img.classList.add();

};
//pause song
const pauseMusic= ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.add();

};
play.addEventListener('click', ()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});


// changing the music genre
const loadSong =()=>{
    genre.textContent = songs.genre;
    name.textContent = songs.next;
    music.src = "audio/" +songs.name + ".mp3";
    img.src = "images/" +songs.name + ".jpeg";

};
songIndex = 0;

//next song
let nextSong = function (){
    songIndex ++;
    loadSong(songIndex);
}
next.addEventListener("click",nextSong);
// previous

let previousSong = function (){
    songIndex +=1;
    loadSong(songIndex);
}





previous.addEventListener("click",previousSong);