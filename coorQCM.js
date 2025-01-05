
let dateFinale =new Date(2025, 5, 30, 14,15);
let date1 = new Date(2024, 8, 30, 14,15); //date et heure limite 30 septembre 14h15
let date = new Date();//date courante
let message;
if (date > date1 && date < dateFinale) {
  message =" / "+
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTk0MzsxNjcwOzE3NzU7MTc3NDsxNDkxOzIwOTk7MTkyNjsxMzg5OzE3Nzk7MTkyODsxOTI3OzEzOTA7MTg5NDsyNTsxMzc4OzEzODQ7MjEwMDsyMTA0OzE5Mzk7MTg5NQ==">Correction</a>';
  document.getElementById("coorQCMSGBD").innerHTML = message;
} else {
  document.getElementById("coorQCMSGBD").innerHTML = " / Correction";
}
//Devoir recursivité 2024
let dateRecur = new Date(2024, 10, 13, 12,30); //date et heure limite

message =
  '<a href="https://www.dropbox.com/scl/fo/sqbnprvbdvzwql9kgc39t/APXavzV2u5LXxJoVfSgTnnA?rlkey=liezvyeq7nu35la9xbolcglid&dl=0">Sujet et correction</a>';
if (date > dateRecur && date < dateFinale) {

  document.getElementById("coorRecursivite").innerHTML = message;
} else {
  document.getElementById("coorRecursivite").innerHTML = "Sujet et correction";
}

//Devoir arbre 2024
let dateArbre2024 = new Date(2024, 11, 11, 12,30); //date et heure limite

message =
  '<a href="https://www.math93.com/images/pdf/annales_bac/Bac_NSI/bac_NSI_2024/24_NSIJ1ME_1.pdf">Sujet</a>';
message=message+ ' / <a href="https://projet.eu.org/pedago/sin/NSI/sujets/NSI-2024-metropole-1-sujet-officiel_corr.pdf">correction</a>'
if (date > dateArbre2024 && date < dateFinale) {

  document.getElementById("coorArbre2024").innerHTML = message;
} else {
  document.getElementById("coorArbre2024").innerHTML = "Sujet et correction";
}

//Devoir réseau  2024/25
let dateReseau2024 = new Date(2025, ,0 ,6, 13,30); //date et heure limite


message=' / <a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTgxNTszNjM7MTM0OTs0NTE7MzA7MzkzOzQ0MjsxODI5OzE4MTI7MTUzNDsxMzQxOzE4MjM7MTgxNDsxODA5OzE1ODE7NDg1OzUwNDsyMzA7MTgyMTsxODEwOzE4MTE7MTgyNTs0NTA7MzY0OzE4MjY7NDQ5OzEzNDc7MTgyNDsxODIyOzQ0OA==">correction</a>'
if (date > dateReseau2024 && date < dateFinale) {

  document.getElementById("corrReseau").innerHTML = message;
} else {
  document.getElementById("corrReseau").innerHTML = "correction";
}
