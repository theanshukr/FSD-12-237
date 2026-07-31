function main() {

    console.log("main");
    setTimeout(f1, 50);
    setTimeout(f3, 30);
    
    new Promise((resolve, reject) => {
    resolve("I am promise 1");
    }).then((resolve) => console.log(resolve));

    new Promise((resolve, reject) => {
        resolve("I am promise 2");
    }).then((resolve) => console.log(resolve));

    f2();

}