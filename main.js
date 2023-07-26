//Cree una clase con un constructor y los pushee dentro de un array vacio.
class productos {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

let misProductos = [];

let carrito = [];

misProductos.push(new productos(0, "harina", 50));
misProductos.push(new productos(1, "galletitas", 100));
misProductos.push(new productos(2, "cerveza", 150));
misProductos.push(new productos(3, "leche", 200));
misProductos.push(new productos(4, "gaseosa", 250));

console.log(misProductos);

let seleccion = prompt("Hola, ¿Desea comprar algo? || si o no");

function ingresarMercado() {
  while (seleccion != "si") {
    if (seleccion == "no") {
      alert("Hasta pronto");
      break;
    } else if (seleccion != "si" || seleccion != "no") {
      alert("Debe seleccionar si o no");
      seleccion = prompt("Hola, ¿Desea comprar algo? || si o no");
    }
  }
}

ingresarMercado();

//Recorrí el array con mis productos para mostrarselo al cliente en pantalla a través de un alert.

if (seleccion == "si") {
  alert("Nuestra lista de productos a continuación");
  let todoslosProductos = misProductos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
}

//Utilicé un bucle while con un condicional, junto con un switch para facilitar la selección de los productos a comprar.

while (seleccion != "no") {
  let producto = prompt("Agregá un producto a tu carrito");
  let precio = 0;

  if (
    producto == "harina" ||
    producto == "galletitas" ||
    producto == "cerveza" ||
    producto == "leche" ||
    producto == "gaseosa"
  ) {
    switch (producto) {
      case "harina":
        precio = 50;
        break;
      case "galletitas":
        precio = 100;
        break;
      case "cerveza":
        precio = 150;
        break;
      case "leche":
        precio = 200;
        break;
      case "gaseosa":
        precio = 250;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
    carritoFinal();
  } else {
    alert("No contamos con ese producto");
  }
}

//Cree una función para el carrito final después de que el cliente seleccione los productos. En caso de querer agregar más, retorna a el bucle while anterior.

function carritoFinal() {
  seleccion = prompt("Desea seguir comprando? || si o no");
  while (seleccion == "no") {
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
      alert("Gracias por su compra. Hasta pronto.");
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es: ${total}`);
