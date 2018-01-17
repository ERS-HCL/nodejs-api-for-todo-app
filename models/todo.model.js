const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    desc: String,
    priority: String,
    isCompleted: Boolean,
    lastUpdated: Date
});

module.exports = mongoose.model('Todo', TodoSchema);