//import router 
const router = require('express').Router();

const { booking } = require("../config/db")

//requests e.g. CRUD

router.get("/getAll", (req, res, next) => {
    booking.find((err, booking) => {
        if (err) { next(err) } else { res.send(booking) }
    })
});

router.get("/get/:id", (req, res, next) => {
    booking.findById(req.params.id, (err, result) => {
        if (err) { next(err) } else { res.status(200).send(result) }
    })
})

router.post("/create", (req, res, next) => {
    const Order = new booking(req.body);
    Order.save()
        .then((booking) => {
            res.status(201).send(booking);
        })
        .catch((err) => next(err));
});

router.delete("/delete/:id", (req, res, next) => {
    booking.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.status(204).send('Succesfully deleted')
    })
});

router.patch("/update/:id", (req, res, next) => {
    booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, result) => {
            if (err) { next(err) } else { res.status(202).send(result) };
        })
});

router.put("/replace/:id", (req, res, next) => {
    const { 
        name,
        movie_title,
        poster,
        screening,
        deluxe,
        nofseats,
        adult,
        child,
        concessions,
        total,
        paymentsuccess
    } = req.body;
    
    booking.findByIdAndUpdate(req.params.id, {
        name,
        movie_title,
        poster,
        screening,
        deluxe,
        nofseats,
        adult,
        child,
        concessions,
        total,
        paymentsuccess
    }, { new: true }, (err, result) => {
        if (err) { next(err) } else { res.status(202).send(result) }
    });
});

module.exports = router;