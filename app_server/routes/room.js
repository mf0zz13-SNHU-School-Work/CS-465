var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/*GET rooms page. */
const room = (req, res) => {
    res.render('room', { title: 'Travlr Getaways', rooms:trips, selectedRooms: true });
};

module.exports = {
    room
};
