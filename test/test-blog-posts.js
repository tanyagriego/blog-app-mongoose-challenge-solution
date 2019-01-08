'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// this makes the should syntax available throughout
// this module
const should = chai.should();

const { BlogPost } = require('../models');
const { closeServer, runServer, app } = require('../server');
const { TEST_DATABASE_URL } = require('../config');

chai.use(chaiHttp);

//deletes database
function tearDowndb () {
    return new Promise ((resolve, recject) => {
        console.warn('Warning: Deleting Database');
        mongoose.connection.dropDatabase()
        .then(resolve(result))
        .catch(err => (err));
    });
}