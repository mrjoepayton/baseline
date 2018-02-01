<!DOCTYPE html>

<html lang="en">

	<head>

	<?php // -------------------- PAGE TITLE ELEMENT -------------------- // ?>
	<?php // -------------------- PAGE TITLE ELEMENT -------------------- // ?>

		<title><?php echo($pageTitle); ?></title>

	<?php // -------------------- FAVICONS -------------------- // ?>
	<?php // -------------------- FAVICONS -------------------- // ?>

		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo($baseURL); ?>/assets/favicons/apple-touch-icon.png<?php echo($verDate); ?>">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo($baseURL); ?>/assets/favicons/favicon-32x32.png<?php echo($verDate); ?>">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo($baseURL); ?>/assets/favicons/favicon-16x16.png<?php echo($verDate); ?>">
		<link rel="manifest" href="<?php echo($baseURL); ?>/assets/favicons/manifest.json<?php echo($verDate); ?>">
		<link rel="mask-icon" href="<?php echo($baseURL); ?>/assets/favicons/safari-pinned-tab.svg" color="#000000">
		<link rel="shortcut icon" href="<?php echo($baseURL); ?>/assets/favicons/favicon.ico<?php echo($verDate); ?>">
		<meta name="apple-mobile-web-app-title" content="pageTitle">
		<meta name="application-name" content="pageTitle">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="<?php echo($baseURL); ?>/assets/favicons/mstile-144x144.png<?php echo($verDate); ?>">
		<meta name="msapplication-config" content="<?php echo($baseURL); ?>/assets/favicons/browserconfig.xml<?php echo($verDate); ?>">
		<meta name="theme-color" content="#ffffff">

	<?php // -------------------- PINGBACKS AND BASE URL -------------------- // ?>
	<?php // -------------------- PINGBACKS AND BASE URL -------------------- // ?>

		<link href="http://gmpg.org/xfn/11" rel="profile">
		<link href="<?php echo($baseURL); ?>" rel="pingback">
		<link href="<?php echo($currentURL); ?>" rel="canonical" />
		<base href="<?php echo($baseURL); ?>">

	<?php // -------------------- SEARCH ENGINE DIRECTIONS -------------------- // ?>
	<?php // -------------------- SEARCH ENGINE DIRECTIONS -------------------- // ?>

		<meta name="robots" content="index,follow,noodp"><!-- All Search Engines -->
		<meta name="googlebot" content="index,follow"><!-- Google Specific -->

	<?php // -------------------- BASELINE META TAGS -------------------- // ?>
	<?php // -------------------- BASELINE META TAGS -------------------- // ?>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=9,chrome=1" />
		<meta name="description" content="<?php echo($pageDescription); ?>"/>

	<?php // -------------------- SUGGESTED OG TAGS -------------------- // ?>
	<?php // -------------------- SUGGESTED OG TAGS -------------------- // ?>

		<meta property="og:title" content="<?php echo($pageTitle); ?>" />
		<meta property="og:description" content="<?php echo($pageDescription); ?>" />
		<meta property="og:url" content="<?php echo($currentURL); ?>" />
		<meta property="og:image" content="<?php echo($pageImage); ?>" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Obsidian Learning" />
	
	<?php // -------------------- SUGESSTED TWITTER TAGS -------------------- // ?>
	<?php // -------------------- SUGESSTED TWITTER TAGS -------------------- // ?>

		<meta name="twitter:title" content="<?php echo($pageTitle); ?>" />
		<meta name="twitter:description" content="<?php echo($pageDescription); ?>" />
		<meta name="twitter:image" content="<?php echo($pageImage); ?>" />
		<meta name="twitter:image:alt" content="<?php echo($pageTitle); ?>">
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@obsidianlabs" />
		<meta name="twitter:creator" content="@obsidianlabs" />

	<?php // -------------------- MODERNIZR - CUSTOM GRUNT BUILT -------------------- // ?>
	<?php // -------------------- MODERNIZR - CUSTOM GRUNT BUILT -------------------- // ?>

		<script src="<?php echo($baseURL); ?>/assets/js/libs/modernizr-custom.js<?php echo($verDate); ?>"></script>
	
	<?php // -------------------- WEBFONT LOADER -------------------- // ?>
	<?php // -------------------- WEBFONT LOADER -------------------- // ?>

		<script src="<?php echo($baseURL); ?>/assets/js/libs/webfontloader.js<?php echo($verDate); ?>"></script>
		<script>
			WebFont.load({google:{
				families: ['Open Sans', 'Open Sans Condensed', 'Merriweather']
			}});
		</script>
	
	<?php // -------------------- CSS FILE -------------------- // ?>
	<?php // -------------------- CSS FILE -------------------- // ?>
		
		<?php if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){ ?>
			<link href="<?php echo($baseURL); ?>/assets/css/style.css<?php echo($verDate); ?>" rel="stylesheet">
		<?php } else { ?>
			<link href="<?php echo($baseURL); ?>/assets/css/style.min.css<?php echo($verDate); ?>" rel="stylesheet">
		<?php } ?>

	</head>
	
	<body id="<?php echo($bodyID); ?>"<?php if($bodyClass){ echo( ' class="'.$bodyClass.'"' ); } ?>>