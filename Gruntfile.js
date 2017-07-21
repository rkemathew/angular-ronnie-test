module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        clean: {
            dist: 'dist',
            postcssmin: 'app/css/app.less.css'
        },

        less: {
            dist: {
                files: {
                    'app/css/app.less.css': 'app/css/**/*.less'
                }
            }
        },

        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/app.min.css': 'app/css/**/*.css'
                }
            }
        },
 
        uglify: {
            options: {
                sourceMap: true,
                includeSources: true,
                sourceMapName: 'dist/app.min.map',
                mangle: false,
                compress: {
                    unused: false
                }
            },
            dist: {
                src: [
                    'app/js/app.modules.js',
                    'app/js/app.routes.js',
                    'app/js/modules/**/*.js',
                ],
                dest: 'dist/app.min.js'
            }
        },

        html2js: {
            options: {
                base:'./',
                module: 'app.templates',
                moduleVar: 'app',
                singleModule: true,
                userStrict: true ,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            files: {
                src: ['app/templates/**/*.html'],
                dest: 'dist/app.tpls.js',
            }
        },

        // useminPrepare: {
        //     html: 'index.html'
        // },
 
        usemin: {
            html: ['dist/index.html']
        },
 
        watch: {
            css: {
                files: 'app/css/**/*.js',
                tasks: 'cssmin'
            },
            js: {
                files: 'app/js/**/*.js',
                tasks: 'uglify'
            },
            templates: {
                files: 'app/templates/**/*.html',
                tasks: 'html2js'
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-html2js')
 
    grunt.registerTask('default', [
        'clean:dist', 'uglify', 'less', 'cssmin', 'clean:postcssmin', 'html2js', 'usemin'
    ]);
};
