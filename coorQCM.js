  document.getElementById("coorQCSGBD").innerHTML = " / Correction";
let date1 = new Date(2024, 9, 2, 16,15);
let date = new Date();
let message;
if (date > date1) {
  message =" / "+
    '<a href="https://genumsi.inria.fr/qcm-corrige.php?cle=MTk0MzsxNjcwOzE3NzU7MTc3NDsxNDkxOzIwOTk7MTkyNjsxMzg5OzE3Nzk7MTkyODsxOTI3OzEzOTA7MTg5NDsyNTsxMzc4OzEzODQ7MjEwMDsyMTA0OzE5Mzk7MTg5NQ==">Correction</a>';
  document.getElementById("coorQCSGBD").innerHTML = message;
} else {
  document.getElementById("coorQCSGBD").innerHTML = " / Correction";
}
