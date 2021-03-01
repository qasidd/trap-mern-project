//import router 
const router = require('express').Router();

const { product } = require("../config/db")



//requeste e.g. CRUD
//GetAll
router.get("/getAll", (req, res) => {
    product.find((err, product) => {
        if (err) { next(err) } else { res.send(product) }
    })
});
//GetbyID
router.get("/get/:id", (req,res,next) => {
    Product.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

//Create
router.post("/create", (req, res, next) => {
    const item = new Product(req.body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.name} has been added successfully!`)
        })
        .catch((err) => next(err));
});
//Delete
router.delete("/delete/:id", (res, req,next) => {
    product.findByIdAndDelete(req.params.id,(err) => {
    if(err){
        next(err);
    }res.statusCode(204).send('succesfully deleted')

    
})});
//Patch
router.patch("/update/:id", (req, res, next) => {
   product.findByIdAndUpdate(req,params.id,
    req.body,
    {new:true},
    (err,result) =>{
        if(err){next(err);}
    res.status(202).send('Succesfully Created')
   

})});
//update whole document
//  REPLACE
router.put("/replace/:id", (req,res,next) => {
    const {name, price, onSale} = req.query;
    Product.findByIdAndUpdate(req.params.id, {name,price,onSale}, {new: true}, (err, result)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;