const isLogin = (req, res, next) => {
    const isLogin = true;

    if (isLogin) {
        next();
    } else {
        res.send('Error');
        res.end();
    }
}

module.exports = isLogin;