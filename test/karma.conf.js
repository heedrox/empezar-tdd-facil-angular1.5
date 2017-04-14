//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: '../',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'node_modules/jasmine-data-provider/src/index.js',
            'app/index/**/*.js',
            'app/lib/lib.module.js',
            'app/lib/*.js',
            'app/capitulo*/**/*module*.js',
            'app/capitulo*/**/*.js',
            'test/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS']

    });
};
