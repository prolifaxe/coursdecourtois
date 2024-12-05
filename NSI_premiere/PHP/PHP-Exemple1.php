<!doctype html>
<html>
 <head>
  <title>
   Exemple de variables
  </title>
  <meta charset="utf-8"/>
 </head>
 <body>
 <h1> Un premier programme en PHP : pour les tests</h1>

 <?php
  // Commentaires en php
  // Utilisation de variables, avec le dollard $
        $var1=5;
        $var2=7;
	$somme=$var1+$var2;

	// echo permet d'afficher sur la page
	// On peut méler du texte et des variables
	echo "<p>La somme de $var1 et $var2 est $somme.</p>";

	$nombre1=rand(1,100); // rand(a,b) génère un entier aléatoire entre a et b (inclus)

	echo "<p>Le 1er nombre choisi au hasard est $nombre1.</p>";
	$nombre2=rand(1,100);
	echo "<p>Le 2e nombre choisi au hasard est $nombre2.</p>";

	$somme=$nombre1+$nombre2;
	// On affiche la somme
	echo "<p>La somme de $nombre1 et $nombre2 est $somme.</p>";
 ?>
</body>
</html>
