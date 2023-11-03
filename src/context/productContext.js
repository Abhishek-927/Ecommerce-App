const { useContext, createContext, useState } = require("react");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const products = [
    {
      _id: "01",
      name: "Bluetooth Headset",
      price: 899,
      photo: "image1.jpg",
      description:
        "Introducing truke Buds Q1 Plus - the pinnacle of audio innovation. Elevate your audio journey with the powerful 12mm Titanium Speakers, delivering unrivaled sound clarity and deep bass. Whether you're a music enthusiast, a dedicated gamer, or someone who appreciates exceptional audio quality, these wireless earbuds are the perfect companion for an immersive sonic experience. ",
      category: "Tech gadgets",
    },
    {
      _id: "02",
      name: "SeaRegal Analog Silver Clock",
      price: 340,
      photo: "image2.jpg",
      description:
        "STYLISH DESIGN - Featuring metal frame with matte finish. High contrast clock face that's easily readable for anyone. It is truly an attractive yet functional timepiece! HIGHLY FUNCTIONAL - In the search of a beautiful design, we did not abandon functionality.",
      category: "Clock",
    },
    {
      _id: "03",
      name: "Seashot with Google, Alexa & Siri Assistant Smart Speaker",
      price: 398,
      photo: "image3.jpg",
      description:
        "MZ M3 (PORTABLE BLUETOOTH MINI SPEAKER) Dynamic Thunder Sound with High Bass 5 W Bluetooth Speaker. Its splash-proof features let you to enjoy your music anywhere indoor/outdoor. You can match it to your style quotient ,eye-catching contrast wherever it goes and easily compliments anyone’s style Portable Wireless Speaker Echo and noise cancelling features for calls Easy to operate",
      category: "Tech gadgets",
    },
    {
      _id: "04",
      name: "SONY Alpha ILCE-7SM3 Full Frame + NP-FZ100 Battery Mirrorless Camera Body Only  (Black)",
      price: 296999,
      photo: "image4.jpg",
      description:
        "Taking the S series to a whole new level of full-frame movie expression, spectacular new speed combines with supreme sensitivity and ultra-low noise to put previously impossible 4K movie shoots on the menu, with high dynamic range, breathtaking focusing, and extra-strong image stabilisation",
      category: "Electronics",
    },
    {
      _id: "05",
      name: "SONY Alpha ILCE-7SM3 Full Frame + NP-FZ100 Battery Mirrorless Camera Body Only  (Black)",
      price: 296999,
      photo: "image5.jpg",
      description:
        "Taking the S series to a whole new level of full-frame movie expression, spectacular new speed combines with supreme sensitivity and ultra-low noise to put previously impossible 4K movie shoots on the menu, with high dynamic range, breathtaking focusing, and extra-strong image stabilisation",
      category: "Electronics",
    },
    {
      _id: "06",
      name: "SONY Alpha ILCE-7SM3 Full Frame + NP-FZ100 Battery Mirrorless Camera Body Only  (Black)",
      price: 296999,
      photo: "image6.jpg",
      description:
        "Taking the S series to a whole new level of full-frame movie expression, spectacular new speed combines with supreme sensitivity and ultra-low noise to put previously impossible 4K movie shoots on the menu, with high dynamic range, breathtaking focusing, and extra-strong image stabilisation",
      category: "Electronics",
    },
    {
      _id: "07",
      name: "Compare Share ZEBRONICS ZEB-PARADISE Bluetooth Headset  (Black, True Wireless)",
      price: 925,
      photo: "image7.jpg",
      description:
        "Zeb-Paradise is a wireless BT headphone that comes in an ergonomic design with soft earcups for comfort. The headphone has a built-in mic and comes with 11 hours of playback time. It also features a voice assistant for android/iOS devices, comes with controls for volume/media, and has a built-in FM Radio.",
      category: "Tech gadgets",
    },
    {
      _id: "08",
      name: "New Latest Designer Combo of 2 Analog Watch - For Men LR01-LR05",
      price: 279,
      photo: "image8.jpg",
      description:
        "Silver Dial Adjustable Length Stainless Steel Watch and Diamond King Bracelet Analog Watch - For Men PZ629",
      category: "Clock",
    },
    {
      _id: "09",
      name: "Primebook Wifi MT8183 - (4 GB/64 GB EMMC Storage/Prime OS) PB Wifi Thin and Light Laptop  (11.6 Inch, Royal Black, 1.065 Kg)",
      price: 10000,
      photo: "image9.jpg",
      description:
        "Primebook Wifi is more than just a laptop; it's your gateway to an enhanced learning experience. Tailored to meet the unique needs of students, this Android-based laptop seamlessly blends power, portability, and affordability.",
      category: "Electronics",
    },
    {
      _id: "10",
      name: "Primebook Wifi MT8183 - (4 GB/64 GB EMMC Storage/Prime OS) PB Wifi Thin and Light Laptop  (11.6 Inch, Royal Black, 1.065 Kg)",
      price: 10000,
      photo: "image10.jpg",
      description:
        "Primebook Wifi is more than just a laptop; it's your gateway to an enhanced learning experience. Tailored to meet the unique needs of students, this Android-based laptop seamlessly blends power, portability, and affordability.",
      category: "Electronics",
    },
    {
      _id: "11",
      name: "GrabBasket Analog 26 cm X 26 cm Wall Clock  (Gold, With Glass, Standard)",
      price: 239,
      photo: "image11.jpg",
      description:
        "GrabBasket Brings a designer 3D Look Unique Office Premium Quality wall clock to decorate your wall.This wall clock is a Standard design to decorate your wall offer a superlative way to place time on the wall. It is made of high quality material to ensure the accurate movement. These decorative wall clocks are a wonderful for your home wall. Ideal For: Room Decor, Clock For Bedroom, Clock For Hall Decor Smart and stylish addition to your home. Wall Mount, With Glass, Battery Powered : ,Alarm:No, Product Specification- Product Material- Plastic, Type of Clock-Designer Specifications",
      category: "Clock",
    },
    {
      _id: "12",
      name: "SAMSUNG Galaxy F34 5G (Orchid Violet, 128 GB)  (6 GB RAM)",
      price: 16499,
      photo: "image12.jpg",
      description:
        "Sporting a host of exciting features, this Samsung F34 takes you to a whole new level. Enjoy a smooth viewing experience with FHD+ and 120 Hz AMOLED Display. This phone is suitable for low-light conditions and doesn’t harm your eyes. The phone is durable with Gorilla Glass 5 protection. Enjoy taking vivid portraits on the 50 MP No Shake camera. Use the Auto Night Mode and Fun Mode to your advantage and shoot mind-blowing videos with 4K resolution. Powered by a 6000 mAh mammoth battery, your phone can run for up to 2 days. Experience uninterrupted network and connectivity with the 11 5G bands. With Knox Security, 128 GB of storage capacity, a powerful Exynos processor, a Samsung Wallet convenient payment system, and more, this phone simply eases your tasks and improves your productivity.",
      category: "Mobile",
    },
    {
      _id: "13",
      name: "SeaRegal Analog Silver Clock",
      price: 340,
      photo: "image13.jpg",
      description:
        "STYLISH DESIGN - Featuring metal frame with matte finish. High contrast clock face that's easily readable for anyone. It is truly an attractive yet functional timepiece! HIGHLY FUNCTIONAL - In the search of a beautiful design, we did not abandon functionality.",
      category: "Clock",
    },
    {
      _id: "14",
      name: "New Latest Designer Combo of 2 Analog Watch - For Men LR01-LR05",
      price: 279,
      photo: "image14.jpg",
      description:
        "Silver Dial Adjustable Length Stainless Steel Watch and Diamond King Bracelet Analog Watch - For Men PZ629",
      category: "Clock",
    },
    {
      _id: "15",
      name: "GrabBasket Analog 26 cm X 26 cm Wall Clock  (Gold, With Glass, Standard)",
      price: 239,
      photo: "image15.jpg",
      description:
        "GrabBasket Brings a designer 3D Look Unique Office Premium Quality wall clock to decorate your wall.This wall clock is a Standard design to decorate your wall offer a superlative way to place time on the wall. It is made of high quality material to ensure the accurate movement. These decorative wall clocks are a wonderful for your home wall. Ideal For: Room Decor, Clock For Bedroom, Clock For Hall Decor Smart and stylish addition to your home. Wall Mount, With Glass, Battery Powered : ,Alarm:No, Product Specification- Product Material- Plastic, Type of Clock-Designer Specifications",
      category: "Clock",
    },
    {
      _id: "16",
      name: "SAMSUNG Galaxy F34 5G (Orchid Violet, 128 GB)  (6 GB RAM)",
      price: 16499,
      photo: "image16.jpg",
      description:
        "Sporting a host of exciting features, this Samsung F34 takes you to a whole new level. Enjoy a smooth viewing experience with FHD+ and 120 Hz AMOLED Display. This phone is suitable for low-light conditions and doesn’t harm your eyes. The phone is durable with Gorilla Glass 5 protection. Enjoy taking vivid portraits on the 50 MP No Shake camera. Use the Auto Night Mode and Fun Mode to your advantage and shoot mind-blowing videos with 4K resolution. Powered by a 6000 mAh mammoth battery, your phone can run for up to 2 days. Experience uninterrupted network and connectivity with the 11 5G bands. With Knox Security, 128 GB of storage capacity, a powerful Exynos processor, a Samsung Wallet convenient payment system, and more, this phone simply eases your tasks and improves your productivity.",
      category: "Mobile",
    },
    {
      _id: "17",
      name: "EYEBOGLER Regular Men's Cotton Designer T-Shirt (EB1T67)",
      price: 234,
      photo: "image17.jpg",
      description: "EYEBOGLER Regular Men's Cotton Designer T-Shirt (EB1T67)",
      category: "Men",
    },
    {
      _id: "18",
      name: "Men Full Sleeve Printed Hooded Sweatshirt",
      price: 499,
      photo: "image18.jpg",
      description: "Men Full Sleeve Printed Hooded Sweatshirt",
      category: "Men",
    },
    {
      _id: "19",
      name: "CLUB 16 All In One Makeup Kit For Women And Girls shv14",
      price: 355,
      photo: "image19.jpg",
      description:
        "The products come in an amazing combination of shades that will add a perfect hint of color which will blend effortlessly with your look. Give instant glow to your skin on those special occasions.This Makeup Set copy all in one set That you need for professional makeup.This makeup combo kit Manufactured with good material and clinically tested.this combo kit is 100% safe.Buy and use it.",
      category: "Women",
    },
  ];

  const prices = [
    {
      name: "₹ 0 to 199",
      array: [0, 99],
    },
    {
      name: "₹ 200 to 399",
      array: [200, 399],
    },
    {
      name: "₹ 400 to 599",
      array: [400, 599],
    },
    {
      name: "₹ 600 to 799",
      array: [600, 799],
    },
    {
      name: "₹ 800 to 999",
      array: [800, 999],
    },
    {
      name: "₹ 1000 and more",
      array: [1000, 1000000],
    },
  ];

  return (
    <productContext.Provider value={{ prices, products }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
