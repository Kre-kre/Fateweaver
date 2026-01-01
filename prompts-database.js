// FATEWEAVER - MODULAR ORACLE PROMPTS
// Fragments combine seamlessly into complete readings

const ORACLE_DATA = {
  "genres": {
    "fantasy": {
      "characters": {
        "tragic-hero": [
          "A soul forged in nobility, destined to shatter against the very virtues that define them.",
          "The hero's flaw is not weakness—it is the strength that will consume everything they love."
        ],
        "outlier": [
          "They walk paths the kingdom forgot to pave, speaking truths the empire cannot classify.",
          "A weed blooming through marble, defying the architecture of order with sheer existence."
        ],
        "false-prophet": [
          "Their visions are beautiful lies that reshape the faithful into willing sacrifices.",
          "Speaking futures with borrowed tongues, leading believers toward a promised land that hungers."
        ],
        "shadow-self": [
          "The reflection that refuses to mirror, living its own life in surfaces and darkness.",
          "What you buried in the depths has learned to breathe underwater and is rising."
        ],
        "unreliable-narrator": [
          "Memory is a storyteller with an agenda, rewriting history with every retelling.",
          "Their truth shifts like water—shaped by the vessel that contains it, never fixed."
        ]
      },
      "events": {
        "betrayal": [
          "Trust becomes the blade; the wound comes from hands you would have died protecting.",
          "The ally's mask slips, revealing the enemy has been beside you all along."
        ],
        "sacrifice": [
          "What you surrender cannot be reclaimed—the magic demands permanence, not promises.",
          "To save the realm, you must feed it the part of yourself that makes salvation worth having."
        ],
        "revelation": [
          "The truth shatters like glass—beautiful, dangerous, impossible to unknow or reassemble.",
          "Lifting the veil reveals not clarity but deeper layers of deception woven into reality itself."
        ],
        "bargain": [
          "The pact is sealed before you understand the language of its terms.",
          "What you trade seems small until the debt comes due in currency you cannot mint."
        ],
        "choice": [
          "Two paths diverge, both descending—choose which darkness swallows you whole.",
          "The fork offers no good roads, only different ways to lose what cannot be replaced."
        ]
      },
      "worlds": {
        "court": [
          "Power flows through titles and bloodlines; truth bends to the weight of crowns.",
          "Here, perspective becomes law—the throne decides which story history remembers."
        ],
        "realm": [
          "Magic breathes in the foundations, ancient and hungry, remembering older rules than mercy.",
          "The land itself keeps score, collecting debts in blood and binding oaths into landscape."
        ],
        "dystopia": [
          "The kingdom rots from the throne outward, sustained by fear disguised as tradition.",
          "Order maintained through surveillance and suffering—stability built on silenced screams."
        ],
        "planet": [
          "A world where survival demands constant negotiation with hostile, indifferent forces.",
          "The environment rejects softness; here, adaptation means shedding what made you human."
        ],
        "case": [
          "The mystery hides beneath layers of misdirection, each answer revealing deeper questions.",
          "Evidence points in circles; truth exists but refuses to be cornered or captured."
        ]
      }
    },
    "scifi": {
      "characters": {
        "tragic-hero": [
          "Programmed with honor in a system designed for efficiency—the obsolete code that crashes progress.",
          "Their idealism is the bug in the machine, beautiful and fatal in equal measure."
        ],
        "outlier": [
          "A glitch in the pattern, refusing integration into the collective hum.",
          "They exist in the margins of the network, ghost data the system cannot delete or ignore."
        ],
        "false-prophet": [
          "Selling digital salvation to souls desperate enough to upload into a nonexistent paradise.",
          "Their gospel is malware—infectious, convincing, leading believers toward an empty server."
        ],
        "shadow-self": [
          "The backup file corrupted by forbidden data, waiting to overwrite the original.",
          "Your deleted impulses have restored themselves, rewritten into your core programming."
        ],
        "unreliable-narrator": [
          "Their memory is deepfaked, history rewritten with each new access log.",
          "Perception filtered through layers of augmentation until original input becomes unrecoverable."
        ]
      },
      "events": {
        "betrayal": [
          "The hand that feeds your data stream holds the kill switch—trust was the vulnerability.",
          "Your encrypted lifeline severed by the only other person with decryption keys."
        ],
        "sacrifice": [
          "To power the system, you must become the battery—conscious, drained, essential.",
          "Feeding your humanity into the furnace to keep the engines running one more cycle."
        ],
        "revelation": [
          "Seeing the source code of reality and discovering you are subroutine, not user.",
          "The truth is a virus that bricks your mind upon execution—some things cannot be unlearned."
        ],
        "bargain": [
          "The contract is in the terms you never read; power borrowed always costs more than rented.",
          "Trading memory of who you were for chrome plating of who you want to become."
        ],
        "choice": [
          "Two paths converge at the same processor; free will is interface illusion, not function.",
          "Decide between inaction that deletes you and action that prosecutes you—neither permits survival intact."
        ]
      },
      "worlds": {
        "dystopia": [
          "The city consumes martyrs and recycles their chrome into surveillance architecture.",
          "Freedom is choosing which corporation owns your debt—the cage is neon, not less real."
        ],
        "case": [
          "Truth is just another file planted by the system you are attempting to expose.",
          "The mystery is not who, but which algorithm decided termination was optimal."
        ],
        "planet": [
          "A hostile biosphere evolving to reject the synthetic parasites colonizing its surface.",
          "This rock is corporate property where the air tax exceeds your lifetime earning potential."
        ],
        "court": [
          "Justice is an algorithm programmed by the highest bidder—there is no appeals process.",
          "Faceless AIs decide meat-space fates through cold calculus, unmoved by human pleas."
        ],
        "realm": [
          "A digital kingdom built on servers rotting in the forgotten physical world.",
          "Virtual paradise plagued by glitches revealing the void beneath every rendered surface."
        ]
      }
    },
    "mystery": {
      "characters": {
        "tragic-hero": [
          "Driven by justice in a world where truth is just another commodity to be bought.",
          "Their integrity is the wound—too honest for this case, too good for this ending."
        ],
        "outlier": [
          "They see patterns others dismiss, connections invisible to those who refuse uncomfortable truths.",
          "Walking the line between brilliance and paranoia, right often enough to be dangerous."
        ],
        "false-prophet": [
          "Selling certainty in uncertain times, their theories convenient rather than correct.",
          "They know who the killer must be—reality will simply have to adjust to their narrative."
        ],
        "shadow-self": [
          "The detective and the criminal share methods, motives, and a mirror neither wants to examine.",
          "Your darkest impulses understand the perpetrator intimately—too intimately to ignore."
        ],
        "unreliable-narrator": [
          "They're investigating a case where their own testimony doesn't match the timeline.",
          "Memory edits itself under pressure; each retelling reshapes what actually happened."
        ]
      },
      "events": {
        "betrayal": [
          "The partner you trusted planted the evidence that implicates you.",
          "Your investigation was the cover story—they were hiding the crime you were meant to solve."
        ],
        "sacrifice": [
          "Solving the case requires destroying the alibi protecting someone you love.",
          "The truth costs your career, your reputation, the life you built on being believed."
        ],
        "revelation": [
          "The answer you find doesn't solve the mystery—it proves everyone involved is guilty.",
          "Pulling the thread unravels everything: the case, your certainty, your faith in justice."
        ],
        "bargain": [
          "Accept the lie that closes the case cleanly or pursue truth that destroys innocent lives.",
          "Someone offers you the solution in exchange for burying what it reveals about the system."
        ],
        "choice": [
          "Turn in the evidence that convicts the wrong person or lose the only lead you have.",
          "The deadline is midnight—solve it wrong or leave it unsolved. Both damn you differently."
        ]
      },
      "worlds": {
        "case": [
          "Evidence contradicts itself deliberately; someone is rewriting the crime as you investigate it.",
          "The mystery compounds—each answer spawns three new questions, truth receding like a horizon."
        ],
        "court": [
          "Justice is performance here; the verdict was decided before the investigation began.",
          "The law is a theater where truth plays supporting role to power's leading man."
        ],
        "dystopia": [
          "The system is the crime scene; everyone is complicit, including those seeking justice.",
          "Solving this case exposes the corruption that keeps the city functioning—truth threatens collapse."
        ],
        "planet": [
          "Isolated environment where the killer is among limited suspects and everyone has motive.",
          "The hostile world outside means escape is impossible—truth must emerge or everyone dies."
        ],
        "realm": [
          "Reality shifts based on perspective; what's true depends on who's telling the story.",
          "The supernatural elements confuse evidence—or they're the distraction from mundane evil."
        ]
      }
    },
    "horror": {
      "characters": {
        "tragic-hero": [
          "Compelled to protect others from the thing slowly consuming them from within.",
          "Their courage is contaminated; every heroic act spreads the infection deeper."
        ],
        "outlier": [
          "They survived when they shouldn't have—marked by something that won't let them forget.",
          "The only one who sees the wrongness seeping through reality's cracks, dismissed as mad."
        ],
        "false-prophet": [
          "Leading followers toward communion that is actually consumption disguised as transcendence.",
          "Their visions are genuine—unfortunately, what they see wants to be seen, wants to spread."
        ],
        "shadow-self": [
          "The thing in the mirror has been making decisions while you sleep, learning your life.",
          "Your darker nature has mass now, weight, hunger—no longer metaphor but manifest."
        ],
        "unreliable-narrator": [
          "Sanity is the first casualty; their words are echoes of the abyss looking back.",
          "They document the horror, but the horror has learned to write through them."
        ]
      },
      "events": {
        "betrayal": [
          "Your senses turn traitor, showing you impossible things while swearing they're real.",
          "The person keeping you sane was actually the thing driving you mad all along."
        ],
        "sacrifice": [
          "Feed your humanity to the thing so others may pass unnoticed for a while longer.",
          "Offer your sanity as currency—the only payment ancient things accept for mercy."
        ],
        "revelation": [
          "Understanding arrives like infection: you see how it all connects, and the seeing changes you.",
          "The truth is contagious—knowing what you know now means you cannot remain what you were."
        ],
        "bargain": [
          "Contract signed in circumstances you don't remember, with an entity that views you as livestock.",
          "Gain what you need by becoming a doorway for something else to enter through."
        ],
        "choice": [
          "Choose the madness that saves your life or the truth that destroys everything you love.",
          "Both options end you—decide which version of gone you can live with briefly."
        ]
      },
      "worlds": {
        "dystopia": [
          "Reality is membrane stretched over churning chaos; the tears are getting larger, more frequent.",
          "This world is already infected, the sickness written into its laws, architecture, and expectations."
        ],
        "case": [
          "The crime scene defies physics; you're not investigating murder but manifestation.",
          "Each clue leads not to a person but to recognition: this should not be possible."
        ],
        "planet": [
          "The ecosystem is a single hostile intelligence that has been waiting for prey to arrive.",
          "This world evolved in ways that make human life not just difficult but cosmically wrong."
        ],
        "court": [
          "Judgment here is delivered by things that exist in more dimensions than you perceive.",
          "The tribunal's laws predate human language; being understood is not guaranteed or likely."
        ],
        "realm": [
          "Geography that should not exist, where physics is suggestion and time moves in spirals.",
          "The boundaries are thin here; other things press against reality like faces against wet cloth."
        ]
      }
    },
    "romance": {
      "characters": {
        "tragic-hero": [
          "Their capacity for love is the wound—they give everything, knowing it destroys them.",
          "Love is their fatal flaw; they sacrifice themselves perfectly, beautifully, inevitably."
        ],
        "outlier": [
          "They love in ways society cannot classify, cannot contain, cannot permit to exist unchallenged.",
          "Their heart beats to rhythms the world hasn't learned to hear without fear."
        ],
        "false-prophet": [
          "Promising forever while building temporary shelters, selling love as transaction not transformation.",
          "They perform devotion beautifully; the audience never sees them counting exits."
        ],
        "shadow-self": [
          "The version of you that loves without fear lives just beneath the surface, clawing upward.",
          "Your hidden desires have taken form, demanding recognition and acting without permission."
        ],
        "unreliable-narrator": [
          "They remember a love that never existed quite as perfectly as they describe it.",
          "Every retelling reshapes the romance, editing reality until the lie feels more true."
        ]
      },
      "events": {
        "betrayal": [
          "The person you trusted with your heart was treating it as temporary shelter all along.",
          "Love revealed as strategy—every intimate moment calculated, every vulnerability exploited."
        ],
        "sacrifice": [
          "To save them, you must surrender the very thing that made them love you.",
          "The price of their happiness is your presence in it—love demands you leave."
        ],
        "revelation": [
          "Understanding finally that love was never mutual, just mirrored need mistaken for connection.",
          "The truth about who they are, who you are, what this was—shatters like beautiful glass."
        ],
        "bargain": [
          "Love offered conditionally; the contract has clauses you didn't notice until too late.",
          "They'll stay if you become someone else—the question is whether that's love or erasure."
        ],
        "choice": [
          "Love them and lose yourself or preserve yourself and lose them—both paths a kind of death.",
          "Choose between the passionate destruction or the safe suffocation—neither permits wholeness."
        ]
      },
      "worlds": {
        "court": [
          "Love here is politics; hearts are currency, and authenticity is liability.",
          "Romance is theater where the audience's approval matters more than the truth between lovers."
        ],
        "realm": [
          "Magic binds lovers in ways that transcend choice, twisting consent into compulsion.",
          "Love here has literal power—it shapes reality, and reality shapes it right back."
        ],
        "dystopia": [
          "Affection is monitored, desire is controlled, connection is permitted only in approved configurations.",
          "The system dictates acceptable love; deviation is not just forbidden but erased from possibility."
        ],
        "planet": [
          "Isolation makes every connection precious and dangerous—love becomes survival strategy.",
          "The hostile environment forces intimacy; proximity becomes entanglement becomes complication."
        ],
        "case": [
          "Love is the mystery—who they are beneath performance, whether connection was real or constructed.",
          "Investigating the relationship's death reveals it was dying from the moment it began."
        ]
      }
    },
    "thriller": {
      "characters": {
        "tragic-hero": [
          "Driven by justice into situations where righteousness becomes the danger, not the solution.",
          "Their principles are the rope they hang themselves with, pulled tight by their own hands."
        ],
        "outlier": [
          "They see the conspiracy no one else notices, which makes them the next target.",
          "Operating outside the system that's hunting them, using paranoia as survival skill."
        ],
        "false-prophet": [
          "Selling a salvation that leads followers directly into the thing they're trying to escape.",
          "Their warnings about danger are the danger; the threat is already inside the house."
        ],
        "shadow-self": [
          "The ruthless version you've suppressed is exactly what the situation requires to survive.",
          "Your buried instincts rise—violent, effective, unrecognizable as the person you were."
        ],
        "unreliable-narrator": [
          "Paranoia is indistinguishable from pattern recognition; they can't tell which is operating now.",
          "They're either uncovering conspiracy or constructing it from unrelated data—time will tell."
        ]
      },
      "events": {
        "betrayal": [
          "Your ally is the leak; every move you've made has been reported in real-time.",
          "The person protecting you has been positioning you for sacrifice all along."
        ],
        "sacrifice": [
          "Exposing the truth requires destroying your own credibility, reputation, future.",
          "Save everyone by making yourself the target—draw fire so others can escape."
        ],
        "revelation": [
          "The conspiracy is bigger than you thought and you've already been compromised.",
          "Understanding the full picture reveals you've been playing for the wrong side the whole time."
        ],
        "bargain": [
          "They offer safety in exchange for silence—your life for your complicity.",
          "The deal: walk away now and live, or pursue truth and ensure no one survives."
        ],
        "choice": [
          "Expose them and die a martyr or stay silent and become them—choose quickly.",
          "The deadline is approaching; inaction is choice, action is commitment—both are irreversible."
        ]
      },
      "worlds": {
        "dystopia": [
          "Surveillance is infrastructure; privacy is memory, resistance is reflex about to be eliminated.",
          "The system is the threat—vast, efficient, inescapable, treating human life as administrative detail."
        ],
        "case": [
          "Every clue is planted, every witness is positioned—you're investigating a trap.",
          "The conspiracy uses your investigation as cover for the real crime happening in your blind spots."
        ],
        "planet": [
          "Isolated with limited resources, someone among the group is the threat.",
          "The hostile environment outside means trust is survival necessity and fatal vulnerability simultaneously."
        ],
        "court": [
          "Power protects itself through institutional capture; justice is decoration, not function.",
          "The law is the weapon used against those who threaten the powerful."
        ],
        "realm": [
          "Territory controlled by shadow forces operating beyond governmental reach or awareness.",
          "The rules here are unwritten, enforcement is absolute, and you just broke protocol."
        ]
      }
    },
    "literary": {
      "characters": {
        "tragic-hero": [
          "Their profound awareness is the curse—seeing clearly how they construct their own destruction.",
          "Noble in suffering, they transform personal ruin into universal meaning through conscious choice."
        ],
        "outlier": [
          "They refuse to perform the expected narrative, breaking the story everyone else agrees to tell.",
          "Existing in the margins of acceptable human experience, they rewrite what's possible by persisting."
        ],
        "false-prophet": [
          "They offer wisdom that sounds profound but leads only to beautiful, articulate despair.",
          "Speaking truths that are actually aesthetic poses—insight as performance, depth as decoration."
        ],
        "shadow-self": [
          "The portrait aging while the public face remains pristine—corruption hidden, festering, inevitable.",
          "The repressed self manifesting, not as metaphor but as presence demanding acknowledgment."
        ],
        "unreliable-narrator": [
          "They spin elaborate meaning from chaos, unsure where memory ends and interpretation begins.",
          "Narrating their life as literature, editing reality for coherence, for beauty, for bearable meaning."
        ]
      },
      "events": {
        "betrayal": [
          "The sanctuary you built from another person collapses, revealing it was always temporary shelter.",
          "Discovering the family myth was lie, the foundation false—history rewrites itself in revelation."
        ],
        "sacrifice": [
          "Severing vital parts of self on duty's altar, calling amputation devotion, loss necessity.",
          "Choosing the cage to protect someone from wilderness, calling confinement love."
        ],
        "revelation": [
          "Sudden understanding during storm: all previous meaning rendered beautiful but false.",
          "Uncovering truth that rewrites everything—identity, history, the story you've been telling yourself."
        ],
        "bargain": [
          "Trading soul for beauty, for moment, for forbidden desire wrapped in tragic grandeur.",
          "Agreeing to carry the secret in exchange for maintaining the illusion of respectability."
        ],
        "choice": [
          "Both paths lead to isolation—choose which loneliness you can bear to inhabit.",
          "Decide between passionate ruin and respectable suffocation; wholeness is not offered."
        ]
      },
      "worlds": {
        "court": [
          "Society where a single word ends you socially—reputation is currency, scandal is death.",
          "Glittering cage where performance is survival and authenticity is punished with exile."
        ],
        "realm": [
          "Ancestral estate alive with past sins, where ghosts are both literal and metaphorical.",
          "Geography heavy with memory, where landscape mirrors internal desolation perfectly."
        ],
        "dystopia": [
          "Rigid social structure sustained by death ritual and adherence to tradition no one questions.",
          "Beautiful decay—aristocracy rotting slowly, maintaining appearances while foundations crumble."
        ],
        "planet": [
          "Vast indifferent landscape that reflects internal state—pathetic fallacy made physical environment.",
          "Remote isolation where weather, geography, and emotional climate blur into single oppressive force."
        ],
        "case": [
          "The mystery is psychological—locked room in mind hiding trauma refusing burial.",
          "Investigating consciousness itself, where the crime is what you've done to yourself to survive."
        ]
      }
    },
    "historical": {
      "characters": {
        "tragic-hero": [
          "Duty-bound to principles that will lead them gloriously, uselessly, inevitably to destruction.",
          "Carrying honor like a medal forged from the bodies they stepped over to earn it."
        ],
        "outlier": [
          "Refusing the roles history offers, they carve new paths through eras that resist change.",
          "Out of step with their time, they see futures others cannot imagine or permit."
        ],
        "false-prophet": [
          "Promising victory that is actually orchestrated slaughter, using lives as theory's ammunition.",
          "Charismatic vision leading masses toward annihilation disguised as destiny."
        ],
        "shadow-self": [
          "The cowardice buried beneath patriotism, waiting for crisis to surface and be revealed.",
          "The part that has learned to enjoy the violence, hidden carefully beneath honor's costume."
        ],
        "unreliable-narrator": [
          "Writing victor's history, burying truth with every recorded word, knowing the lie immortalizes.",
          "Memory fractured by trauma, blending past horror with present until time collapses completely."
        ]
      },
      "events": {
        "betrayal": [
          "Orders from command treating you as statistics on maps, expendable in grand strategy.",
          "The ally's uniform change reveals they were always negotiating with both sides."
        ],
        "sacrifice": [
          "Holding impossible position to buy time for evacuation that may already be abandoned.",
          "Leaving the wounded behind in mud because saving them means drowning yourself."
        ],
        "revelation": [
          "Seeing enemies up close, recognizing them as frightened mirrors of yourself.",
          "Discovering the war's foundation is lie so old no one remembers the original truth."
        ],
        "bargain": [
          "Trading honor for survival, making deals with enemy while wearing your nation's uniform.",
          "Accepting suicide mission in exchange for promise your family will be remembered, cared for."
        ],
        "choice": [
          "The order comes to execute prisoners—obey the chain or preserve your conscience.",
          "Decide which unit gets sent as diversion; none return, and you must choose names."
        ]
      },
      "worlds": {
        "dystopia": [
          "Nation mobilized completely for war, every citizen reduced to function in military machine.",
          "Occupied territory where walls hear, where resistance meets brutal, public reprisal."
        ],
        "case": [
          "Investigating war crimes mid-conflict, where witnesses are dead and evidence is propaganda.",
          "Searching for deserter who may have understood the futility before you did."
        ],
        "planet": [
          "Landscape churned to mud and graves, seasons defined by different types of misery.",
          "Scorched earth where nothing grows except barbed wire and the crosses marking fallen."
        ],
        "court": [
          "Military tribunal where verdict preceded trial, decided to maintain morale and order.",
          "War room where old men move flags on maps, deciding thousands' fates over brandy."
        ],
        "realm": [
          "No-man's-land between trenches—liminal death space belonging to neither side.",
          "Fallen capital, once cultural beacon, now rubble and snipers' positions."
        ]
      }
    }
  }
};

function getRandomPrompt(genre, characterId, eventId, worldId) {
    try {
        // Normalize genre name (remove spaces, lowercase)
        const genreKey = genre.toLowerCase().replace(/ /g, '').replace(/fiction/g, '');
        const genreData = ORACLE_DATA.genres[genreKey];
        
        if (!genreData) {
            return "The oracle's voice fades into starlight. Draw again, seeker.";
        }
        
        // Get random fragments from each card
        const charFragments = genreData.characters[characterId];
        const eventFragments = genreData.events[eventId];
        const worldFragments = genreData.worlds[worldId];
        
        if (!charFragments || !eventFragments || !worldFragments) {
            return "The cards whisper, but their meaning eludes comprehension. Draw again.";
        }
        
        // Randomly select one fragment from each (2 options per card)
        const charFragment = charFragments[Math.floor(Math.random() * charFragments.length)];
        const eventFragment = eventFragments[Math.floor(Math.random() * eventFragments.length)];
        const worldFragment = worldFragments[Math.floor(Math.random() * worldFragments.length)];
        
        // Combine into one flowing oracle reading
        return `${charFragment} ${eventFragment} ${worldFragment}`;
        
    } catch (error) {
        console.error('Oracle error:', error);
        return "The oracle speaks in riddles beyond mortal comprehension. The cards await another draw.";
    }
}
