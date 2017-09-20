module.exports = function (grunt) {
  const configPath = grunt.option('config') || 'django_deploy_config.json';
  const config = grunt.file.readJSON(configPath);
  let assetData = grunt.file.readJSON(config.assetManifest);

  let htmlMinFiles = {};
  htmlMinFiles[config.indexDestination] = 'indexTemp.html';
  const hbAttrWrap = /\{\{[^}]+\}\}/;

  let cleanArr = [];
  for (let k in assetData) {
    if (assetData.hasOwnProperty(k)) {
      let trimmedAsset = assetData[k].replace('static/', '');
      let assetArr = trimmedAsset.split('.');
      if (assetArr.length === 3) {
        cleanArr.push(`${config.staticDest}${assetArr[0]}.*.${assetArr[2]}`);
      } else {
        cleanArr.push(`${config.staticDest}${assetArr[0]}.*.${assetArr[2]}.${assetArr[3]}`);
      }

      cleanArr.push(`!${config.staticDest}${trimmedAsset}`);
      let newKey = k.replace('.', '_');
      assetData[newKey] = trimmedAsset;
      delete assetData[k];
    }
  }
  cleanArr.push('indexTemp.html');

  if (grunt.option('verbose')) {
    grunt.log.write('Reading from', configPath, '...\n');
    grunt.log.write('Config is', config, '\n');
    grunt.log.write('Asset data is', assetData, '\n');
    grunt.log.write('Cleaning arr:\n', cleanArr, '\n');
  }

  grunt.initConfig({
    mustache_render: {
      deploy: {
        files: [
          {
            data: assetData,
            template: config.indexTemplate,
            dest: 'indexTemp.html'
          }
        ]
      }
    },
    copy: {
      deploy: {
        expand: true,
        cwd: config.staticSrc,
        src: '**',
        dest: config.staticDest
      }
    },
    htmlmin: {
      deploy: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          ignoreCustomFragments: [hbAttrWrap],
          customAttrAssign: [hbAttrWrap],
          minifyJS: true
        },
        files: htmlMinFiles
      }
    },
    clean: {
      options: {
        force: true
      },
      deploy: cleanArr
    }
  });
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['copy', 'mustache_render', 'htmlmin', 'clean']);
}
