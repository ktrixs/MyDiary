const sinon = require('sinon');
const should = require('should');
const createEntry = require('../controllers/entryController');

describe('Diary Controller Tests:', () => {
    describe('Post', () => {
        it('should not allow an empty title on post', () => {
            const diary = () => { this.push = () => {}};

            const req = {
                body: {
                    content: 'We love you'
                }
            };

            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            }

            const createEn = createEntry();
            createEn.post(req, res);
            res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});