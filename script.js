/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"


/*
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
	function MaFonction(reponse)
	{


	   var codage="",lettre,chiffre,alpha="abcdefghijklmnopqrstuvwxyz";
     reponse=reponse.trim();//enléve les blancs
	   reponse=strNoAccent(reponse);
	   reponse=reponse.toLowerCase();
	   reponse=reponse.replace('-', '');

	   for(var i=0;i<reponse.length;i++){
			lettre=reponse.charAt(i);
			chiffre=alpha.indexOf(lettre)+1;
      if (chiffre<10){
        chiffre="0"+String(chiffre)
      }
			codage=codage+chiffre;
	   }

	return codage;
	}
	function strNoAccent(a) {
  return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


function listeJour(){
	var sel
	 sel='<select id="choixjour" name="jour" >';
	 sel=sel+'<option value="">...</option>';
	for(var i=1;i<32;i++){
	 sel=sel+'<option value='+i+'>'+i+'</option>';
;
	}
	sel=sel+'</select>'
	document.getElementById("id_jours").innerHTML=sel;
}
listeJour();
function listeMois(){
	var sel
	 sel='<select id="choixmois" name="mois" onchange=>';
	 sel=sel+'<option value="">...</option>';
	for(var i=1;i<13;i++){
    if (i<10){
      sel=sel+'<option value='+i+'>'+"0"+i+'</option>';
    }
    else{
	 sel=sel+'<option value='+i+'>'+i+'</option>';
    }
	}
	sel=sel+'</select>'
	document.getElementById("id_mois").innerHTML=sel;
}
listeMois();
 function selection()
 {
	var moncodage = document.getElementById("Id_Reponse").value;
  moncodage=moncodage.trim();
	var verif=moncodage!="";

   if (document.getElementById("ICI")!=null){
	document.getElementById("ICI").innerHTML=MaFonction(moncodage);;
   }
	moncodage=MaFonction(moncodage.charAt(0));
    const selecteur1 = document.getElementById("choixjour");
    const monChoix1=selecteur1[selecteur1.selectedIndex];
	const selecteur2 = document.getElementById("choixmois");

    const monChoix2=selecteur2[selecteur2.selectedIndex];
   var monmois=monChoix2.value
      if (parseInt(monChoix2.value)<10){
     monmois="0"+monmois;
   }
	const selecteur3 = document.getElementById("choixclasse");
    const monChoix3=selecteur3[selecteur3.selectedIndex];


  if  (monChoix1.value!="" && monChoix2.value!="" && monChoix3.value!="" && verif ){

      if (monChoix3.value=="T"){

          document.getElementById("identifiant").innerHTML=monChoix1.value + monmois+moncodage;
      }
      else{

          document.getElementById("identifiant").innerHTML=monChoix1.value + monmois+monChoix3.value+moncodage;
      }
    }
  }
