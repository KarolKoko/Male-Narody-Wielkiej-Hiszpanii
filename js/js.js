const sect1 = document.querySelector(".sect-1")
const sect2 = document.querySelector(".sect-2")
const sect3 = document.querySelector(".sect-3")
const sect4 = document.querySelector(".sect-4")

function resize(){
    sect1.style = `height: ${sect3.clientHeight}px;`
    sect2.style = `height: ${sect3.clientHeight}px;`
    sect4.style = `height: ${sect3.clientHeight}px;`
}


sect1.addEventListener("click", function(){
    sect1.querySelector(".content").classList.toggle("content-active")
    sect1.querySelector(".bg").classList.toggle("bg-active")
    sect1.classList.toggle("sect-active")
})

sect2.addEventListener("click", function(){
    sect2.querySelector(".content").classList.toggle("content-active")
    sect2.querySelector(".bg").classList.toggle("bg-active")
    sect2.classList.toggle("sect-active")
})

sect3.addEventListener("click", function(){
    sect3.querySelector(".content").classList.toggle("content-active")
    sect3.querySelector(".bg").classList.toggle("bg-active")
    sect3.classList.toggle("sect-active")
})

sect4.addEventListener("click", function(){
    sect4.querySelector(".content").classList.toggle("content-active")
    sect4.querySelector(".bg").classList.toggle("bg-active")
    sect4.classList.toggle("sect-active")
})


window.addEventListener("resize", resize)
resize()




