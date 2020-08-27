var ModelFUTER=document.getElementById("modal01");
var About=document.getElementById("about");
var Contact=document.getElementById("contact");
var BezlMthd=document.getElementById("BzalMTDA");
var MENI=document.getElementsByClassName("container *SECTION")[0];
var dropdown = document.getElementsByClassName("dropdown-btn");
var GLAVENtab=document.getElementById("glavenTAB");

var QQQ=document.getElementsByTagName("aside")[0];var qqq=document.getElementById("qqQQ");


function DKMT_RDY(){  ONloado();
document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].addEventListener("click", openModal);} 

function openModal() {
if(document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].classList.contains("disabled")==false){OPMD();	

sminka(true);
document.getElementById("formular").style.display = "block";var CLN=QQQ.cloneNode(true);qqQQ.appendChild(CLN);

qqQQ.children[0].children[0].children[3].children[0].children[0].children[0].innerHTML=pre1;
qqQQ.children[0].children[0].children[3].children[1].remove();
//qqQQ.children[0].children[0].children[1].style="display:none;";//ova bilo za logot i ke go nema

qqQQ.children[0].children[0].children[3].children[0].style='text-align:center';


//document.getElementsByClassName("*PYP")[0].style="display:none;";
//document.getElementsByClassName("*PYP")[1].style="display:none;";
}}
function closeModal() { sminka(false);
document.getElementById("formular").style.display = "none";

document.getElementsByTagName("aside")[1].remove();

//document.getElementsByClassName("*PYP")[0].style="display:block;";
}

function sminka(a){
var NBR=document.getElementsByClassName("sc-cart-item-qty");
var XX=document.getElementsByClassName("sc-cart-remove");
if(a==true){
for(i=0;i<XX.length;i++){XX[i].style="display:none;";}
for(i=0;i<NBR.length;i++){NBR[i].type="text";NBR[i].disabled=true;}
}else{
for(i=0;i<XX.length;i++){XX[i].style="display:block;";}
for(i=0;i<NBR.length;i++){NBR[i].type="number";NBR[i].disabled=false;}}}





function ONloado(){var wScreen=window.innerWidth; 

if(wScreen<981){MENI.style="float: unset;";}else{

MENI.children[0].style="display:flex";
MENI.children[0].children[0].style="flex:0.98";}
document.getElementsByClassName("del")[1].remove();
document.getElementsByClassName("del")[0].remove();}


////////////// pva dole e za stiskanje na kategorite

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}





function w3_open(){//ovie se f za malscrin open close
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";}
 
function w3_close(){//ovie se f za malscrin open close
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";}


//filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



function ZatvarnajeOtvoreniteTabove(a){
a.parentElement.previousElementSibling.parentElement.previousElementSibling.click();

for(i=0;i<GLAVENtab.children.length;i++){
if(GLAVENtab.children[i].className=="dropdown-btn active"){GLAVENtab.children[i].click();}

 w3_close();
}}


var ABOUTOT=false;
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
//  var i;
if(ABOUTOT){
    var slides = document.getElementsByClassName("mySlidesABOUT");
  
  if (n > 4) {slideIndex = 1}    
  if (n < 1) {slideIndex = 4;}
  for (i = 0; i < 4; i++) {
      slides[i].style.display = "none";  
  }  slides[slideIndex-1].style.display = "block";
    }else{

  var slides = document.getElementsByClassName("mySlidesARTIKLITEE");
  
  if (n > A_KAT[N_KAT][24]) {slideIndex = 1}    
  if (n < 1) {slideIndex = A_KAT[N_KAT][24];}
  for (i = 0; i < A_KAT[N_KAT][24]; i++) {
      slides[i].style.display = "none";  
  }  slides[slideIndex-1].style.display = "block";
  
}}



//var PP; var MNS;// ova go brise posledniot elemnto kako debag
//PP=document.getElementsByClassName("col-md-4 col-sm-6");MNS=PP.length-1;PP[MNS].remove();






var GLMfto=[
GL_F_0=document.getElementById("GOLEMO_F_0"),
GL_F_1=document.getElementById("GOLEMO_F_1"),
GL_F_2=document.getElementById("GOLEMO_F_2"),
GL_F_3=document.getElementById("GOLEMO_F_3"),
GL_F_4=document.getElementById("GOLEMO_F_4")];



