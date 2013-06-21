var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['src/styles/{,*/}*'],
        tasks: ['compass']
      },
      pages: {
        files: ['src/pages/{,*/}*', 'posts/{,*/}*', 'src/layouts/{,*/}*'],
        tasks: ['pages']
      },
      images: {
        files: ['*.ico', '.htacess', 'src/images/*'],
        tasks: ['copy']
      }
    },
    pages: {
      options: {
        pageSrc: 'src/pages'
      },
      posts: {
        src: 'posts',
        dest: 'site',
        layout: 'src/layouts/post.jade',
        url: ':title',
        options: {
          templateEngine: 'jade'
        }
      }
    },
    connect: {
      dist: {
        options: {
        port: 9000,
        hostname: 'localhost',
          middleware: function (connect) {
            return [
              mountFolder(connect, 'site'),
              mountFolder(connect, 'src')
            ];
          }
        }
      }
    },
    open: {
      dist: {
        path: 'http://localhost:9000'
      }
    },
    clean: {
      dist: 'site'
    },
    compass: {
      options: {
        sassDir: 'src/styles',
        cssDir: 'site/styles'
      },
      dist: {}
    },
    // Move files not handled by other tasks
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'site',
          src: [
            '*.ico',
            '.htaccess',
            'images/{,*/}*'
          ]
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'compass',
    'pages',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'build');
};
