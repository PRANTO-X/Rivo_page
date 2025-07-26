import bestSellingImg1 from './best_selling_img_1.png';
import bestSellingImg2 from './best_selling_img_2.png';
import bestSellingImg3 from './best_selling_img_3.png';
import cartIcon from './cart_icon.svg';
import cloneIcon from './clone_icon.svg';
import designerImg1 from './designer_img_1.png';
import designerImg2 from './designer_img_2.png';
import designerImg3 from './designer_img_3.png';
import exclusiveImg from './exlusive_img.png';
import facebookIcon from './Facebook.svg';
import instagramIcon from './Instagram.svg';
import twitterIcon from './Twitter.svg';
import homeImg from './home_img.png';
import productImg1 from './product_img_1.png';
import productImg2 from './product_img_2.png';
import productImg3 from './product_img_3.png';
import productImg4 from './product_img_4.png';
import productImg5 from './product_img_5.png';
import productImg6 from './product_img_6.png';
import productImg7 from './product_img_7.png';
import productImg8 from './product_img_8.png';
import starIcon from './star_icon.svg';
import leftArrow from './left_arrow.svg'
import rightArrow from './right_arrow.svg'
import emptyCart from './empty_cart_img.png'

export const assets= {
  bestSellingImg1,
  bestSellingImg2,
  bestSellingImg3,
  cartIcon,
  cloneIcon,
  designerImg1,
  designerImg2,
  designerImg3,
  exclusiveImg,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  homeImg,
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
  starIcon,
  leftArrow,
  rightArrow,
  emptyCart
};

export const navItems =[
    {
      link: '/',
      name: 'HOME'
    },{
      link: '/shop',
      name: 'SHOP'
    },
    {
      link: '/feature',
      name: 'FEATURE'
    },
    {
      link: '/contact',
      name: 'CONTACT'
    }
  ];

export const bestSellingItems = [
  {
    img: bestSellingImg1,
    name: "Regular Fit Long Sleeve Top",
    price: "$38.99",
    rating: 5.0,
  },
  {
    img: bestSellingImg2,
    name: "Black Crop Tailored Jacket",
    price: "$62.99",
    rating: 4.9,
  },
  {
    img: bestSellingImg3,
    name: "Textured Sunset Shirt",
    price: "$49.99",
    rating: 5.0,
  },
];



export const products = [
  {
    id: 1,
    img: productImg1,
    name: "Spread Collar Shirt",
    price: "$48.99",
    rating: 5.0,
    category: "hot"
  },
  {
    id: 2,
    img: productImg1,
    name: "White Solid Formal Shirt",
    price: "$39.00",
    rating: 4.9,
    category: "hot"
  },
  {
    id: 3,
    img: productImg3,
    name: "Shine On Me Blouse",
    price: "$42.99",
    rating: 4.8,
    category: "hot"
  },
  {
    id: 4,
    img: productImg4,
    name: "Gray Solid Padded Jacket",
    price: "$32.99",
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 5,
    img: productImg5,
    name: "Printed Loose T-shirt",
    price: "$39.99",
    rating: 5.0,
    category: "accessories"
  },
  {
    id: 6,
    img: productImg6,
    name: "Summer Wind Crop Shirt",
    price: "$39.95",
    rating: 4.7,
    category: "new"
  },
  {
    id: 7,
    img: productImg7,
    name: "Tailored Jacket",
    price: "$46.00",
    rating: 4.9,
    category: "new"
  },
  {
    id: 8,
    img: productImg8,
    name: "Solid Round Neck T-shirt",
    price: "$36.00",
    rating: 5.0,
    category: "new"
  },
];

export const designerCloths = [
  {
    name: "Accessories",
    img: designerImg1,
    description:
      "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
  },
  {
    name: "Dresses",
    img: designerImg2,
    description:
      "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
  },
  {
    name: "Outerwear",
    img: designerImg3,
    description:
      "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
  },
];

export const feedbacks = [
  {
    name: "Emily Wilson",
    text: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    name: "Sarah Thompson",
    text: "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    name: "Anonymous",
    text: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
  {
    name: "Liam Carter",
    text: "From browsing to delivery, everything was seamless. The fabric quality exceeded my expectations, and I’ll definitely shop here again.",
  },
  {
    name: "Ava Mitchell",
    text: "Beautiful designs and quick shipping! The size guide was accurate and made online shopping worry-free. Love my purchase!",
  },
  {
    name: "Noah Bennett",
    text: "Excellent value for the price. Customer support helped me change my shipping address quickly. Truly great service!",
  },
];

export const shopProducts = [
  {
    id: 1,
    img: productImg1,
    name: "Spread Collar Shirt",
    price: 48.99,
    rating: 5.0,
    category: "hot"
  },
  {
    id: 2,
    img: productImg1,
    name: "White Solid Formal Shirt",
    price: 39.00,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 3,
    img: productImg3,
    name: "Shine On Me Blouse",
    price: 42.99,
    rating: 4.8,
    category: "hot"
  },
  {
    id: 4,
    img: productImg4,
    name: "Gray Solid Padded Jacket",
    price: 32.99,
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 5,
    img: productImg5,
    name: "Printed Loose T-shirt",
    price: 39.99,
    rating: 5.0,
    category: "accessories"
  },
  {
    id: 6,
    img: productImg6,
    name: "Summer Wind Crop Shirt",
    price: 39.95,
    rating: 4.7,
    category: "new"
  },
  {
    id: 7,
    img: productImg7,
    name: "Tailored Jacket",
    price: 46.00,
    rating: 4.9,
    category: "new"
  },
  {
    id: 8,
    img: productImg8,
    name: "Solid Round Neck T-shirt",
    price: 36.00,
    rating: 5.0,
    category: "new"
  },
  {
    id: 9,
    img: productImg6,
    name: "Lightweight Windbreaker",
    price: 32.50,
    rating: 4.7,
    category: "hot"
  },
  {
    id: 10,
    img: productImg7,
    name: "Graphic Print Tee",
    price: 45.34,
    rating: 5.0,
    category: "new"
  },
  {
    id: 11,
    img: productImg6,
    name: "Embroidered Shirt",
    price: 35.32,
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 12,
    img: productImg4,
    name: "Knitted Scarf",
    price: 39.68,
    rating: 4.7,
    category: "new"
  },
  {
    id: 13,
    img: productImg6,
    name: "Ruffle Hem Skirt",
    price: 46.75,
    rating: 4.8,
    category: "accessories"
  },
  {
    id: 14,
    img: productImg1,
    name: "Sleeveless Blouse",
    price: 31.79,
    rating: 4.8,
    category: "accessories"
  },
  {
    id: 15,
    img: productImg1,
    name: "Plaid Button Shirt",
    price: 41.47,
    rating: 4.6,
    category: "hot"
  },
  {
    id: 16,
    img: productImg4,
    name: "Drawstring Pants",
    price: 34.02,
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 17,
    img: productImg1,
    name: "Slim Fit Jeans",
    price: 42.35,
    rating: 4.6,
    category: "hot"
  },
  {
    id: 18,
    img: productImg5,
    name: "Sheer Kimono",
    price: 45.62,
    rating: 4.8,
    category: "new"
  },
  {
    id: 19,
    img: productImg8,
    name: "Trench Coat",
    price: 48.40,
    rating: 4.8,
    category: "hot"
  },
  {
    id: 20,
    img: productImg4,
    name: "Boho Maxi Dress",
    price: 38.75,
    rating: 4.9,
    category: "accessories"
  },
  {
    id: 21,
    img: productImg5,
    name: "Turtleneck Top",
    price: 47.62,
    rating: 4.7,
    category: "new"
  },
  {
    id: 22,
    img: productImg6,
    name: "Chino Pants",
    price: 30.47,
    rating: 4.7,
    category: "hot"
  },
  {
    id: 23,
    img: productImg3,
    name: "Casual V-Neck Tee",
    price: 30.10,
    rating: 4.9,
    category: "accessories"
  },
  {
    id: 24,
    img: productImg4,
    name: "Cable Knit Sweater",
    price: 35.39,
    rating: 4.9,
    category: "new"
  },
  {
    id: 25,
    img: productImg3,
    name: "Suede Loafers",
    price: 44.24,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 26,
    img: productImg5,
    name: "Wool Blend Coat",
    price: 30.28,
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 27,
    img: productImg1,
    name: "Cotton Polo Shirt",
    price: 30.94,
    rating: 4.8,
    category: "new"
  },
  {
    id: 28,
    img: productImg3,
    name: "Long Cardigan",
    price: 48.94,
    rating: 5.0,
    category: "accessories"
  },
  {
    id: 29,
    img: productImg6,
    name: "Peplum Top",
    price: 46.51,
    rating: 4.6,
    category: "hot"
  },
  {
    id: 30,
    img: productImg8,
    name: "Ripped Denim Shorts",
    price: 33.66,
    rating: 4.8,
    category: "new"
  },
  {
    id: 31,
    img: productImg1,
    name: "Classic Leather Belt",
    price: 36.95,
    rating: 4.8,
    category: "accessories"
  },
  {
    id: 32,
    img: productImg5,
    name: "High Waist Leggings",
    price: 35.67,
    rating: 4.9,
    category: "new"
  },
  {
    id: 33,
    img: productImg4,
    name: "Boho Maxi Dress",
    price: 33.09,
    rating: 4.6,
    category: "accessories"
  },
  {
    id: 34,
    img: productImg3,
    name: "Basic Crew Neck Tee",
    price: 35.61,
    rating: 4.7,
    category: "hot"
  },
  {
    id: 35,
    img: productImg6,
    name: "Denim Jacket",
    price: 30.32,
    rating: 4.7,
    category: "accessories"
  },
  {
    id: 36,
    img: productImg7,
    name: "Double Breasted Coat",
    price: 39.71,
    rating: 4.8,
    category: "hot"
  },
  {
    id: 37,
    img: productImg3,
    name: "Tie-Waist Shorts",
    price: 30.47,
    rating: 4.8,
    category: "accessories"
  },
  {
    id: 38,
    img: productImg5,
    name: "V-Neck Sweater",
    price: 42.37,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 39,
    img: productImg6,
    name: "Sequin Party Dress",
    price: 35.65,
    rating: 4.6,
    category: "new"
  },
  {
    id: 40,
    img: productImg7,
    name: "Corduroy Jacket",
    price: 44.58,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 41,
    img: productImg1,
    name: "Off-Shoulder Top",
    price: 30.90,
    rating: 4.9,
    category: "accessories"
  },
  {
    id: 42,
    img: productImg8,
    name: "Floral Print Dress",
    price: 34.31,
    rating: 4.8,
    category: "new"
  },
  {
    id: 43,
    img: productImg4,
    name: "Linen Shorts",
    price: 47.82,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 44,
    img: productImg7,
    name: "Athletic Hoodie",
    price: 47.06,
    rating: 4.7,
    category: "new"
  },
  {
    id: 45,
    img: productImg3,
    name: "Fleece Sweatshirt",
    price: 45.97,
    rating: 4.8,
    category: "accessories"
  },
  {
    id: 46,
    img: productImg1,
    name: "Turtleneck Top",
    price: 46.83,
    rating: 4.8,
    category: "new"
  },
  {
    id: 47,
    img: productImg6,
    name: "Formal Blazer",
    price: 34.06,
    rating: 4.9,
    category: "hot"
  },
  {
    id: 48,
    img: productImg3,
    name: "Striped Long Sleeve",
    price: 47.44,
    rating: 4.9,
    category: "accessories"
  },
  {
    id: 49,
    img: productImg4,
    name: "Basic Tank Top",
    price: 45.17,
    rating: 4.7,
    category: "new"
  },
  {
    id: 50,
    img: productImg7,
    name: "Cargo Shorts",
    price: 40.28,
    rating: 4.8,
    category: "accessories"
  }
];
