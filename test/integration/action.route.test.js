const config = require('config');
const request = require('supertest');
const app = require('../../app');
require('chai').should();

describe('Action Route', function() {
    it('Create Action One', function(done) {
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('actionOne'),
                name: 'actionOne',
                params: [{user: config.get('userOne'), command: 'Hello World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.get('userOne'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Create Action Two', function(done) {
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('actionTwo'),
                name: 'actionTwo',
                params: [{user: config.get('userTwo'), command: 'Hello World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.get('userTwo'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Create Action Three', function(done) {
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('actionThree'),
                name: 'actionThree',
                params: [{user: config.get('userThree'), command: 'Hello World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.get('userThree'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action One', function(done) {
        request(app.listen())
            .get('/api/actions/' + config.get('actionOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.get('userOne'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action Two', function(done) {
        request(app.listen())
            .get('/api/actions/' + config.get('actionTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.get('userTwo'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action Three', function(done) {
        request(app.listen())
            .get('/api/actions/' + config.get('actionThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.get('userThree'));
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('List All Actions', function(done) {
        request(app.listen())
            .get('/api/actions')
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.length.should.equal(3);
                done();
            });
    });

    it('Update Action One', function(done) {
        request(app.listen())
            .put('/api/actions/' + config.get('actionOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.get('userOne'), command: 'Goodbye World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.get('userOne'));
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.get('userOne'));
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });

    it('Update Action Two', function(done) {
        request(app.listen())
            .put('/api/actions/' + config.get('actionTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.get('userTwo'), command: 'Goodbye World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.get('userTwo'));
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.get('userTwo'));
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });

    it('Update Action Three', function(done) {
        request(app.listen())
            .put('/api/actions/' + config.get('actionThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            // .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.get('userThree'), command: 'Goodbye World'}],
            })
            .expect(200)
            .then(function(response) {
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.get('userThree'));
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.get('userThree'));
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });
});
