'use strict';

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp); // associate the module with chai
const app = require('../expressindex');
const { BOOKINGS_URL } = require('../config/CONSTS.json');

const GET_ID = '6047b03a3b46546bd06c94f8';
const UPDATE_ID = '604203175890807698472343';
const REPLACE_ID = '604203455890807698472344';
const DELETE_ID = '604645c5843a8e39f09eb134';

describe('Bookings Routes', () => {

    it(`Test /getAll route`, (done) => {
        chai.request(app)
            .get(`${BOOKINGS_URL}/getAll`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.not.be.null;
                res.body.map((item) => expect(item).to.contain.key(`_id`));
                res.body.map((item) => expect(item).to.be.an(`object`));
                res.body.map((item) => expect(item._id).to.be.a(`string`));
                done();
            });
    });

    it(`Test /get route`, (done) => {
        chai.request(app)
            .get(`${BOOKINGS_URL}/get/${GET_ID}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.not.be.null;
                expect(res.body).to.contain.key(`_id`);
                expect(res.body).to.be.an(`object`);
                expect(res.body._id).to.be.a(`string`);
                done();
            });
    });

    it(`Test /create route`, (done) => {
        const body = {
            name: "Jim",
            movie_title: "Avengers: Endgame",
            poster: "https://theposterdb.com/api/assets/38864/view?",
            screening: "Tue, 16 Mar 2021 13:30:00 GMT",
            deluxe: false,
            nofseats: 2,
            adult: 1,
            child: 1,
            concessions: [],
            total: 14,
            paymentsuccess: false
        };

        chai.request(app)
            .post(`${BOOKINGS_URL}/create`)
            .send(body)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(201);
                expect(res.body).to.have.property(`name`, `Jim`);
                expect(res.body).to.have.property(`paymentsuccess`, false);
                done();
            });
    });

    it(`Test /update route`, (done) => {
        chai.request(app)
            .patch(`${BOOKINGS_URL}/update/${UPDATE_ID}`)
            .send({ paymentsuccess: true })
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(202);
                expect(res.body).to.have.property(`paymentsuccess`, true);
                done();
            });
    });

    it(`Test /delete route`, (done) => {
        chai.request(app)
            .delete(`${BOOKINGS_URL}/delete/${DELETE_ID}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(204);
                done();
            });
    });

    it(`Test /replace route`, (done) => {
        const body = {
            name: "replace_success",
            movie_title: "Narnia",
            poster: "http://poster.com",
            screening: "Tue, 16 Mar 2021 13:30:00 GMT",
            deluxe: true,
            nofseats: 3,
            adult: 1,
            child: 2,
            concessions: [],
            total: 20,
            paymentsuccess: true
        };

        chai.request(app)
            .put(`${BOOKINGS_URL}/replace/${REPLACE_ID}`)
            .send(body)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(202);
                expect(res.body).to.have.property(`_id`, `${REPLACE_ID}`);
                expect(res.body).to.have.property(`name`, `replace_success`);
                expect(res.body).to.have.property(`poster`, `http://poster.com`);
                expect(res.body).to.have.property(`total`, 20);
                done();
            });
    });

    after(() => {
        app.close();
    });
});