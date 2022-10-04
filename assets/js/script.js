let 
navItem=document.querySelectorAll('.nav-item'),
navIcon=document.querySelectorAll('.nav-icon'),
navLink=document.querySelectorAll('.nav-link'),

circle=document.querySelectorAll("circle");

    const navItemBgColor=["#fb309f","#008073","#00bcd4","#3f51b5","#9c27b0","#f44336","#ff9800"]

    const aniTimer=["300","450","600","750","900","1050","1200"]

// nav item background animation and tab links with scroll smooth 

navItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        item.classList.add("nav-item-bg");
        let el=document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
    item.addEventListener("mouseup",()=>{
        item.classList.remove("nav-item-bg");
         $('.sidebar').toggleClass('sidebar-left')

    })
    item.addEventListener("mouseover",()=>{
        item.style.background="#fafafa";
        item.style.borderLeft=`2px solid ${navItemBgColor[index]}`;
    })
    item.addEventListener("mouseout",()=>{
        item.style.background="white";
        item.style.borderLeft="none";

    })
})

// sidebar nav icon animation and color  

navIcon.forEach((item,index)=>{
    item.style.color=`${navItemBgColor[index]}`;
    item.style.animation=`nav-icon-ani ${aniTimer[index]}ms linear`;
})

// sidebar nav link animation 

navLink.forEach((item,index)=>{
    item.style.animation=`nav-link-ani ${aniTimer[index]}ms linear`;
})





// sidebar collapse 


$('.nav-toggle').click(function(){
    $('.sidebar').toggleClass('sidebar-left')
    let val =$('.sidebar').hasClass('sidebar-left')
    if(val){
        $('.main').click(function(){
                $('.sidebar').removeClass('sidebar-left')
    
        })

    }
    
})


// svg animate on scroll 

window.addEventListener("scroll",eventScroll=()=>{
    let skills=document.getElementById("skills");
    let vh=document.documentElement.clientHeight;
        let scrollableH=Math.ceil(skills.getBoundingClientRect().height);
        let scrollableY=Math.ceil(skills.getBoundingClientRect().y);
        if(vh>scrollableY+scrollableH*2/3){
            skillAnimation();
        window.removeEventListener("scroll",eventScroll);
        }
})
function skillAnimation(){
    circle.forEach((item,index)=>{
     item.style.animation="animSvg 2s linear forwards";
    })
 }

    $(".skill").attr("data-aos","zoom-in");
//  let array1= new Array();
// array2=[703,1406,2109];
//  navItem.forEach((item,index)=>{
//     let el=document.getElementById(item.getAttribute("data-link"));
//     array1[index]=el;


// })

