function login(req, res){
    res.render('views/login');
}

module.exports = {
    login: login,
    register: this.register,
}