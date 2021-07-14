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
            city:"Kastamonu"
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
            city:"Afyonkarahisar"
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
            city:"Kahramanmaraş"
        },
        {
            name:"Prima Bebek Bezi",
            category:"Bebek ve Çocuk",
            image:"/images/product-13.jpg",
            price: 145,
            description: "açıklama13",
            city:"Gaziantep"
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
            city:"Gaziantep"
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
        },
        {
            name:"JBL Taşınabilir Hoparlör",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-22.jpg",
            price: 347,
            description: "JBL Go 2 Ipx7 Bluetooth Taşınabilir Hoparlör Bordo",
            city:"Gaziantep"
        },
        {
            name:"Saç Düzleştirici",
            category:"Elektronik",
            image:"/images/product-23.jpg",
            price: 3999,
            description: "Dyson Corrale Kablosuz Saç Düzleştirici",
            city:"Edirne"
        },
        {
            name:"Kazanlı Ütü Sistemi",
            category:"Elektronik",
            image:"/images/product-24.jpg",
            price: 8699,
            description: "Laurastar System Smart U Buhar Kazanlı Ütü Sistemi Siyah",
            city:"Kırklareli"
        },
        {
            name:"Waffle Makinesi",
            category:"Elektronik",
            image:"/images/product-25.jpg",
            price: 276,
            description: "Korkmaz Mia Kırmızı Waffle Makinesi",
            city:"İstanbul"
        },
        {
            name:"Michael Kors Saat",
            category:"Moda ve Aksesuar",
            image:"/images/product-26.jpg",
            price: 1999,
            description: "Michael Kors MK5735 Altın Kaplama Kadın Saati",
            city:"Antalya"
        },
        {
            name:"Çocuk Oto Koltuğu",
            category:"Bebek ve Çocuk",
            image:"/images/product-27.jpg",
            price: 890,
            description: "Baby2Go Mangofix 360 Derece Dönebilen Yatabilen Isofixli 0-36 Kg Çocuk Oto Koltuğu - Denim Black",
            city:"Eskişehir"
        },
        {
            name:"Filtre Kahve Makinesi",
            category:"Elektronik",
            image:"/images/product-28.jpg",
            price: 498,
            description: "Arzum AR3046 Brewtime Filtre Kahve Makinesi - Siyah",
            city:"Bursa"
        },
        {
            name:"Bebek Sütü",
            category:"Bebek ve Çocuk",
            image:"/images/product-29.jpg",
            price: 414,
            description: "Golden Goat 1 Keçi Sütü Bazlı Devam Sütü 400 gr - 12'li",
            city:"Edirne"
        },
        {
            name:"Era Şapka",
            category:"Moda ve Aksesuar",
            image:"/images/product-30.jpg",
            price: 319,
            description: "New ERA 9forty Kadın Yavru Ağzı Şapka",
            city:"Afyonkarahisar"
        },
        {
            name:"Guess Cüzdan",
            category:"Moda ve Aksesuar",
            image:"/images/product-31.jpg",
            price: 694,
            description: "Guess Deri Cüzdan, Standart, Kırmızı",
            city:"Antalya"
        },
        {
            name:"Vans Sneaker",
            category:"Moda ve Aksesuar",
            image:"/images/product-32.jpg",
            price: 673,
            description: "Vans MY WARD PLATFORM Siyah Kadın Sneaker Ayakkabı",
            city:"Kırklareli"
        },
        {
            name:"Puma Sweatshirt",
            category:"Moda ve Aksesuar",
            image:"/images/product-33.jpg",
            price: 265,
            description: "Puma Kadın Siyah Rtg Pamuklu Fermuarlı Sweatshirt",
            city:"Kastamonu"
        },
        {
            name:"Oysho Spor Çantası",
            category:"Moda ve Aksesuar",
            image:"/images/product-34.jpeg",
            price: 299,
            description: "Oysho Kadın Koyu Pembe Askıları Logolu Spor Çantası",
            city:"Sivas"
        },
        {
            name:"Feder Ya Paragöz Koca",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-35.png",
            price: 40,
            description: "İş Bankası Kültür Yayınları Feder Ya Da Paragöz Koca",
            city:"Trabzon"
        },
        {
            name:"Mahkumun Son Günü",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-36.png",
            price: 8.50,
            description: "İş Bankası Kültür Yayınları Bir İdam Mahkumunun Son Günü (Karton Kapak)",
            city:"Sivas"
        },
        {
            name:"Marvel Thor",
            category:"Film, Kitap ve Müzik",
            image:"/images/product-37.jpg",
            price: 8.50,
            description: "MARVEL Thor (blu-ray Disc)",
            city:"Kahramanmaraş"
        },
        {
            name:"Hisar Tencere Seti",
            category:"Ev ve Bahçe",
            image:"/images/product-38.jpg",
            price: 695,
            description: "Hisar 68162 Milas Kırmızı 8 Parça Tencere Seti",
            city:"İstanbul"
        },
        {
            name:"Everc Şelale",
            category:"Ev ve Bahçe",
            image:"/images/product-39.jpg",
            price: 8399,
            description: "Everc Led Işıklı Yapay Bahçe Şelale",
            city:"Sivas"
        },
        {
            name:"Nevresim Takımı",
            category:"Ev ve Bahçe",
            image:"/images/product-41.jpg",
            price: 449,
            description: "Karaca Home Vella Yeşil Rnf Nevresim Takımı Jakar Battaniye Seti",
            city:"Ankara"
        }
     ]
};
export default data;