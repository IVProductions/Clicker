Clicker.factory('records',function() {
    var superheroes = [
        {
            "id": 1,
            "name": "Captain America",
            "health": 100,
            "armour": 0,
            "reward": 2,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/captainamerica.png"
        },
        {
            "id": 2,
            "name": 'Batman',
            "health": 200,
            "armour": 2,
            "reward": 10,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/batman.png"
        },
        {
            "id": 3,
            "name": 'Spider-Man',
            "health": 300,
            "armour": 4,
            "reward": 20,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/spiderman.png"
        },
        {
            "id": 4,
            "name": 'Flash',
            "health": 500,
            "armour": 8,
            "reward": 50,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/flash.jpg"
        },
        {
            "id": 5,
            "name": 'Iron Man',
            "health": 600,
            "armour": 12,
            "reward": 100,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/ironman.jpg"
        },
        {
            "id": 6,
            "name": 'Wonderwoman',
            "health": 800,
            "armour": 18,
            "reward": 200,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/wonderwoman.jpg"
        },
        {
            "id": 7,
            "name": 'Superman',
            "health": 1000,
            "armour": 22,
            "reward": 300,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/superman.jpg"
        },
        {
            "id": 8,
            "name": 'Thor',
            "health": 1200,
            "armour": 26,
            "reward": 450,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/thor.png"
        },
        {
            "id": 9,
            "name": 'Green Lantern',
            "health": 1440,
            "armour": 31,
            "reward": 675,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/greenlantern.jpg"
        },
        {
            "id": 10,
            "name": 'The Hulk',
            "health": 1800,
            "armour": 40,
            "reward": 1013,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/hulk.jpg"
        },
	   {
            "id": 11,
            "name": 'Wolverine',
            "health": 2500,
            "armour": 48,
            "reward": 1519,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/wolverine.jpg"
        },
	   {
            "id": 12,
            "name": 'Robin',
            "health": 3000,
            "armour": 48,
            "reward": 2278,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/robin.jpg"
        },
	   {
            "id": 13,
            "name": 'Black Canary',
            "health": 3600,
            "armour": 100,
            "reward": 3417,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/blackcanary.jpg"
        },
	   {
            "id": 14,
            "name": 'Cyborg',
            "health": 4320,
            "armour": 120,
            "reward": 5126,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/cyborg.jpg"
        },
	   {
            "id": 15,
            "name": 'Daredevil',
            "health": 5184,
            "armour": 144,
            "reward": 7689,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/daredevil.jpg"
        },
	   {
            "id": 16,
            "name": 'The Vision',
            "health": 6221,
            "armour": 173,
            "reward": 11533,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/thevision.jpg"
        },
	   {
            "id": 17,
            "name": 'Falcon',
            "health": 7465,
            "armour": 207,
            "reward": 17300,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/falcon.jpeg"
        },
	   { 
            "id": 18,
            "name": 'Aquaman',
            "health": 8958,
            "armour": 249,
            "reward": 25949,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/aquaman.jpg"
        },
	   {  
            "id": 19,
            "name": 'Mr. Fantastic',
            "health": 10750,
            "armour": 299,
            "reward": 38924,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/mrfantastic.jpg"
        },
	   {
            "id": 20,
            "name": 'Martian Manhunter',
            "health": 12899,
            "armour": 358,
            "reward": 58386,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/martianmanhunter.jpg"
        },
	   {
            "id": 21,
            "name": 'Ant-Man',
            "health": 15479,
            "armour": 430,
            "reward": 87579,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/antman.jpg"
        },
	   {
            "id": 22,
            "name": 'The Thing',
            "health": 18575,
            "armour": 516,
            "reward": 131368,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/thething.jpg"
        },
	   {
            "id": 23,
            "name": 'Catwoman',
            "health": 22290,
            "armour": 619,
            "reward": 197052,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/catwoman.jpg"
        },
	   {
            "id": 24,
            "name": 'Hawkgirl',
            "health": 26748,
            "armour": 743,
            "reward": 295578,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/hawkgirl.jpeg"
        },
	   {
            "id": 25,
            "name": 'Hawkeye',
            "health": 32098,
            "armour": 892,
            "reward": 443368,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/hawkeye.jpg"
        },
	   {
            "id": 26,
            "name": 'Hawkman',
            "health": 38518,
            "armour": 1070,
            "reward": 665051,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/hawkman.jpg"
        },
	   {
            "id": 27,
            "name": 'Storm',
            "health": 46221,
            "armour": 1284,
            "reward": 997577,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/storm.jpg"
        },
	   {
            "id": 28,
            "name": 'Black Panther',
            "health": 55465,
            "armour": 1541,
            "reward": 1496366,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/blackpanther.jpeg"
        },
	   {
            "id": 29,
            "name": 'Supergirl',
            "health": 66558,
            "armour": 1849,
            "reward": 2244548,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/supergirl.jpg"
        },
	   {
            "id": 30,
            "name": 'Iron Fist',
            "health": 79870,
            "armour": 2219,
            "reward": 3366822,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/ironfist.jpg"
        },
	   {
            "id": 31,
            "name": 'Doctor Fate',
            "health": 95844,
            "armour": 2662,
            "reward": 5050234,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/doctorfate.jpg"
        },
	   {
            "id": 32,
            "name": 'Beast',
            "health": 115013,
            "armour": 3195,
            "reward": 7575350,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/beast.jpg"
        },
	   { 
            "id": 33,
            "name": 'Black Widow',
            "health": 138015,
            "armour": 3834,
            "reward": 11366822,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/blackwidow.jpg"
        },
	   {  
            "id": 34,
            "name": 'Crimson Fox',
            "health": 165618,
            "armour": 4601,
            "reward": 17044539,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/crimsonfox.jpg"
        },
	   {
            "id": 35,
            "name": 'Stargirl',
            "health": 198742,
            "armour": 5521,
            "reward": 25566808,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/stargirl.jpg"
        },
	   {
            "id": 36,
            "name": 'Iceman',
            "health": 238491,
            "armour": 6625,
            "reward": 38350212,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/iceman.jpeg"
        },
	   {
            "id": 37,
            "name": 'Blue Beetle',
            "health": 286189,
            "armour": 7950,
            "reward": 57525318,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/bluebeetle.jpg"
        },
	   {
            "id": 38,
            "name": 'Zatanna',
            "health": 343426,
            "armour": 9540,
            "reward": 86287977,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/zatanna.jpg"
        },
	   {
            "id": 39,
            "name": 'Huntress',
            "health": 412112,
            "armour": 11448,
            "reward": 129431965,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/huntress.jpg"
        },
	   {
            "id": 40,
            "name": 'Atom',
            "health": 494534,
            "armour": 13737,
            "reward": 194147947,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/atom.jpg"
        },
	   {
            "id": 41,
            "name": 'Batgirl',
            "health": 593441,
            "armour": 16484,
            "reward": 291221921,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/batgirl.jpg"
        },
	   {
            "id": 42,
            "name": 'Green Arrow',
            "health": 712129,
            "armour": 19781,
            "reward": 436832882,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/greenarrow.jpg"
        },
	   {
            "id": 43,
            "name": 'Power Man',
            "health": 854555,
            "armour": 23738,
            "reward": 655249323,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/powerman.jpg"
        },
	   {
            "id": 44,
            "name": 'Colossus',
            "health": 1025466,
            "armour": 28485,
            "reward": 982873984,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/colossus.jpg"
        },
	   {
            "id": 45,
            "name": 'Captain Atom',
            "health": 1230559,
            "armour": 34182,
            "reward": 1474310976,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/captainatom.jpg"
        },
	   {
            "id": 46,
            "name": 'Cyclops',
            "health": 1476671,
            "armour": 41019,
            "reward": 2211466464,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/cyclops.jpg"
        },
	   {
            "id": 47,
            "name": 'Invisible Woman',
            "health": 1772005,
            "armour": 49222,
            "reward": 3317199696,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/invisiblewoman.jpg"
        },
	   {
            "id": 48,
            "name": 'General Glory',
            "health": 2126406,
            "armour": 59067,
            "reward": 4975799544,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/generalglory.jpeg"
        },
	   {
            "id": 49,
            "name": 'Firehawk',
            "health": 2551687,
            "armour": 70880,
            "reward": 7463699317,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/firehawk.jpg"
        },
	   {
            "id": 50,
            "name": 'Shazam',
            "health": 3062024,
            "armour": 85056,
            "reward": 11195548975,
            "defeated": false,
            "guessed": false,
            "imageURL": "img/shazam.jpeg"
        }
    ]

    if(window.localStorage.getItem("superheroes") != null){
        superheroes = JSON.parse(window.localStorage.getItem("superheroes"));
    };
    
    return {superheroes:superheroes};
})