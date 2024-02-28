let isClicked = true;

const show1 = document.getElementById("dropdown_1");
const show2 = document.getElementById("dropdown_2");
const show3 = document.getElementById("dropdown_3");

const unit1 = document.getElementById("unit_1");
const unit2 = document.getElementById("unit_2");
const unit3 = document.getElementById("unit_3");

show1.style.display = 'none';
show2.style.display = 'none';
show3.style.display = 'none';

let showContent1 = function (){
    show2.style.display = 'none';
    show3.style.display = 'none';
    unit2.style.background = 'none';
    unit2.style.border = '2px solid rgb(197, 194, 194)';
    unit3.style.background = 'none';
    unit3.style.border = '2px solid rgb(197, 194, 194)';
    if(isClicked){
        show1.style.display = 'block';
        unit1.style.background = 'rgb(250, 226, 230)';
        unit1.style.border = '2px solid rgb(238, 51, 82)';
    }
}

let showContent2 = function (){
    show1.style.display = 'none';
    show3.style.display = 'none';
    unit1.style.background = 'none';
    unit1.style.border = '2px solid rgb(197, 194, 194)';
    unit3.style.background = 'none';
    unit3.style.border = '2px solid rgb(197, 194, 194)';
    if(isClicked){
        show2.style.display = 'block';
        unit2.style.background = 'rgb(250, 226, 230)';
        unit2.style.border = '2px solid rgb(238, 51, 82)';
    } 
}

let showContent3 = function (){
    show1.style.display = 'none';
    show2.style.display = 'none';
    unit2.style.background = 'none';
    unit2.style.border = '2px solid rgb(197, 194, 194)';
    unit1.style.background = 'none';
    unit1.style.border = '2px solid rgb(197, 194, 194)';
    if(isClicked){
        show3.style.display = 'block';
        unit3.style.background = 'rgb(250, 226, 230)';
        unit3.style.border = '2px solid rgb(238, 51, 82)';
    }
}