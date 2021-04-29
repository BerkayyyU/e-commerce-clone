import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true}
}, {
    timestamps: true // While mongoose creating user in the DB add 2 fields next to these 4 fields which are createdadd and updatedadd 
});

const User = mongoose.model("User", userSchema);
export default User;