<!doctype html>
<html>
 <head>
  <title>
   Exercice 1
  </title>
  <meta charset="utf-8"/>
 </head>
 <body>
 <h1> Exercice 1</h1>

 <table border="1">
	<tr>
   <?php
   $nombre1=rand(1,15);
   echo "<h1> On va afficher la table de multiplication de $nombre1</h1>";
   
   for($j=1;$j<=10;$j++){
		$p=$nombre1*$j;
		echo "<td>$j fois $nombre1 = $p</td>";

	}
	?>
	</tr>
	</table>
	
	<h1>Titre de la page</h1>

 <table border="1">

   <?php
	for($j=1;$j<=10;$j++){
		echo "<tr>";
		for($i=1;$i<=10;$i++){
			$p=$i*$j;
			echo "<td>$j fois $i = $p</td>";
		}
		echo "</tr>";
	}

   ?>

 </table>

</body>
</html>