
const getUser = (req, res,next) => {
    res.render("users",{
        title:'User-SignUp Omicron-Chat'
    })
};

const postUser = (req, res) => {

};

const putUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = { getUser, postUser, putUser, deleteUser };
