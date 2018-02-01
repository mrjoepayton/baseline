<?php

//SHOW ALL PHP ERRORS
if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){ error_reporting(E_ALL & ~E_NOTICE); }

// -------------------------- SET GLOBAL VARS -------------------------------//
// -------------------------- SET GLOBAL VARS -------------------------------//

$baseURL = "http://".$_SERVER['HTTP_HOST'];
$baseDIR = $_SERVER['DOCUMENT_ROOT'];
$verDate = "?ver=120116";

require ('vendor/autoload.php');

// -------------------------- CONNECT TO REMOTE DATABASE -------------------------------//
// -------------------------- CONNECT TO REMOTE DATABASE -------------------------------//

	//include ($baseDIR.'/inc/functions/medoo.php');

// -------------------------- GET THE CLIENT'S IP ADDRESS -------------------------------//
// -------------------------- GET THE CLIENT'S IP ADDRESS -------------------------------//

	//include ($baseDIR.'/inc/functions/get-client-ip.php');
	
?>