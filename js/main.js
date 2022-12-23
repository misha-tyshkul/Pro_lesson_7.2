const peoples = [
  {
    name: "Alina",
    money: 2700.32,
    cities: "Lviv, Kyiv, Ternopil",
    children: [
      {
        name: "Oliver",
        age: 6,
      },
    ],
  },
  {
    name: "Andrii",
    money: 9301.32,
    cities: "Paris, Madrid, Rivne",
    children: [],
  },
  {
    name: "George",
    money: "3500",
    cities: "Stambul",
    children: [
      {
        name: "Olha",
        age: 8,
      },
      {
        name: "Olena",
        age: 2,
      },
    ],
  },
];

function upperCase() {
  for (let i = 0; i < peoples.length; i++) {
    const item = peoples[i];

    item.name = item.name.toUpperCase();

    item.cities = item.cities.split(",");

    item.money = Math.round(item.money);

    if (typeof item.money === "string") {
      item.money = Number(item.money);
      return item.money;
    } else if (isNaN(item.money)) {
      console.log("Error");
    }
  }

  const randomAge = Math.floor(Math.random() * 18);

  const addChildren = {
    name: "Stephan",
    age: randomAge,
  };
  peoples[1].children.push(addChildren);
}

upperCase();
console.log(peoples[0]);
console.log(peoples[1]);
console.log(peoples[2]);
