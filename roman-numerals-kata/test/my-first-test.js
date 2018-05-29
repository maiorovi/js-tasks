var assert = require('chai');
var sinon = require('sinon');

describe('what ever', function () {
    describe('what ever concrete', function () {
        it('first case', function () {
            let spy = sinon.spy();

            spy('Hello', 'World');

            console.log(spy.firstCall.args)
        });

        it('second case', function () {
            var user = {
                setName : function(name) {
                    this.name = name;
                }
            }

            var setNameSpy = sinon.spy(user, 'setName');

            user.setName('Dath Vader');

            console.log(setNameSpy.callCount);

            setNameSpy.restore();
        })
    });
});