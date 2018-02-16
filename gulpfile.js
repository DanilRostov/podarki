"use strict"

// Параметры для gulp-autoprefixer
let autoprefixerList = [
		'Chrome >= 45',
	'Firefox ESR',
	'Edge >= 12',
	'Explorer >= 10',
	'iOS >= 9',
	'Safari >= 9',
	'Android >= 4.4',
	'Opera >= 30'
];

// Функция вывода ошибки
function log(error) {
	console.log([
		'',
		"----------ERROR MESSAGE START----------",
		("[" + error.name + " in " + error.plugin + "]"),
		error.message,
		"----------ERROR MESSAGE END----------",
		''
	].join('\n'));
	this.end();
}

// Инициализация Gulp плагинов 
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Сборка CSS
gulp.task('sass', () => {
	return gulp.src('./src/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: autoprefixerList
		}))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({stream: true}))
});

// Сборка CSS библиотек
gulp.task('css-libs', () => {
	return gulp.src('./src/libs/*.css')
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('./dist/libs'))
});

// Компиляци Pug в HTML
gulp.task('pug', () => {
	return gulp.src('./src/pug/*.pug')
		.pipe(pug({pretty:true}))
		.on('error', log)
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.reload({stream: true}))
})

// Сборка JS
gulp.task('scripts', function() {
	return gulp.src('./src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('index.js'))
		.pipe(uglify())
		.on('error', log)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({stream: true}))
});

// Сборка JS библиотек
gulp.task('libs', function() {
	return gulp.src('./src/libs/*.js')
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/libs'))
		.pipe(browserSync.reload({stream: true}))
});

// Сжатие изображений
gulp.task('imgmin', () => {
	return gulp.src('./src/img/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'))
		.pipe(browserSync.reload({stream: true}))
});

// Запуск сервера
gulp.task('browser-sync', () => {
	browserSync({
		server: {baseDir: 'dist'},
		notify: false
	});
});

// Задача start
gulp.task('default', ['browser-sync', 'scripts', 'libs', 'sass', 'pug', 'css-libs'], () => {
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/libs/*.js', ['libs']);
	gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch('./src/scss/*.scss', ['sass']);
	gulp.watch('./src/libs/*.css', ['css-libs']);
	// gulp.watch('./src/img/**/*.*', ['imgmin']);
});