var intro = document.querySelector('.intro');
var servicesRow = document.querySelector('.row');
var servicesCol = document.querySelectorAll('.col-1-of-3');
var footerRow = document.querySelector('.row');


function adjustIntro(){
   if(window.innerWidth <= 1352){
      intro.classList.remove("margin-top-medium");
   }
   else{
      intro.classList.add("margin-top-medium");
   }
}

function adjustServicesCol(){
   for(i = 0; i < servicesCol.length; i++){
      if(window.innerWidth <= 900){
         servicesCol[i].classList.remove("col-1-of-3");
      }
      else{
         servicesCol[i].classList.add("col-1-of-3");
      }
   }
}

function adjustFooterRow(){
   if(window.innerWidth <= 900){
      footerRow.classList.remove("row");
   }
   else{
      footerRow.classList.add("row");
   }
}



setInterval(adjustIntro, 50);
setInterval(adjustFooterRow, 50);
