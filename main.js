const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZrPkL1s6zHO0b6iJ962yOzRosTAD2Ib59g&s',
        button: 'Grass Poison',
        count: 'Candy count: 25' ,
        kg: '6.9 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 2,
        name: 'Ivysaur',
        img: 'https://www.pngplay.com/wp-content/uploads/11/Ivysaur-Pokemon-Transparent-Free-PNG.png',
        button: 'Grass Poison',
        count: 'Candy count: 100' ,
        kg: '13.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },

    {
        id: 3,
        name: 'Venusaur',
        img: 'https://e7.pngegg.com/pngimages/62/63/png-clipart-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-thumbnail.png',
        button: 'Grass Poison',
        count: 'Candy count: undefined' ,
        kg: '100.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 4,
        name: 'Charmander',
        img: 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-charmander-clipart-pokemon-baby-illustration-firetype-art-vector-png-image_6799306.png',
        button: 'Fire',
        count: 'Candy count: 25' ,
        kg: '8.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 5,
        name: 'Charmeleon',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQs_uGMyGv5STbXSvCSxg4ocTNvAtdfucgA&s',
        button: 'Fire',
        count: 'Candy count: 100' ,
        kg: '1.9 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 6,
        name: 'Charizard',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5p9QuAABZ7-vlg_8mifL9JUdQyViWe4S2w&s',
        button: 'Fire flying',
        count: 'Candy count: undefined' ,
        kg: '90.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 7,
        name: 'Squirtle',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jf81oqFiMNS1xuIJUg6ax04-CMv3IesEQ&s',
        button: 'Water',
        count: 'Candy count: 25' ,
        kg: '9.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 8,
        name: 'Wartortle',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgOAvcKL4-L2lH_yJ1ifDFJVju2YIuZZjKQ&s',
        button: 'Water',
        count: 'Candy count: 100' ,
        kg: '22.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 9,
        name: 'Blastoise',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYSEV2atWM7ErinZh3vpZ81gOmXdJEqPYuA&s',
        button: 'Grass Poison',
        count: 'Candy count: underfined' ,
        kg: '85.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 10,
        name: 'Caterpie',
        img: 'https://img.favpng.com/9/8/21/caterpie-pok-mon-go-video-game-evolve-png-favpng-hBtxhvWQgn0rZDVNT8ffrCZRY.jpg',
        button: 'Water',
        count: 'Candy count: undefined' ,
        kg: '2.9 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 11,
        name: 'Metapod',
        img: 'https://www.pngplay.com/wp-content/uploads/11/Metapod-Pokemon-PNG-HD-Quality.png',
        button: 'Bug',
        count: 'Candy count: 50' ,
        kg: '9.9 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 12,
        name: 'Butterfree',
        img: 'https://img.favpng.com/16/7/13/pok-mon-red-and-blue-pok-mon-yellow-butterfree-art-png-favpng-nhgimJmpaCCrTM3Gxa05TBb7q.jpg',
        button: 'Bug flying',
        count: 'Candy count: undefined' ,
        kg: '32.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 13,
        name: 'Weedle',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJULZdvon2J-2il36skZNfgVw0yOgTdYktA&s',
        button: 'Bug Poison',
        count: 'Candy count: 12' ,
        kg: '3.2 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 14,
        name: 'Kakuna',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2s29opxZbqEQgCOIqUq4lYb2OFY85iD0yQ&s',
        button: 'Bug Poison',
        count: 'Candy count: 50' ,
        kg: '10.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 15,
        name: 'Beedrill',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyg7pE-diC387XR6Kjw1H6fA2-c9TZFVEQA&s',
        button: 'Bug Poison',
        count: 'Candy count: undefined' ,
        kg: '29.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 16,
        name: 'Pidgey',
        img: 'https://gimgs2.nohat.cc/thumb/f/350/hd-pidgeot-is-a-huge-bird-you-an-fly-on-her-pokemon-pidgeot--comdlpng6959109.jpg',
        button: 'Normal Flying',
        count: 'Candy count: 12' ,
        kg: '1.8 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 17,
        name: 'Pidgeotto',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvq9Vz58haYI5HU8oJzmPZqHt7ZF593WcPEg&s',
        button: 'Normal Flying',
        count: 'Candy count: 50' ,
        kg: '30.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 18,
        name: 'Pidgeot',
        img: 'https://img.favpng.com/10/23/5/pidgeotto-pok-mon-pokemon-black-white-pok-dex-png-favpng-gMg2H9hhWgtRWgVYZaLZben4q.jpg',
        button: 'Normal Flying',
        count: 'Candy count: underfined',
        kg: '39.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 19,
        name: 'Rattata',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iuf0CcvCjoEYvVfa8XvM1wj6fKm84yV8Lg&s',
        button: 'Normal',
        count: 'Candy count: 25' ,
        kg: '3.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 20,
        name: 'Raticate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKm7Vivs9W9ZQGxDBHfayPQUWSFa4EJDy3w&s',
        button: 'Normal',
        count: 'Candy count: undefined' ,
        kg: '18.5 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 21,
        name: 'Spearow',
        img: 'https://wallpapers.com/images/hd/spearow-flying-pokemon-h2zfar3nluc4iwbi.jpg',
        button: 'Normal Flying',
        count: 'Candy count: 50' ,
        kg: '2.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 22,
        name: 'Fearow',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vNv5RRvj4iOREW4WVNi3vZp4DceWOloopw&s',
        button: 'Normal Flying',
        count: 'Candy count: undefined' ,
        kg: '38.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 23,
        name: 'Ekans',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupEid9-55Qn58tXQLN0E9XUsdMt8VaTKzjQ&s',
        button: 'Poison',
        count: 'Candy count: 50' ,
        kg: '6.9 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 24,
        name: 'Arbok',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jI9ZnUNY7x7Y7jKjVdJGVs8VcvGoNbafvA&s',
        button: 'Poison',
        count: 'Candy count: undefined' ,
        kg: '65.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 25,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-26.gif',
        button: 'Electric',
        count: 'Candy count: 50' ,
        kg: '6.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 26,
        name: 'Raichu',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQDd2J-NdBJR6Fqz7-_sp_RigrpWAiRjy_Q&s',
        button: 'Electric',
        count: 'Candy count: undefined' ,
        kg: '30.0 kg',
        comment: 'Fire Ice Flying Psychic',
    

        
    },
    {
        id: 27,
        name: 'Sandshrew',
        img: 'https://e7.pngegg.com/pngimages/422/629/png-clipart-pokemon-sun-and-moon-pokemon-x-and-y-pokemon-gold-and-silver-sandshrew-others-cat-like-mammal-carnivoran-thumbnail.png',
        buttn: 'Ground',
        count: 'Candy count: 50',
        kg: '12.0 kg',
        comen: 'Fire Ice Flying Psychic',

        
    },  
    {
        id: 28,
        name: 'Sandslash',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOEmVJ2UC5iwPs4warP5NgeBanDH49X-EDA&s',
        buttn: 'Ground',
        count: 'Candy count: undefined',
        kg: '29.5 kg',
        comen: 'Fire Ice Flying Psychic',

        
    },  
    {
        id: 29,
        name: 'Nidoran ♀ (Female)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXzfWunGvBqXwajcaXMrtHgvo6GENsRzvsA&s',
        buttn: 'Poison',
        count: 'Candy count: 25',
        kg: '7.0 kg',
        comen: 'Fire Ice Flying Psychic',

        
    },
    {
        id: 30,
        name: 'Nidorina',
        img: 'https://w7.pngwing.com/pngs/417/425/png-transparent-pokemon-crystal-nidoran%E2%99%82-nidoran%E2%99%80-nidorino-others-thumbnail.png',
        buttn: 'Poison',
        count: 'Candy count: 100',
        kg: '20.0 kg',
        comen: 'Fire Ice Flying Psychic',

        
    },  

];


const content = document.querySelector('.content')
const div = document.createElement('div');
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');


function showDAta(data){

    content.innerHTML = '';

    data.map((value) => {

        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                        <h3>${value.name}</h3>
                        <br>
                        <img width='170px' src="${value.img}" alt="">
                        <br>
                        
                            <button class="title">${value.button}</button>
                            <br>
                        <h4 class="git">${value.count}</h4>
                        <br>
                        <p class="git">${value.kg}</p>

                        
                        
        
    `
        content.append(div);
    })
    
}




showDAta(pokemons);


btn.addEventListener('click' , ()=>{
    let inpVAlue = inp.value.toLowerCase();
    let filteredValue = pokemons.filter((value)=>value.name.toLowerCase() == inpVAlue);
    showDAta(filteredValue);
    inp.value = ''
    
    
})
