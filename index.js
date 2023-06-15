let MenuIcon=document.querySelector('.menu-icon');
let SideBar=document.querySelector('.side-bar');
 let SubscribedPerson=document.querySelector('.subscribed-person');
let BannerIcon=document.querySelector('.banner-icon');
 let UserVideo=document.querySelector('.user-video');
let UserBannerIcon=document.querySelector('.user-banner-icon');

let letUserIcon=document.querySelector('.user-icon');

// let =document.querySelector('.menu-icon');
MenuIcon.onclick= function(){
    SideBar.classList.toggle("small-side");
    SubscribedPerson.classList.toggle('small-subs');
BannerIcon.classList.toggle('click-banner-icon-change');
UserVideo.classList.toggle('click-banner-video-change');

UserBannerIcon.classList.toggle('click-user-banner-change'); 

letUserIcon.classList.toggle('click-staus');
}