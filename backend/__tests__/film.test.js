'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../expressindex');

it(`Test film/getAll route`, (done) => {
    // request is to http://localhost:5019/product/getAll
    chai.request('http://localhost:5019/')
    .get(`film/getAll`)
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

it(`Test film/get/:id route`, (done) => {
    // request is to http://localhost:5019/film/get/:id"
    chai.request('http://localhost:5019/')
    .get(`film/get/603d01442a64a255b0d4f749`)
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
it(`Test film/getAll/nowShowing route`, (done) => {
    // request is to http://localhost:5019/film/getAll/nowShowing
    chai.request('http://localhost:5019/')
    .get(`film/getAll/nowShowing`)
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
it(`Test film/getAll/upcoming route`, (done) => {
    // request is to http://localhost:5019/film/getAll/upcoming
    chai.request('http://localhost:5019/')
    .get(`film/getAll/upcoming`)
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
it(`Test film/create route`, (done) => {
    // request is to http://localhost:5019/product/create
    chai.request('http://localhost:5019/')
    .post(`film/create`)
    .send({"screenings":["2021-03-15T11:00:00.000Z","2021-03-15T14:30:00.000Z","2021-03-15T17:00:00.000Z","2021-03-16T11:00:00.000Z",
    "2021-03-16T14:30:00.000Z","2021-03-16T17:00:00.000Z","2021-03-17T11:00:00.000Z","2021-03-17T14:30:00.000Z","2021-03-17T17:00:00.000Z"]
    ,"title":"Spiderman Far from Home","releasedate":"2020-03-01","runtime":125,"genre":"Superhero","poster":"https://image.tmdb.org/t/p/original//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "trailer":"https://www.youtube.com/embed/Nt9L1jCKGnE","classification":"12A","director":"Jon Watts",
    "cast":"Tom Holland, Zendaya, Jake Gyllenhaal",
    "desc":"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."})
    .end((err, response) => {
        if(err) done(err); 
        expect(err).to.be.null;
        expect(response).to.not.be.undefined;
        expect(response).to.have.status(201);
        expect(response).to.have.property('text', 'Spiderman Far from Home has been added successfully!');
        done();
    });
});
it(`Test film/delete/:id route`, (done) => {
    // request is to http://localhost:5019/film/delete/:id"
    chai.request('http://localhost:5019/')
    .delete(`film/delete/603d017007eb681514532735`)
    .end((err,res) => {
        if(err) done(err);
        expect(res).to.have.status(204);
        done();
    });
});
it(`Test film/update/:id route`, (done) => {
    // request is to http://localhost:5019/film/update/:id"
    chai.request('http://localhost:5019/')
    .patch(`film/update/603d01442a64a255b0d4f749`)
    .send({"screenings":["2021-03-15T11:00:00.000Z","2021-03-15T14:30:00.000Z","2021-03-15T17:00:00.000Z","2021-03-16T11:00:00.000Z",
    "2021-03-16T14:30:00.000Z","2021-03-16T17:00:00.000Z","2021-03-17T11:00:00.000Z","2021-03-17T14:30:00.000Z","2021-03-17T17:00:00.000Z"]
    ,"title":"Spiderman Far from Home","releasedate":"2020-03-01","runtime":125,"genre":"Superhero","poster":"https://image.tmdb.org/t/p/original//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "trailer":"https://www.youtube.com/embed/Nt9L1jCKGnE","classification":"12A","director":"Jon Watts",
    "cast":"Tom Holland, Zendaya, Jake Gyllenhaal",
    "desc":"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."})
    .end((err,res) => {
        if(err) done(err);
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(202);
        expect(res).to.have.property('text', 'Succesfully Updated');
        done();
    });
});
it(`Test film/replace/:id route`, (done) => {
    // request is to http://localhost:5019/film/update/:id"
    chai.request('http://localhost:5019/')
    .put(`film/replace/603d01442a64a255b0d4f749`)
    .send({"screenings":["2021-03-15T11:00:00.000Z","2021-03-15T14:30:00.000Z","2021-03-15T17:00:00.000Z","2021-03-16T11:00:00.000Z",
    "2021-03-16T14:30:00.000Z","2021-03-16T17:00:00.000Z","2021-03-17T11:00:00.000Z","2021-03-17T14:30:00.000Z","2021-03-17T17:00:00.000Z"]
    ,"title":"Spiderman Far from Home","releasedate":"2020-03-01","runtime":125,"genre":"Superhero","poster":"https://image.tmdb.org/t/p/original//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "trailer":"https://www.youtube.com/embed/Nt9L1jCKGnE","classification":"12A","director":"Jon Watts",
    "cast":"Tom Holland, Zendaya, Jake Gyllenhaal",
    "desc":"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."})
    .end((err,res) => {
        if(err) done(err);
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(202);
        expect(res).to.have.property('text', 'Successfully replaced!');
        done();
    });
});
after( () => {
    app.close();
});

