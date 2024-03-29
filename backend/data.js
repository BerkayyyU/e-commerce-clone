import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Berkay',
      email: 'berkayyyulguel@gmail.com',
      password: bcrypt.hashSync('1234', 8), // 8 is a option to make the hashvalue using a autosalt we do net set manualsalt for it
      isAdmin: true,
    },
    {
      name: 'Oğuz',
      email: 'useroguz@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'LOTR Book',
      category: 'Movie, Book and Music',
      image: '/images/product-1.jpg',
      price: 19,
      description: 'description - 1',
      city: 'İstanbul',
    },
    {
      name: 'Iphone X 64 GB',
      category: 'Electronic',
      image: '/images/product-2.jpg',
      price: 700,
      description: 'description - 2',
      city: 'İstanbul',
    },
    {
      name: 'Mercedes S Class',
      category: 'Car',
      image: '/images/product-3.jpg',
      price: 60000,
      description: 'description - 3',
      city: 'Moscow',
    },
    {
      name: 'Playstation 5',
      category: 'Sports and Games',
      image: '/images/product-4.jpg',
      price: 500,
      description: 'description - 4',
      city: 'Paris',
    },
    {
      name: 'Adidas Superstar',
      category: 'Fashion and Clothes',
      image: '/images/product-5.jpg',
      price: 50,
      description: 'description - 5',
      city: 'İstanbul',
    },
    {
      name: 'Seats',
      category: 'Home and Garden',
      image: '/images/product-6.jpg',
      price: 130,
      description: 'description - 6',
      city: 'İstanbul',
    },
    {
      name: 'Stroller',
      category: 'Baby and Child',
      image: '/images/product-7.jpg',
      price: 70,
      description: 'description - 7',
      city: 'London',
    },
    {
      name: 'Calvin Klein Bag',
      category: 'Fashion and Clothes',
      image: '/images/product-8.jpg',
      price: 60,
      description: 'description - 8',
      city: 'London',
    },
    {
      name: 'Logitech G300S',
      category: 'Electronic',
      image: '/images/product-9.jpg',
      price: 30,
      description: 'description - 9',
      city: 'Rome',
    },
    {
      name: 'MSI Gaming Laptop',
      category: 'Electronic',
      image: '/images/product-10.jpg',
      price: 835,
      description: 'description - 10',
      city: 'Berlin',
    },
    {
      name: 'Xbox Series X',
      category: 'Sports and Games',
      image: '/images/product-11.jpg',
      price: 500,
      description: 'description - 11',
      city: 'Amsterdam',
    },
    {
      name: 'Clean Code',
      category: 'Movie, Book and Music',
      image: '/images/product-12.jpg',
      price: 30,
      description: 'description - 12',
      city: 'Berlin',
    },
    {
      name: 'Prima Diaper',
      category: 'Baby and Child',
      image: '/images/product-13.jpg',
      price: 17,
      description: 'description - 13',
      city: 'London',
    },
    {
      name: 'Desk',
      category: 'Home and Garden',
      image: '/images/product-14.jpg',
      price: 143,
      description: 'description - 14',
      city: 'Vienna',
    },
    {
      name: 'Drone',
      category: 'Electronic',
      image: '/images/product-15.png',
      price: 328,
      description: 'description - 15',
      city: 'Dublin',
    },
    {
      name: 'H&M Erkek Shirt',
      category: 'Fashion and Clothes',
      image: '/images/product-16.jpg',
      price: 40,
      description: 'description - 16',
      city: 'Madrid',
    },
    {
      name: 'Fiat Egea',
      category: 'Car',
      image: '/images/product-17.jpg',
      price: 44500,
      description: 'description - 17',
      city: 'Amsterdam',
    },
    {
      name: 'Logitech G105',
      category: 'Electronic',
      image: '/images/product-18.jpg',
      price: 72,
      description: 'description - 18',
      city: 'Amsterdam',
    },
    {
      name: 'Golden Necklace',
      category: 'Fashion and Clothes',
      image: '/images/product-19.jpg',
      price: 480,
      description: 'description - 19',
      city: 'London',
    },
    {
      name: 'Vacuum Cleaner',
      category: 'Home and Garden',
      image: '/images/product-20.jpg',
      price: 95,
      description: 'description - 20',
      city: 'London',
    },
    {
      name: 'Ah Şu Çılgın Türkler',
      category: 'Movie, Book and Music',
      image: '/images/product-21.jpg',
      price: 29,
      description: 'description - 21',
      city: 'Paris',
    },
    {
      name: 'JBL Speaker',
      category: 'Movie, Book and Music',
      image: '/images/product-22.jpg',
      price: 65,
      description: 'description - 22',
      city: 'London',
    },
    {
      name: 'Hair Straightener',
      category: 'Electronic',
      image: '/images/product-23.jpg',
      price: 144,
      description: 'description - 23',
      city: 'Paris',
    },
    {
      name: 'Iron',
      category: 'Electronic',
      image: '/images/product-24.jpg',
      price: 220,
      description: 'description - 24',
      city: 'Madrid',
    },
    {
      name: 'Waffle Maker',
      category: 'Electronic',
      image: '/images/product-25.jpg',
      price: 185,
      description: 'description - 25',
      city: 'İstanbul',
    },
    {
      name: 'Michael Kors Watch',
      category: 'Fashion and Clothes',
      image: '/images/product-26.jpg',
      price: 395,
      description: 'description - 26',
      city: 'Dublin',
    },
    {
      name: 'Car Seat',
      category: 'Baby and Child',
      image: '/images/product-27.jpg',
      price: 274,
      description: 'description - 27',
      city: 'Amsterdam',
    },
    {
      name: 'Coffee Maker',
      category: 'Electronic',
      image: '/images/product-28.jpg',
      price: 64,
      description: 'description - 28',
      city: 'Berlin',
    },
    {
      name: 'Baby Milk',
      category: 'Baby and Child',
      image: '/images/product-29.jpg',
      price: 20,
      description: 'description - 29',
      city: 'Paris',
    },
    {
      name: 'Era Hat',
      category: 'Fashion and Clothes',
      image: '/images/product-30.jpg',
      price: 35,
      description: 'description - 30',
      city: 'Rome',
    },
    {
      name: 'Guess Wallet',
      category: 'Fashion and Clothes',
      image: '/images/product-31.jpg',
      price: 135,
      description: 'description - 31',
      city: 'Dublin',
    },
    {
      name: 'Vans Sneaker',
      category: 'Fashion and Clothes',
      image: '/images/product-32.jpg',
      price: 60,
      description: 'description - 32',
      city: 'Madrid',
    },
    {
      name: 'Puma Sweatshirt',
      category: 'Fashion and Clothes',
      image: '/images/product-33.jpg',
      price: 265,
      description: 'description - 33',
      city: 'Moscow',
    },
    {
      name: 'Oysho Sport Bag',
      category: 'Fashion and Clothes',
      image: '/images/product-34.jpeg',
      price: 30,
      description: 'description - 34',
      city: 'Copenhagen',
    },
    {
      name: 'Marvel Thor',
      category: 'Movie, Book and Music',
      image: '/images/product-37.jpg',
      price: 6,
      description: 'description - 35',
      city: 'Berlin',
    },
    {
      name: 'Cookware Set',
      category: 'Home and Garden',
      image: '/images/product-38.jpg',
      price: 99,
      description: 'description - 36',
      city: 'İstanbul',
    },
    {
      name: 'Everc Waterfall',
      category: 'Home and Garden',
      image: '/images/product-39.jpg',
      price: 625,
      description: 'description - 37',
      city: 'Copenhagen',
    },
    {
      name: 'Linen Bedding Sets',
      category: 'Home and Garden',
      image: '/images/product-41.jpg',
      price: 139,
      description: 'description - 38',
      city: 'İstanbul',
    },
  ],
};
export default data;
