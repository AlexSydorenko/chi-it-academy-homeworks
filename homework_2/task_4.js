class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    introduce() {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
    }
}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }

    study() {
        console.log(`Я навчаюся на ${this.course} курсі.`);
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }

    teach() {
        console.log(`Я викладаю ${this.subject}.`);
    }
}

const student = new Student('Олександр', '+380505928557', 4);
student.introduce();
student.study();

const teacher = new Teacher('Ольга Миколаївна', '+380666838456', 'математика');
teacher.introduce();
teacher.teach();
