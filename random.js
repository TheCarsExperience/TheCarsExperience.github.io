var pics_array = [
"http://www.blogcdn.com/www.autoblog.com/media/2011/02/02-1296769505.jpg",
"https://vignette.wikia.nocookie.net/pixarcars/images/8/8a/Wp_c2_francesco_1920x1200-1-.jpg/revision/latest?cb=20110707225700",
"http://jimhillmedia.com/resized-image.ashx/__size/550x0/__key/CommunityServer-Blogs-Components-WeblogFiles/00-00-00-01-15/0777.c2cs_5F00_pkg_5F00_BGENGClassicBus1_5F00_2.pkg16.rbg.2R1_5F00_R_5F00_RGB.jpg",
"https://vignette.wikia.nocookie.net/jaimetarugo/images/3/30/Miss-nine-nouveaux-posters-du-film-cars-mack-poster-jpg-1276556_%281%29.jpg/revision/latest?cb=20130718235257&path-prefix=pt",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/03/siddeley-cars-2.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/04/zen-master-pixar-cars-2-1280.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/04/pinion-tanaka-pixar-cars-2-1280.jpg",
"http://www.blogcdn.com/www.autoblog.com/media/2011/04/cars-2-c2cspkgprincewheeliam11-pkg16-rgb-1rrgbrgb-1304107297.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/04/cars-2-c2cspkgqueenguard11-pkg16-rgb-1rrgb.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/02/01-1296769504.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/02/05-1296769507.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/03/tomber-cars-2.jpg",
"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2011/03/jeff-gorvette-cars-2-pixar.jpg",
]

var name_array = [ "Acer", "Francesco Bernoulli", "Topper Deckington III", "Mack", "Siddeley", "Zen Master", "Pinion Tanaka", "Prince Wheeliam of England", "Sgt. Highgear", "Grem", "Carla Veloso", "Tomber", "Jeff Gorvette",]

var description_array = [
  "Acer has always felt like an outcast in the car world. The beat-up green AMC Pacer joined forces with fellow \"lemon\" cars as henchmen for the devious Professor Z, whose clandestine mission is to wreak havoc at the highly visible World Grand Prix. Acer must hunt down the American and British secret agents who've stolen crucial information about Professor Z's underhanded plot-his primary target just happens to be Mater, who's been mistaken for a spy. Acer tries very hard to be a tough guy, but he's over\-eager compared to his no-nonsense accomplice Grem.",
  "Francesco Bernoulli grew up in the shadow of the famous Monza race course in Italy where he and his friends would sneak onto the track and race the famous Pista di Alta Velocita bank turn. He was an instant winner on the amateur circuit and soon became an international Formula Racer champion. The ladies love Francesco's open wheels, youngsters look up to his winning spirit and fellow racers envy his speed. But Francesco's biggest fan is Francesco himself, as evidenced by his racing number. As the most famous race car in Europe, #1 Francesco is a favorite to win the World Grand Prix, which also makes him McQueen's chief rival.",
  "Topper Deckington III is a classic British double\-decker bus in a vivid shade of red who relishes in his daily Killswitch route through London's famous bustling Petroldilly Circus.",
  "Mack",
  "Siddeley",
  "A master in the art of sculpting the serene zen rock garden at the Tokyo museum, Zen Master wears his old woven reed hat and uses his antique wood rake to create mesmerizing patterns in the garden's sand.",
  "Pinion Tanaka is a gold\-painted micro van and a professional Sumo wrestler from Tokyo, Japan, who's always a menacing sight in the ring in his signature teal mawashi.",
  "Prince Wheeliam of England is an avid racing fan. He can't believe his luck that the final race of the one\-of\-a\-kind World Grand Prix is happening on the streets of London. Though he must remain impartial when by his grandmother the Queen's side, he is privately rooting for his fellow Brits Lewis Hamilton and Nigel Gearsley to cross the finish line first.",
  "Sgt. Highgear is a member of the regiment assigned to London's landmark Buckingham Palace. With a recognizable tall bearskin cap atop his scarlet body, he stands guard at his sentry box with pride and conviction.",
  "Grem is a dented, rusty orange AMC Gremlin. After years of being dismissed for his design, even being called a \"lemon,\" Grem has a big chip on his fender that has led him to the underworld of international espionage. As a henchman for a villainous boss Professor Z, Grem and his partner\-in\-crime Acer are trying to sabotage the World Grand Prix and the famous race cars competing in it. When Grem and Acer mistake Mater for an American agent with important top\-secret information, the ruthless lemons set out on a round\-the\-globe chase to stop Mater from foiling their evil scheme.",
  "World Grand Prix contender Carla Veloso hails from Rio de Janiero, Brazil. The sweet but powerful Latin diva can dance the night away at \"Car\-nival,\" but spends most of her time on the racetrack. After setting a new track record at the local Interlagos circuit, she was drafted to join the 24-hour endurance racing team in Europe, where she posted a consistent series of podium finishes. In the World Grand Prix, the proud Brazilian Le Motor Prototype racer is the only female in the field, and Carla is ready to prove to the world that #8 is there to win for her home country.",
  "Tomber is a dubious little French car with an unusual, and very unstable, three\-wheeled design that befits the meaning of his name - to fall. By trade he deals car parts from a stall in a Parisian market \- though his questionable merchandise sources have led to his reluctant acquaintance with British secret agent Finn McMissile.",
  "Jeff Gorvette is one of the greatest American racecars alive today. Donning the stars and stripes of his country's flag, the #24 Corvette C6.R has proven his ability to succeed on the big ovals and the road courses of the Grand Touring Sports circuits. Having moved from his hometown of Vallejo, California to Indiana to be closer to the racing world, Gorvette's ability to accelerate at such a young age has turned hoods wherever he competes. His championships and number of victories are unmatched, making him a respected competitor\-and legitimate threat\-at the World Grand Prix.",

]

function my_function() {
  my_num = Math.floor(Math.random() * 13);
  document.getElementById('random_car').src=pics_array[my_num];
  document.getElementById('fate').innerHTML = name_array[my_num];
  document.getElementById('description').innerHTML = description_array[my_num];

}
