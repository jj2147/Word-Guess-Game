
var rappers = ['tupac', 'll cool j', 'jay-z', 'eazy-e', 'slick rick', 'dr. dre', 'ice cube', 'the notorious b.i.g.', 'snoop dogg', 'andre 3000', '50 cent', 'flavor flav', 'jam master jay', 'nas', 'rakim', 'dmx'];

var pics = 
["http://thesource.com/wp-content/uploads/2018/06/Tupac-Shakur.jpg",
"https://nyppagesix.files.wordpress.com/2017/07/wireimage-674449704.jpg?quality=90&strip=all&w=618&h=410&crop=1",
"https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/jayz-hero.jpg?itok=MatKqjtH",
"http://s3.amazonaws.com/hiphopdx-production/2015/03/Screen-Shot-2015-03-26-at-10.43.59-AM.png",
"http://s3.amazonaws.com/hiphopdx-production/2016/06/160622-Slick-Rick-827x620.jpg",
"https://www.rollingstone.com/wp-content/uploads/2018/06/rs-205437-C221B566C05730DA7CBC12A7D1509CBA.jpg?crop=900:600&width=440",
"https://m.media-amazon.com/images/M/MV5BMTYyMTE0NDQwMV5BMl5BanBnXkFtZTcwMDA1NjA1Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
"https://resources.wimpmusic.com/images/54b761be/6c8a/43af/a655/7b1aeab54a44/750x500.jpg",
"https://static.vibe.com/files/2015/12/snoop-life-lessons-640x758.jpg",
"https://media.wmagazine.com/photos/5a00c09d9318326b27cbd480/3:2/w_640/GettyImages-504264296.jpg",
"https://amp.businessinsider.com/images/5a69f6391784251f008b45f6-750-562.jpg",
"https://nyppagesix.files.wordpress.com/2018/01/flavor-flav.jpg?quality=90&strip=all",
"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/5/c/1/b/d9e9-5ad7-4684-bacb-eabaacf66710.jpg",
"http://s3.amazonaws.com/hiphopdx-production/2018/01/180129-Nas_by_Mike_Lavin_@thehomelesspimp-800x600.jpg",
"https://image-ticketfly.imgix.net/00/02/78/91/91-og.jpg?w=500&h=503",
"https://nyppagesix.files.wordpress.com/2017/07/170714_yang_nyp___manh_fed___dmx_3.jpg?quality=90&strip=all"
]

var rappers2d = [];
for(var i=0; i<rappers.length; i++){
    rappers2d[i] = rappers[i].split('');
}

console.log("rappers", rappers);
console.log("rappers2d", rappers2d);

function rand(){
    return Math.floor(Math.random() * rappers2d.length);
}


function write(rapArr, guessArr){
    document.getElementById('letters').innerHTML = '';

    for(var i=0; i<rapArr.length; i++){
        if(guessArr.includes(rapArr[i])){
            document.getElementById('letters').innerHTML += rapArr[i];
        }else if(rapArr[i].match(/[0-9a-z]/i)){
            document.getElementById('letters').innerHTML += '_';
        }else{
            document.getElementById('letters').innerHTML += rapArr[i];
        }
    }

    if(!document.getElementById('letters').innerHTML.includes('_')){
        alert("YOU WIN! REFRESH THE PAGE!");
    }
}

var randIndex = rand();
var rapper = rappers2d[randIndex];
var rights = [];
var wrongs = [];
var guessesLeft = 5;

console.log(rapper);
write(rapper, rights);
document.getElementById('pic').src = pics[randIndex];


document.onkeypress = function(event) {
    var guess = event.key.toLowerCase();
    if(guess.match(/[0-9a-z]/i) && rapper.includes(guess) && !rights.includes(guess)){
        rights.push(guess);
        write(rapper, rights);
        console.log("rights", rights);

    }else if(guess.match(/[0-9a-z]/i) && !wrongs.includes(guess) && !rights.includes(guess)){
        wrongs.push(guess);
        guessesLeft--;
        document.getElementById('guessesleft').innerHTML = "guesses left: " + guessesLeft;
        document.getElementById('wrongs').innerHTML = "wrong guesses:" + wrongs;

    }

    if(guessesLeft == 0){
        alert("YOU LOSE");
    }

}