const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    role: { type: String , unique: true}
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role