let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
let form = document.getElementById("sheetdb-form")
 
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr.style.transition = "all ease 0.01s"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
    blur.style.transition = "all ease 0.1s"
})


// GSAP START FROM HERE

var h4all = document.querySelectorAll("#nav h4")

    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 3
            crsr.style.border = " 1px solid white"
            crsr.style.backgroundColor = "transparent"
            crsr.style.transition = "all ease 0.5s"
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = " 0px solid #c11e1e"
            crsr.style.backgroundColor = "#c11e1e"
            crsr.style.transition = "none"
        })
    })
  
gsap.to("#nav",{
    backgroundColor : "black",
    opacity:1,
    backdropFilter:"blur(10px)",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        
       end:"top -10%",
        scrub:1 
    }
})

gsap.to("#main",{
 backgroundColor : "black",
 scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    //markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub:2
 }
})

// get contact details

form.addEventListener("submit",e=>{
    e.preventDefault();
    fetch(form.action,{
        method: "POST",
        body : new FormData(document.getElementById("sheetdb-form"))
    }).then(
        response => response.json()
    ).then(alert("Your message received :)"))
})




let element =  document.querySelectorAll("#nav-item")

if(window.matchMedia("(max-width:550px)").matches){
document.getElementById("nav-btn").addEventListener("click", ()=>{
    
  element.forEach((elem)=>{
    if(elem.style.display=="none"){
    elem.style.display = "block"
    }
    else{
        elem.style.display = "none"
    }
  })

})
}
else{
    elem.style.display = "flex"
}