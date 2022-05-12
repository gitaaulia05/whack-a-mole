const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const score = document.querySelector('.score')
const pop = document.getElementById('pop')


let tanahSebelumnya;
let selesai ;
let skor;

function randomTanah(tanah) {
    const t = Math.floor( Math.random() * tanah.length);
    const tRandom = tanah[t];
    
    if(tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    } 
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomTime(min , max){
    return Math.round(Math.random()*(max - min)+min);
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah);
    const wRandom = randomTime(300 , 1000);
        tRandom.classList.add('muncul');
    
      setTimeout(() => {
        tRandom.classList.remove('muncul');
       if(!selesai) {
        munculkanTikus();
       } 
      }, wRandom);

}

function mulai (){
    selesai = false;
    skor = 0;
    score.textContent =0;
    munculkanTikus();
    setTimeout(() => {
       selesai = true;
    }, 10000);
}

function hit() {
    skor++;
    score.textContent = skor;
    this.parentNode.classList.remove('muncul');
    pop.play();

}

tikus.forEach(t =>{
    t.addEventListener('click',hit);
})