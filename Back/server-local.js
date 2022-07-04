
const app = require("./express/server.js")
app.listen(process.env.PORT || 5000, () => console.log("Server started..."))