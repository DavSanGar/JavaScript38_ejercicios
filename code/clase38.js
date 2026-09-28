console.log("Clase 38: Promesas");

//Definiendo promesas

// const promise1 = Promise.resolve(55);

/* promise2 es exactamente lo mismo que poner la linea de código "promise1",
ya que hace el resolve por defecto, con lo que va a encadenarse exactamente igual que la promise1.
*/

// const promise2 = 33;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, "Se ha ejecutado la promise3 después de un segundo");
// });

// Promesas en serie

// promise1
//   .then((valor) => {
//     console.log("valor :", valor);
//     return promise2;
//   })
//   .then((valor2) => {
//     console.log("valor 2 :", valor2);
//     return promise3;
//   })
//   .then((valor3) => {
//     console.log("valor 3 : ", valor3);
//   })
//   .catch((error) => {
//     console.log("Error :", error);
//   })
//   .finally(() => {
//     console.log("Las promesas en serie han finalizado.");
//   });

/*
Promesas en paralelo
.all: Cuando todas las promesas estén resueltas mediante este método, las ejecutará,
de esta forma se están resolviendo todas en paralelo y una vez terminadas, las muestra.
*/

// Promise.all([promise1, promise2, promise3])
//   .then((valoresRetornados) => {
//     console.log("Los valores devueltos son: ", valoresRetornados);
//   })
//   .catch((error) => {
//     console.log("Alguinas de las promesas han lanzado un ERROR: ", error);
//   });

/*
Promesas en paralelo
Método de carrera o Race
.race: Se resuelve en su totalidad cuando la primera de las promesas se completa,
con lo que SÓLO mostrará el valor de la promesa que antes se ejecute. En este caso, .race no detendrá
la ejecución del resto de promesas a pesar de que la "ganadora" haya terminado, simplemente ignorará sus resultados.
*/

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(
//     resolve,
//     5000,
//     "Se ha ejecutado la promise4 después de 5 segundos",
//   );
// });
// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(
//     resolve,
//     6000,
//     "Se ha ejecutado la promise5 después de 6 segundos",
//   );
// });
// const promise6 = new Promise((resolve, reject) => {
//   setTimeout(
//     resolve,
//     3000,
//     "Se ha ejecutado la promise6 después de tres segundos",
//   );
// });

// Promise.race([promise5, promise4, promise6])
//   .then((valores) => {
//     console.log(
//       "Esta es el valor de la promesa que se ha ejecutado primero: ",
//       valores,
//     );
//   })
//   .catch((error) => {
//     console.log("Ha ocurrido un error: ", error);
//   });

/*
Promesas en paralelo
Método Any
.any: Mismo proceso que con el método race, pero se quedará la primera promesa resuelta que sea
resolve, es decir, que de un valor OK, por lo que si un reject acaba antes, lo ignorará.
En el caso de que todas las promesas sean reject, el navegador dará un error y entrará en el catch.
*/

// const promise7 = new Promise((resolve, reject) => {
//   setTimeout(
//     resolve,
//     5000,
//     "Se ha ejecutado la promise7 después de 5 segundos",
//   );
// });
// const promise8 = new Promise((resolve, reject) => {
//   setTimeout(
//     resolve,
//     6000,
//     "Se ha ejecutado la promise8 después de 6 segundos",
//   );
// });
// const promise9 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, "Se ha ejecutado la promise9 después de 3 segundos");
// });

// Promise.any([promise7, promise8, promise9])
//   .then((valores) => {
//     console.log(
//       "Esta es el valor de la promesa que se ha ejecutado primero: ",
//       valores,
//     );
//   })
//   .catch((error) => {
//     console.log("Ha ocurrido un error: ", error);
//   });

/*
Promesas en paralelo
Método AllSettled
.allSettle: Se resuelve cuando todas las promesas lanzadas en paralelo se han resuelto
para bien o para mal. Esto no ejecuta el catch ya que espera a que todo se resuelva sin mas.
*/

// Promise.allSettled([promise1, promise2, promise3]).then((valores) => {
//   console.log("El resultado del mñetodo allSettled es :", valores);
// });

/* 
Imaginemos una promesa que busca en uns servidor el primer usuario que contenga 
la cadena 'David' en su nombre
*/

const buscarUsuario = (nombre) =>
  new Promise((resolve, reject) => {
    // Aquí buscar un usuario por nombre y devuelve el primero que encuentre
    // buscarEnServidorUsuario(nombre);
    console.log("Buscando un usuario con el nombre:", nombre);
    let user = {
      name: "David",
      dni: 12345678,
      edad: 36,
    };
    resolve(user);
  });

//buscarUsuario("David").then((user) => console.log(user));

const buscarActividad = (user, fechaActual) =>
  new Promise((resolve, reject) => {
    // Función que dado un usuario y una fecha, devuelve la actividad que ha hecho ese usuario en esa fecha
    // buscarEnServidorActividad(user, fechaActual);
    const actions = {
      user: user,
      activities: [
        {
          date: fechaActual,
          text: "entrar",
        },
        {
          date: fechaActual,
          text: "nadar",
        },
        {
          date: fechaActual,
          text: "caminar",
        },
      ],
    };
    resolve(actions);
  });

buscarUsuario("Bienve")
  .then((user) => {
    console.log("El usuario que se ha encontrado es:", user);
    return buscarActividad(user, new Date());
  })
  .then((activities) => console.log(activities));
