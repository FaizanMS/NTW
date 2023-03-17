// // DOM

// // console.log(document.childNodes[1].childNodes[0].childNodes[7])

// // getattribute
// // hasattribute
// // setattribute

// function foo(){
//     var a = document.getElementById('abc')
//     var b = a.getAttribute('class')
//     // var b = a.getAttribute('class')
//     // var b = a.hasAttribute('classes')
//     // var b = a.setAttribute('class','ghi')
//     console.log(b)
// }

// function foo(){
//     var a = document.createElement('p')
//     var b = document.createTextNode('hello world')
//     a.appendChild(b)
//     console.log(a)
// }
var ul = document.getElementById('ul')
function addTodo(){
    var a = document.getElementById('inp')
    var list = document.createElement('li')
    var text = document.createTextNode(a.value)
    // list.setAttribute('class',)
    list.appendChild(text)
    ul.appendChild(list)
    a.value = ''
    // b.innerHTML += a.value+"<br>"
}










