import jtw from "jsonwebtoken";

export const generateToken = (user) => {
    return jtw.sign(
        {
            _id: user._id, 
            name: user.name, 
            email: user.email, 
            isAdmin: user.isAdmin
        }, 
        process.env.JTW_SECRET || "somethingsecret", 
        {
        expiresIn: "30d",
        }
    ); 
};