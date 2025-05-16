
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var a = document.querySelector(".element-container");
var fixed = document.querySelector(".fixedimage");
a.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
a.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elem = document.querySelectorAll(".element");
elem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var img = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${img})`
  });
});


var design= document.querySelector(".design1")
var project= document.querySelector(".project")
var execution= document.querySelector(".execution")
var changeimage=document.querySelector(".righty")

    design.addEventListener("click",function(){
        var img=design.getAttribute("data-image");
        changeimage.style.backgroundImage=`url(${img})`
        design.style.color= "white"
        design.style.padding="0"
        project.style.padding="0px 2vw"
        project.style.color="#504A45"
        execution.style.padding="0px 2vw"
        execution.style.color="#504A45"
    })
     project.addEventListener("click",function(){
        var img=project.getAttribute("data-image");     
           console.log(img)

        changeimage.style.backgroundImage=`url(${img})`
        project.style.color= "white"
        project.style.padding="0"
        design.style.padding="0px 2vw"
        design.style.color="#504A45"
        execution.style.padding="0px 2vw"
        execution.style.color="#504A45"
    })
     execution.addEventListener("click",function(){
        var img=execution.getAttribute("data-image");
        changeimage.style.backgroundImage=`url(${img})`
        execution.style.color= "white"
        execution.style.padding="0"
        project.style.padding="0px 2vw"
        project.style.color="#504A45"
        design.style.padding="0px 2vw"
        design.style.color="#504A45"
    })

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


var loader=document.querySelector(".loader")
    setTimeout(function(){
        loader.style.top="-100%"
        
    }, 4100);

   