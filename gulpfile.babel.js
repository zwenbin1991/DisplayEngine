// gulp配置文件
// author: 法克
// date: 2016-5-11 17:19

'use strict';

import gulp from 'gulp';
import gBabel from 'gulp-babel';

gulp.task('babel', () => {
    gulp.src('transformer/**/*.js')
        .pipe(gBabel({
            presets: ['es2015'],
            'plugins': ['transform-es2015-modules-amd']
        }).on('error', error => console.log(error)))
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['babel']);