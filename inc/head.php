<!DOCTYPE html>

<html lang="en">
	
	<head>
		
		<title><?php echo($pageTitle); ?></title>
		
		<link href="/assets/favicon.ico" rel="shortcut icon">
		<link href="http://gmpg.org/xfn/11" rel="profile">
		<link href="<?php echo($baseURL); ?>" rel="pingback">
		<base href="<?php echo($baseURL); ?>">
		
		<!-- Modernizr -->
		<script src="<?php echo($baseURL); ?>assets/js/libs/modernizr.js<?php echo($verDate); ?>"></script>
		
		<link href="<?php echo($baseURL); ?>assets/css/style.css<?php echo($verDate); ?>" rel="stylesheet">
		<link href="<?php echo($currentURL); ?>" rel="canonical" />
		
		<!-- /////////// BASELINE META TAGS //////////// -->
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=9,chrome=1" />
		<meta name="description" content="<?php echo($pageDescription); ?>"/>
		
		<!-- Control the behavior of search engine crawling and indexing -->
		<meta name="robots" content="index,follow,noodp"><!-- All Search Engines -->
		<meta name="googlebot" content="index,follow"><!-- Google Specific -->
		
		
		<!-- /////////// SUGGESTED OG TAGS //////////// -->
		<meta property="og:title" content="<?php echo($pageTitle); ?>" />
		<meta property="og:description" content="<?php echo($pageDescription); ?>" />
		<meta property="og:url" content="<?php echo($currentURL); ?>" />
		<meta property="og:image" content="<?php echo($pageImage); ?>" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Obsidian Learning" />

		
		<!-- /////////// SUGESSTED TWITTER TAGS //////////// -->
		<meta name="twitter:title" content="<?php echo($pageTitle); ?>" />
		<meta name="twitter:description" content="<?php echo($pageDescription); ?>" />
		<meta name="twitter:image" content="<?php echo($pageImage); ?>" />
		<meta name="twitter:image:alt" content="<?php echo($pageTitle); ?>">
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@obsidianlabs" />
		<meta name="twitter:creator" content="@obsidianlabs" />

	</head>
	
	<body id="<?php echo($bodyID); ?>" class="<?php echo($bodyClass); ?>">