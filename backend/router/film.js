//import router 
const router = require('express').Router();

const { film } = require("../config/db")


//requeste e.g. CRUD

router.get("/getAll", (req, res, next) => {
    film.find((err, film) => {
        if (err) { next(err) } else { res.send(film) }
    })
});
router.get("/get/:id", (req, res, next) => {
    film.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})


router.post("/create", (req, res, next) => {
    const Movie = new film(req.body);
    Movie.save().then((film) => {
            res.status(201).send(`${film.title} has been added successfully!`)
        })
        .catch((err) => next(err));

});

router.delete("/delete/:id", (res, req, next) => {
    film.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.statusCode(204).send('succesfully deleted')


    })
});

router.patch("/update/:id", (req, res, next) => {
    film.findByIdAndUpdate(req, params.id,
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
    const {  title,
        releasedate,
        runtime,
        genre,
        poster,
        trailer,
        classification,
        director,
        cast
    } = req.body;
    booking.findByIdAndUpdate(req.params.id, {
        title,
        releasedate,
        runtime,
        genre,
        poster,
        trailer,
        classification,
        director,
        cast
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;
