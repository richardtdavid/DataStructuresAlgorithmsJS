/* PriorityQueue */

class PriorityQueue{
    constructor(){
        this.collection = [];
    }

    printCollection(){
        console.log(this.collection);
    }

    enqueue(element){
        if(this.isEmpty()){
            this.collection.push(element);
        }else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                    // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push(element);
            }
        }
    }

    dequeue(){
        let value = this.collection.shift();
        return vlaue[0];
    }

    front(){
        return this.collection[0];
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return (this.collection.length === 0);
    }
}