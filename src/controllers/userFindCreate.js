const { User } = require("../database");

module.exports = async(fullName, email, password) => {   
    const isUser = await User.findOne({ where: { email } }); 

    if(!isUser){
        const userType = "user";
        const user = await User.create({fullName, userType, email, password});

        return user;
    }

    return isUser;
};