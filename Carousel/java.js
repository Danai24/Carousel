const CAROUSEL_IMG = document.querySelector(".carousel__image")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK =document.querySelector(".carousel__backButton")

const IMAGES = ["https://placekitten.com/300", "https://picsum.photos/300/300", "https://picsum.photos/seed/picsum/300/300"]

var index = 0
CAROUSEL_IMG.src = IMAGES[index]

CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
CAROUSEL_BACK.addEventListener("click", shuffleBack)

function shuffleForward(event) {
    index++
    if (IMAGES.length === index) {
        index = 0
    }
    CAROUSEL_IMG.src = IMAGES[index]
}


function shuffleBack(event) {
    index--
    if (index < 0 ){
        index = IMAGES.length-1
    }
    CAROUSEL_IMG.src = IMAGES[index]
}