/*global module, require */

module.exports = function(grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: this.file.readJSON('package.json'),

    info: {
      baseUrl: 'demos/'
    },

    clean: {
      demos: [
        '<%= info.baseUrl %>/scss/vendor/_retina.scss',
        '<%= info.baseUrl %>/scss/vendor/retina'
      ],
    },

    copy: {
      sass: {
        files: [
          // {expand: true, src: ['src/**'], dest: '<%= info.baseUrl%>/scss/vendor'}
          {expand: true, cwd: 'src/', src: ['**'], dest: '<%= info.baseUrl%>/scss/vendor/'}
        ]
      }
    },


    compass: {
      options: {
        basePath: '<%= info.baseUrl %>',
        config: '<%= info.baseUrl %>/config.rb'
      },
      clean: {
        options: {
          clean: true
        }
      },
      dev: {}
    },


    watch: {
      sass: {
        options: {
          interrupt: true
        },
        files: ['src/**/*.scss'],
        tasks: ['copy:sass', 'compass:dev']
      }
    }
  });


  grunt.registerTask('democss', [
    'compass:clean',
    'compass:dev'
  ]);

  grunt.registerTask('build', [
    'clean:demos',
    'copy:sass',
    'compass:clean',
    'compass:dev'
  ]);




  return this.registerTask('default', ['build']);
};
