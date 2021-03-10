'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../expressindex');


it(`Test forum/getAll route`, (done) => {
    // request is to http://localhost:5019/product/getAll
    chai.request('http://localhost:5019/')
    .get(`forum/getAll`)
    .end((err,res) => {
        if(err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.not.be.null;
        res.body.map((item) => expect(item).to.contain.key("_id"));
        res.body.map((item) => expect(item).to.be.a('object'));
        res.body.map((item) => expect(item._id).to.be.a('string'));
        done();
    });
});
it(`Test forum/get/:id route`, (done) => {
    // request is to http://localhost:5019/film/get/:id"
    chai.request('http://localhost:5019/')
    .get(`forum/get/603e2f4fc2b09152e0264d09`)
    .end((err,res) => {
        if(err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.not.be.null;
        expect(res.body).to.contain.key("_id");
        expect(res.body).to.be.a('object');
        expect(res.body._id).to.be.a('string');
        done();
    });
});
it(`Test forum/create route`, (done) => {
    // request is to http://localhost:5019/product/create
    chai.request('http://localhost:5019/')
    .post(`forum/create`)
    .send({"username":"JSkizzy",
        "movietitle" : "The WaterBoy",
        "comment" :"The film was great",
        "rating":7,
        "created" : "2020-03-01" })
        .end((err, response) => {
        if(err) done(err); 
        expect(err).to.be.null;
        expect(response).to.not.be.undefined;
        expect(response).to.have.status(201);
        expect(response).to.have.property('text', 'JSkizzy post has been added successfully!');
        done();
    });
});
it(`Test forum/delete/:id route`, (done) => {
    // request is to http://localhost:5019/film/delete/:id"
    chai.request('http://localhost:5019/')
    .delete(`forum/delete/604786072a5951741835af9a`)
    .end((err,res) => {
        if(err) done(err);
        expect(res).to.have.status(204);
        done();
    });
});
it(`Test forum/update/:id route`, (done) => {
    // request is to http://localhost:5019/film/update/:id"
    chai.request('http://localhost:5019/')
    .patch(`forum/update/6048faa44a3e846cd04d67ab`)
    .send({"username":"JSkizzy",
    "movietitle" : "The WaterBoy",
    "comment" :"The film was great",
    "rating":7,
    "created" : "2020-03-01" })
    .end((err,res) => {
        if(err) done(err);
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(202);
        expect(res).to.have.property('text', 'Succesfully Updated');
        done();
    });
});
it(`Test forum/replace/:id route`, (done) => {
    // request is to http://localhost:5019/film/update/:id"
    chai.request('http://localhost:5019/')
    .put(`forum/replace/6048faa44a3e846cd04d67ab`)
    .send({"username":"JSkizzy",
    "movietitle" : "The WaterBoy",
    "comment" :"The film was great",
    "rating":7,
    "created" : "2020-03-01" })
    .end((err,res) => {
        if(err) done(err);
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(202);
        expect(res).to.have.property('text', 'Successfully replaced!');
        done();
    });
});