module.exports = function (grunt) {
  var configPath = grunt.option('config') || 'django_deploy_config.json';
  var config = grunt.file.readJSON(configPath);
  var assetData = grunt.file.readJSON(config.assetManifest);
  grunt.log.write('Reading from', configPath, '...\n');
  grunt.log.write('Config is', config, '\n');
  grunt.log.write('Asset data is', assetData, '\n');
  for (var k in assetData) {
    if (assetData.hasOwnProperty(k)) {
      let newKey = k.replace('.', '_');
      assetData[newKey] = assetData[k].replace('static/', '');
      delete assetData[k];
    }
  }

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
    }
  });
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'mustache_render']);
}
