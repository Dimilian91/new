const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivanov@mail.ru",
  avatar: 
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg",
  about: "Тут мой рассказ о себе",
};

// const users = {
//   0: {
//     name: "Никита", 
//     lastname: "Никитин", 
//     email: "nikita@mail.ru", 
//     id: 2, 
//     avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
//     about: "Тут мой рассказ о себе",},
//   1: {
//     name: "Вася", 
//     lastname: "Васин", 
//     email: "vacya@mail.ru", 
//     id: 3, 
//     avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
//     about: "Тут мой рассказ о себе",},
//   2: {
//     name: "Настя", 
//     lastname: "Настина", 
//     email: "nastya@mail.ru", 
//     id: 4, 
//     avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
//     about: "Тут мой рассказ о себе",},
//   3: {
//     name: "Света", 
//     lastname: "Светина", 
//     email: "cveta@mail.ru", 
//     id: 5, 
//     avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg", 
//     about: "Тут мой рассказ о себе",},
// };
let users = [];

export function getUser(userId) {
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let responcse = await fetch("https://bernard.p-host.in/getUsers");
  users = await responcse.json();
  console.log(users);
  return users;
}
