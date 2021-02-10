'use strict';
//membuat variable untuk memanggil elemen slider
const slider = document.querySelector("#myRange");

//membuat variable untuk memanggil element output
const output = document.querySelector("#nominal");

//membuat function untuk membuat statement
const colorSlider = function(){
    
    //call slider and give it a style
    slider.style.background = `linear-gradient(
        to right, 
        hsl(174, 86%, 45%) ${parseInt(slider.value * 100 / slider.max)}%,
        hsl(224, 65%, 95%) 1%
    )`;

    //menampilkan value ke output
    output.innerHTML = slider.value;
}
slider.addEventListener('input', colorSlider);
