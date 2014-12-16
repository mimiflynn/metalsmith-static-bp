module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    metalsmith: {
      portfolio: {
        options: grunt.file.readJSON('metalsmith.json')
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'contents/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-metalsmith');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'metalsmith']);

};