const userFindCreate = require("../controllers/userFindCreate");

module.exports = async( req, res ) => {
    try {        
        const { 
            fullName,
            email,
            password,            
        } = req.body;

        const userLoginRegister = await userFindCreate(
            fullName,
            email,
            password,            
        );
        
        res.status(200).json(userLoginRegister);

    } catch (error) {
        res.status(400).json({ userLoginHandler : error.message })
    }
};