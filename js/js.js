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
    console.log("xd");
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




