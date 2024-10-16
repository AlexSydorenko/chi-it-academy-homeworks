class Transport {
    ride() {
        throw new Error();
    }

    stop() {
        throw new Error();
    }
}

class Car extends Transport {
    ride() {
        console.log("Автомобіль їде...");
    }

    stop() {
        console.log("Автомобіль зупинився.");
    }
}

class Bike extends Transport {
    ride() {
        console.log("Велосипед їде...");
    }

    stop() {
        console.log("Велосипед зупинився.");
    }
}

class TransportFactory {
    static createTransport(type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                throw new Error("Невідомий тип транспорту");
        }
    }
}

const car = TransportFactory.createTransport('car');
car.ride();
car.stop();

const bike = TransportFactory.createTransport('bike');
bike.ride();
bike.stop();
