const { src, dest, watch }=require('gulp');
const compileSass = require('gulp-sass');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
	return src('./source/sass/**/*.scss')
		.pipe(compileSass().on('error', compileSass.logError))
		.pipe(dest('./dist/css'));
};

const devWatch = () => {
	watch('./source/sass/**/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
