var fs = require('fs');

module.exports = { 

    JSON_APPDATA_FILE_PATH : './assets/appdata/data.json',
    JSON_CONNEXION_FILE_PATH : './assets/connexion/data.json',

    getJson(path) {
        const jsonFile = fs.readFileSync(path);
        const jsonData = JSON.parse(jsonFile);
        return jsonData;
    },
    
    replaceJson(path, obj) {
        const jsonData = JSON.stringify(obj, null, "\t");
        fs.writeFileSync(path, jsonData);
    }
    
    

}