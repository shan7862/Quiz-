const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Girafe", correct: false},
        ]
    },
    {
        question: "Which is the smallest co in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shir lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false },
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Horse", correct: false },
            { text: "Kangaroo", correct: false },
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "50°C", correct: false },
            { text: "100°C", correct: true },
            { text: "150°C", correct: false },
            { text: "200°C", correct: false },
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
        ]
    },
    {
        question: "Which gas do plants absorb for photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        question: "Who discovered gravity?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false },
        ]
    },
    {
        question: "Which metal is liquid at room temperature?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Mercury", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false },
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: false },
            { text: "Oxide", correct: false },
        ]
    },
    {
        question: "Which bird is known for its colorful feathers and mimicry skills?",
        answers: [
            { text: "Parrot", correct: true },
            { text: "Peacock", correct: false },
            { text: "Penguin", correct: false },
            { text: "Sparrow", correct: false },
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "James Watt", correct: false },
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Saturn", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false },
        ]
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        answers: [
            { text: "0°F", correct: false },
            { text: "32°F", correct: true },
            { text: "100°F", correct: false },
            { text: "212°F", correct: false },
        ]
    },
    {
        question: "Which ocean is the smallest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: false },
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false },
        ]
    },
    {
        question: "Which element is needed for bones to grow?",
        answers: [
            { text: "Iron", correct: false },
            { text: "Calcium", correct: true },
            { text: "Potassium", correct: false },
            { text: "Magnesium", correct: false },
        ]
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "Suzanne Collins", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of Maple Leaf?",
        answers: [
            { text: "United States", correct: false },
            { text: "Canada", correct: true },
            { text: "United Kingdom", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "What is the unit of electrical resistance?",
        answers: [
            { text: "Volt", correct: false },
            { text: "Ohm", correct: true },
            { text: "Ampere", correct: false },
            { text: "Watt", correct: false },
        ]
    },
    {
        question: "Which country has the most population in the world?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: true },
            { text: "United States", correct: false },
            { text: "Russia", correct: false },
        ]
    },
    {
        question: "Which fruit is known as the 'King of Fruits'?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Mango", correct: true },
            { text: "Banana", correct: false },
            { text: "Pineapple", correct: false },
        ]
    },
    {
        question: "Which blood type is a universal donor?",
        answers: [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true },
        ]
    },
    {
        question: "Which sport is known as the 'king of sports'?",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Soccer (Football)", correct: true },
            { text: "Tennis", correct: false },
            { text: "Cricket", correct: false },
        ]
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        answers: [
            { text: "France", correct: true },
            { text: "Germany", correct: false },
            { text: "United Kingdom", correct: false },
            { text: "Italy", correct: false },
        ]
    },
    {
        question: "How many players are there on a basketball team?",
        answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: false },
        ]
    },
    {
        question: "Which layer of the Earth is liquid?",
        answers: [
            { text: "Crust", correct: false },
            { text: "Outer core", correct: true },
            { text: "Mantle", correct: false },
            { text: "Inner core", correct: false },
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
        ]
    },
    {
        question: "What is the national currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Dollar", correct: false },
            { text: "Peso", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for table salt?",
        answers: [
            { text: "NaCl", correct: true },
            { text: "KCl", correct: false },
            { text: "CaCl2", correct: false },
            { text: "MgSO4", correct: false },
        ]
    },
    {
        question: "Which country is famous for tulips?",
        answers: [
            { text: "Belgium", correct: false },
            { text: "Netherlands", correct: true },
            { text: "Denmark", correct: false },
            { text: "Norway", correct: false },
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false },
        ]
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        answers: [
            { text: "Horse", correct: false },
            { text: "Camel", correct: true },
            { text: "Elephant", correct: false },
            { text: "Donkey", correct: false },
        ]
    },
    {
        question: "What is the smallest unit of life?",
        answers: [
            { text: "Tissue", correct: false },
            { text: "Cell", correct: true },
            { text: "Atom", correct: false },
            { text: "Organ", correct: false },
        ]
    },
    {
        question: "Which is the largest freshwater lake in the world by surface area?",
        answers: [
            { text: "Lake Victoria", correct: false },
            { text: "Lake Superior", correct: true },
            { text: "Lake Baikal", correct: false },
            { text: "Caspian Sea", correct: false },
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Venice", correct: false },
            { text: "Rome", correct: true },
            { text: "Milan", correct: false },
            { text: "Naples", correct: false },
        ]
    },
    {
        question: "Which planet is known for its rings?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "What is the study of weather called?",
        answers: [
            { text: "Geology", correct: false },
            { text: "Meteorology", correct: true },
            { text: "Oceanography", correct: false },
            { text: "Astronomy", correct: false },
        ]
    },
    {
        question: "What is the main ingredient in hummus?",
        answers: [
            { text: "Lentils", correct: false },
            { text: "Chickpeas", correct: true },
            { text: "Soybeans", correct: false },
            { text: "Potatoes", correct: false },
        ]
    },
    {
        question: "What does a thermometer measure?",
        answers: [
            { text: "Pressure", correct: false },
            { text: "Temperature", correct: true },
            { text: "Humidity", correct: false },
            { text: "Wind speed", correct: false },
        ]
    },
    {
        question: "Which continent has the most countries?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false },
            { text: "South America", correct: false },
        ]
    },
    {
        question: "Which organ is responsible for detoxifying the blood?",
        answers: [
            { text: "Kidney", correct: false },
            { text: "Liver", correct: true },
            { text: "Heart", correct: false },
            { text: "Lungs", correct: false },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false },
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Cytoplasm", correct: false },
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Galileo Galilei", correct: false },
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "450,000 km/s", correct: false },
            { text: "600,000 km/s", correct: false },
        ]
    },
    {
        question: "What is the primary ingredient in sushi?",
        answers: [
            { text: "Rice", correct: true },
            { text: "Noodles", correct: false },
            { text: "Chicken", correct: false },
            { text: "Bread", correct: false },
        ]
    },
    {
        question: "Which country is known for the Great Wall?",
        answers: [
            { text: "Japan", correct: false },
            { text: "China", correct: true },
            { text: "South Korea", correct: false },
            { text: "India", correct: false },
        ]
    },
    {
        question: "What does DNA stand for?",
        answers: [
            { text: "Deoxyribonucleic Acid", correct: true },
            { text: "Dynamic Neural Acid", correct: false },
            { text: "Digital Network Algorithm", correct: false },
            { text: "Data Neutral Agent", correct: false },
        ]
    },
    {
        question: "Which ocean is between Africa and Australia?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: true },
            { text: "Pacific Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        question: "Who wrote 'The Odyssey'?",
        answers: [
            { text: "Homer", correct: true },
            { text: "Sophocles", correct: false },
            { text: "Virgil", correct: false },
            { text: "Plato", correct: false },
        ]
    },
    {
        question: "Which organ pumps blood in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Heart", correct: true },
            { text: "Kidney", correct: false },
            { text: "Lungs", correct: false },
        ]
    },
    {
        question: "What type of star is the Sun?",
        answers: [
            { text: "Red Giant", correct: false },
            { text: "White Dwarf", correct: false },
            { text: "Main Sequence", correct: true },
            { text: "Neutron Star", correct: false },
        ]
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            { text: "Berlin", correct: true },
            { text: "Munich", correct: false },
            { text: "Frankfurt", correct: false },
            { text: "Hamburg", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Morning Star?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false },
        ]
    },
    {
        question: "What is the hardest rock on Earth?",
        answers: [
            { text: "Granite", correct: false },
            { text: "Diamond", correct: true },
            { text: "Basalt", correct: false },
            { text: "Marble", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "What is the national flower of Japan?",
        answers: [
            { text: "Lotus", correct: false },
            { text: "Cherry Blossom", correct: true },
            { text: "Rose", correct: false },
            { text: "Sunflower", correct: false },
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { text: "Femur", correct: false },
            { text: "Stapes", correct: true },
            { text: "Tibia", correct: false },
            { text: "Radius", correct: false },
        ]
    },
    {
        question: "Which country is known for inventing pizza?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Greece", correct: false },
            { text: "Spain", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ]
    },
    {
        question: "Which city is known as the Big Apple?",
        answers: [
            { text: "Los Angeles", correct: false },
            { text: "New York City", correct: true },
            { text: "Chicago", correct: false },
            { text: "San Francisco", correct: false },
        ]
    },
    {
        question: "What is the primary gas found in Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "Which is the longest bone in the human body?",
        answers: [
            { text: "Femur", correct: true },
            { text: "Humerus", correct: false },
            { text: "Tibia", correct: false },
            { text: "Fibula", correct: false },
        ]
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            { text: "Seoul", correct: true },
            { text: "Tokyo", correct: false },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "Which gas is used in balloons to make them float?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Helium", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: false },
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
        ]
    },
    {
        question: "What is the national sport of Canada?",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Ice Hockey", correct: true },
            { text: "Soccer", correct: false },
            { text: "Baseball", correct: false },
        ]
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "South America", correct: false },
            { text: "Antarctica", correct: false },
        ]
    },
    {
        question: "Which country is known for its pyramids?",
        answers: [
            { text: "India", correct: false },
            { text: "Egypt", correct: true },
            { text: "Peru", correct: false },
            { text: "Mexico", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "H2", correct: false },
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Bill Gates", correct: false },
        ]
    },
    {
        question: "Which country has the longest coastline in the world?",
        answers: [
            { text: "Australia", correct: false },
            { text: "Canada", correct: true },
            { text: "Russia", correct: false },
            { text: "United States", correct: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Granite", correct: false },
            { text: "Diamond", correct: true },
            { text: "Steel", correct: false },
            { text: "Quartz", correct: false },
        ]
    },
    {
        question: "Which is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oxide", correct: false },
            { text: "Olmium", correct: false },
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false },
        ]
    },
    {
        question: "Which gas do plants primarily use for photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false },
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false },
        ]
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "North America", correct: false },
        ]
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false },
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Pluto", correct: false },
        ]
    },
    {
        question: "Which country has the highest population in the world?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: true },
            { text: "United States", correct: false },
            { text: "Indonesia", correct: false },
        ]
    },
    {
        question: "Which animal is known for changing its color to blend in?",
        answers: [
            { text: "Octopus", correct: false },
            { text: "Chameleon", correct: true },
            { text: "Squid", correct: false },
            { text: "Cuttlefish", correct: false },
        ]
    },
    {
        question: "What is the freezing point of water in Celsius?",
        answers: [
            { text: "0°C", correct: true },
            { text: "10°C", correct: false },
            { text: "32°C", correct: false },
            { text: "100°C", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        question: "Which chemical element has the symbol 'C'?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Carbon", correct: true },
            { text: "Cobalt", correct: false },
            { text: "Copper", correct: false },
        ]
    },    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();