
const music = new Audio();
// music.play();

 
/* here for the left and right arrow scroll method of popular song and the artist section*/

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');

let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=500;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=500;
});



let pop_artists_left=document.getElementById('pop_artists_left');
let pop_artists_right=document.getElementById('pop_artists_right');

let pop_artists=document.getElementsByClassName('pop_artists')[0];

pop_artists_right.addEventListener('click',()=>{
    pop_artists.scrollLeft+=500;
});
pop_artists_left.addEventListener('click',()=>{
    pop_artists.scrollLeft-=500;
});






/*This is the array which contains poster of the every song ,song name and and their title*/ 


const songs = [
    {
        id:1,
        songName:`Thodi Jagah dede Mujhe<br>
        <div class="subtitle">Arjit singh</div>`,
        poster:"/image/Arjit/01.jpeg"
     
    },
    {
        id:2,
        songName:`Baatein ye Kabhi Na <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"/image/Arjit/02.jpeg"
         
    },
    {
        id: 3,
        songName: `Chhod diya wo rasta <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/03.jpeg"
    },
    {
        id: 4,
        songName: `Tum hi ho <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/04.jpeg"
    },
    {
        id: 5,
        songName: `Lo Maan Liya Hamne <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/05.jpeg"
    },
    {
        id: 6,
        songName: `Ae dil hai mushkil <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/06.jpeg"
    },
    {
        id: 7,
        songName: `khariyat poocho kabhi to.. <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/07.jpeg"
    },
    {
        id: 8,
        songName: `Tujhme Rab Dikhta hai Yaara Mai kya karu <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/08.jpeg"
    },
    {
        id: 9,
        songName: `Hamari Adhuri kahani <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/09.jpeg"
    },
    {
        id: 10,
        songName: `Phir bhi Tumko chahunga <br>
                    <div class="subtitle">Arjit Singh</div>`,
        poster: "/image/Arjit/10.jpeg"
    },
];
/*// By default play this song */
music.src = `music/Arjit/01.mp3`;

//Search data start
let search_result=document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const {id,songName,poster} =element;
    // console.log(id);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#"+id; 
    card.innerHTML = ` 
    <img src="${poster}" alt="">
    <div class="content" >
        ${songName}
    </div>
    `;
    search_result.appendChild(card);
});
let input = document.getElementById('search_input');
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for(let index = 0 ; index < items.length ;index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value) > -1 ){
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }
        if(input.value==0){
            search_result.style.display = "none";
        }else{
            search_result.style.display = "";
        }

        
    }
});
//Search data end
/* Here updating the poster image and song name for each element with the class 'songItem' based on the corresponding index in the songs array. */
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
Array.from(document.getElementsByClassName('songs_card')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

});

/* here the play button working  */

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}

/* Here how the song background shadow comes when it plays */

const songs_card_backgraound = () => {
    Array.from(document.getElementsByClassName('songs_card')).forEach((el)=>{
        el.style.background='rgb(120,120,120,.0)';
    });
}
const song_item_background = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(120,120,120,.0)';
    });
}
/*This code plays a music track when a playlist item is clicked, updating the player with the song details and visual like background colors for the selected song. */

let index=0;
let poster_play=document.getElementById('poster_play');
// poster_play.src=`/image/02.jpeg`;
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // music.play();
        
        music.src=`/music/Arjit/${index}.mp3`;
        poster_play.src=`/image/Arjit/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/music/Arjit/${index}.mp3`;
        
        let songTitals = songs.filter((element)=>{
            return element.id==index;
           
        });
        songTitals.forEach(elements=>{
                let { songName } = elements;
                title.innerHTML= songName;
                download_music.setAttribute('download',songName);
        });
        song_item_background();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
        
        songs_card_backgraound();
        Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
        

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    });
});

/*Here how the music timer changes every second */

let current_start=document.getElementById('current_start');
let current_end=document.getElementById('current_end');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementById('dot');
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    // console.log(music_curr);
    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    if(min1<10){
        min1 = `0${min1}`;
    }
    current_end.innerText=`${min1}:${sec1}`;
    
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr % 60);
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    if(min2<10){
        min2 = `0${min2}`;
    }
    current_start.innerText=`${min2}:${sec2}`;


    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change' ,() => {
    music.currentTime = seek.value * music.duration / 100 ;
});
/* volume bar */

let volume_icon= document.getElementById('volume_icon');
let vol_input=document.getElementById('vol_input');
let volume_bar = document.getElementsByClassName('volume_bar')[0];
let volume_dot=document.getElementsByClassName('volume_dot')[0];

vol_input.addEventListener('change',()=>{
    if(vol_input.value==0){
        volume_icon.classList.remove('bi-volume-up-fill');
        volume_icon.classList.remove('bi-volume-down-fill');
        volume_icon.classList.add('bi-volume-mute');
    }
    if(vol_input.value>0){
        volume_icon.classList.remove('bi-volume-up-fill');
        volume_icon.classList.add('bi-volume-down-fill');
        volume_icon.classList.remove('bi-volume-mute');
    }
    if(vol_input.value>40){
        volume_icon.classList.add('bi-volume-up-fill');
        volume_icon.classList.remove('bi-volume-down-fill');
        volume_icon.classList.remove('bi-volume-mute');
    }

    let volValue=vol_input.value;
    volume_bar.style.width=`${volValue}%`;
    volume_dot.style.left=`${volValue}%`;
    music.volume = volValue /100;


});

/*back and next icon working */

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index=index-1;
    if(index<10){
        index = `0${index}`;
    }
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src=`/music/Arjit/${index}.mp3`;
    poster_play.src=`/image/Arjit/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    
    let songTitals = songs.filter((element)=>{
        return element.id==index;
       
    });
    songTitals.forEach(elements=>{
            let { songName } = elements;
            title.innerHTML= songName;
    });
    song_item_background();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
    
    songs_card_backgraound();
    Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
    

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}); 

next.addEventListener('click',()=>{
    index++;
    if(index<10){
        index = `0${index}`;
    }
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`/music/Arjit/${index}.mp3`;
    poster_play.src=`/image/Arjit/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    
    let songTitals = songs.filter((element)=>{
        return element.id==index;
       
    });
    songTitals.forEach(elements=>{
            let { songName } = elements;
            title.innerHTML= songName;
    });
    song_item_background();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
    
    songs_card_backgraound();
    Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
    

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
});


/* shuffle,repeat and next icon how works */

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click' , ()=>{
    let presentValue = shuffle.innerHTML;
    switch(presentValue){
        case "next" : 
        shuffle.classList.add('bi-repeat-1');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = "repeat";
        break;
        case "repeat" : 
        shuffle.classList.remove('bi-repeat-1');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML = "random";
        break;
        case "random" : 
        shuffle.classList.remove('bi-repeat-1');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = "next";
        break;
    }
});


/* for next icon */

const nextMusic = () => {
    if(index==songs.length){
        index=1;
    }else{
        index++; 
    }

    if(index<10){
        index = `0${index}`;
    }

        music.src=`/music/Arjit/${index}.mp3`;
        poster_play.src=`/image/Arjit/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/music/Arjit/${index}.mp3`;
        
        let songTitals = songs.filter((element)=>{
            return element.id==index;
           
        });
        songTitals.forEach(elements=>{
                let { songName } = elements;
                title.innerHTML= songName;
                download_music.setAttribute('download',songName);
        });
        song_item_background();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
        
        songs_card_backgraound();
        Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
        

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}
/*for repeat icon */
const repeatMusic = () =>{
        index;
        music.src=`/music/Arjit/${index}.mp3`;
        poster_play.src=`/image/Arjit/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/music/Arjit/${index}.mp3`;
        
        let songTitals = songs.filter((element)=>{
            return element.id==index;
           
        });
        songTitals.forEach(elements=>{
                let { songName } = elements;
                title.innerHTML= songName;
                download_music.setAttribute('download',songName);
        });
        song_item_background();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
        
        songs_card_backgraound();
        Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
        

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}

/*when shuffle icon */
const randomMusic = () =>{
    index = Math.floor((Math.random() * songs.length) + 1) ;

    if(index<10){
        index = `0${index}`;
    }

        music.src=`/music/Arjit/${index}.mp3`;
        poster_play.src=`/image/Arjit/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/music/Arjit/${index}.mp3`;
        
        let songTitals = songs.filter((element)=>{
            return element.id==index;
           
        });
        songTitals.forEach(elements=>{
                let { songName } = elements;
                title.innerHTML= songName;
                download_music.setAttribute('download',songName);
        });
        song_item_background();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
        
        songs_card_backgraound();
        Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
        

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}
/*when the music ends then which comes next*/
music.addEventListener('ended',()=>{
    let presentValue = shuffle.innerHTML;
    switch(presentValue){
    case 'repeat' : repeatMusic();
    break;
    case 'random' : randomMusic();
    break;
    case 'next' : nextMusic();
    break; 
    }
   
});



/*when music is on the 3 waves must moving*/
let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})








// Play Button Working start

let playButton = document.getElementById('playButton');

playButton.addEventListener('click',(el)=>{
    index = `01`;
    music.src=`/music/Arjit/${index}.mp3`;
    poster_play.src=`/image/Arjit/${index}.jpeg`;
    music.play();
    
    
    song_item_background();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(120,120,120,.2)';
    
    songs_card_backgraound();
    Array.from(document.getElementsByClassName('songs_card'))[index-1].style.background='rgb(120,120,120,.2)';
    

    makeAllPlays();
});

// Play Button Working end











