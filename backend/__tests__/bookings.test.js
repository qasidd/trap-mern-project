'use strict';

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp); // associate the module with chai
const app = require('../expressindex');
const { BOOKINGS_URL } = require('../config/CONSTS.json');

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
            .get(`${BOOKINGS_URL}/get/6048abe90bdf4e3e88957272`)
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
            screening: "2021-03-15T13:30:00.000Z",
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

    after(() => {
        app.close();
    });
});