

const profileBtn = document.querySelector(".profile");
console.log(profileBtn);
const dropDownMenu = document.querySelector('.dropdown-menu ');
const loginMenu = document.querySelector('.login-menu ');
const background = document.querySelector('.transparent');
profileBtn.onclick = function(){
    dropDownMenu.style.display = 'block';
    loginMenu.style.display = 'flex';
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = function(){
    dropDownMenu.style.display = 'none';
}

var inside1 = false;
var inside2 = false;
var menLink;
var menuBox;
function f1(x ,y ){
    menuBox = document.getElementsByClassName(x);
    menuBox[0].style.display = 'inline';
    y.style.animationIterationCount =  100;
    inside1 = true;
    menLink = y;
    background.style.display = 'block';

}
function f2(){
    inside1 = false;
    if(inside1 == false && inside2 == false){
        console.log("outt");
        menuBox[0].style.display = 'none';
        menLink.style.animationIterationCount = 0 ;
        background.style.display = 'none';
    }else{
        menLink.style.animationIterationCount = 100;
        menuBox[0].style.display = 'inline';
        background.style.display = 'block';
    }
}

function f3(){
    inside2 = true;
    if(inside1 == false && inside2 == false){
        menuBox[0].style.display = 'none';
        menLink.style.animationIterationCount = 0 ;
        background.style.display = 'none';
    }else{
        menLink.style.animationIterationCount =  100;
        menuBox[0].style.display = 'inline';
        background.style.display = 'block';
    }
}

function f4(){
    inside2 = false;
    if(inside1 == false && inside2 == false){
        menuBox[0].style.display = 'none';
        menLink.style.animationIterationCount = 0 ;
        background.style.display = 'none';
    }else{
        menLink.style.animationIterationCount =  100;
        menuBox[0].style.display = 'inline';
        background.style.display = 'block';
    }
}

