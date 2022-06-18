const sect1 = document.querySelector(".sect-1")
const sect2 = document.querySelector(".sect-2")
const sect3 = document.querySelector(".sect-3")
const sect4 = document.querySelector(".sect-4")
const header = document.querySelector(".header")

function resize(){
    sect1.style = `height: ${sect3.clientHeight}px;`
    sect2.style = `height: ${sect3.clientHeight}px;`
    sect4.style = `height: ${sect3.clientHeight}px;`
}

function sizeUp(){
    header.style = "clip-path: circle(10.9% at 50% 50%);"
}

function sizeDown(){
    header.style = "clip-path: circle(114% at 50% 50%);"
}

window.addEventListener("resize", resize)
sect1.addEventListener("mouseover", sizeUp)
sect2.addEventListener("mouseover", sizeUp)
sect3.addEventListener("mouseover", sizeUp)
sect4.addEventListener("mouseover", sizeUp)

sect1.addEventListener("mouseout", sizeDown)
sect2.addEventListener("mouseout", sizeDown)
sect3.addEventListener("mouseout", sizeDown)
sect4.addEventListener("mouseout", sizeDown)
resize()








sect1.addEventListener("click", function(){
    sect1.querySelector(".bg").classList.add("bg-active")
    sect1.querySelector(".content").classList.add("bg-active")
    header.classList.add("sect-active")
    setTimeout(function(){
        sect1.querySelector(".bg").classList.remove("bg-active")
        sect1.querySelector(".content").classList.remove("bg-active")
        header.classList.remove("sect-active")
    }, 6000)
})

sect2.addEventListener("click", function(){
    sect2.querySelector(".bg").classList.add("bg-active")
    sect2.querySelector(".content").classList.add("bg-active")
    header.classList.add("sect-active")
    setTimeout(function(){
        sect2.querySelector(".bg").classList.remove("bg-active")
        sect2.querySelector(".content").classList.remove("bg-active")
        header.classList.remove("sect-active")
    }, 8000)
})

sect3.addEventListener("click", function(){
    sect3.querySelector(".bg").classList.add("bg-active")
    sect3.querySelector(".content").classList.add("bg-active")
    header.classList.add("sect-active")
    setTimeout(function(){
        sect3.querySelector(".bg").classList.remove("bg-active")
        sect3.querySelector(".content").classList.remove("bg-active")
        header.classList.remove("sect-active")
    }, 17000)
})

sect4.addEventListener("click", function(){
    sect4.querySelector(".bg").classList.add("bg-active")
    sect4.querySelector(".content").classList.add("bg-active")
    header.classList.add("sect-active")
    setTimeout(function(){
        sect4.querySelector(".bg").classList.remove("bg-active")
        sect4.querySelector(".content").classList.remove("bg-active")
        header.classList.remove("sect-active")
    }, 4000)
})




