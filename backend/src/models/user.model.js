import mongoose  from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true,
        select: false // Do not return password in queries
    },
    avatar:{
        type:String,
        required:false,

    }

})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Compare the provided password with the hashed password
};


userSchema.set('toJSON', {
    transform: function (doc, ret) {
        ret.id = ret._id; // Add id field
        delete ret._id; // Remove _id field
        delete ret.password; // Remove password field
        delete ret.__v; // Remove version field
        return ret;
    }})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // Hash the password before saving

    next();
});
const User = mongoose.model("User", userSchema);


export default User;
