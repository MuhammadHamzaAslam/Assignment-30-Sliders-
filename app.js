let left = document.getElementById("return")
let right = document.getElementById("right")
let img = document.getElementById("img")
let arr = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']
let j = 0
function right_1() {
    j++
    if (j >= arr.length) {
        j=0
    }
    img.src= arr[j]
}
function left_1() {
     j--
    if (j < 0) {
        j = arr.length -1
    }
    img.src= arr[j]
}
right.addEventListener("click",right_1)
left.addEventListener("click",left_1)

