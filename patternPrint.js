//? right angled triangle from right to left side

//! since generic c pattern printing doesn't work here so we need to use built in repeat function for printing pattern

function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }

  //?  || or
  //? && and
  //? ! not
}

printTriangle(5); // Example usage
//
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

//    printf("Enter the number of rows: ");
//    scanf("%d", &rows);
//    for (i = 1; i <= rows; ++i) {
//       for (j = 1; j <= i; ++j) {
//          printf("* ");
//       }
//       printf("\n");
//    }
