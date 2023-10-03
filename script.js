
function generateStory() {
    const stories = [
        "The antique mirror reflected a different time and place when she touched its surface.",
        "They exchanged vows under the ancient oak tree, their love as enduring as its branches.",
        "The handwritten recipe held the key to recreating the taste of her grandmother's love",
        "With a final keystroke, he sent the message that changed her life forever.",
        "The lost key opened a door to a world she never knew existed.",
        "She whispered her wish to the shooting star, and it whispered back.",
        "In the attic, they found an old letter that revealed a long-forgotten family secret.",
        "The cat and the mouse formed an unexpected alliance to outsmart the cunning dog.",
        "He gazed into her eyes, and in that moment, they both knew they were meant to be.",
        "The empty swing swayed gently in the breeze, a silent reminder of happier days.",
        "With a single word, the spell was broken, and the dragon transformed into a prince.",
        "The old tree in the park had witnessed generations of love stories, and it kept their secrets well.",
        "The lighthouse's beam of light guided the lost ship to safety, a beacon of hope in the storm.",
        "The antique mirror reflected a different time and place when she touched its surface.",
        "They exchanged vows under the ancient oak tree, their love as enduring as its branches.",
        "The handwritten recipe held the key to recreating the taste of her grandmother's love.",
        "As the last puzzle piece clicked into place, the picture revealed a hidden treasure map.",
        "The little girl's laughter echoed through the forest, bringing it to life with her joy."
    
        
    ];

    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];
    const generatedStory = replacePlaceholders(randomStory);
    
    const storyContainer = document.getElementById("story-container");
    storyContainer.innerHTML = generatedStory;
}

function replacePlaceholders(story) {
    const placeholders = ["{adjective}", "{noun}", "{verb}", "{adverb}"];
    const randomWords = ["silly", "unicorn", "dance", "happily"];
    
    for (let i = 0; i < placeholders.length; i++) {
        const placeholder = placeholders[i];
        const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        story = story.replace(placeholder, randomWord);
    }
    
    return story;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateStory);
