var tableData = require("../data/tableData");
var waitinglistData = require("../data/waitinglistData");
var waitinglistData = require("../data/waitinglistData");

module.exports = function(app) {

    app.get("/data/tables", function(req, res) {
        res.json(tableData);
      });
    
      app.get("/data/waitinglist", function(req, res) {
        res.json(waitinglistData);
      });

    app.post("/data/tables", function(req, res) {
        
        if (tableData.length < 5) {
            tableData.push(req, body);
            res.json(true);
        }
        else {
            waitinglistData.push(req, body);
            res.json(false);
        }
    });

    app.post("/data/clear", function(req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
    
        res.json({ ok: true });
      });

};