const jsonService = require('./json.js')
const { sha256 } = require("js-sha256");

function generateToken() {
    return sha256(Math.random().toString(36).substring(2));
}

function generateTokenKey() {
    return {
        token: generateToken(),
        time: new Date().getMilliseconds() + 3600000 // + 1 heure
    }
}

function isTokenValid({ time }) {
    return new Date().getMilliseconds() < time;
}

module.exports = {
    tryLogin(user, password) {

        // Get data
        const jsonData = jsonService.getJson(jsonService.JSON_CONNEXION_FILE_PATH);

        if (sha256(user) == jsonData.readonly.user && sha256(password) == jsonData.readonly.password) {

            // Generate a token key
            const tokenObject = generateTokenKey();
            const token = tokenObject.token;

            // Remove old tokens
            jsonData.editable.tokens = jsonData.editable.tokens.filter(t => isTokenValid(t));

            // Add new token
            tokenObject["token"] = sha256(tokenObject["token"]);
            jsonData.editable.tokens.push(tokenObject);
            
            // Store the token list
            jsonService.replaceJson(jsonService.JSON_CONNEXION_FILE_PATH, jsonData);

            return {
                valid: true,
                data: token
            };
        }

        return {
            valid: false,
            data: "Invalid credentials..."            
        };
    },
    tryToken(tokenToTest) {

        // Encode token
        const encodedToken = sha256(tokenToTest);

        // Get data
        const jsonData = jsonService.getJson(jsonService.JSON_CONNEXION_FILE_PATH);

        // Remove old tokens
        jsonData.editable.tokens = jsonData.editable.tokens.filter(t => isTokenValid(t));
            
        // Store the token list
        jsonService.replaceJson(jsonService.JSON_CONNEXION_FILE_PATH, jsonData);

        for (const tokenObj of jsonData.editable.tokens)
            if (encodedToken === tokenObj.token) 
                return true;

        return false;
    }
}
