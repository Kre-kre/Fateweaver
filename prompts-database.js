// FATEWEAVER - STORY SEEDS
// Evocative prompts that leave room for YOUR story

function getRandomPrompt(genre, characterId, eventId, worldId) {
    const prompts = {
        // FANTASY
        'fantasy-unreliable-narrator-betrayal-court': [
            "In the court, who is the liar and who is telling the truth? ",
            "A royal chronicler discovers their nightly edits to history have been changing reality itself.",
            "The king's most loyal advisor whispers a confession that makes you question every royal decree you've ever witnessed."
        ],
        'fantasy-tragic-hero-sacrifice-realm': [
            "The prophecy requires a willing sacrifice. The chosen one just realized they wrote the prophecy.",
            "Your legendary strength has saved countless lives. Today someone shows you what it's been costing.",
            "The spell to save the realm demands something you thought you'd already lost."
        ],
        'fantasy-shadow-self-choice-court': [
            "You meet your reflection in the royal mirror. It's been living its own life. You both want the same throne.",
            "The person who would have existed if you'd chosen differently is standing in front of you, asking for their life back.",
            "Your shadow speaks. It remembers every choice you didn't make."
        ],
        
        // SCI-FI
        'scifi-false-prophet-betrayal-planet': [
            "The colony's oracle broadcasts tomorrow's disasters. Today it predicts its own murder. By you.",
            "Your visions have guided millions to a promised world. You just realized where you've seen it before.",
            "The AI can see the future. It's been lying. You know because you can see it too."
        ],
        'scifi-tragic-hero-sacrifice-planet': [
            "To save the colony, someone must stay conscious in the planet's core. For centuries. You volunteered before reading the fine print.",
            "The FTL drive works. It just needs a human mind to power it. Your crew is looking at you.",
            "Every jump ages your mind while your body stays young. You can save everyone. You'll arrive as someone else."
        ],
        'scifi-shadow-self-revelation-dystopia': [
            "Your digital clone lives in paradise. Today it sent a message: 'I'm the real one. You're the simulation.'",
            "You're investigating your own cold case. The evidence points to you. Both versions of you.",
            "Each bug you fix in the code erases a piece of who you were. The final bug is labeled 'identity.exe'."
        ],
        
        // MYSTERY
        'mystery-unreliable-narrator-revelation-case': [
            "Your fingerprints are at crime scenes that haven't happened yet. The last one is tomorrow.",
            "Every killer you've caught describes the same childhood. Yours.",
            "You're investigating your partner's murder. You keep finding evidence you planted. You don't remember planting it."
        ],
        'mystery-shadow-self-betrayal-case': [
            "Your perfect solve rate has a pattern. Someone who looks exactly like you is creating the crimes.",
            "Your gut instincts are messages from a parallel you. Today the message is: 'Stop investigating.'",
            "The suspect confesses. Their alibi witness is you. You weren't there. Were you?"
        ],
        'mystery-outlier-choice-case': [
            "You found proof that frees the innocent. It also proves you're guilty of something worse.",
            "The conspiracy goes to the top. The only way to expose it destroys the person who believed in you.",
            "Tell the truth and condemn an innocent person. Stay silent and let the guilty go free. Both outcomes destroy families."
        ],
        
        // HORROR
        'horror-unreliable-narrator-revelation-dystopia': [
            "Your journal entries about the apocalypse don't match your memories. The journal is more accurate.",
            "You've been writing about the infection three days before it happens. You don't remember writing any of it.",
            "Your diary has entries in your handwriting describing events from perspectives you couldn't have had."
        ],
        'horror-shadow-self-sacrifice-realm': [
            "To seal the gateway, someone must become the door. Forever conscious. Forever in pain. Your shadow volunteers first.",
            "You're the barrier keeping nightmares from manifesting. If you die naturally, it holds. Someone wants you to die otherwise.",
            "Your inner demons can manifest. You can save everyone by giving up your humanity to become their prison."
        ],
        'horror-tragic-hero-revelation-realm': [
            "Your greatest power saved thousands. You just discovered what it's been feeding on.",
            "The skill that makes you humanity's defender is the same flaw that will destroy you. You can feel it starting.",
            "They call you their savior. The thing you defeated is showing you what you'll become."
        ],
        
        // ROMANCE
        'romance-tragic-hero-choice-court': [
            "You love two people. One loves your crown. One loves who you are beneath it. The choice reveals which version is real.",
            "The arranged marriage is a binding spell. So is the forbidden love. You can only break one bond.",
            "Your engagement preserves your family's legacy. Your heart threatens its future. One of these loves is a test."
        ],
        'romance-shadow-self-betrayal-realm': [
            "You fell in love with your parallel self from another dimension. Together, both realities collapse.",
            "The person you love is your soulmate's alternate self—the version who chose differently.",
            "You meet the you that made the opposite choice. That version is in love with someone you've never met. Should have never met."
        ],
        
        // THRILLER
        'thriller-false-prophet-betrayal-dystopia': [
            "Your predictions keep coming true because someone's making them happen. To discredit you. The next prediction is your death.",
            "You discovered the pattern. Reporting it prevents attacks but creates the system that causes them.",
            "Your conspiracy theory was right. Your anonymous source is an AI. Every revelation brings the war closer."
        ],
        'thriller-outlier-sacrifice-case': [
            "You can stop the killer by testifying. Your testimony destroys an operation protecting hundreds of others.",
            "The evidence saves one kidnapping victim now. Or protects the source who's locating dozens more.",
            "You have 72 hours. Release the evidence and crash the economy. Or let the conspiracy kill hundreds directly."
        ],
        
        // LITERARY
        'literary-unreliable-narrator-choice-realm': [
            "Your characters are real people in another world. The ending you write becomes their reality. You have three drafts.",
            "Your memoir shaped how your family remembers the past. You just found your original diary. It's different.",
            "You're translating ancient texts. Each word choice subtly rewrites history. The changes are accumulating."
        ],
        'literary-tragic-hero-revelation-court': [
            "Every peace treaty you brokered was built on a lie you didn't know you told. The truth means war.",
            "The case that made your career was based on evidence you misinterpreted. You freed the guilty. The innocent is still imprisoned.",
            "Your gift for resolving conflicts isn't a gift. Every resolution you created is artificial. Revealing it undoes decades."
        ],
        
        // HISTORICAL  
        'historical-outlier-betrayal-court': [
            "You found proof the queen is a foreign agent. Revealing it saves the kingdom but destroys the peace.",
            "The revolution was started by the people it claimed to overthrow. You have the documents. And the printing press.",
            "The king's lineage is false. The pretender has been the best ruler in generations. The true heir is gathering armies."
        ],
        'historical-shadow-self-sacrifice-realm': [
            "Everyone has a destined historical role. Yours is the villain. You can refuse and watch someone worse take it.",
            "You're the reincarnation of a historical monster. The memories are surfacing. What will you do with them?",
            "You can save millions by taking the place of a historical villain. Your family will inherit the shame forever."
        ]
    };
    
    const key = `${genre}-${characterId}-${eventId}-${worldId}`;
    
    if (prompts[key]) {
        return prompts[key][Math.floor(Math.random() * prompts[key].length)];
    }
    
    return generateStorySeed(characterId, eventId, worldId);
}

function generateStorySeed(characterId, eventId, worldId) {
    const seeds = {
        'unreliable-narrator': [
            "Your version of events keeps changing. Reality is changing with it.",
            "You've been narrating your life to someone. They just started answering back.",
            "Every time you tell the story, you remember it differently. Which version was true?"
        ],
        'false-prophet': [
            "Your visions are always slightly wrong. In helpful ways. Someone is editing them.",
            "Every prophecy came true except the most important one. You just realized why.",
            "The visions show the future. You're starting to recognize the past."
        ],
        'tragic-hero': [
            "Your greatest strength is killing the people you save. Slowly. Invisibly.",
            "The flaw that will destroy you is the quality that made you heroic.",
            "You were created to fail at the crucial moment. Now you know."
        ],
        'shadow-self': [
            "The person you could have been is hunting you. Only one of you should exist.",
            "Your reflection has been living a separate life. It knows things you don't.",
            "Your dark impulses aren't intrusive thoughts. They're warnings from your alternate self."
        ],
        'outlier': [
            "You're the only one who sees the pattern. Proving it destroys the comfortable lie.",
            "You notice something no one else does. Following it reveals conspiracy or madness. Both fit.",
            "You don't belong here. Today you discovered why. Everyone you love is part of it."
        ]
    };
    
    const base = seeds[characterId] || seeds['outlier'];
    const selected = base[Math.floor(Math.random() * base.length)];
    
    // Add contextual flavor based on world
    const worldContext = {
        'court': ' The throne room knows. The mirrors are watching.',
        'case': ' The evidence points in impossible directions.',
        'dystopia': ' The city has been waiting for this.',
        'planet': ' The stars have seen this before.',
        'realm': ' Magic always demands payment.'
    };
    
    // Randomly decide whether to add context (50%)
    if (Math.random() > 0.5 && worldContext[worldId]) {
        return selected + worldContext[worldId];
    }
    
    return selected;
}
