import { Pet } from "./models/pet";

export const pets: Pet[] = [
  {
    id: 1,
    name: "Zuko",
    species: "Dog",
    gender: "Male",
    date_of_birth: new Date("2019-01-01"),
    fixed: true
  },
  {
    id: 2,
    name: "Fiona",
    species: "Cat",
    gender: "Female",
    date_of_birth: new Date("2020-03-15"),
    fixed: true
  },
  {
    id: 3,
    name: "Puck",
    species: "Cat",
    gender: "Female",
    date_of_birth: new Date("2022-06-10"),
    fixed: true
  },
  {
    id: 4,
    name: "Chance",
    species: "Dog",
    gender: "Male",
    date_of_birth: new Date("2021-09-30"),
    fixed: false
  },
];
