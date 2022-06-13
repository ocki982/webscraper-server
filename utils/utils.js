const fs = require("fs");

// Function Reads taxList.json data for [GET Requests]
function readList() {
    const listData = fs.readFileSync("./data/taxList.json");
    const parsedListData = JSON.parse(listData);
    return parsedListData;
}

module.exports = { readList };