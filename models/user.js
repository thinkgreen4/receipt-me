var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },

    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            },

            "Password should be longer."
        ]
    },

    email: {
        type: String,
        unique: true, 
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },

    userCreated: {
        type: Date,
        default: Date.now
    },

    lastUpdated: {
        type: Date
    },

    fullName: String
})

UserSchema.methods.getFullName = function() {
    this.fullName = this.firstName + " " + this.lastName;

    return this.fullName;
}

UserSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
}

var User = mongoose.model("User", UserSchema);

module.exports = User;