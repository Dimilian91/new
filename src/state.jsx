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
  0: {
    name: "Никита", 
    lastname: "Никитин", 
    email: "nikita@mail.ru", 
    id: 2, 
    avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
    about: "Тут мой рассказ о себе",},
  1: {
    name: "Вася", 
    lastname: "Васин", 
    email: "vacya@mail.ru", 
    id: 3, 
    avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
    about: "Тут мой рассказ о себе",},
  2: {
    name: "Настя", 
    lastname: "Настина", 
    email: "nastya@mail.ru", 
    id: 4, 
    avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
    about: "Тут мой рассказ о себе",},
  3: {
    name: "Света", 
    lastname: "Светина", 
    email: "cveta@mail.ru", 
    id: 5, 
    avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
    about: "Тут мой рассказ о себе",},
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
