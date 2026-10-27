import headphones from "../assets/wirelessheadphones.jpg";
import watch from "../assets/smartwatch.png";
import shoes from "../assets/runningshoes.jpg";
import backpack from "../assets/leatherbackpack.jpg";
import coffee from "../assets/coffeemaker.jpg";
import lamp from "../assets/tablelamp.jpg";
import notebook from "../assets/notebookset.jpg";
import speaker from "../assets/bluetoothspeaker.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2500,
    image: headphones,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 4200,
    image: watch,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 1800,
    image: shoes,
  },
  {
    id: 4,
    name: "Leather Backpack",
    category: "Fashion",
    price: 2200,
    image: backpack,
  },
  { id: 5, name: "Coffee Maker", category: "Home", price: 3100, image: coffee },
  { id: 6, name: "Table Lamp", category: "Home", price: 950, image: lamp },
  {
    id: 7,
    name: "Notebook Set",
    category: "Books",
    price: 300,
    image: notebook,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1700,
    image: speaker,
  },
];

export default products;
