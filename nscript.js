
let datefin=new Date(2025, 6, 1, 15,30);

let date = new Date();
let message="";


let date1 = new Date(2024, 9, 1, 15,30);//1er octobre 2024 15h30
if (date > date1 && date<datefin) {
  message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MjA7MjI7MjM7MjQ7NDE7NDI7NDQ7NDU7NDY7MTEyOzEyMTsxMzQ7MTM1OzEzNjsxMzg7MTc3OzE3ODszODM7Mzk4OzYxOTs2NjA7MTYyNTsxNjc1OzE2NzY7MTY4MDsxNjgxOzE2ODI7MTY4NjsxNjg5OzE2OTA7MTcwOQ==>">Correction</a>';
  document.getElementById("coor").innerHTML = message;
} else {
  document.getElementById("coor").innerHTML = "Correction";
}

let dateListe = new Date(2024, 9, 17, 10,10);//17 octobre 2024 15h30



if (date > dateListe && date<datefin) {
  message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=Mjc7NDI7NDg7NzE7MTIwOzE0NTsxNDY7MTc4OzE5NzsyMDY7MjA3OzIxNzsyNDA7Mjc0OzI3ODszMDA7MzAxOzMwNjszMDg7MTM5MzsxMzk1">Correction</a>';
  document.getElementById("coorListe").innerHTML = message;
} else {
  document.getElementById("coorListe").innerHTML = "Correction";
}


let dateDico = new Date(2024, 10, 20, 10,10);//20 novembre 2024 15h30



if (date > dateDico && date<datefin) {
  message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MjIyOzIyNDsyMzU7MjQ2OzI5NzsyOTg7Mjk5OzMwNDszMjc7MzUwOzM1MTszNTI7MzUzOzM1NDs0MjU7NDcyOzQ3NTs0Nzc7MTM3NTsxNDI5OzE0Njg=">Correction</a>';
  document.getElementById("coorDico1").innerHTML = message;

   message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MjE4OzI1ODsyOTg7Mjk5OzMwNDszNTE7MzUyOzM1MzszNTQ7Nzk2OzEwNDc7MTMzMTsxMzM4OzEzNTk7MTQ2ODsxNzM0OzE3Mzc7MjIyOzE3NDA7MjIzOzQ2Nw==">Correction</a>';
  document.getElementById("coorDico2").innerHTML = message;
} else {
  document.getElementById("coorDico1").innerHTML = "Correction";
  document.getElementById("coorDico2").innerHTML = "Correction";
}

/*Représentation des données*/

let dateRepresentation = new Date(2024, 11, 19, 9,15);//19 decembre 2024 9h15
if (date > dateRepresentation  && date<datefin) {
  message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTkwNTsxOTA3OzE5MDk7MTkxMTsxOTEzOzE5MTY7MTkxNzsxOTIyOzE5MjM7MTkyNDsxOTI1OzE5MTk7MTM7MTM3MDsxNDEzOzYxOzE2Mjg7MTYyMTs3OTk7NDA4OzE0OTI7NDA3OzQwMjs0MDE7MTQ4NjsxMzM3OzE5NDsxNzIzOzE5MzM7MjMzNQ==">Correction</a>';
  document.getElementById("coorRepresentationA1").innerHTML = message;
  document.getElementById("coorRepresentationA2").innerHTML = message;
   message =
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTkwNjsxOTA4OzE5MTA7MTkxMjsxOTE0OzE5MTU7MTkxODsxOTIyOzE5MjM7MTkyNDsxOTI1OzE5MjA7NjQ7MTkxMzs0NjU7MTsxNjIyOzE0MTQ7MTYyOTsxMzczOzE0OTU7MTY0MDszODk7MTcxMjsxOTQ7MTQ4Njs0MDc7MTcyMzsxOTMzOzIzMzY=">Correction</a>';
  document.getElementById("coorRepresentationB1").innerHTML = message;
  document.getElementById("coorRepresentationB2").innerHTML = message;
} else {
  document.getElementById("coorRepresentationA1").innerHTML = " / Correction";
  document.getElementById("coorRepresentationB1").innerHTML = " / Correction";
  document.getElementById("coorRepresentationA2").innerHTML = " / Correction";
  document.getElementById("coorRepresentationB2").innerHTML = " / Correction";
}

/*javascript*/
let datejavascript = new Date(2025, 4, 19, 9,15);//PAS ENCORE DECIDE

if (date > datejavascript  && date<datefin) {
  message =
   '<a target="_blank" href="https://prolifaxe.github.io/coursdecourtois/NSI_premiere/javascript/ImageDevoir/evenmntIngredient.JPG">evenmntIngredient.JPG</a >';
  document.getElementById("evenmntIngredient").innerHTML = message;

  message='<a target="_blank" href="NSI_premiere/javascript/ImageDevoir/question3.JPG">evenementMusique.JPG</a>';
  document.getElementById("evenmntMusique").innerHTML = message;
   message =
    '<a target="_blank" href="prolifaxe.github.io/coursdecourtois/NSI_premiere/javascript/ImageDevoir/choisirVoyelle.png">choisirVoyelle.png</a>';
  document.getElementById("choisirVoyelle").innerHTML = message;

} else {
  document.getElementById("evenmntIngredient").innerHTML = "  image";
  document.getElementById("choisirVoyelle").innerHTML = " image";
  document.getElementById("evenmntIngredient").innerHTML = " image";

}
