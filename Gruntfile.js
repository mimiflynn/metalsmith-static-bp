module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
        target: {
            tasks: ['watch', 'compass', 'jshint', 'metalsmith', 'connect:server'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
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
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'sass/**/*.scss'],
      tasks: ['jshint', 'compass']
    },
    connect: {
      server: {
        port: 1337,
        base: 'build'
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-metalsmith');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:target']);

};