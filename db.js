const films = [
    {
        id: 1,
        title: "Avatar",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        synopsis: "Jake Sully, un ex-marine parapléjico, es enviado al planeta Pandora en una misión especial. Allí, se enamora de Neytiri y se une a los Na'vi en su lucha contra la explotación de su mundo.",
        genre: "Ciencia ficción",
        releaseDate: "2009-12-18",
        minimumAge: 13,
        film_studio: "20th Century Fox",
        actors: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang", "Giovanni Ribisi"],
        score: 3    
    },
    {
        id: 2,
        title: "Avengers: Endgame",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        synopsis: "Después de los devastadores eventos de Infinity War, los Vengadores restantes deben encontrar una forma de revertir el daño causado por Thanos y restaurar el equilibrio del universo.",
        genre: "Acción",
        releaseDate: "2019-04-26",
        minimumAge: 13,
        film_studio: "Marvel Studios",
        actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
        score: 5
    },
    {
        id: 3,
        title: "Avatar: El sentido del agua",
        image: "https://es.web.img3.acsta.net/pictures/22/09/22/00/41/3934412.jpg",
        synopsis: "Jake Sully y Neytiri han formado una familia en Pandora, pero deben dejar su hogar y explorar nuevas regiones cuando una antigua amenaza regresa para terminar lo que comenzó.",
        genre: "Ciencia ficción",
        releaseDate: "2022-12-16",
        minimumAge: 13,
        film_studio: "20th Century Studios",
        actors: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang", "Kate Winslet"],
        score: 3
    },
    {
        id: 4,
        title: "Titanic",
        image: "https://http2.mlstatic.com/D_NQ_NP_895494-CBT75024123129_032024-O.webp",
        synopsis: "Jack y Rose, dos jóvenes de diferentes clases sociales, se enamoran a bordo del Titanic, pero su amor es puesto a prueba cuando el barco enfrenta su trágico destino.",
        genre: "Romance",
        releaseDate: "1997-12-19",
        minimumAge: 13,
        filmStudio: "20th Century Fox",
        actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Bill Paxton"],
        score: 5
    },
    {
        id: 5,
        title: "Star Wars: El despertar de la fuerza",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
        synopsis: "Treinta años después de la caída del Imperio, una nueva amenaza se alza en la forma de la Primera Orden. Rey, una chatarrera con un misterioso pasado, se une a la resistencia en la lucha contra Kylo Ren.",
        genre: "Ciencia ficción",
        releaseDate: "2015-12-18",
        minimumAge: 12,
        filmStudio: "Lucasfilm",
        actors: ["Daisy Ridley", "John Boyega", "Harrison Ford", "Adam Driver", "Oscar Isaac"],
        score: 2
    },
    {
        id: 6,
        title: "Avengers: Infinity War",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
        synopsis: "Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo para detener a Thanos antes de que destruya el universo con el poder de las Gemas del Infinito.",
        genre: "Acción",
        releaseDate: "2018-04-27",
        minimumAge: 11,
        filmStudio: "Marvel Studios",
        actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Josh Brolin"],
        score: 3
    },
    {
        id: 7,
        title: "Spider-Man: No Way Home",
        image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        synopsis: "Después de que su identidad es revelada, Peter Parker busca la ayuda del Doctor Strange para restaurar su secreto. Sin embargo, el hechizo sale mal y villanos de otros universos comienzan a aparecer.",
        genre: "Acción",
        releaseDate: "2021-12-17",
        minimumAge: 8,
        filmStudio: "Marvel Studios",
        actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Willem Dafoe", "Alfred Molina", "Andrew Garfield", "Tobey Maguire"],
        score: 2
    },
    {
        id: 8,
        title: "Jurassic World",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg",
        synopsis: "Jurassic World es un parque temático en una isla donde los dinosaurios han sido clonados. Cuando un nuevo dinosaurio modificado genéticamente escapa, el caos se desata y un equipo debe detenerlo antes de que cause una catástrofe.",
        genre: "Aventura",
        releaseDate: "2015-06-12",
        minimumAge: 9,
        filmStudio: "Universal Pictures",
        actors: ["Chris Pratt", "Bryce Dallas Howard", "Vincent D'Onofrio", "Ty Simpkins", "Irrfan Khan"],
        score: 4
    },
    {
        id: 9,
        title: "El Rey León",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqWj78zqH_pJ4C6D-8-xyNeeVv_hzUweigw&s",
        synopsis: "Simba, un joven león, huye tras la trágica muerte de su padre, el Rey Mufasa. Años después, con la ayuda de sus amigos, regresa para reclamar su legítimo lugar en la Roca del Rey.",
        genre: "Animación",
        releaseDate: "2019-07-19",
        minimumAge: 7,
        filmStudio: "Walt Disney Pictures",
        actors: ["Donald Glover", "Beyoncé", "James Earl Jones", "Chiwetel Ejiofor", "Seth Rogen"],
        score: 4
    },
    {
        id: 10,
        title: "Los Vengadores",
        image: "https://es.web.img3.acsta.net/c_310_420/pictures/14/03/10/10/35/587504.jpg",
        synopsis: "Nick Fury, director de S.H.I.E.L.D., reúne a un equipo de superhéroes para detener a Loki y su ejército, que amenazan con conquistar la Tierra.",
        genre: "Acción",
        releaseDate: "2012-04-25",
        minimumAge: 10,
        filmStudio: "Marvel Studios",
        actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Samuel L. Jackson"],
        score: 1
    },
    {
        id: 11,
        title: "Rápidos y Furiosos 7",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg",
        synopsis: "Dominic Toretto y su equipo regresan a la acción cuando un asesino busca venganza por la caída de su hermano. Entre autos veloces y acrobacias imposibles, enfrentan su desafío más peligroso.",
        genre: "Acción",
        releaseDate: "2015-04-03",
        minimumAge: 12,
        filmStudio: "Universal Pictures",
        actors: ["Vin Diesel", "Paul Walker", "Dwayne Johnson", "Michelle Rodriguez", "Jason Statham"],
        score: 3
    },
    {
        id: 12,
        title: "Top Gun: Maverick",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
        synopsis: "Después de más de 30 años de servicio, Pete 'Maverick' Mitchell sigue desafiando los límites como piloto de combate. Ahora debe entrenar a una nueva generación de aviadores para una misión peligrosa.",
        genre: "Acción",
        releaseDate: "2022-05-27",
        minimumAge: 14,
        filmStudio: "Paramount Pictures",
        actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm", "Glen Powell"],
        score: 3
    },
    {
        id: 13,
        title: "Frozen 2",
        image: "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg",
        synopsis: "Elsa, Anna, Kristoff, Olaf y Sven emprenden un viaje más allá de Arendelle para descubrir el origen de los poderes de Elsa y salvar su reino de una amenaza desconocida.",
        genre: "Animación",
        releaseDate: "2019-11-22",
        minimumAge: 4,
        filmStudio: "Walt Disney Animation Studios",
        actors: ["Idina Menzel", "Kristen Bell", "Josh Gad", "Jonathan Groff", "Evan Rachel Wood"],
        score: 4
    },
    {
        id: 14,
        title: "Avengers: La era de Ultrón",
        image: "https://play-lh.googleusercontent.com/YUVES8ttvjbbbNb_A5MSrMKXFPAkTI0Hu-eZshQy3t_Tjd8IS8-onDSEVfR5_FX0fj7HHA",
        synopsis: "Los Vengadores deben unirse nuevamente cuando Tony Stark y Bruce Banner crean a Ultrón, una inteligencia artificial con la misión de proteger la paz mundial, pero que termina convirtiéndose en una amenaza para la humanidad.",
        genre: "Acción",
        releaseDate: "2015-04-23",
        minimumAge: 13,
        filmStudio: "Marvel Studios",
        actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "James Spader", "Elizabeth Olsen", "Aaron Taylor-Johnson"],
        score: 2
    },
    {
        id: 15,
        title: "Barbie",
        image: "https://image.tmdb.org/t/p/original/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg",
        synopsis: "Barbie vive en Barbieland, un mundo perfecto donde todo es color de rosa. Sin embargo, cuando comienza a cuestionar su existencia, se embarca en una aventura en el mundo real para descubrir su verdadero propósito.",
        genre: "Comedia",
        releaseDate: "2023-07-21",
        minimumAge: 9,
        filmStudio: "Warner Bros. Pictures",
        actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera", "Kate McKinnon", "Will Ferrell"],
        score: 2
    },
    {
        id: 16,
        title: "Harry Potter y las Reliquias de la Muerte – Parte 2",
        image: "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg",
        synopsis: "En la batalla final entre el bien y el mal, Harry Potter y sus amigos deben enfrentarse a Lord Voldemort en un enfrentamiento épico que decidirá el destino del mundo mágico.",
        genre: "Fantasía",
        releaseDate: "2011-07-15",
        minimumAge: 9,
        filmStudio: "Warner Bros. Pictures",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Ralph Fiennes", "Alan Rickman"],
        score: 1
    },
    {
        id: 17,
        title: "Super Mario Bros: La Película",
        image: "https://image.tmdb.org/t/p/original/ayNZUP2yIMn1YJ0R0eRGJZQxZW7.jpg",
        synopsis: "Mario y Luigi, dos hermanos fontaneros de Brooklyn, son transportados al Reino Champiñón, donde deben unirse a la princesa Peach para detener a Bowser y salvar el mundo.",
        genre: "Animación",
        releaseDate: "2023-04-05",
        minimumAge: 6,
        filmStudio: "Illumination Entertainment",
        actors: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black", "Keegan-Michael Key"],
        score: 2
    },
    {
        id: 18,
        title: "La Bella y la Bestia",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Beauty_and_the_Beast_2017_poster.jpg",
        synopsis: "Bella, una joven inteligente y valiente, se convierte en prisionera de una Bestia en su castillo encantado. A medida que conoce a la Bestia, descubre que la verdadera belleza está en el interior.",
        genre: "Fantasía",
        releaseDate: "2017-03-17",
        minimumAge: 8,
        filmStudio: "Walt Disney Pictures",
        actors: ["Emma Watson", "Dan Stevens", "Luke Evans", "Kevin Kline", "Josh Gad"],
        score: 4
    },
    {
        id: 19,
        title: "El Señor de los Anillos: El Retorno del Rey",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnLsE3R2tb9xstjYIw4ysHDOQWp5pq4PlJQ&s",
        synopsis: "Mientras Frodo y Sam avanzan hacia el Monte del Destino para destruir el Anillo Único, Aragorn lidera a las fuerzas de la Tierra Media en la batalla final contra Sauron.",
        genre: "Fantasía",
        releaseDate: "2003-12-17",
        minimumAge: 11,
        filmStudio: "New Line Cinema",
        actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Orlando Bloom"],
        score: 3
    },
    {
        id: 20,
        title: "Toy Story 4",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
        synopsis: "Woody, Buzz y el resto de los juguetes emprenden una nueva aventura cuando Bonnie crea a Forky, un juguete hecho a mano que se siente fuera de lugar. En su viaje, Woody se reencuentra con Bo Peep y enfrenta una difícil decisión sobre su futuro.",
        genre: "Animación",
        releaseDate: "2019-06-21",
        minimumAge: 4,
        filmStudio: "Pixar Animation Studios",
        actors: ["Tom Hanks", "Tim Allen", "Annie Potts", "Tony Hale", "Keegan-Michael Key"],
        score: 4
    },
    {
        id: 21,
        title: "Joker",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
        synopsis: "Arthur Fleck, un comediante con problemas mentales, lucha por encontrar su lugar en una sociedad cruel. Su descenso a la locura lo transforma en el icónico villano conocido como Joker.",
        genre: "Drama",
        releaseDate: "2019-10-04",
        minimumAge: 16,
        filmStudio: "Warner Bros. Pictures",
        actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy", "Brett Cullen"],
        score: 5
    },
    {
        id: 22,
        title: "Piratas del Caribe: En Mareas Misteriosas",
        image: "https://m.media-amazon.com/images/I/51+5iFMjW7L._AC_UF894,1000_QL80_.jpg",
        synopsis: "El capitán Jack Sparrow se embarca en una aventura en busca de la Fuente de la Juventud, enfrentándose a viejos enemigos, nuevos rivales y la misteriosa pirata Angelica.",
        genre: "Aventura",
        releaseDate: "2011-05-20",
        minimumAge: 12,
        filmStudio: "Walt Disney Pictures",
        actors: ["Johnny Depp", "Penélope Cruz", "Geoffrey Rush", "Ian McShane", "Kevin McNally"],
        score: 2
    },
    {
        id: 23,
        title: "Piratas del Caribe: El Cofre del Hombre Muerto",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerAywnhzq1P_JClnN5iWpycdXxNmeTfTfhQ&s",
        synopsis: "El capitán Jack Sparrow se enfrenta a una deuda de sangre con el legendario Davy Jones. Mientras intenta escapar de su destino, Will Turner y Elizabeth Swann se ven envueltos en una peligrosa aventura llena de traiciones y criaturas marinas.",
        genre: "Aventura",
        releaseDate: "2006-07-07",
        minimumAge: 12,
        filmStudio: "Walt Disney Pictures",
        actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Geoffrey Rush"],
        score: 4
    },
    {
        id: 24,
        title: "Transformers: La Era de la Extinción",
        image: "https://http2.mlstatic.com/D_NQ_NP_921916-MLU70876225722_082023-O.webp",
        synopsis: "Después de la batalla de Chicago, la humanidad ha comenzado a cazar a los Transformers. Un mecánico y su hija descubren a Optimus Prime, lo que los lleva a una nueva guerra contra una amenaza más grande que nunca.",
        genre: "Acción",
        releaseDate: "2014-06-27",
        minimumAge: 11,
        filmStudio: "Paramount Pictures",
        actors: ["Mark Wahlberg", "Stanley Tucci", "Kelsey Grammer", "Nicola Peltz", "Jack Reynor"],
        score: 1
    },
    {
        id: 25,
        title: "Skyfall",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Skyfall_poster.jpg",
        synopsis: "Cuando la identidad de los agentes encubiertos del MI6 es expuesta, James Bond debe enfrentarse a su propio pasado mientras protege a M y combate a un enemigo con una venganza personal.",
        genre: "Acción",
        releaseDate: "2012-10-26",
        minimumAge: 13,
        filmStudio: "Metro-Goldwyn-Mayer",
        actors: ["Daniel Craig", "Javier Bardem", "Judi Dench", "Ralph Fiennes", "Naomie Harris"],
        score: 5
    }
  ];

module.exports = films;

// Frozen (2013) – Dirigida por Chris Buck y Jennifer Lee

// Los Increíbles 2 (2018) – Dirigida por Brad Bird
// Rápidos y Furiosos 8 (2017) – Dirigida por F. Gary Gray
// Iron Man 3 (2013) – Dirigida por Shane Black
// Minions (2015) – Dirigida por Pierre Coffin y Kyle Balda
// Capitán América: Civil War (2016) – Dirigida por Anthony y Joe Russo
// Aquaman (2018) – Dirigida por James Wan

// Spider-Man: Lejos de Casa (2019) – Dirigida por Jon Watts
// Capitana Marvel (2019) – Dirigida por Anna Boden y Ryan Fleck
// Transformers: El Lado Oscuro de la Luna (2011) – Dirigida por Michael Bay


// Jurassic Park (1993) – Dirigida por Steven Spielberg
// El Caballero Oscuro: La Leyenda Renace (2012) – Dirigida por Christopher Nolan
// 
// Star Wars: El Ascenso de Skywalker (2019) – Dirigida por J.J. Abrams

// Toy Story 3 (2010) – Dirigida por Lee Unkrich

// El Rey León (1994) – Dirigida por Roger Allers y Rob Minkoff
// Rogue One: Una Historia de Star Wars (2016) – Dirigida por Gareth Edwards
// Aladdin (2019) – Dirigida por Guy Ritchie
