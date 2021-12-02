const applications = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Server',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    applied: '03/15/16',
    experience: 2,
    description: `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever been convicted of a felony?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Duane Taylor',
    position: 'Cook',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    applied: '02/08/16',
    experience: 4,
    description: `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    availability: {
      M: 1,
      T: 1,
      W: 1,
      Th: 1,
      F: 0,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever been convicted of a felony?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 3,
    name: 'David Jessup',
    position: 'Chef',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    applied: '03/08/16',
    experience: 2,
    description: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    availability: {
      M: 2,
      T: 2,
      W: 2,
      Th: 2,
      F: 2,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Are you authorized to work in the United States?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Clay vanSchalkwijk',
    position: 'Cook',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    applied: '03/08/16',
    experience: 1,
    description: `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.`,
    availability: {
      M: 1,
      T: 0,
      W: 1,
      Th: 0,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Are you authorized to work in the United States?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Darth Vader',
    position: 'Front-End',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    applied: '04/16/17',
    experience: 6,
    description: `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever traveled abroad?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Luke Skywalker',
    position: 'Back-End',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    applied: '05/17/18',
    experience: 9,
    description: `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you own a toaster?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
  {
    id: 7,
    name: 'Bill Clinton',
    position: 'UI/UX Designer',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    applied: '06/18/19',
    experience: 3,
    description: `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you require a visa for work in the United States?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Joe Biden',
    position: 'President',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
    applied: '07/19/20',
    experience: 4,
    description: `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you have access to a computer at home?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 9,
    name: 'Homer Simpson',
    position: 'Chief Officer',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    applied: '02/14/15',
    experience: 14,
    description: `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you believe in ghosts?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 10,
    name: 'Peter Griffin',
    position: 'Scientist',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    applied: '01/07/13',
    experience: 9,
    description: `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    availability: {
      M: 1,
      T: 1,
      W: 1,
      Th: 1,
      F: 0,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever seen a UFO?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
  {
    id: 11,
    name: 'Tom Hanks',
    position: 'Soccer Coach',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    applied: '07/18/06',
    experience: 4,
    description: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    availability: {
      M: 2,
      T: 2,
      W: 2,
      Th: 2,
      F: 2,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you like chocolate milkshakes?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 12,
    name: 'Christopher Nolan',
    position: 'Film Director',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
    applied: '05/17/21',
    experience: 3,
    description: `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.`,
    availability: {
      M: 1,
      T: 0,
      W: 1,
      Th: 0,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever seen bigfoot?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 13,
    name: 'Spongebob Squarepants',
    position: 'Principal Engineer',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    applied: '09/10/19',
    experience: 5,
    description: `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Do you know how to swim?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 14,
    name: 'Elon Musk',
    position: 'Engineer II',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
    applied: '07/03/11',
    experience: 8,
    description: `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Have you ever broken a bone?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
  {
    id: 15,
    name: 'Abe Lincoln',
    position: 'Referee',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
    applied: '11/02/14',
    experience: 6,
    description: `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Can you eat only burritos for the rest of your life?',
        answer: 'Yes',
      },
    ],
    isFavorite: false,
  },
  {
    id: 16,
    name: 'Chris Farley',
    position: 'Comedian',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
    applied: '12/25/20',
    experience: 13,
    description: `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    availability: {
      M: 2,
      T: 2,
      W: 1,
      Th: 2,
      F: 1,
      S: 0,
      Su: 0,
    },
    questions: [
      {
        text: 'Can you go to the bathroom all by yourself?',
        answer: 'No',
      },
    ],
    isFavorite: false,
  },
]

export default applications
