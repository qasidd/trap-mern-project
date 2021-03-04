const router = require('express').Router();

const { forum } = require("../config/db")



//requeste e.g. CRUD

router.get("/getAll", (req, res, next) => {
    forum.find((err, forum) => {
        if (err) { next(err) } else { res.send(forum) }
    })
});
router.get("/get/:id", (req, res, next) => {
    forum.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})


router.post("/create", (req, res, next) => {
    const Message = new forum(req.body);
    Message.save().then((forum) => {
            res.status(201).send(`${forum.username} post has been added successfully!`)
        })
        .catch((err) => next(err));

});

router.delete("/delete/:id", (res, req, next) => {
    forum.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.statusCode(204).send('succesfully deleted')


    })
});

router.patch("/update/:id", (req, res, next) => {
    forum.findByIdAndUpdate(req, params.id,
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
    const { username,
        movietitle,
        comment,
        rating,
        created
    } = req.body;
    booking.findByIdAndUpdate(req.params.id, {
        username,
movietitle,
comment,
rating,
created
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;