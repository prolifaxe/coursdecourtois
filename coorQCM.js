
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
