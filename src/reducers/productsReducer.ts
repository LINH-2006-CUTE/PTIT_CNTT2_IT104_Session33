const initialProducts = [
  { 
    id: 1, 
    name: "Pizza", 
    price: 30, 
    stock: 5, 
    image: "https://media.istockphoto.com/id/1442417585/vi/anh/ng%C6%B0%E1%BB%9Di-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3c-m%E1%BB%99t-mi%E1%BA%BFng-pizza-pepperoni-ph%C3%B4-mai.jpg?s=612x612&w=0&k=20&c=5e9ycu8KvpKcIVIwNmEGaxr8yh9x8IMdpeIJ3HdtSxU=" 
  },
  { 
    id: 2, 
    name: "Hamburger", 
    price: 15, 
    stock: 10, 
    image: "https://st2.depositphotos.com/1000504/8866/i/450/depositphotos_88666210-stock-photo-fresh-tasty-burger.jpg" 
  },
  { 
    id: 3, 
    name: "Bread", 
    price: 20, 
    stock: 8, 
    image: "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg.webp" 
  },
  { 
    id: 4, 
    name: "Cake", 
    price: 10, 
    stock: 12, 
    image: "https://www.angesdesucre.com/cdn/shop/articles/Birthday_Cake_Square_5_53dd2a6f-ddc5-4cda-a777-9837060cdd2b_1600x.jpg?v=1738259304" 
  },
];

export default function productsReducer(state = initialProducts, action:any) {
  return state;
}
