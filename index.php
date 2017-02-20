<?php
	
include($_SERVER['DOCUMENT_ROOT'].'/inc/global.php');

$pageTitle = "this is the page title";
$pageDescription = "This is where you would type your page description";
$currentURL = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$pageImage = "http://address.to/yourImageUrl.jpg";

$bodyID = "homepage";
$bodyClass = "home";

?>

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/head.php'); ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/header.php'); ?>

	<h2>content</h2>

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>