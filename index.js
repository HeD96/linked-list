class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    #head;
    #tail;
    constructor() {
        this.#head = null;
        this.#tail = null;
    }

    getHead() {
        return this.#head;
    }
    getTail() {
        return this.#tail;
    }
    getSize() {
        if (this.#head === null) {
            return "Nothing here!";
        }

        let count = 0;
        let node = this.#head;
        while (node) {
            node = node.nextNode;
            count++;
        }
        return `size: ${count}`;
    }
    append(value) {
        const node = new Node(value);

        if (this.#tail) {
            this.#tail.nextNode = node;
        }

        if (!this.#head) {
            this.#head = node;
        }

        this.#tail = node;

        linkedList.toString();

        return this;
    }
    prepend(value) {
        const node = new Node(value, this.#head);

        this.#head = node;

        if (!this.#tail) {
            this.#tail = node;
        }

        linkedList.toString();

        return this;
    }
    insertAt(value, index) {
        const node = new Node(value);
        let currentNode = this.#head;

        for (let i = 1; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
            console.log(currentNode);
        }
        node.nextNode = currentNode.nextNode;
        currentNode.nextNode = node;
        linkedList.toString();
    }
    removeAt(index) {
        let currentNode = this.#head;

        for (let i = 1; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
            console.log(currentNode);
        }
        currentNode.nextNode = currentNode.nextNode.nextNode;
        linkedList.toString();
    }
    at(index) {
        let counter = 1;
        let currentNode = this.#head;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
            counter++;
        }
    }
    pop() {
        let currentNode = this.#head;

        while (currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;

        this.#tail = currentNode;

        linkedList.toString();
    }
    contains(value) {
        let currentNode = this.#head;
        while (currentNode) {
            if (currentNode.value === value) return "Got it";
            currentNode = currentNode.nextNode;
        }
        return "Don't have it";
    }
    find(value) {
        let index = 1;
        let currentNode = this.#head;
        while (currentNode) {
            if (currentNode.value === value) return `index: ${index}`;
            index++;
            currentNode = currentNode.nextNode;
        }
        return "Don't have it";
    }
    toString() {
        let currentNode = this.#head;
        let stringOutput = ``;

        while (currentNode) {
            stringOutput += `( ${currentNode.value} ) => `;
            currentNode = currentNode.nextNode;

            if (currentNode === null) {
                stringOutput += `null`;
            }
        }
        console.log(stringOutput);
    }
}

let linkedList = new LinkedList();
linkedList.toString();
