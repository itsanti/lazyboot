// Gruntfile.js

// Grunt configuration.
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // Get the configuration info from package.json.
    // This way we can use things like name and version (pkg.name).
    // pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      compass: {
        files: ['scss/**/*.scss', 'theme/**/*.php'],
        tasks: ['compass', 'wait', 'drush:cc_css_js']
      }
    },
    
    drush: {
      cc_css_js: {
        args: ['cc', 'css-js']
      }
    },
    
    wait: {
      options: {
        delay: 5000
      },
      pause: {      
        options: {
          before : function(options) {
            console.log('pausing %dms', options.delay);
            console.log('SYNCHRONIZE PROJECT: CTRL+ALT+Y');
          },
          after : function() {
            console.log('pause end');
          }
        }
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // We can only load these if they are in our package.json.
  // Make sure you have run npm install so our app can find these.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-drush');
  grunt.loadNpmTasks('grunt-wait');

  grunt.registerTask('default', ['watch']);
};
