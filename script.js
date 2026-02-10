
console.log("Hello World");

// attaching a named function
const button = document.querySelector("button");
button.addEventListener("click", onClick);

function onClick() {
    console.log("Clicked!");
}

// const myImg = document.querySelector("img"); 
// myImg.addEventListener("click", addBorders);
/*
const imgArray = document.querySelectorAll('img'); 

for (let index = 0; index < imgArray.length; index++) { 
    const element = imgArray[index]; 
    element.addEventListener('click', addBorders); 
}
*/

const myLogo = document.getElementById("uncg-logo2"); 
myLogo.addEventListener("click", addBorders);

function addBorders(event) { 
    const img = event.currentTarget; 
    img.style.border = "5px solid red"; 
} 

const parag = document.querySelector("p"); 
parag.addEventListener("click", textBackGround); 

function textBackGround(event) { 
    let parag = event.currentTarget; 
    parag.style.backgroundColor = "blue"; 
} 

function addTwo(num1, num2) { 
    let result = num1 + num2; 
    return result; 
} 

let myResult = addTwo(11, 56); 
console.log(myResult); 

const addBtn = document.querySelector("#add-btn"); 
addBtn.addEventListener("click", addAndDisplay); 

function addAndDisplay(){
    const num1 = document.querySelector("#first").value;
    const num2 = document.querySelector("#second").value; 
    const res = addTwo(parseInt(num1), parseInt(num2)); 
    const resultDiv = document.querySelector("#result"); 
    resultDiv.textContent = num1 + " + " + num2 + " = " + res; 
}

let carousel = [];
carousel[0] = "https://www.uncg.edu/wp-content/uploads/2020/03/UNCGFirstGenDesignation-50046-F.jpg";
carousel[1] = "https://image11.photobiz.com/8586/11_20220621122717_11428973_xlarge.jpg";
carousel[2] = "https://npr.brightspotcdn.com/8c/2d/ded778d6427faff28d73032c52ef/jason-nsimmons-flickr-uncg.jpg";
carousel[3] = "https://www.uncg.edu/wp-content/uploads/2023/09/College-Ave-Crop_A1.jpg";

let currentImg = 0;

const nextBtn = document.querySelector("#next"); 
nextBtn.addEventListener("click", displayNext);

const pervBtn = document.querySelector("#prev"); 
pervBtn.addEventListener("click", displayPerv);


function displayNext() {
    pervBtn.disabled = false;
    if(currentImg < 3){
        currentImg = currentImg + 1;
        if(currentImg == 3){
            nextBtn.disabled = true;
        }
    }
    const carouselImg = document.querySelector("#carousel-image");
    carouselImg.src = carousel[currentImg]; 
}
function displayPerv() {
    nextBtn.disabled = false;
    if(currentImg > 0){
        currentImg = currentImg - 1;
        if(currentImg == 0){
            pervBtn.disabled = true;
        }
    }
    const carouselImg = document.querySelector("#carousel-image");
    carouselImg.src = carousel[currentImg]; 
}