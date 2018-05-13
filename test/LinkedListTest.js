var assert = require('assert');
var LinkedList = require('../js-datastructures-book/LinkedList');


describe('LinkedList', function() {
   describe('append', function() {
      it('append new element to an empty linked list', function() {
          let linkedList = new LinkedList();
          linkedList.append(10)

          assert.equal(linkedList.get(0), 10)
      });

       it('append new element to an not empty linked list', function() {
           let linkedList = new LinkedList();
           linkedList.append(10);
           linkedList.append(15);
           linkedList.append(20);
           linkedList.append(25);

           assert.equal(linkedList.get(3), 25)
       });
   });

   describe('get', function() {
      it('get returns value at any position of linked list', function() {
          let linkedList = new LinkedList();
          linkedList.append(10);
          linkedList.append(15);
          linkedList.append(20);
          linkedList.append(25);
          linkedList.append(30);

          assert.equal(linkedList.get(4), 30)
      });

      it('get returns null when index is higher then length', function() {
          let linkedList = new LinkedList();
          linkedList.append(10);

          assert.equal(linkedList.get(1), null)
      });

       it('get returns null when index is lower then zero then length', function() {
           let linkedList = new LinkedList();
           linkedList.append(10);

           assert.equal(linkedList.get(-1), null)
       });
   });

   describe('toString', function() {
        it('prints linked list representation (x) ---> (y)', function() {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);

            assert.equal(linkedList.toString(), '( 10 ) ---> ( 15 ) ---> ( 20 )')
        });
    });

    describe('indexOf', function() {
        it('indexOf returns index of first occurence of element', function() {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);

            assert.equal(linkedList.indexOf(20), 2)
        });

        it('indexOf returns -1 if elemnet not found', function() {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);

            assert.equal(linkedList.indexOf(25), -1)
        });
    });

    describe('insert', function() {
        it('indexOf returns index of first occurence of element', function () {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);
            linkedList.append(25);
            linkedList.insert(2, 43);

            assert.equal(linkedList.get(2), 43)
        });
    });

    describe('remove', function() {
        it('remove element by its value', function () {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);
            linkedList.append(25);
            linkedList.insert(2, 43);
            linkedList.remove(20);
            assert.equal(linkedList.toString(), "( 10 ) ---> ( 15 ) ---> ( 43 ) ---> ( 25 )")
        });
    });

    describe('removeAt', function() {
        it('removes element  by its index', function () {
            let linkedList = new LinkedList();
            linkedList.append(10);
            linkedList.append(15);
            linkedList.append(20);
            linkedList.append(25);
            linkedList.removeAt(2);
            assert.equal(linkedList.toString(), "( 10 ) ---> ( 15 ) ---> ( 25 )")
        });
    });
});