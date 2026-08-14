import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { readFile, writeFile } from "fs/promises";

const File = "products.json";
const rl = readline.createInterface({ input, output });

const getProducts = async () => {
  try {
    const data = await readFile(File, "utf-8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const viewProduct = async () => {
  const products = await getProducts();
  if (products.length === 0) {
    console.log("No products found.");
    return;
  }
  console.log(products);
};

const addProduct = async () => {
  const name = await rl.question("Enter product name: ");
  const price = await rl.question("Enter product price: ");
  const id = Math.floor(Math.random() * 1000);
  const qty = await rl.question("Enter product quantity: ");

 
  const products = await getProducts();

  products.push({ id, name, price, qty });
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product added successfully.");
};

const updateProduct = async () => {
  const name = await rl.question("Enter product name to update: ");
  const products = await getProducts();
  const productIndex = products.findIndex((product) => product.name === name);
  if (productIndex === -1) {
    console.log("Product not found.");
    return;
  }
  const price = await rl.question("Enter new product price: ");
  const qty = await rl.question("Enter new product quantity: ");
  products[productIndex].price = price;
  products[productIndex].qty = qty;
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product updated successfully.");
};


const deleteProduct = async () => {
  const name = await rl.question("Enter product name to delete: ");
  const products = await getProducts();
  const productIndex = products.findIndex((product) => product.name === name);
  if (productIndex === -1) {
    console.log("Product not found.");
    return;
  }
  products.splice(productIndex, 1);
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product deleted successfully.");
};

const main = async () => {
  console.log("WELCOME TO FLIPKART😂");

  let choice;
  while (choice !== 5) {
    console.log(
      "\n1. Add Product\n2. View Product\n3. Update Product\n4. Delete Product\n5. Exit",
    );
    
    choice = await rl.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await addProduct();
        break;
      case 2:
        await viewProduct();
        break;
      case 3:
        await updateProduct();
        break;
      case 4:
        await deleteProduct();
        break;
      case 5:
        console.log("Exiting the program.");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
};

await main();
