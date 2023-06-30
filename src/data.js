const foodMenu = [
  {
    nama: "Nasi Goreng",
    deskripsi: "Nasi yang digoreng dengan bumbu rempah khas Indonesia",
    harga: 25000,
    foto: "food/nasi-goreng.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Sate Ayam",
    deskripsi:
      "Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang",
    harga: 15000,
    foto: "food/sate-ayam.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Gado-Gado",
    deskripsi: "Sayuran segar dengan bumbu kacang khas Indonesia",
    harga: 20000,
    foto: "food/gado-gado.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Rendang",
    deskripsi:
      "Daging yang dimasak dengan santan dan rempah-rempah khas Padang",
    harga: 30000,
    foto: "food/rendang.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Soto Ayam",
    deskripsi: "Sup ayam dengan kuah kuning dan berbagai rempah",
    harga: 18000,
    foto: "food/soto-ayam.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Martabak",
    deskripsi:
      "Makanan dadakan yang terbuat dari adonan tepung dengan berbagai isian",
    harga: 20000,
    foto: "food/martabak.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Bakso",
    deskripsi: "Bola daging yang direbus disajikan dengan mie dan kuah kaldu",
    harga: 12000,
    foto: "food/bakso.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Soto Betawi",
    deskripsi: "Sup daging dengan kuah santan kental khas Betawi",
    harga: 22000,
    foto: "food/soto-betawi.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Ayam Penyet",
    deskripsi:
      "Ayam yang digeprek dengan bumbu rempah dan disajikan dengan sambal",
    harga: 18000,
    foto: "food/ayam-penyet.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
];

export default foodMenu;
