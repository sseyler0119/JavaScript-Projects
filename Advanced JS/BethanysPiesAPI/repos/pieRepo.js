let fs = require('fs'); // fs is a built-in node module that can read/write files
const { search } = require('../../../../../CS Courses/JS/javascript-rest-apis-getting-started/03/demos/Demo/repos/pieRepo');
const FILE_NAME = './assets/pies.json';

let pieRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                // grab and parse the data
                resolve(JSON.parse(data));
            }
        });
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                // find pie with matching id
                let pie = JSON.parse(data).find(p => p.id == id);
                resolve(pie);
            }
        });
    },
    search: function(searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data) {
            if(err) {
                reject(err);
            }
            else {
                let pies = JSON.parse(data);
                // perform search
                if(searchObject) {
                    // example search object
                  //  let searchObject = {
                    //    "id": 1,
                     //   "name": 'A',
                    //};
                    pies = pies.filter(
                        p => (searchObject.id ? p.id == searchObject.id : true) &&
                        (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0: true));
                }
                resolve(pies);
            }
        });
    }
};

module.exports = pieRepo; 