const User = require("../models/User");
const joi = require("../config/joi")

class AuthService {
    static async createUser({ name, email, password,favorites }) {
        try {
            const {error, value} = joi.validate({name, email, password})
            if(!error){
                const user = new User({
                    name,
                    email,
                    password,
                    favorites,
                })
                const resp = await user.save();
                return { error: false, data: resp };
            }

            return {error: true, data: error}
        } catch (error) {
            return { error: true, data: error };
        }
    }
}


module.exports = AuthService;