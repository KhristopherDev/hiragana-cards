// const previous = document.getElementById('previousSong');
// const next = document.getElementById('nextSong');
// const mute = document.getElementById('muteSong');

// // Variável para armazenar o objeto de áudio
// let songDB = {
//     songs: {
//         sg0: {
//             id:'L9tqy1OmS5LZ4nvdmB5xTTKp0fbYuyqh',
//             playing: false,
//             sgName:"Akagore"
//         },
//         sg1: {
//             id: 'ym1AlfTqeaTi62a2TFDtV4yxrkOSyEqA',
//             playing: false,
//             sgName: "The Corner Table"
//         },
//         sg2: {
//             id: 'iuRwqmgq1gQUWISXom3sYfgf3EGE1c34',
//             playing: false,
//             sgName: "90sFlav - Call me"
//         },
//         sg3: {
//             id: 'FicUwAMzw2ePsQ5pOfcai3826ARRWs6F',
//             playing: false,
//             sgName: "Anime de Japan - Going Home"
//         },
//         sg4: {
//             id: 'oUuQqGGN8ALw2CA3H2ytXiYmjr91SkWH',
//             playing: false,
//             sgName: "aruarian dance"
//         },
//         sg5: {
//             id: 'hwAzisT68tIk5ECqksyekvnBc0AhCDrK',
//             playing: false,
//             sgName: "C418 - Subwoofer Lullaby (slowed reverb)"
//         },
//         sg6: {
//             id: 'coN2dWtzaQDDmWcgFpeb5xkcmdozg0lp',
//             playing: false,
//             sgName: "Digimon Tamers OST 24 - Setsunasa"
//         },
//         sg7: {
//             id: '7bgdv6WgPW88j1XyA9vW0n8VH4ogSlLR',
//             playing: false,
//             sgName: "Dire Dire Docks But you're listening to it underwater"
//         },
//         sg8: {
//             id: 'vzgQC6bQoKK3AdiM0X3rcEKX7XXnnS8c',
//             playing: false,
//             sgName: "Joe Hisaishi - Merry-Go-Round of Life"
//         },
//         sg9: {
//             id: '8eYGG8zHzVT1Uu8hKEemC2cFypaVzo3N',
//             playing: false,
//             sgName: "lovesick"
//         },
//         sg10: {
//             id: 'jGOncdalUsfm1oMUvKtI2a36PKk0FKHl',
//             playing: false,
//             sgName: "Metroid"
//         },
//         sg11: {
//             id: 'hLzOnJGbWNFryuwJc2LjsEu7FDbU1Gi1',
//             playing: false,
//             sgName: "minecraft dire dire docks"
//         }
//     }
// };
// let songsNum = 12;
// let volControl;
// let currentSong = new Audio('https://audio.jukehost.co.uk/' + songDB.songs.sg0.id)
// currentSong.volume = 0.2;
// currentSong.loop = false;
// let playlistPos = 0;
// let songPlaying = false;

// //tentar colocar "Audio(x)" dentro de string no song db para chamar o código dentro de uma varíavel de audio, podendo mudar de acordo com a música chamada

// mute.addEventListener('click', ()=>{
//     if(songPlaying) {
//         currentSong.pause();
//         songPlaying = false;
//         songDB.songs['sg' + playlistPos].playing = false;
//     }else{
//         currentSong.play()
//         songPlaying = true;
//         songDB.songs['sg' + playlistPos].playing = true;
//     }
// })

// next.addEventListener('click', ()=>{
//     if (playlistPos + 1 == songsNum) {
//         currentSong.pause();
//         currentSong.muted = true;
//         playlistPos = 0;
//         currentSong =  new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//         currentSong.load();
//         currentSong.muted = false;
//         currentSong.volume = 0.2;
//         currentSong.loop = false;
//         currentSong.play();
//         songPlaying = true;
//     }else{
//         songPlaying = true;
//         currentSong.pause();
//         currentSong.muted = true;
//         playlistPos++;
//         currentSong = new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//         currentSong.load();
//         currentSong.muted = false;
//         currentSong.volume = 0.2;
//         currentSong.loop = false;
//         currentSong.play();
//         songPlaying = true;
//     }
// })

// previous.addEventListener('click', ()=>{
//     if (playlistPos == 0) {
//         currentSong.pause();
//         currentSong.muted = true;
//         playlistPos = songsNum - 1;
//         currentSong =  new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//         currentSong.load();
//         currentSong.muted = false;
//         currentSong.volume = 0.2;
//         currentSong.loop = false;
//         currentSong.play();
//         songPlaying = true;
//     }else{
//         currentSong.pause();
//         currentSong.muted = true;
//         playlistPos--;
//         currentSong = new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//         currentSong.load();
//         currentSong.muted = false;
//         currentSong.volume = 0.2;
//         currentSong.loop = false;
//         currentSong.play();
//         songPlaying = true;
//     }
// })

// let newSong = setInterval(()=>{
//     if (songPlaying){
//         if(currentSong.ended){
//             if (playlistPos + 1 == songsNum) {
//                 currentSong.pause();
//                 currentSong.muted = true;
//                 playlistPos = 0;
//                 currentSong =  new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//                 currentSong.load();
//                 currentSong.muted = false;
//                 currentSong.volume = 0.2;
//                 currentSong.loop = false;
//                 currentSong.play();
//                 songPlaying = true;
//             }else{
//                 songPlaying = true;
//                 currentSong.pause();
//                 currentSong.muted = true;
//                 playlistPos++;
//                 currentSong = new Audio('https://audio.jukehost.co.uk/' + songDB.songs['sg' + playlistPos].id);
//                 currentSong.load();
//                 currentSong.muted = false;
//                 currentSong.volume = 0.2;
//                 currentSong.loop = false;
//                 currentSong.play();
//                 songPlaying = true;
//             }
//         }
//     }
// },1000)