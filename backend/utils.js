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

export const isAuth = (req, res, next) => { // User authentication
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length); // Bearer XXXXX=token, so only returns token part
        jtw.verify(token, process.env.JTW_SECRET || 'somethingsecret', (err, decode)=> { // jtw.verify returns the data from the above if user exists
            if(err){
                res.status(401).send({message: 'Geçersiz giriş!'})
            }else{
                req.user = decode; // decode is the information about the user
                next();
            }
        })
    }else{ //if authorization doesn't exist
        res.status(401).send({message: 'Giriş Yok!'})
    }
};