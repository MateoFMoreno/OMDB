const UsersService = require("../services/user");

class UsersController {
    static async searchUsers(req, res) {
        const { error, data } = await UsersService.searchUsers(req.user[0]);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async findUserByName(req, res) {
        const { error, data } = await UsersService.findUserByName(req.user[0], req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async updateUser(req, res) {
        const { error, data } = await UsersService.updateUser(req.params.id, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async disableUser(req, res) {
        const { error, data } = await UsersService.disableUser(req.params.id);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
}

module.exports = UsersController;
