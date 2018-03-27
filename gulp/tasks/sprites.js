var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// e` necessario che prima di creare una nuova sprite di icone la vecchia eventuale sia eliminata
//cancello la eventuale Sprite folder presente

gulp.task('beginClean', function() {
//del() accetta un array di cartelle da cancellare
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

//non vogliamo che createSprote inizi finche BeginClean non ha finito
gulp.task('createSprite',['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

//quando e finito tutto vogliamo cancellare la cartella temp
gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean','createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);