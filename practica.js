console.log("Práctica Modulo 3");

//Calcular precio total

console.log("1. Calcular precio total");

const product = {
  count: 3,
  price: 12.55,
  type: "ropa",
};
console.log("Producto: ", product);

function getTotal(product) {
  let total;
  if (product.count <= 0) {
    total = 0;
  } else {
    total = product.count * product.price;
  }
  return total;
}

console.log("Precio total: " + getTotal(product) + " €");

//Calcular el IVA
//Alimentación: 0.1
//Libro: 0.04
//Otros: 0.21

console.log("2. Calcular IVA");

function getVat(product) {
  let iva;
  switch (product.type) {
    case "alimentacion":
      iva = product.price * 0.1;
      break;
    case "libro":
      iva = product.price * 0.04;
      break;
    default:
      iva = product.price * 0.21;
      break;
  }
  return iva;
}

console.log("Tipo de producto: " + product.type);
console.log("IVA: " + getVat(product) + " €");

//Calcular sueldo neto en nómina
// Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
// Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
// Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
// Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
// Si el empleado tiene hijos, restarle a la retencion 2 puntos.

console.log("3. Calcular sueldo neto en nómina");

const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

let retencion,
  netoAnual,
  netoMensual = 0;

if (empleado.bruto > 34000) {
  retencion = 30;
} else if (empleado.bruto < 34000 && empleado.bruto > 24000) {
  retencion = 16;
} else if (empleado.bruto < 24000 && empleado.bruto > 12000) {
  retencion = 8;
}

console.log("Retención por franja salarial: " + retencion + "%");

if (retencion > 0 && empleado.hijos > 0) {
  console.log("Beneficio por hijos aplicado");
  retencion = retencion - 2;
} else if (retencion == 0) {
  console.log("Retención mínima, no admite beneficio por hijos");
} else if (empleado.hijos <= 0) {
  console.log("No aplica beneficio por hijos");
}

console.log("Retención aplicada: " + retencion + "%");

netoAnual = empleado.bruto * (retencion / 100);
if (empleado.pagas == 14 || empleado.pagas == 12) {
  netoMensual = netoAnual / empleado.pagas;
} else {
  console.log("Numero pagas incorrecto");
}

console.log("Neto mensual: " + netoMensual + " €");

console.log("4. Funcion calcular IVA total y print");

//Funcion calcular IVA total

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

//Funcion print info producto

function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}

printProductPrice(product);
