function color()
{
    let newc=Math.random()*16777215
    newc="#"+(Math.floor(newc).toString(16))
    document.body.style.backgroundColor= newc
    document.getElementById("color-code").innerText=newc
}