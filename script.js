const productsArray = [
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle",
    price: "R$99,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "Pacman",
    price: "R$160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const actionFiguresArray = [];
const paintingsArray = [];

function separateItens(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type == "Paintings") {
      paintingsArray.push(productsArray[i]);
    } else if (productsArray[i].type == "Action Figures") {
      actionFiguresArray.push(productsArray[i]);
    }
  }
  return {
    paintings: paintingsArray,
    actionFigures: actionFiguresArray,
  }
}

separateItens(productsArray);

const pa = document.querySelector('#pa');
const ac = document.querySelector("#ac");

function paintingsCards(){
for (let i = 0; i < paintingsArray.length; i++){
  let products = paintingsArray[i];

  let listPaintings = document.createElement('li')

  let imagePaintings = document.createElement("img");
  imagePaintings.src = products.image;
  imagePaintings.classList.add("img1");
  listPaintings.appendChild(imagePaintings);

  let namePaintings = document.createElement("p");
  namePaintings.innerText = products.name;
  namePaintings.classList.add("text1");
  listPaintings.appendChild(namePaintings);

  let pricePaintings = document.createElement("p");
  pricePaintings.innerText = products.price;
  pricePaintings.classList.add("text2")
  listPaintings.appendChild(pricePaintings);

  pa.appendChild(listPaintings);
}
};

paintingsCards();

function actionFiguresCards(){
for (let i = 0; i < actionFiguresArray.length; i++) {
  let products = actionFiguresArray[i];

  let listActionFigures = document.createElement('li')

  let imageActionFigures = document.createElement("img");
  imageActionFigures.src = products.image;
  imageActionFigures.classList.add("img1");
  listActionFigures.appendChild(imageActionFigures);

  let nameActionFigures = document.createElement("p");
  nameActionFigures.innerText = products.name;
  nameActionFigures.classList.add("text1");
  listActionFigures.appendChild(nameActionFigures);

  let priceActionFigures = document.createElement("p");
  priceActionFigures.innerText = products.price;
  priceActionFigures.classList.add("text2")
  listActionFigures.appendChild(priceActionFigures);

  ac.appendChild(listActionFigures);
}
};

actionFiguresCards();