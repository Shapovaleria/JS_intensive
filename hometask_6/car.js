class Car {
  #brand
  get brand() {
    return this.#brand
  }
  set brand(value) {
    if (typeof value !== 'string' || value.length < 1 || value.length > 50) {
      throw new Error('Название бренда должно содержать от 1-го до 50-ти символов')
    }
    this.#brand = value;
  }

  #model
  get model() {
    return this.#model
  }
  set model(value) {
    if (typeof value !== 'string' || value.length < 1 || value.length > 50) {
      throw new Error('Название модели должно содержать от 1-го до 50-ти символов')
    }
    this.#model = value;
  }

  #yearOfManufacturing
  get yearOfManufacturing() {
    return this.#yearOfManufacturing
  }
  set yearOfManufacturing(value) {
    if (!Number.isSafeInteger(value) || value < 1900 || value > new Date().getFullYear()) {
      throw new Error('Неверный год выпуска: от 1900 до текущего года')
    }
    this.#yearOfManufacturing = value;
  }

  #maxSpeed
  get maxSpeed() {
    return this.#maxSpeed
  }
  set maxSpeed(value) {
    if (!Number.isFinite(value) || value < 100 || value > 300) {
      throw new Error('Максимальная скорость должна быть от 100 км/час до 300 км/час ')
    }
    this.#maxSpeed = value;
  }

  #maxFuelVolume
  get maxFuelVolume() {
    return this.#maxFuelVolume
  }
  set maxFuelVolume(value) {
    if (!Number.isFinite(value) || value < 5 || value > 20) {
      throw new Error('Максимальный объем топлива должен быть от 5 л до 20 л')
    }
    this.#maxFuelVolume = value;
  }

  #fuelConsumption
  get fuelConsumption() {
    return this.#fuelConsumption
  }
  set fuelConsumption(value) {
    if (!Number.isFinite(value)) {
      throw new Error('Неверный расход топлива')
    }
    this.#fuelConsumption = value;
  }

  #currentFuelVolume = 0;
  get currentFuelVolume() {
    return this.#currentFuelVolume
  }

  #isStarted = false;
  get isStarted() {
    return this.#isStarted
  }

  #mileage = 0;
  get mileage() {
    return this.#mileage
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена')
    }
    this.#isStarted = true
  }
  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена')
    }
    this.#isStarted = false
  }
  fillUpGasTank(fuel) {
    if (!Number.isFinite(fuel) || fuel <= 0) {
      throw new Error('Неверное количество топлива для заправки')
    }
    if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен')
    }
    this.#currentFuelVolume += fuel;
  }
  drive(speed, hours) {
    let fuelForDrive = this.#fuelConsumption * speed * hours / 100;
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error('Неверная скорость')
    }
    if (!Number.isFinite(hours) || hours <= 0) {
      throw new Error('Неверное количество часов')
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро')
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать')
    }
    if (this.#currentFuelVolume < fuelForDrive) {
      throw new Error('Недостаточно топлива')
    }
    this.#currentFuelVolume -= fuelForDrive;
    this.#mileage += speed * hours;
  }
}

// export class Car


