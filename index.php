<?php
	
include($_SERVER['DOCUMENT_ROOT'] . '/inc/global.php');

$pageTitle = "this is the page title";
$pageDescription = "This is where you would type your page description";
$currentURL = $baseURL . "$_SERVER[REQUEST_URI]";
$pageImage = $baseURL . "/yourImageUrl.jpg";

$bodyID = "home";
$bodyClass = "";

require($baseDIR . '/inc/head.php');

?>

<div id="content-wrap">

	<?php include($baseDIR . '/inc/header.php'); ?>

	<div id="main-content">

		<div class="container">
			<div class="row">
				
				<div class="col">
					<h2>Content Title</h2>
					<p>This is the content.</p>
				</div>

			</div>
		</div>

	</div>

	<?php require($_SERVER['DOCUMENT_ROOT'] . '/inc/footer.php'); ?>

</div>

<?php require($_SERVER['DOCUMENT_ROOT'] . '/inc/foot-scripts.php'); ?>