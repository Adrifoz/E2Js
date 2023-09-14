const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
  {
    id: 7,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  }
];

//PAR O IMPAR

pizzas.forEach((impar) => {
  if( impar.id % 2 === 1){
  console.log(`La ${impar.nombre} tiene ID impar`)
}
})


// PIZZA CON VALOR MENOR A $600

pizzas.forEach((valormenor) => {
  if( valormenor.precio < 600){
  console.log(`Oferta: la ${valormenor.nombre} vale menos de $600`)
}
})

// NOMBRE Y VALOR DE PIZZA

pizzas.forEach((pizza) => {
  const {nombre, precio} = pizza
  console.log(`Anuncio: La ${nombre} tiene un valor de $${precio}`)
})

// INGREDIENTES DE LAS PIZZAS
 pizzas.forEach((pizza) => {
  const ingredientes = pizza.ingredientes
  ingredientes.forEach(() => {
    console.log(`Ingredientes: ${ingredientes}`);
 })
})
