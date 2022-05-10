const jsonService = require('./json.js')

function recursivelyUpdate(obj, dict) {

    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                obj[property] = recursivelyUpdate(obj[property], dict);
            } else if (property == "editableId") {
                let id = obj['editableId']
                obj = dict[id];
            }
        }
    }

    return obj;
}

module.exports = { 
    getPageData(pageId) {
        const jsonData = jsonService.getJson(jsonService.JSON_APPDATA_FILE_PATH);
        if (!(pageId in jsonData.readonly.pages))
            return "Page not found: " + pageId;

        return {
            page : recursivelyUpdate(
                jsonData.readonly.pages[pageId], 
                jsonData.editable
            ),
            header : recursivelyUpdate(
                jsonData.readonly.header, 
                jsonData.editable
            )
        };    
    },

    updatePageData(stringId, langId, value) {
        
        const jsonData = jsonService.getJson(jsonService.JSON_APPDATA_FILE_PATH);
        let updated = false;

        for (let el of jsonData.editable) {
            if (el["id"] == stringId) {
                el[langId] = value;
                updated = true;
                break;
            }
        }
        
        if (updated)
            jsonService.replaceJson(jsonService.JSON_APPDATA_FILE_PATH, jsonData);

        return updated;
    }
};