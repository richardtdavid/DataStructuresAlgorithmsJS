/* PriorityQueue */

class PriorityQueue{
    constructor(){
        this.collecion = [];
    }

    printCollecion(){
        console.log(this.collecion);
    }

    enqueue(element){
        if(this.isEmpty()){
            this.collecion.push(element);
        }else {
            let added = false;
            for(let i = 0; i < this.collecion.length; i++){
                if(element[1] < this.collecion[i][1]){
                    // checking priorities
                    this.collecion.splice(i, 0, element);
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
        let value = this.collecion.shift();
        return vlaue[0];
    }

    front(){
        return this.collecion[0];
    }

    size(){
        return this.collecion.length;
    }

    isEmpty(){
        return (this.collection.length === 0);
    }
}