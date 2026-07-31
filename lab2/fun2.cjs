const f1 = () => {
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};
function main() {
  console.log("main");
  setTimeout(f1, 0);
  f2();
  setImmediate(f3);
  console.log("end");
}

main();
