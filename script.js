let body = document.querySelector("body")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let h1 = document.querySelector('h1')
let startIndex = 0;


let assets = [{
    imgUrl: 'img-1.jpg',
    content: "the background number # 1"
},
{
    imgUrl: 'img-2.jpg',
    content: "the background number # 2"
}, {
    imgUrl: 'img-3.jpg',
    content: "the background number # 3"
},
]


right.addEventListener("click", nextImage)
function nextImage() {
    startIndex++;
    if (startIndex >= assets.length) {
        startIndex = 0
    }
    body.style.backgroundImage = `url(imgs/${assets[startIndex].imgUrl})`
    h1.textContent = `${assets[startIndex].content}`

}
left.addEventListener("click", nextImage)
function nextImage() {
    startIndex--;
    if (startIndex < 0) {
        startIndex = assets.length - 1
    }
    body.style.backgroundImage = `url(imgs/${assets[startIndex].imgUrl})`
    h1.textContent = `${assets[startIndex].content}`

}