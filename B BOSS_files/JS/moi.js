function KATime(a,b){
  document.getElementById("KAT").innerHTML=a.parentElement.parentElement.previousElementSibling.firstChild.innerHTML+" / ";
  document.getElementById("podKAT").innerHTML=a.innerHTML;
  ZatvarnajeOtvoreniteTabove(a);
asc_KAT=String.fromCharCode(65+b);a_kat=b;
A_KAT=ELMENTOS[b];}

var A_KAT,asc_KAT,N_KAT,M_KAT,ASCR,a_kat;
function OPEN_F_MODEL(a){ LOKALIZACIJA(a);

currentSlide(1);
document.getElementById("myModal_F").style="display:block";

for (i=0;i<A_KAT[N_KAT][24];i++){/// kolku fotki ima artiklot
GLMfto[i].src=ASCR+(i+1)+".jpg";}}


function LOKALIZACIJA(a){N_KAT=parseInt(a.parentElement.parentElement.id.slice(1));
   if(a.parentElement.children[1].children[3].children[0].children[1].style!='none'){
M_KAT=a.parentElement.children[1].children[3].children[0].children[1].selectedIndex;}else{M_KAT=0;}

ASCR="B%20BOSS_files/data/"+asc_KAT+"/img/"+asc_KAT+N_KAT+"/"+M_KAT+"/";}

function SETINZI_FTO(a){ // setira na model ako gi ima ova da menja fotki ako gi ima // ne e mnogu moralno ali e ok
FTO=a.parentElement.parentElement.parentElement.parentElement.children[0];
LOKALIZACIJA(FTO);FTO.src=ASCR+"1.jpg";}



// Modal futersko
function ClikMODALO(a) {ModelFUTER.style.display = "block";
if(a==1){ABOUTOT=true;showSlides(1);About.style.display="block";Contact.style.display = "none";BezlMthd.style.display = "none"; }else 
if(a==2){About.style.display="none";Contact.style.display = "block";BezlMthd.style.display = "none";}else 
if(a==3){About.style.display="none";Contact.style.display = "none";BezlMthd.style.display = "block";}else
if(a==0){ModelFUTER.style.display = "none";ABOUTOT=false;}}


function ceni(a){L=a.parentElement.parentElement.parentElement.children[0];LOKALIZACIJA(L);zaq();

a.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML="&euro; "+ELMENTOS[a_kat][N_KAT][17];
a.previousElementSibling.previousElementSibling.value=ELMENTOS[a_kat][N_KAT][17];}