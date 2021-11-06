// API - Application Programming Interface
// const url = "https://picsum.photos/200";
​
console.log("Before promise");
​
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("working");
    /**
     * Resolve muze vracet cokoliv
     */
    // resolve({ message: "working" });
  }, 3000);
});
​
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    /**
     * "try" obaluje kod, ve kterem muze nastat chyba.
     * Kdyz chyba nastane, provede se blok definovany v "catch"
     */
    try {
      const result = 2 / 0;
      /**
       * Simulujeme rucne chybu
       */
      throw new Error("Chyba");
      resolve(result);
    } catch (error) {
      reject(error);
    }
  }, 2800);
});
​
promise1.then((value) => {
  console.log("Promise 1 then", value);
​
  /**
   * Pokud si chci byt jisty, ze promise2 dobehne az po promise 1,
   * musim na nej pockat (tedy presunout volani do then)
   */
  // const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ message: "working" });
  //   }, 2800);
  // });
  // promise2.then((value) => {
  //   console.log("Promise 2 then", value);
  // });
});
promise1.catch((value) => {
  console.log("Promise 1 catch", value);
});
​
promise2.then((value) => {
  console.log("Promise 2 then", value);
});
promise2.catch((value) => {
  console.log("Promise 2 catch", value);
  return false;
});
​
console.log("After promise");
​
/**
 * Jen ukazka sitoveho request pomoci fetch, ktery vraci Promise,
 * neni potreba chapat do detailu
 */
const imagePromise = fetch("https://picsum.photos/200");
imagePromise.then((image) => {
  console.log(image);
  image.blob().then((blob) => {
    console.log(blob);
  });
});
imagePromise.catch((error) => {
  console.error(error);
});