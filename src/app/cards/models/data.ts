import { cakemodels } from "./cakemodels";
import { tags } from "./tag";


export const sample_items:cakemodels[]=[
    // birthday cakes
    {
        id:'1',
        name:'Choclate Cake',
        price:149,
        favorite:true,
        stars:3.0,
        image1:'../../assets/cards/Birthday Cakes/choclate cakes.png',
        image2:'../../assets/Discription/Des1.png',
        tags:['birthdaycakes'],
        eprice:299,
    },


    {
        id:'2',
        name:'Black Current',
        price:399,
        favorite:false,
        stars:4.0,
        image1:'../../assets/cards/Birthday Cakes/Black Current.webp',
        image2:'../../assets/Discription/Des1.png',
        tags:['birthdaycakes'],
        eprice:699,

    },

    {
        id:'3',
        name:'Orange Velvet',
        price:399,
        favorite:false,
        stars:5.0,
        image1:'../../assets/cards/Birthday Cakes/orange velvet cake.jpg',
        image2:'../../assets/Discription/Des1.png',
        tags:['sweety'],
        eprice:799,


    },

    {
        id:'4',
        name:'Red Velvet',
        price:479,
        favorite:false,
        stars:4.0,
        image1:'../../assets/cards/Birthday Cakes/Red velvet.jpg',
        image2:'../../assets/Discription/Des1.png',        
        tags:['birthdaycakes'],
        eprice:999,


    },

    {
        id:'5',
        name:'Walnut Cake',
        price:549,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/Birthday Cakes/walnut cake.jpg',
        image2:'../../assets/Discription/Des1.png',       
        tags:['birthdaycakes'],
        eprice:899,


    },

    {
        id:'6',
        name:'White Current',
        price:449,
        favorite:false,
        stars:5.0,
        image1:'../../assets/cards/Birthday Cakes/White current.jpg',
        image2:'../../assets/Discription/Des1.png',
        tags:['birthdaycakes'],
        eprice:1299,

    },

    {
        id:'7',
        name:'Whiteforest',
        price:399,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/Birthday Cakes/Whiteforest.jpg',
        image2:'../../assets/Discription/Des1.png',
        tags:['birthdaycakes'],
        eprice:699,

    },


    // cup cakes


    {
        id:'8',
        name:'DarkChoco Cake',
        price:149,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/cup cakes/cupcake1.jpg',
        image2:'../../assets/Discription/Des6.png',
        tags:['cupcakes'],
        eprice:799,


    },

    {
        id:'9',
        name:'Vennila Cake',
        price:399,
        favorite:false,
        stars:4.0,
        image1:'../../assets/cards/cup cakes/cupcake2.jpg',
        image2:'../../assets/Discription/Des6.png',     
        tags:['cupcakes'],
        eprice:799,

    },

    {
        id:'10',
        name:'Almonds Cake',
        price:399,
        favorite:false,
        stars:5.0,
        image1:'../../assets/cards/cup cakes/cupcake3.jpg',
        image2:'../../assets/Discription/Des6.png',
        tags:['cupcakes'],
        eprice:799,


    },

    {
        id:'11',
        name:'Pistha Cake',
        price:479,
        favorite:false,
        stars:4.0,
        image1:'../../assets/cards/cup cakes/cupcake4.jpg',
        image2:'../../assets/Discription/Des6.png',      
        tags:['cupcakes'],
        eprice:999,


    },

    {
        id:'12',
        name:'Butter Milk',
        price:549,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/cup cakes/cupcake5.jpg',
        image2:'../../assets/Discription/Des6.png',     
        tags:['cupcakes'],
        eprice:999,


    },

    {
        id:'13',
        name:'Dark Fantasy',
        price:449,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/cup cakes/cupcake6.jpg',
        image2:'../../assets/Discription/Des6.png',        
        tags:['cupcakes'],
        eprice:899,

    },

    {
        id:'14',
        name:'Ice Cream Cake',
        price:399,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/cup cakes/cupcake7.jpg',
        image2:'../../assets/Discription/Des6.png',          
        tags:['cupcakes'],
        eprice:899,

    },


    //desserts

    {
        id:'15',
        name:'Dry Choclate',
        price:149,
        favorite:true,
        stars:3.0,
        image1:'../../assets/cards/Dessert/dessert1.jpg',
        image2:'../../assets/Discription/Des4.png',           
        tags:['dessert'],
        eprice:299,

    },

    {
        id:'16',
        name:'Magnum',
        price:149,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/Dessert/dessert2.jpg',
        image2:'../../assets/Discription/Des4.png',          
        tags:['dessert'],
        eprice:299,


    },

    {
        id:'17',
        name:'Stawberry',
        price:199,
        favorite:false,
        stars:3.0,
        image1:'../../assets/cards/Dessert/dessert3.jpg',
        image2:'../../assets/Discription/Des4.png',           
        tags:['dessert'],
        eprice:299,


    }


]


export const sample_tags:tags[]=[
   {name:'All'},
   {name:'birthdaycakes'},
   {name:'cupcakes'},
   {name:'dessert'}
    
]