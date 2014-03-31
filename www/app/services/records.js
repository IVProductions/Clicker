Clicker.factory('records',function() {
    var enemies = [
        // SUPERHEROES
        [
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
                "imageURL": "img/flash.png"
            },
            {
                "id": 5,
                "name": 'Iron Man',
                "health": 600,
                "armour": 12,
                "reward": 100,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/ironman.png"
            },
            {
                "id": 6,
                "name": 'Wonderwoman',
                "health": 800,
                "armour": 18,
                "reward": 200,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/wonderwoman.png"
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
        ], 
        // SUPERVILLAINS 
        [
            {
                "id": 1,
                "name": 'Morten Eriksen',
                "health": 100,
                "armour": 0,
                "reward": 2,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/captainamerica.png"
            },
            {
                "id": 2,
                "name": 'Morten Eriksen',
                "health": 24121231,
                "armour": 1231223,
                "reward": 11195548975,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/cptnew.png"
            }  
        ],
        // SOUTH PARK
        [
            {
                "id": 1,
                "name": 'Eric Cartman',
                "health": 50,
                "armour": 0,
                "reward": 2,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/cartman.png"
            },
            {
                "id": 2,
                "name": 'Stan Marsh',
                "health": 80,
                "armour": 2,
                "reward": 4,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/stan.png"
            },
            {
                "id": 3,
                "name": 'Kyle Broflovski',
                "health": 150,
                "armour": 4,
                "reward": 6,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/kyle.png"
            },
            {
                "id": 4,
                "name": 'Kenny McCormick',
                "health": 300,
                "armour": 6,
                "reward": 8,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/kenny.png"
            },
            {
                "id": 5,
                "name": 'Butters Stotch',
                "health": 500,
                "armour": 10,
                "reward": 10,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/butters.png"
            },
            {
                "id": 6,
                "name": 'Wendy Testaburger',
                "health": 800,
                "armour": 20,
                "reward": 12,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/wendy.png"
            },
            {
                "id": 7,
                "name": 'Token Black',
                "health": 1100,
                "armour": 25,
                "reward": 14,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/token.png"
            },
            {
                "id": 8,
                "name": 'Jimmy Valmer',
                "health": 1550,
                "armour": 30,
                "reward": 16,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/jimmy.png"
            },
            {
                "id": 9,
                "name": 'Timmy Burch',
                "health": 2000,
                "armour": 36,
                "reward": 18,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/timmy.png"
            },
            {
                "id": 10,
                "name": 'Craig Tucker',
                "health": 2500,
                "armour": 44,
                "reward": 20,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/craig.png"
            },
            {
                "id": 11,
                "name": 'Clyde Donovan',
                "health": 3000,
                "armour": 55,
                "reward": 22,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/clyde.png"
            },
            {
                "id": 12,
                "name": 'Randy Marsh',
                "health": 3600,
                "armour": 65,
                "reward": 24,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/randy.png"
            },
            {
                "id": 13,
                "name": 'Sharon Marsh',
                "health": 4200,
                "armour": 75,
                "reward": 26,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/sharon.png"
            },
            {
                "id": 14,
                "name": 'Gerald Broflovski',
                "health": 4900,
                "armour": 85,
                "reward": 28,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/gerald.png"
            },
            {
                "id": 15,
                "name": 'Sheila Broflovski',
                "health": 5700,
                "armour": 100,
                "reward": 30,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/sheila.png"
            },
            {
                "id": 16,
                "name": 'Liane Cartman',
                "health": 6500,
                "armour": 120,
                "reward": 32,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/liane.png"
            },
            {
                "id": 17,
                "name": 'Ike Broflovski',
                "health": 7300,
                "armour": 135,
                "reward": 34,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/ike.png"
            },
            {
                "id": 18,
                "name": 'Shelly Marsh',
                "health": 8200,
                "armour": 150,
                "reward": 36,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/shelly.png"
            },
            {
                "id": 19,
                "name": 'Stephen Stotch',
                "health": 9100,
                "armour": 160,
                "reward": 38,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/stephen.png"
            },
            {
                "id": 20,
                "name": 'Linda Stotch',
                "health": 10000,
                "armour": 200,
                "reward": 40,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/linda.png"
            },
            {
                "id": 21,
                "name": 'Stuart McCormick',
                "health": 11000,
                "armour": 220,
                "reward": 42,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/stuart.png"
            },
            {
                "id": 22,
                "name": 'Carol McCormick',
                "health": 12200,
                "armour": 245,
                "reward": 44,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/carol.png"
            },
            {
                "id": 23,
                "name": 'Jimbo Kern',
                "health": 13500,
                "armour": 275,
                "reward": 46,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/jimbo.png"
            },
            {
                "id": 24,
                "name": 'Bebe Stevens',
                "health": 15000,
                "armour": 290,
                "reward": 48,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/bebe.png"
            },
            {
                "id": 25,
                "name": 'Tweek Tweak',
                "health": 16500,
                "armour": 310,
                "reward": 50,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/tweak.png"
            },
            {
                "id": 26,
                "name": 'Al Gore',
                "health": 17800,
                "armour": 335,
                "reward": 52,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/algore.png"
            },
            {
                "id": 27,
                "name": 'Dougie',
                "health": 19000,
                "armour": 350,
                "reward": 54,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/dougie.png"
            },
            {
                "id": 28,
                "name": 'Terrance',
                "health": 21000,
                "armour": 370,
                "reward": 56,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/terrence.png"
            },
            {
                "id": 29,
                "name": 'Phillip',
                "health": 23200,
                "armour": 400,
                "reward": 58,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/philip.png"
            },
            {
                "id": 30,
                "name": 'Towelie',
                "health": 25000,
                "armour": 420,
                "reward": 60,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/towelie.png"
            },
            {
                "id": 31,
                "name": 'Mr. Hankey',
                "health": 26800,
                "armour": 445,
                "reward": 62,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mrhankey.png"
            },
            {
                "id": 32,
                "name": 'Ned',
                "health": 28200,
                "armour": 470,
                "reward": 64,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/ned.png"
            },
            {
                "id": 33,
                "name": 'Big Gay Al',
                "health": 30000,
                "armour": 520,
                "reward": 66,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/biggayal.png"
            },
            {
                "id": 34,
                "name": 'Starvin Marvin',
                "health": 32000,
                "armour": 560,
                "reward": 68,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/starvinmarvin.png"
            },
            {
                "id": 35,
                "name": 'ManBearPig',
                "health": 35000,
                "armour": 600,
                "reward": 70,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/manbearpig.png"
            },
            {
                "id": 36,
                "name": 'Satan',
                "health": 38000,
                "armour": 650,
                "reward": 72,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/satan.png"
            },
            {
                "id": 37,
                "name": 'Willzyx',
                "health": 41500,
                "armour": 700,
                "reward": 74,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/willzyx.png"
            },
            {
                "id": 38,
                "name": 'Crabpeople',
                "health": 44000,
                "armour": 750,
                "reward": 76,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/crabpeople.png"
            },
            {
                "id": 39,
                "name": 'Mecha Streisand',
                "health": 47000,
                "armour": 800,
                "reward": 78,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mechastreisand.png"
            },
            {
                "id": 40,
                "name": 'God',
                "health": 50000,
                "armour": 1000,
                "reward": 80,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/god.png"
            },
            {
                "id": 41,
                "name": 'Officer Barbrady',
                "health": 53000,
                "armour": 1200,
                "reward": 82,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/officerbarbrady.png"
            },
            {
                "id": 42,
                "name": 'Moses',
                "health": 56000,
                "armour": 1400,
                "reward": 84,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/moses.png"
            },
            {
                "id": 43,
                "name": 'Mr. Mackey',
                "health": 59000,
                "armour": 1600,
                "reward": 86,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mrmackey.png"
            },
            {
                "id": 44,
                "name": 'Chef',
                "health": 62000,
                "armour": 1800,
                "reward": 88,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/chef.png"
            },
            {
                "id": 45,
                "name": 'Captain Hindsight',
                "health": 65000,
                "armour": 2000,
                "reward": 90,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/captainhindsight.png"
            },
            {
                "id": 46,
                "name": 'Mr. Garrison',
                "health": 68000,
                "armour": 2200,
                "reward": 92,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mrgarrison.png"
            },
            {
                "id": 47,
                "name": 'Kanye West',
                "health": 71000,
                "armour": 2400,
                "reward": 94,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/kanyewest.png"
            },
            {
                "id": 48,
                "name": 'A.W.E.S.O.M-O',
                "health": 74000,
                "armour": 2600,
                "reward": 96,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/awesomo.png"
            },
            {
                "id": 49,
                "name": 'Marvin Marsh',
                "health": 77000,
                "armour": 2800,
                "reward": 98,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/marvinmarsh.png"
            },
            {
                "id": 50,
                "name": 'Jennifer Lopez',
                "health": 80000,
                "armour": 3000,
                "reward": 100,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/jenniferlopez.png"
            },
            {
                "id": 51,
                "name": 'Seaman',
                "health": 83000,
                "armour": 3200,
                "reward": 102,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/seaman.png"
            },
            {
                "id": 52,
                "name": 'Scott Tenorman',
                "health": 85000,
                "armour": 3400,
                "reward": 104,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/scotttenorman.png"
            },
            {
                "id": 53,
                "name": 'Mexican Staring Frog of Southern Sri Lanka',
                "health": 88000,
                "armour": 3600,
                "reward": 106,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mexicanfrog.png"
            },
            {
                "id": 54,
                "name": 'Seapeople',
                "health": 91000,
                "armour": 3800,
                "reward": 108,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/seapeople.png"
            },
            {
                "id": 55,
                "name": 'Mr. Slave',
                "health": 94000,
                "armour": 4000,
                "reward": 110,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mrslave.png"
            },
            {
                "id": 56,
                "name": 'Ranger McFriendly',
                "health": 97000,
                "armour": 4200,
                "reward": 112,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/rangermcfriendly.png"
            },
            {
                "id": 57,
                "name": 'Mr. Hat',
                "health": 100000,
                "armour": 4400,
                "reward": 114,
                "defeated": false,
                "guessed": false,
                "imageURL": "img/southpark/mrhat.png"
            }
        ]
    ]
    
    return {enemies:enemies};
})