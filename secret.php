<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

  <meta charset="utf-8">
  <title>Lien Codé</title>


</head><body>

  <?php
    echo 'L adresse IP de l utilisateur est : '.$_SERVER['REMOTE_ADDR'];
  ?>
<?php if (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "vache") // Pour les T07
    {
    // On affiche les codes

    ?>
<h1>Pour les T07</h1>
<p><strong>Pour vous connecter vous uiliserez comme identifant la concatenation du Jour, du Mois de votre date de
naissance et du numero de votre classe (JourMoisClasse). François né le 05/02/2004 de la classe T07 utilisera l'identifiant 050207</strong></p>

<h1>Voici le lien : <a href="https://genumsi.inria.fr/qcm.php?h=e0a07e99dca222bc2e8751da8b37f64f" target="_blank">GeNumSI</a></h1>

	<?php }
	elseif (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "calculette") // Pour les 107
    {
    // On affiche les codes
    ?>
	<h1>Pour les 107</h1>
	<p><strong>Pour vous connecter vous uiliserez comme identifant la concatenation du Jour, du Mois de votre date de
naissance et du numero de votre classe (JourMoisClasse). François né le 05/02/2004 de la classe 105 utilisera l'identifiant 0502105 </strong></p>

<h1>Voici le lien : <a href="https://genumsi.inria.fr/qcm.php?h=13deeddb3e588d13cb4d938f92b85bc2" target="_blank">GeNumSI</a></h1>


	<?php }
	elseif (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "calculatrice") // Pour les 110
    {
    // On affiche les codes
    ?>
	<h1>Pour les 110</h1>
	<p><strong>Pour vous connecter vous uiliserez comme identifant la concatenation du Jour, du Mois de votre date de
naissance et du numero de votre classe (JourMoisClasse). François né le 05/02/2004 de la classe 105 utilisera l'identifiant 0502105 </strong></p>
ATTENTION, il y a des anniversaires communs donc :
<p>MAYLANE L'identifiant 0408110</p>
<p>CLARA L'identifiant 1408110</p>
<p>MACCARONE-SAURET Antoine L'identifiant 01612110 </p>
<p>SOURIAU Mia 11612110</p>

<h1>Voici le lien : <a href="https://genumsi.inria.fr/qcm.php?h=b93045c00df1ba25b963a1f04edb4aac" target="_blank">GeNumSI</a></h1>

<?php }
    else // Sinon, on affiche un message d'erreur
    {
        echo '<p>Mot de passe incorrect</p>';
    }
    ?>
</body></html>
