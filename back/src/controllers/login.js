const users = require('../utils/users');

function login(req, res) {
    const { email, password } = req.query;

    const findUser = users.find((user) => user.email === email);

    if (findUser) {
        if (findUser.password === password) {
            res
                .status(200)
                .json({ access: true });
        } else {
            res
                .status(200)
                .json({ access: false });
        }
    }
    else {
        res
            .status(200)
            .json({ access: false });
    }

}

module.exports = login;