let a = 0,
  b = 1,
  c = 0,
  i,
  n;
// printf("Enter a Number:");
n = 5;
// scanf("%d",&n);
for (i = 0; i <= n; i++) {
  console.log(a);
  c = a + b;
  b = c;
  a = b;
  // printf("\t");
  console.log("\t");
}
