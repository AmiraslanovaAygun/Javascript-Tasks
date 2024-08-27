let str2 = "**";

for (let i = 1; i <= 5; i++) {
  if (i == 1 || i == 3) {
    console.log(str2 + "* * * * * "+ str2);
    console.log(str2 + "* * * * * "+ str2);
  } else {
    console.log(str2 + "          " + str2);
    console.log(str2 + "          " + str2);
  }
}
