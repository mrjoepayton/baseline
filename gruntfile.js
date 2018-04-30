module.exports = function (grunt) {
	
	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		modernizr: {
			dist: {
				"crawl": false,
				"customTests": [],
				"dest" : "assets/js/libs/modernizr-custom.js",
				"tests": [
					"audio",
					"cookies",
					"flash",
					"history",
					"json",
					"svg",
					"touchevents",
					"video",
					"cssanimations",
					"flexbox",
					"mediaqueries",
					"rgba",
					"formvalidation",
					"inlinesvg",
					"videoautoplay"
				],
				"options": [
					"html5shiv",
				    "setClasses"
				],
				"uglify": true
			}
		},
		
		copy: {
			webfontloader: {
				src: 'node_modules/webfontloader/webfontloader.js',
				dest: 'assets/js/libs/webfontloader.js',
			},
			jquery: {
				src: 'node_modules/jquery/dist/jquery.min.js',
				dest: 'assets/js/libs/jquery.min.js',
			},
		},

		sass: {

			options: {
				sourceMap: false,
			},
			
			dist: {

				files: {
					'assets/css/style.css': 'assets/sass/compile.scss'
				}
			}
		},

		concat: {
			options: {
				stripBanners:true
			},
			dist: {
				src: [
					'node_modules/jquery-match-height/jquery.matchHeight.js',
					'node_modules/js-cookie/src/js.cookie.js',
					'node_modules/history.js/history.js',
					'node_modules/resize-end/src/resize-end.js',
					'node_modules/gsap/TweenMax.js'
				],
				dest:'assets/js/plugins.js',
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
			options: {
				specialComments:0
			},
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'assets/css',
					ext: '.min.css'
				}]
			}
		},
		
		watch: {
			sass: {
				files: ['assets/**/*.scss'],
				tasks: ['buildcss'],
			},
			js: {
				files: ['assets/**/*.js', '!assets/**/*.min.js'],
				tasks: [ 'buildjs'],
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

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-sass');

	// Register tasks
	grunt.registerTask('default', ['modernizr', 'copy', 'buildcss', 'buildjs']);
	grunt.registerTask('buildcss', ['sass', 'cssmin','notify:buildcss']);
	grunt.registerTask('buildjs', ['concat', 'uglify', 'notify:buildjs']);

};