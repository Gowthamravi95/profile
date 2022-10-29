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



jQuery(document).ready(function () {

    //Pagination JS
    //how much items per page to show
    var show_per_page = 4; 
    //getting the amount of elements inside pagingBox div
    var number_of_items = $('#pagingBox').children().size();
    //calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    
    //set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    
    //now when we got all we need for the navigation let's make it '
    
    /* 
    what are we going to have in the navigation?
        - link to previous page
        - links to specific pages
        - link to next page
    */
    var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
    
    $('#page_navigation').html(navigation_html);
    
    //add active_page class to the first page link
    $('#page_navigation .page_link:first').addClass('active_page');
    
    //hide all the elements inside pagingBox div
    $('#pagingBox').children().css('display', 'none');
    
    //and show the first n (show_per_page) elements
    $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');

});



//Pagination JS

function previous(){

new_page = parseInt($('#current_page').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page').prev('.page_link').length==true){
    go_to_page(new_page);
}

}

function next(){
new_page = parseInt($('#current_page').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page').next('.page_link').length==true){
    go_to_page(new_page);
}

}
function go_to_page(page_num){
//get the number of items shown per page
var show_per_page = parseInt($('#show_per_page').val());

//get the element number where to start the slice from
start_from = page_num * show_per_page;

//get the element number where to end the slice
end_on = start_from + show_per_page;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

//update the current page input field
$('#current_page').val(page_num);
}