const mongoose = require('mongoose');
const trips = require('../controllers/trips');
// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;

const travel = async function (req, res, next) {
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) {
                    message = "No trips exist in our database!";
                }
            }
            res.render("travel", { title: "Travlr Getaways", trips: json, message });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    travel,
};
