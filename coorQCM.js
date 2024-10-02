
let date1 = new Date(2024, 8, 30, 14,15); //date et heure limite
let date = new Date();//date courante
let message;
if (date > date1) {
  message =" / "+
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTk0MzsxNjcwOzE3NzU7MTc3NDsxNDkxOzIwOTk7MTkyNjsxMzg5OzE3Nzk7MTkyODsxOTI3OzEzOTA7MTg5NDsyNTsxMzc4OzEzODQ7MjEwMDsyMTA0OzE5Mzk7MTg5NQ==">Correction</a>';
  document.getElementById("coorQCMSGBD").innerHTML = message;
} else {
  document.getElementById("coorQCMSGBD").innerHTML = " / Correction";
}
