Package.describe({
   name: 'nblazer:casperjs',
   summary: 'CasperJS end to end test integration with velocity.',
   version: '0.1.1',
   git: 'https://github.com/blazer82/meteor-casperjs.git',
   debugOnly: true
});

Npm.depends({
   glob: '4.0.6',
   xml2js: '0.4.4'
});

Package.onUse(function(api) {
   api.versionsFrom('METEOR@0.9.4');
   api.use([
      'velocity:core@0.2.14',
      'coffeescript'
   ], 'server');
   api.addFiles('nblazer:casperjs.coffee');
});

Package.onTest(function(api) {
   api.use('tinytest');
   api.use('nblazer:casperjs');
   api.addFiles('nblazer:casperjs-tests.js');
});
