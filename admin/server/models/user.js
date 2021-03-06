var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    getUsers: function (callback) {
        sql = "select * from user";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    getTableCount:function (callback) {
        sql='select count(1) count from user';
        mysqlDB.getTableAllInfo({sql:sql},callback);
    },
    getUserpage: function (p,limit,callback) {
        sql = "select * from user limit "+p+","+limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    updateUsers: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    deleteUsers: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    },
    addUsers: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
};
