const newman = require('newman');

newman.run({
      //collection: require('./collection/collection.json'),
      collection: 'https://api.postman.com/collections/37925462-485f8f18-e305-4341-a22b-dd7d5c74294b?access_key=PMAT-01J74A0E9KH1FNR3C1QVD8GEBA',
      //environment:require('./collection/env.json'),
      reporters: 'htmlextra',
      iterationCount: 1,
      reporter: {
        htmlextra: {
            export:'./Reports/report.html', // if not specified, the file will be written to 'newman/'
        }
      }
}, function (err){
    if (err) {throw err;}
    console.log('collection run complet!');
});