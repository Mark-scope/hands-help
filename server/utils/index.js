import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//Hash string
export const hashString = async (string) => {
    const salt = await bcrypt.genSalt(10);//Created Salt

    const hashString = await bcrypt.hash(string, salt);
    return hashString;
};


//Compare String
export const compareString = async (userPassword, DBpassword) => {
    const isMatch = await bcrypt.compare(userPassword, DBpassword);
    return isMatch;
};

//CREATE JSON WEBTOKEN - used to share information between client and server.
//They contain JSON objects which have the information that needs to be shared
export function createJWT(id){
    return JWT.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
    })
}

