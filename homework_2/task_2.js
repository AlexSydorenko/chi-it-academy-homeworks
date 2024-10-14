const obj = {
    getData: function () {
        console.log(`Person name is: ${this.name} and age ${this.age}`);
    }
};

const person = { name: 'John', age: 30 };

obj.getData.call(person);

const getDataBound = obj.getData.bind(person);
getDataBound();

