const User = require("../models/User");
const bcrypt = require("bcrypt");
const joi = require("../config/joi");

class UsersService {
    static async searchUsers(user) {
        try {
            
            const resp = await User.find({ _id: {$ne: user._id} }).select({ password: 0 });

            return { error: false, data: resp };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async findUserByName(user, name) {
        try {
            const resp = await User.findOne({$and: [{name: name}, {_id: {$ne: user._id}}] }).select({ password: 0 });

            if (resp.length === 0) return { error: true, data: "User not fund" };

            return { error: false, data: resp };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async updateUser(id, body) {
        try {
            const { error, value } = joi.validate({ password: body.password, name: body.name });

            if (!error) {
                const user = await User.findOneAndUpdate(
                    { _id: id },
                    {
                        $set: {
                            name: body.name,
                            password: body.password && bcrypt.hashSync(body.password, 10),
                        },
                    },
                    { new: true }
                ).select({ password: 0 });
    
                return { error: false, data: user };
            }

            return { error: true, data: error };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async disableUser(id) {
        try {
            const user = await User.findOneAndUpdate({ _id: id }, { $set: { state: false } }, { new: true }).select({
                password: 0,
            });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = UsersService;
