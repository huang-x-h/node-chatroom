/**
 * Created by huangxinghui on 2015/4/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
    content:String
});

module.exports = mongoose.model('Message', Message);