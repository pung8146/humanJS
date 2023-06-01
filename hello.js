const add = (a,b) => (a + b) // return 이 생략된것

function calculator(func,a,b){
    return func(a,b)
}

add(3 , 5) // 8
calculator(add,3,5) // 8


// 1번 틀린코드
const onClick = () => {
    console.log("click")
}
document.querySelector('틀린코드').addEventListener('click',onClick()) // 틀린코드

// 2번 맞는코드
const onClick = () => () => {
    console.log("click")
}
document.querySelector('성립하는 코드').addEventListener('click',onClick()) // 틀린코드

