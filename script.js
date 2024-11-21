// Jokes Array
const jokes = [
    "Why do Java developers wear glasses? Because they don’t C#. 😄👓💻",
    "Why was the computer cold? It left its Windows open. 🥶💻🌬️",
    "Why do programmers prefer dark mode? Because light attracts bugs. 🌚🐞💡",
    "How do you comfort a JavaScript bug? You console it. 😂📟💻",
    "Why did the database admin break up with their partner? They couldn’t handle the SQL injections. 😅🔒💔",
    "What’s a programmer’s favorite hangout place? Foo Bar. 🍻👨‍💻🍺",
    "Why do programmers hate nature? Too many bugs. 🐛🌳💻",
    "What do you call 8 Hobbits? A Hobbyte. 😆👣🧝‍♂️",
    "Why did the programmer quit their job? They didn’t get arrays. 😓💻🔢",
    "Why was the web developer broke? Because they didn’t know how to cache in. 💸🖥️🚫",
    "Why did the computer keep freezing? It left too many windows open. 🥶💻🪟",
    "Why was the JavaScript developer so bad at relationships? They couldn’t handle async communication. 😜💔📱",
    "Why don’t programmers like outdoor activities? They prefer their code to be indoors. 👨‍💻🌿❌",
    "How do you spot a programmer at a party? They’re the one in the corner debugging a problem on their phone. 🧑‍💻📱🔍",
    "Why was the Python developer upset? They felt like they were stuck in a loop. 😞🐍🔄",
    "How do you scare a C programmer? Say ‘segmentation fault.’ 👻💻⚠️",
    "Why was the network engineer late? They had too many packets to carry. 🚶‍♂️📦💻",
    "Why don’t programmers like to eat? They’d rather just loop through snacks. 🍕💻🔁",
    "I told my computer I needed a break, and now it won’t stop sending me KitKat ads. 😂💻🍫",
    "I’m not saying I’m bad at math, but the only time I can multiply is at a buffet. 😅🍽️➗",
    "I asked the librarian if the library had any books on paranoia. She whispered, 'They’re right behind you.' 🤔📚👀",
    "I once entered a programming contest and my code ran… away. 🏃‍♂️💻😆",
    "Why don’t sci-fi characters use elevators? Because they take everything to the next level. 🚀👾⬆️",
    "I tried solving a Rubik’s cube, but it looks like it solved my patience instead. 😤🔴🟢🟡",
    "I volunteered at a bakery, but they fired me for loafing around. 🍞😜🧑‍🍳",
    "AI may take over the world someday, but first, it needs to learn how to stop suggesting pineapple on pizza. 🍍🍕🤖",
    "I tried to teach my phone AI jokes, but it just kept autocorrecting to 'not funny.' 😂📱❌",
    "I have such a great memory that I remember all my past mistakes in HD quality. 😬💾📺",
    "I learn from my mistakes…which is why I’m such an expert now. 😆💡📚",
    "They say every thought has been thought before—so why isn’t there a meme about this yet? 🤔🧠💭",
    "Why did the developer go broke? Because they used up all their cache. 💸💻💾",
    "I tried to organize a hide-and-seek tournament, but good players are hard to find. 🕵️‍♂️👀🏆",
    "Why was the JavaScript developer sad? Because they didn’t know how to ‘null’ their feelings. 😞💔🖥️",
    "I told my Wi-Fi we needed to talk, and now it's giving me the silent treatment. 😶📶💔",
    "Debugging is like being a detective in a crime movie where you are also the murderer. 🕵️‍♀️💻🔍",
    "I renamed my Wi-Fi to 'Hack if you can'—now the neighbors keep asking for tips. 🤫💻🔐",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25. 🎄🎃💻",
    "I’m so good at sleeping, I can do it with my eyes closed. 😴💤👀",
    "I once made a belt out of watches. It was a complete waist of time. ⏰😂👖",
    "Parallel lines have so much in common… it’s a shame they’ll never meet. 😅↔️🚫",
    "I told my phone a joke, but it froze—it couldn’t handle my sense of humor. 😂📱🖥️",
    "Why did the scarecrow win an award? Because he was outstanding in his field. 🌾🏆😂"
];

// Generate Random Joke
function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").textContent = jokes[randomIndex];
}

function reactToJoke(reaction) {
    alert(`You reacted with: ${reaction}`);
}
let jokeRatings = { up: 0, down: 0 };

function rateJoke(rating) {
    jokeRatings[rating]++;
    alert(`Joke rated: ${rating === 'up' ? '👍' : '👎'}\nTotal Up: ${jokeRatings.up}, Total Down: ${jokeRatings.down}`);
}

