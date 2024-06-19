const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivanov@mail.ru",
  avatar: 
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg",
  about: "Тут мой рассказ о себе",
};

const users = {
  0: {name: "Никита", lastname: "Никитин"},
  1: {name: "Вася", lastname: "Васин"},
  2: {name: "Настя", lastname: "Настина"},
  3: {name: "Света", lastname: "Светина"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
