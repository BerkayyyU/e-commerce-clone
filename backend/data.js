import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Berkay",
            email: "berkayyyulguel@gmail.com",
            password: bcrypt.hashSync("1234", 8), // 8 is a option to make the hashvalue using a autosalt we do net set manualsalt for it
            isAdmin: true,
        },
        {
            name: "Oğuz",
            email: "useroguz@gmail.com",
            password: bcrypt.hashSync("1234", 8), 
            isAdmin: false,
        }
    ],
    products:[
        {
            name:"Yüzüklerin Efendisi",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-1.jpg",
            price: 49,
            description: "açıklama1",
            city:"İstanbul"
        },
        {
            name:"Iphone X 64 GB",
            category:"Elektronik",
            image:"/images/product-2.jpg",
            price: 4999,
            description: "açıklama2",
            city:"İstanbul"
        },
        {
            name:"Mercedes S Class",
            category:"Araba",
            image:"/images/product-3.jpg",
            price: 780000,
            description: "açıklama3",
            city:"Edirne"
        },
        {
            name:"Playstation 5",
            category:"Spor, Eğlence ve Oyun",
            image:"/images/product-4.jpg",
            price: 7485,
            description: "açıklama4",
            city:"Edirne"
        },
        {
            name:"Adidas Superstar",
            category:"Moda ve Aksesuar",
            image:"/images/product-5.jpg",
            price: 400,
            description: "açıklama5",
            city:"Ankara"
        },
        {
            name:"Koltuk Takımı",
            category:"Ev ve Bahçe",
            image:"/images/product-6.jpg",
            price: 1179,
            description: "açıklama6",
            city:"Ankara"
        },
        {
            name:"Bebek Arabası",
            category:"Bebek ve Çocuk",
            image:"/images/product-7.jpg",
            price: 420,
            description: "açıklama7",
            city:"İzmir"
        },
        {
            name:"Calvin Klein Çanta",
            category:"Moda ve Aksesuar",
            image:"/images/product-8.jpg",
            price: 629,
            description: "açıklama8",
            city:"İzmir"
        },
        {
            name:"Logitech G300S",
            category:"Elektronik",
            image:"/images/product-9.jpg",
            price: 250,
            description: "açıklama9",
            city:"Bursa"
        },
        {
            name:"MSI Gaming Laptop",
            category:"Elektronik",
            image:"/images/product-10.jpg",
            price: 6800,
            description: "açıklama10",
            city:"Bursa"
        },
        {
            name:"Xbox Series X",
            category:"Spor, Eğlence ve Oyun",
            image:"/images/product-11.jpg",
            price: 7485,
            description: "açıklama11",
            city:"Eskişehir"
        },
        {
            name:"Clean Code",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-12.jpg",
            price: 345,
            description: "açıklama12",
            city:"Eskişehir"
        },
        {
            name:"Prima Bebek Bezi",
            category:"Bebek ve Çocuk",
            image:"/images/product-13.jpg",
            price: 145,
            description: "açıklama13",
            city:"Trabzon"
        },
        {
            name:"Çalışma Masası",
            category:"Ev ve Bahçe",
            image:"/images/product-14.jpg",
            price: 289,
            description: "açıklama14",
            city:"Trabzon"
        },
        {
            name:"Drone",
            category:"Elektronik",
            image:"/images/product-15.png",
            price: 749,
            description: "açıklama15",
            city:"Diyarbakır"
        },
        {
            name:"H&M Erkek Gömlek",
            category:"Moda ve Aksesuar",
            image:"/images/product-16.jpg",
            price: 72,
            description: "açıklama16",
            city:"Diyarbakır"
        },
        {
            name:"Fiat Egea",
            category:"Araba",
            image:"/images/product-17.jpg",
            price: 579000,
            description: "açıklama17",
            city:"Hatay"
        },
        {
            name:"Logitech G105",
            category:"Elektronik",
            image:"/images/product-18.jpg",
            price: 174,
            description: "açıklama18",
            city:"Hatay"
        },
        {
            name:"Altın Kolye",
            category:"Moda ve Aksesuar",
            image:"/images/product-19.jpg",
            price: 1999,
            description: "açıklama19",
            city:"İstanbul"
        },
        {
            name:"Süpürge Makinesi",
            category:"Ev ve Bahçe",
            image:"/images/product-20.jpg",
            price: 460,
            description: "açıklama20",
            city:"İzmir"
        },
        {
            name:"Ah Şu Çılgın Türkler",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-21.jpg",
            price: 35,
            description: "açıklama21",
            city:"Edirne"
        }
     ]
};
export default data;