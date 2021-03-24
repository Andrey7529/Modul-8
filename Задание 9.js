let tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 59];

liste(tall);

function liste(arr) {
  let sumOdd = 0;
  let sumPar = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }

  
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
}




