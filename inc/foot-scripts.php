		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="/assets/js/libs/jquery.min.js"><\/script>');</script>

		<?php if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){ ?>
			
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/plugins.js"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/scripts.js"></script>

		<?php } else { ?>
			
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/plugins.min.js<?php echo($verDate); ?>"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/scripts.min.js<?php echo($verDate); ?>"></script>

			<!-- ~~~~~~~~~~~~~~~~~~~~ Global site tag (gtag.js) - Google Analytics ~~~~~~~~~~~~~~~~~~~~ -->
			<!-- ~~~~~~~~~~~~~~~~~~~~ Global site tag (gtag.js) - Google Analytics ~~~~~~~~~~~~~~~~~~~~ -->

				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-15343429-1"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-XXXXXXXX-X');
				</script>

		<?php } ?>

	</body>

</html>