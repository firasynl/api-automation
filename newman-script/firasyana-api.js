const newman = require("newman")

newman.run({
    collection: "json-collection/firasyana.postman_collection.json",
    // environment: "json-env/",
    reporters: ["cli", "htmlextra"]
})
