const bcrypt = require('bcrypt');

async function hash(password) {
    const result;
    try {
        const salt = await bcrypt.genSalt(10);
        result = await bcrypt.hash(user.password, salt);
    }
    catch {
        result = 0;
    }
    finally {
        return result;
    }
}

module.exports = hash;