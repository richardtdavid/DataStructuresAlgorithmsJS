/* Sets */

class mySet {
    constructor(){
        // the variable collection will hold the set 
        this.collection = [];    
    }

    // this method will check for the presence of an element and return true or false
    has(element){
        return (this.collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    values(){
        return this.collection;
    };

    // this method will add an element to the set
    add(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        
        return false;
    };

    // this method will remove an element from a set 
    remove(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }

        return false;
    };

    // this method will return the size of the collection
    size(){
        return this.collection.length;
    };

    // this method will return the union of two sets
    union(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(e => {
            unionSet.add(e);
        });

        secondSet.forEach(e => {
            unionSet.add(e);
        });

        return unionSet;
    };

    // this method will return the intersection of two sets as a new set 
    intersection(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
    }

    // this method will return the difference of two sets as a new set
    difference(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });

        return differenceSet;
    }

    // this method will test if the set is a subset of a different set 
    subset(otherSet) {
        let firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());