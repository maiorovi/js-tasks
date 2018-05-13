module.exports = function LinkedList() {

    let Node = function Node(value) {
        this.value = value;
        this.next = null;

        this.toString = function () {
            return "( " + value + " )";
        }
    };

    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element), current;

        if (head === null) {
            head = node
        } else {
            current = head;

            while (current.next) {
                current = current.next
            }

            current.next = node
        }
        length++;
    };

    this.get = function get(position) {
        if (position >= this.size() || position < 0) {
            return null;
        }

        let i = 0;
        let current = head;

        while (i < position) {
            current = current.next;
            i++;
        }

        return current.value;
    };

    this.insert = function (position, element) {
        var p = 0;
        var current = head;
        while(p < position - 1) {
            current = current.next;
            p++;
        }

        let n = new Node(element);

        n.next = current.next;
        current.next = n;
    };

    this.removeAt = function (position) {
        let p = 0;
        let current = head;
        let prev = null;

        while(p < position) {
            prev = current;
            current = current.next;
             p++;
        }


        prev.next = current.next;
    };

    this.remove = function (element) {
        let prev = null;
        let current = head;

        while(current != null ) {
            if (current.value === element)  {
                prev.next = current.next; break;
            }
            prev = current;
            current = current.next;
        }
    };

    this.indexOf = function (element) {
        var current = head;
        var ind = 0;

        while (current != null) {
            if (element === current.value) {
                return ind;
            }

            ind++;
            current = current.next;
        }

        return -1
    };

    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.toString = function () {
        var current = head;
        var delimiter = " ---> ";
        var buffer = "";

        while (true) {
            buffer += current.toString();
            if (current.next == null) {
                break;
            }

            buffer += delimiter;
            current = current.next;
        }

        return buffer
    };

    this.print = function () {
        return toString();
    };
}