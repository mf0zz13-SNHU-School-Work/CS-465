const { rooms } = require("../routes/room");

/* GET room view */
const room = (req, res) => {
    res.render('room', { title: 'Travlr Getaways' });
};

module.exports = {
    room
};