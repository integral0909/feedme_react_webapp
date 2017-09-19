module.exports = function (grunt) {
  let configPath = grunt.option('config') || 'django_deploy_config.json';
  let config = grunt.file.readJSON(configPath);
  let assetData = grunt.file.readJSON(config.assetManifest);
  let assetDataToClean = grunt.file.readJSON(config.assetManifest);
  grunt.log.write('Reading from', configPath, '...\n');
  grunt.log.write('Config is', config, '\n');
  grunt.log.write('Asset data is', assetData, '\n');

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

  grunt.log.write('Cleaning arr:\n', cleanArr, '\n');

  grunt.initConfig({
    mustache_render: {
      deploy: {
        files: [
          {
            data: assetData,
            template: config.indexTemplate,
            dest: config.indexDestination
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

  grunt.registerTask('default', ['copy', 'mustache_render', 'clean']);
}
