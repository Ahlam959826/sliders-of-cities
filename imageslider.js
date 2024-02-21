


const imageSlider = document.querySelector("#imageSlider")
const nextBtn = document.querySelector("#nextButton")
const PrevBtn = document.querySelector("#PrevButton")

const images = [
    "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?size=626&ext=jpg&ga=GA1.1.1789678835.1704812291&semt=sph",
    "https://img.freepik.com/free-photo/view-new-york-city-usa_53876-160509.jpg?size=626&ext=jpg&ga=GA1.2.1789678835.1704812291&semt=sph",
    "https://img.freepik.com/premium-photo/toronto-city-skyline-night_131985-110.jpg?size=626&ext=jpg&ga=GA1.1.1789678835.1704812291&semt=sph",
    "https://img.freepik.com/free-photo/aerial-view-central-park-manhattan-new-york-city-surrounded-by-skyscrapers_181624-52364.jpg?size=626&ext=jpg&ga=GA1.2.1789678835.1704812291&semt=sph"
]

let indexImage = 0
function currentImage(){
    imageSlider.src = images[indexImage]
}




// handle next button
nextBtn.addEventListener("click",function(){
    indexImage++;
    if(indexImage > images.length - 1){
        indexImage = 0
    }
    currentImage()
})

PrevBtn.addEventListener("click",function(){
    indexImage--
    if(indexImage < 0){
        indexImage = 0
    }
    currentImage()
})