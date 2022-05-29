class MyHashmap {
    constructor(size) {
        this.data = new Array(size);
    }

    //O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    //O(1)
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    //O(1)
    get(key) {
        let address = this._hash(key);
        const currentAddress = this.data[address];
        if (currentAddress) {
            for (let i = 0; i < currentAddress.length; i++) {
                if (currentAddress[i][0] === key) {
                    return currentAddress[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArr.push(this.data[i][0][0]);
            }
        }
        return keysArr;
    }

}

const hashMap1 = new MyHashmap(3);
// console.log(hashMap1._hash("Hello"));
console.log(hashMap1.set("Mangoes", 500));
console.log(hashMap1.set("Oranges", 600));
console.log(hashMap1.get('Mangoes'));
console.log(hashMap1.keys());