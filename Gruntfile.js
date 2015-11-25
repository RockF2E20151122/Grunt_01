module.exports = function(grunt) {
	var a = 1;
	
	grunt.log.write('Into exports.').ok();

	// Project configuration.
	grunt.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'src/<%= pkg.name %>.js',
						dest : 'build/<%= pkg.name %>.min.js'
					}
				}
			}, function(){
				grunt.log.write('fuck callback').ok()
			}() );

	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 默认被执行的任务列表。
//	grunt.registerTask('default', [ 'uglify' ]);
	
	grunt.registerTask('default', [ 'uglify' ], function() {
		grunt.log.write('Logging some stuff...').ok();
	});
	
	
};