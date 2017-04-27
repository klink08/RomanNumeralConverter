var server = require('karma').Server;
var gulp = require('gulp');

gulp.task('test', function (done) {
    server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(){
        done()
    });
});