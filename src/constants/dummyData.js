import images from './images';

const trendingRecipes = [
  {
    id: 1,
    name: 'Burger',
    image: images.burger,
    duration: '20 mins',
    price: 235,
    serving: 1,
    isBookmark: true,
    category: 'Burger',
  },
  {
    id: 2,
    name: 'Pizza',
    image: images.pizza,
    duration: '20 mins',
    price: 235,
    serving: 1,
    isBookmark: true,
    category: 'Pizza',
  },
  {
    id: 3,
    name: 'Biryani',
    image: images.biryani,
    duration: '40 mins',
    price: 235,
    serving: 10,
    isBookmark: true,
    category: 'Biryani',
  },
  {
    id: 4,
    name: 'Frankie',
    image: images.frankie,
    duration: '20 mins',
    price: 235,
    serving: 2,
    isBookmark: false,
    category: 'Frankie',
  },
  // {
  //   id: 5,
  //   name: 'KFC',
  //   image: images.kfc,
  //   duration: '40 mins',
  //   price: 235,
  //   serving: 2,
  //   isBookmark: false,
  //   category: 'KFC',
  // },
];

const categories = trendingRecipes;

export default {
  trendingRecipes,
  categories,
};
