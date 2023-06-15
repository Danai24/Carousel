const images = ["https://images.pexels.com/photos/1408214/pexels-photo-1408214.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", "https://images.pexels.com/photos/1414042/pexels-photo-1414042.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", "https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"];

// const slider = document.querySelector(".slider")
// const FORWARD = document.querySelector(".forwardButton")
// const BACK =document.querySelector(".backButton")
// const dots = document.querySelector(".alldot");
// const sliderImage = document.querySelector(".slider-images")

// let numberImages = slider.length;
// let slideWidth = slider[0].clientwidth; 
// let currentsSlide = 0;

// dots.forEach((dot, idx ) => {
    
// });

// var index = 0
// sliderImage.src = images[index]


// FORWARD.addEventListener("click", mover)
// BACK.addEventListener("click", mover)


// function mover(event) {
//     index++
//     if (images.length === index) {
//         index = 0
//     }
//     sliderImage.src = images[index]

//     slider[0].classList.add("active");
// }


// function mover(event) {
//     index--
//     if (index < 0 ){
//         index = images.length-1
//     }
//     sliderImage.src = images[index]
// }




// function init () {

//     slider.forEach((img, index) => {
//         img.style.left = index * 100 + "%";
//     });

//     slider[0].classList.add("active");

//     createDots ();
// }

// init();

// function createDots() {
//     for (let index = 0; index < numberImages; index++) {
//         const dot = document .createElement("div");
//         dot.classList.add("dot");
//         navigationDot.appendChild(dot);
//     }

//     navigationDot.children[0].classList.add("active");
// }


// FORWARD.addEventListener("click", () => {
//     if (currentsSlide >= numberImages -1)
//     goToSlide (currentsSlide);
// });

// function name(params) {
    
// }
//     sliderImage.style.transform = "translateX(-" + slideWidth * numberImages + "px)"; 
// })

