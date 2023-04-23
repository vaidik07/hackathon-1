function talk(){
    var know = {
        "What Is a Dinosaur?": "People sling the word dinosaur around an awful lot, without knowing precisely what it means—or how dinosaurs differed from the archosaurs that preceded them, the marine reptiles and pterosaurs with which they coexisted, or the birds to which they were ancestral",
        "Why Were Dinosaurs So Big?": "During the Mesozoic Era, which stretched from the beginning of the Triassic period 250 million years ago to the extinction of the dinosaurs at the end of the Cretaceous period 65 million years ago, atmospheric levels of carbon dioxide were much higher than they are today.",
        "When Did Dinosaurs Live?": "Dinosaurs ruled the Earth longer than any other terrestrial animals, all the way from the middle Triassic period (about 230 million years ago) to the end of the Cretaceous period (about 65 million years ago)",
        "How Did Dinosaurs Evolve?": "As far as paleontologists can tell, the first dinosaurs evolved from the two-legged archosaurs of late Triassic South America (these same archosaurs also gave rise to the very first pterosaurs and prehistoric crocodiles).",
        /*"Do you believe in God?": "I believe in Spinoza's God, who reveals himself in the lawful harmony of the world, not in a God who concerns himself with the fate and the doings of mankind.",
        "How did you come up with E=mc^2?": "The idea for E=mc^2 came to me while I was working in a patent office in Bern, Switzerland. I realized that mass and energy are two sides of the same coin.",
        "What do you think about the future of science?": "I believe that science will continue to advance, but it's up to us to use it wisely for the betterment of humanity.",
        "Goodbye": "It was a pleasure talking with you. Keep questioning the world around you!"*/
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }