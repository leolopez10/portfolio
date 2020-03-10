const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bycrypt = require("bcryptjs");
var SALT_WORK_FACTOR = 12;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre("save", function(next){
    //console.log(this);
    if(this.isModified("password")){
        //Encrypt their password
        return bcrypt.genSalt(SALT_WORK_FACTOR).then(salt => {
            return bcrypt.hash(this.password, salt).then(hash => {
                //console.log(hash)
                this.password = hash;
            })
        }).catch(err => {
            console.log("ERROR", err);
        })
    } else{
        return Promise.resolve();
    }
})

UserSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
