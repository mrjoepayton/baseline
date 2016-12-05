module.exports = function (grunt) {
	
	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			default: {
				files: {
					'assets/css/style.css': 'assets/css/compile.less'
				}
			}
		},

		concat: {
			js: {
				files: {
					'assets/js/plugins.js': [
						'assets/js/libs/jquery-3.0.0.min.js',
						'assets/js/libs/bootstrap.js',
						'assets/js/libs/gsap.tweenmax-1.19.0.js',
						'assets/js/libs/gsap.morph-0.8.1.js',
						'assets/js/libs/jquery.equalheights.js',
						'assets/js/libs/jquery.velocity.js',
						'assets/js/libs/jquery.waypoints.js',
						'assets/js/libs/jquery.cookies.js',
						'assets/js/libs/jquery.history.js'
					],
					'assets/js/scripts.js': [
						'assets/js/main.js'
					]
				}
			}
		},
		
		uglify: {
			js: {
				files: {
					'assets/js/plugins.min.js': ['assets/js/plugins.js'],
					'assets/js/scripts.min.js': ['assets/js/scripts.js']
				}
			}
		},
		
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '',
					src: ['assets/css/style.css'],
					dest: '',
					ext: '.min.css'
				}]
			}
		},
		
		watch: {
			less: {
				files: ['assets/**/*.less'],
				tasks: ['buildcss', 'minifycss'],
			},
			js: {
				files: ['assets/**/*.js', '!assets/**/*.min.js'],
				tasks: [ 'buildjs','uglyjs'],
			}
			
		},
		
		notify: {
			buildcss: {
				options: {
					message: 'CSS is ready!'
				}
			},
			buildjs: {
				options: {
					message: 'JAVASCRIPT is ready!'
				}
			}
		},
		
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-notify');

	// Default task(s).
	grunt.registerTask('default', ['buildcss', 'minifycss', 'buildjs', 'uglyjs']);
	grunt.registerTask('buildcss', ['less', 'notify:buildcss']);
	grunt.registerTask('minifycss', ['cssmin']);
	grunt.registerTask('buildjs', ['concat', 'notify:buildjs']);
	grunt.registerTask('uglyjs', ['uglify']);

};