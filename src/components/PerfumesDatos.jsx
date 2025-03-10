
export const perfumesGeneral = [
    {   id:1,
        titulo:'CH Carolina Herrera',
        img: require('../images/ch.jpg'),
        precio: 25,
        tipo: 'women',
        stock: 15,
    },    
    {   id:2,
        titulo:'Shakira',
        img: require('../images/shakira.jpg'),
        precio: 25,
        tipo: 'women',
        stock: 15,
    },
    {   id:3,
        titulo:'Givenchy',
        img: require('../images/givenchy.jpg'),
        precio: 25,
        tipo: 'women',
        stock: 15,
    },
    {
        id: 4,
        titulo: '212 VIP',
        img: require('../images/212-VIP-woman.jpg'),
        precio:  35,
        tipo: 'women',
        stock: 15,        
    },
    {
        id: 5,
        titulo: 'Amor Amor',
        img: require('../images/Amor-Amor.jpg'),
        precio: 35,
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'women',
        stock: 15,        
    },
    {
        id: 6,
        titulo: 'Kenzo Flower',
        img: require('../images/kenzo-flower.jpg'),
        precio: 35,
        tipo: 'women',
        stock: 15,        
    },
    {
        id: 7,
        titulo: 'Tommy Hilfiger',
        img: require('../images/tommy-hilfiger-man.jpg'),
        precio: 35,
        tipo: 'men',
        stock: 15,        
    },
    {
        id: 8,
        titulo: '212 VIP Men',
        img: require('../images/212-VIP-men.jpg'),
        precio: 40,
        tipo: 'men',
        stock: 15,
    },
    {
        id: 9,
        titulo: 'The secret templation',
        img: require('../images/antonio-banderas.jpg'),
        precio: 40,
        tipo: 'men',
        stock: 15,
    },
    {
        id: 10,
        titulo: ' Invictus Legend',
        img: require('../images/InvictusLegend.jpg'),
        precio: 40,
        tipo: 'men',
        stock: 15,
    },
    {
        id: 11,
        titulo: 'Dior',
        img: require('../images/Dior.jpg'),
        precio: 40,
        tipo: 'men',
        stock: 15,
    },
    {
        id: 12,
        titulo: 'Mujercitas',
        img: require('../images/mujercitas.jpeg'),
        precio: 40,
        tipo: 'kids',
        stock: 15,
    },
    {
        id: 13,
        titulo: 'Paco',
        img: require('../images/paco.jpeg'),
        precio: 40,
        tipo: 'kids',
        stock: 15,
    },
    {
        id: 14,
        titulo: 'Paula Cahen Dánvers',
        img: require('../images/paula.jpeg'),
        precio: 40,
        tipo: 'kids',
        stock: 15,
    },
    {
        id: 15,
        titulo: 'Little paris baby boy',
        img: require('../images/little-paris.webp'),
        precio: 40,
        tipo: 'kids',
        stock: 15,
    },
    {
        id: 16,
        titulo: 'Kevingston',
        img: require('../images/kevingston-kids.webp'),
        precio: 40,
        tipo: 'kids',
        stock: 15,
    },
    {
        id: 17,
        titulo: 'Acqua Di Colbert',
        img: require('../images/acquaDiColbert.webp'),
        precio: 40,
        tipo: 'men',
        stock: 15,
    },
    {
        id: 18,
        titulo: 'Narciso',
        img: require('../images/narciso.webp'),
        precio: 40,
        tipo: 'women',
        stock: 15,
    },
    {
        id: 19,
        titulo: 'Armani',
        img: require('../images/armani.webp'),
        precio: 40,
        tipo: 'women',
        stock: 15,
    },
    {
        id: 20,
        titulo: 'Chance Chanel',
        img: require('../images/chanceChanel.webp'),
        precio: 40,
        tipo: 'women',
        stock: 15,
    }
];


export const traerPerfumes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(perfumesGeneral);
    }, 2000);
});