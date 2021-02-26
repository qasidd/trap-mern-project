//import router 
const router = require('express').Router();

const { booking } = require("../config/db")



//requeste e.g. CRUD

router.get("/getAll", (req, res, next) => {
    booking.find((err, booking) => {
        if (err) { next(err) } else { res.send(booking) }
    })
});
router.get("/get/:id", (req, res, next) => {
    booking.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})


router.post("/create", (req, res, next) => {
    const Order = new booking(req.body);
    Order.save().then((booking) => {
            res.status(201).send(`${booking.name} has been added successfully!`)
        })
        .catch((err) => next(err));

});

router.delete("/delete/:id", (res, req, next) => {
    booking.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.statusCode(204).send('succesfully deleted')


    })
});

router.patch("/update/:id", (req, res, next) => {
    booking.findByIdAndUpdate(req, params.id,
        req.body,
        { new: true },
        (err, result) => {
            if (err) { next(err); }
            res.status(202).send('Succesfully Updated')


        })
});
//update whole document
//  REPLACE
router.put("/replace/:id", (req, res, next) => {
    const { name ,
        movie_title,
        screening,
        nofseats,
        adult,
        child,
        concession
    } = req.body;
    booking.findByIdAndUpdate(req.params.id, {
        name ,
        movie_title,
        screening,
        nofseats,
        adult,
        child,
        concession
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;