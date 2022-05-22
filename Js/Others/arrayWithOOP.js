class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    getAllItems() {
      return this.data;
    }

    pushItem(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    popItem() {
      delete this.data[this.length - 1];
      this.length--;
      return this.data;
    }

    deleteItem(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return this.data;
    }

    shiftItems(index) {
      for(let i = index; i < this.length; i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
}

const newArray = new MyArray();

console.log('After Pushing Item', newArray.pushItem('Hello'));

console.log('After Pushing Item', newArray.pushItem('World'));

console.log('All Items', newArray.getAllItems());

// console.log('After Pop Item All Items', newArray.popItem());

console.log('After Removing 1 Item', newArray.deleteItem(0));