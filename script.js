/*
console.log("Hello World");

// attaching a named function
const button = document.querySelector("button");
button.addEventListener("click", onClick);

function onClick() {
    console.log("Clicked!");
}

// const myImg = document.querySelector("img"); 
// myImg.addEventListener("click", addBorders);

const imgArray = document.querySelectorAll('img'); 

for (let index = 0; index < imgArray.length; index++) { 
    const element = imgArray[index]; 
    element.addEventListener('click', addBorders); 
}


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
    */
/*
const image = document.querySelector('img.show');
image.addEventListener("click", remove);

function remove(event) {
  const image = event.currentTarget;
  image.classList.remove('show');
  image.classList.add('hide');
}

const gallery = document.querySelectorAll('#container img');
for (let index = 0; index < gallery.length; index++) {
    const element = gallery[index];
    element.addEventListener('click', expand);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");
    bigImage.classList.remove('big');
    bigImage.classList.add('small');
    smallImage.classList.remove('small');
    smallImage.classList.add('big');
}

const myDiv = document.querySelector("#div1");
myDiv.addEventListener('click', addParagraph);

function addParagraph(event) {
    const myDiv = event.currentTarget;
    let para = document.createElement("p");
    let node = document.createTextNode("This is new."); para.appendChild(node);
    myDiv.appendChild(para);
    
    let child = document.querySelector("#p1");
    myDiv.insertBefore(para, child);
} 

const paragOther = document.querySelector("p.other");
paragOther.addEventListener("click", removePara);

function removePara(event){
  const paragOther=event.currentTarget;
  paragOther.remove();
}

function walkTree(root, level) {
    if (root.nodeType === Node.TEXT_NODE) {
        console.log(level + 'text:' + root.textContent);
    } else {
        console.log(level + root.nodeName);
    }
    for (const child of root.childNodes) {
        walkTree(child, level + "    ");
    }
}
walkTree(document.querySelector('html'), "");

*/
let hello = function () {
    console.log('Hello, World');
}
hello();

let f = function (a, b) {
    return a * b
};
f(3, 4);

let hello2 = () => {
    console.log('Hello, World2');
}
hello2();

let f2 = (a, b) => {
    return a * b
};
f2(5, 7);

let currentCount = 0;
let randButton = document.querySelector("#random-btn");
//randButton.addEventListener("click", countClicks(++currentCount));

randButton.addEventListener("click", function () {
    currentCount = currentCount + 1;
    countClicks(currentCount);
});

function countClicks(currentCount) {
    console.log("You clicked me " + currentCount + " times!");
}

var myTimerId1 = setTimeout(sayHello, 3000); 
function sayHello() { 
	alert("Hello, World!"); 
}

var myTimerId2 = setTimeout(
function() { 
	alert("Hello Anon");
}, 3000);

var myTimerId3 = setTimeout(sayHello, 3000, "JavaScript"); 
function sayHello(name) { 
	alert("Hello, " + name); 
}

let counter = 0;
var myTimerId4 = setInterval(function () { 
    console.log("Hello: " + ++counter); 
}, 4000);

clearTimeout(myTimerId4);

let btn = document.querySelector('#my-btn');
btn.addEventListener('click', startAnimation);
function startAnimation() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

const person = {
firstName: "John",
lastName: "Doe",
id: 5566,
fullName: function () {
    return this.firstName + " " + this.lastName;
}
};
console.log("this in method:"+person.fullName());

let globalVariable = this;
console.log("this alone:" + globalVariable);

function myFunction() {
    return this;
}
console.log("this in a function:" + myFunction());
