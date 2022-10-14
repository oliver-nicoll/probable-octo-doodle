let btn = document.querySelector('.btn');
let body = document.querySelector('body')
let audio = document.querySelector('#audio_click')

btn.onclick = function(){
    body.classList.toggle('on');
    audio.play();
}