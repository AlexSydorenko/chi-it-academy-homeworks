function Person(name, phone) {
    this.name = name;
    this.phone = phone;
}

Person.prototype.introduce = function () {
    console.log('Привіт, мене звати ' + this.name + ', мій номер ' + this.phone + '.');
};

function Student(name, phone, course) {
    Person.call(this, name, phone);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    console.log('Я навчаюся на ' + this.course + ' курсі.');
};

function Teacher(name, phone, subject) {
    Person.call(this, name, phone);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
    console.log('Я викладаю ' + this.subject + '.');
};

var student = new Student('Олександр', '+380505928557', 4);
student.introduce();
student.study();

var teacher = new Teacher('Ольга Миколаївна', '+380666838456', 'математика');
teacher.introduce();
teacher.teach();
