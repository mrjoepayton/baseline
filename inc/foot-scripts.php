		<?php if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){ ?>
			
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/plugins.js"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/scripts.js"></script>

		<?php } else { ?>
			
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/plugins.min.js<?php echo($verDate); ?>"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>/assets/js/scripts.min.js<?php echo($verDate); ?>"></script>

			<?php // -------------------- GOOGLE ANALYTICS GOES HERE -------------------- // ?>
			<?php // -------------------- GOOGLE ANALYTICS GOES HERE -------------------- // ?>

			<script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"></script>

		<?php } ?>

	</body>

</html>