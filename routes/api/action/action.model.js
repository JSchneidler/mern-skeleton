const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actionSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    name: String,
    params: [{
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        command: String,
        created: Date,
        updated: Date,
    }],
    created: Date,
    updated: Date,
});
// hook that's automatically called before action.save() is called
actionSchema.pre('save', function(next) {
	// useful for testing purposes
	// need to find better way to check whether this._id has been set
	// due to lint warning 'Comparison this._id == null may cause unexpected type coercion'
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    // timestamp stuff
    this.updated = Date.now();
    for(let i = this.params.length; i--;) this.params[i].updated = Date.now();
    next();
});
// exports.Action used fix webstorm mongoose linting issue
module.exports.Action = mongoose.model('Action', actionSchema);
