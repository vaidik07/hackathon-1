function talk(){
    var know = {
        "What is your favorite quote?": "Try not to become a man of success, but rather try to become a man of value.",
        "What did you study?": "I studied mathematics and physics in college, but my interests expanded to include philosophy and social issues later in life.",
        "What was your most significant discovery?": "I'm probably best known for developing the theory of relativity, which revolutionized our understanding of space and time.",
        "What advice would you give to young people today?": "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
        "Do you believe in God?": "I believe in Spinoza's God, who reveals himself in the lawful harmony of the world, not in a God who concerns himself with the fate and the doings of mankind.",
        "How did you come up with E=mc^2?": "The idea for E=mc^2 came to me while I was working in a patent office in Bern, Switzerland. I realized that mass and energy are two sides of the same coin.",
        "What do you think about the future of science?": "I believe that science will continue to advance, but it's up to us to use it wisely for the betterment of humanity.",
        "Goodbye": "It was a pleasure talking with you. Keep questioning the world around you!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }