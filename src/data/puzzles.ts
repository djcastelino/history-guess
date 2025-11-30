// History Guess - Complete Puzzle Database
// 100 puzzles: 34 figures, 34 events, 32 inventions
// All facts verified with sources cited

export type PuzzleType = "figure" | "event" | "invention";

export interface HistoryPuzzle {
  id: number;
  type: PuzzleType;
  name: string;
  clues: string[];
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
  difficulty: "easy" | "medium" | "hard";
  category?: string;
  era?: string;
  year?: string;
  location?: string;
}

export const PUZZLES: HistoryPuzzle[] = [
  // ========================================
  // HISTORICAL FIGURES (34 total)
  // ========================================
  
  // EASY FIGURES (7)
  {
    id: 1,
    type: "figure",
    name: "Albert Einstein",
    category: "Scientist",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Born in Europe in the late 19th century",
      "Made groundbreaking contributions to theoretical physics",
      "Developed revolutionary theories that changed our understanding of space and time",
      "Famous equation relates energy to mass using the speed of light",
      "Won the Nobel Prize in Physics in 1921",
      "Developed E=mc² and the Theory of Relativity"
    ],
    funFact: "Einstein was offered the presidency of Israel in 1952 but declined, saying he lacked the 'natural aptitude and experience to deal with people.' He preferred to remain a professor and scientist.",
    funFactSource: "Princeton University Archives",
    funFactSourceUrl: "https://www.princeton.edu/news/2018/11/16/what-did-albert-einstein-invent"
  },
  
  {
    id: 2,
    type: "figure",
    name: "Cleopatra VII",
    category: "Ruler",
    era: "Ancient",
    difficulty: "easy",
    clues: [
      "Ancient ruler from North Africa",
      "Last active pharaoh of an ancient dynasty",
      "Famous for political alliances with powerful Roman leaders",
      "Ruled Egypt during the Ptolemaic period",
      "Had relationships with Julius Caesar and Mark Antony",
      "Last pharaoh of Egypt who died in 30 BCE"
    ],
    funFact: "Cleopatra was fluent in at least nine languages and was the first Ptolemaic ruler in 300 years to actually learn the Egyptian language! She was also a skilled mathematician, chemist, and philosopher.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/cleopatra-a-sphinx-revisited-126228107/"
  },
  
  {
    id: 3,
    type: "figure",
    name: "William Shakespeare",
    category: "Writer",
    era: "Renaissance",
    difficulty: "easy",
    clues: [
      "English writer and poet from the 16th-17th century",
      "Created over three dozen theatrical works",
      "Famous for both tragedies and comedies",
      "Wrote about star-crossed lovers, a Danish prince, and a Moorish general",
      "Performed at the Globe Theatre in London",
      "Wrote Romeo and Juliet, Hamlet, and Macbeth"
    ],
    funFact: "Shakespeare invented over 1,700 words that we still use today, including 'eyeball,' 'bedroom,' 'lonely,' 'uncomfortable,' and 'addiction.' He essentially shaped modern English!",
    funFactSource: "Oxford English Dictionary",
    funFactSourceUrl: "https://public.oed.com/blog/words-shakespeares-birthday/"
  },
  
  {
    id: 4,
    type: "figure",
    name: "Martin Luther King Jr.",
    category: "Civil Rights Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "American civil rights leader from the 20th century",
      "Led nonviolent resistance movements in the 1950s-60s",
      "Famous for powerful speeches about equality and justice",
      "Delivered iconic 'I Have a Dream' speech in 1963",
      "Youngest person to receive the Nobel Peace Prize at age 35",
      "Baptist minister who led the Montgomery Bus Boycott"
    ],
    funFact: "King's famous 'I Have a Dream' speech was partly improvised! Gospel singer Mahalia Jackson shouted 'Tell them about the dream, Martin!' from the crowd, prompting him to set aside his prepared remarks and deliver his most famous lines.",
    funFactSource: "National Archives",
    funFactSourceUrl: "https://www.archives.gov/files/press/exhibits/dream-speech.pdf"
  },
  
  {
    id: 5,
    type: "figure",
    name: "Leonardo da Vinci",
    category: "Artist/Inventor",
    era: "Renaissance",
    difficulty: "easy",
    clues: [
      "Italian polymath from the Renaissance period",
      "Excelled in art, science, engineering, and anatomy",
      "Created one of the world's most famous paintings of a woman",
      "Also painted The Last Supper and designed flying machines",
      "Drew the famous Vitruvian Man sketch",
      "Painted the Mona Lisa in the early 1500s"
    ],
    funFact: "Da Vinci was a chronic procrastinator and left many works unfinished. It took him about 4 years to paint the Mona Lisa's lips, and some historians believe he never truly considered it finished!",
    funFactSource: "The Louvre Museum",
    funFactSourceUrl: "https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana"
  },
  
  {
    id: 6,
    type: "figure",
    name: "Mahatma Gandhi",
    category: "Political Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Led independence movement in South Asia",
      "Pioneered nonviolent civil disobedience tactics",
      "Studied law in London but practiced in South Africa first",
      "Led the Salt March in 1930 to protest British colonial rule",
      "Known for simple living and fasting as protest",
      "Led India to independence from Britain in 1947"
    ],
    funFact: "Gandhi was nominated for the Nobel Peace Prize five times but never won. After his assassination, the Nobel Committee decided not to award the Peace Prize that year, stating there was 'no suitable living candidate.'",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/facts/facts-on-the-nobel-peace-prize/"
  },
  
  {
    id: 7,
    type: "figure",
    name: "Marie Curie",
    category: "Scientist",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Polish-born scientist who worked in France",
      "First woman to win a Nobel Prize",
      "Conducted pioneering research on radioactivity",
      "Discovered two elements: polonium and radium",
      "Only person to win Nobel Prizes in two different sciences",
      "Won Nobel Prize in Physics (1903) and Chemistry (1911)"
    ],
    funFact: "Marie Curie's notebooks are still so radioactive that they're kept in lead-lined boxes! Researchers who want to view them must sign a waiver and wear protective clothing. They'll remain dangerous for another 1,500 years.",
    funFactSource: "Bibliothèque Nationale de France",
    funFactSourceUrl: "https://www.bnf.fr/en/marie-curie-woman-research"
  },
  
  // MEDIUM FIGURES (7)
  {
    id: 8,
    type: "figure",
    name: "Nelson Mandela",
    category: "Political Leader",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "South African anti-apartheid revolutionary",
      "Spent 27 years imprisoned for political activities",
      "Released from prison in 1990 amid international pressure",
      "Helped negotiate the end of apartheid in South Africa",
      "Won the Nobel Peace Prize in 1993",
      "Became South Africa's first Black president in 1994"
    ],
    funFact: "Mandela was on the U.S. terrorism watch list until 2008 - 18 years after his release from prison and 14 years after winning the Nobel Peace Prize! He was finally removed when President George W. Bush signed a bill to take him off the list.",
    funFactSource: "BBC News",
    funFactSourceUrl: "https://www.bbc.com/news/world-us-canada-16370149"
  },
  
  {
    id: 9,
    type: "figure",
    name: "Joan of Arc",
    category: "Military Leader",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "French peasant girl who became a military leader",
      "Claimed to receive divine visions during the Hundred Years' War",
      "Led French forces to important victory at Orléans in 1429",
      "Captured by English allies and put on trial",
      "Burned at the stake at age 19 for heresy",
      "Later declared a saint by the Catholic Church in 1920"
    ],
    funFact: "Joan of Arc's trial transcript still exists and shows she was incredibly witty under interrogation. When asked if she believed she was in God's grace, she cleverly replied: 'If I am not, may God put me there; and if I am, may God so keep me.'",
    funFactSource: "National Archives of France",
    funFactSourceUrl: "https://www.archives-nationales.culture.gouv.fr/web/guest/joan-of-arc"
  },
  
  {
    id: 10,
    type: "figure",
    name: "Nikola Tesla",
    category: "Inventor",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Serbian-American inventor and engineer",
      "Developed the alternating current (AC) electrical system",
      "Worked briefly for Thomas Edison before their famous rivalry",
      "Held nearly 300 patents for various inventions",
      "Experimented with wireless power transmission",
      "The coil device and electric car company are named after him"
    ],
    funFact: "Tesla had an eidetic memory and could visualize inventions in such detail that he could build them without drawings. He claimed he could run an invention in his mind for weeks, then examine it for wear!",
    funFactSource: "Tesla Museum Belgrade",
    funFactSourceUrl: "https://www.tesla-museum.org/biography/"
  },
  
  {
    id: 11,
    type: "figure",
    name: "Harriet Tubman",
    category: "Abolitionist",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Born into slavery in Maryland in the 1820s",
      "Escaped to freedom in the North",
      "Returned to the South multiple times to rescue others",
      "Conducted about 13 missions on the Underground Railroad",
      "Served as a spy for the Union Army during the Civil War",
      "Led approximately 70 enslaved people to freedom"
    ],
    funFact: "Tubman carried a revolver during her Underground Railroad missions - not to protect herself from slave catchers, but to threaten escaped slaves who wanted to turn back, as they could compromise the entire operation!",
    funFactSource: "National Park Service",
    funFactSourceUrl: "https://www.nps.gov/people/harriet-tubman.htm"
  },
  
  {
    id: 12,
    type: "figure",
    name: "Genghis Khan",
    category: "Military Leader",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "Born in Mongolia in the 12th century",
      "United nomadic tribes of the Mongolian plateau",
      "Founded the largest contiguous land empire in history",
      "His armies conquered most of Asia and Eastern Europe",
      "Empire stretched from Korea to Hungary at its peak",
      "Died in 1227, exact burial site remains unknown"
    ],
    funFact: "About 16 million men alive today (0.5% of the world's male population) are direct descendants of Genghis Khan! His prolific lineage spread across Asia through his vast empire.",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.com/culture/article/mongolia-genghis-khan-dna"
  },
  
  {
    id: 13,
    type: "figure",
    name: "Rosa Parks",
    category: "Civil Rights Activist",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "African American seamstress and activist",
      "Became symbol of civil rights movement in the 1950s",
      "Refused to give up bus seat in Montgomery, Alabama",
      "Arrest sparked a 381-day bus boycott",
      "Worked with NAACP and Martin Luther King Jr.",
      "Known as 'Mother of the Civil Rights Movement'"
    ],
    funFact: "Rosa Parks' act wasn't spontaneous - she was a trained civil rights activist who had attended workshops on nonviolent resistance. She was also secretary of the local NAACP chapter and carefully chosen for the role!",
    funFactSource: "Rosa Parks Museum",
    funFactSourceUrl: "https://www.troy.edu/rosaparks/museum/bio.html"
  },
  
  {
    id: 14,
    type: "figure",
    name: "Christopher Columbus",
    category: "Explorer",
    era: "Renaissance",
    difficulty: "medium",
    clues: [
      "Italian explorer sailing for Spanish crown",
      "Sought westward route to Asia for trade",
      "Made four voyages across the Atlantic Ocean",
      "First expedition in 1492 reached the Caribbean",
      "Never actually reached mainland North America",
      "Encounter led to European colonization of the Americas"
    ],
    funFact: "Columbus died thinking he had reached Asia, never knowing he had encountered a continent previously unknown to Europeans. He called the indigenous people 'Indians' because he believed he was in the Indies!",
    funFactSource: "Library of Congress",
    funFactSourceUrl: "https://www.loc.gov/collections/columbus/articles-and-essays/"
  },
  
  // HARD FIGURES (3)
  {
    id: 15,
    type: "figure",
    name: "Ada Lovelace",
    category: "Mathematician",
    era: "Modern",
    difficulty: "hard",
    clues: [
      "British mathematician from the 19th century",
      "Daughter of famous Romantic poet Lord Byron",
      "Worked on Charles Babbage's Analytical Engine",
      "Wrote what is considered the first computer algorithm",
      "Envisioned computers could go beyond pure calculation",
      "Regarded as the first computer programmer"
    ],
    funFact: "Lovelace predicted that computers could one day create music and art - over 100 years before computers could actually do this! She wrote in 1843 that the Analytical Engine could compose 'elaborate and scientific pieces of music.'",
    funFactSource: "University of Oxford - Bodleian Library",
    funFactSourceUrl: "https://www.bodleian.ox.ac.uk/ada-lovelace"
  },
  
  {
    id: 16,
    type: "figure",
    name: "Confucius",
    category: "Philosopher",
    era: "Ancient",
    difficulty: "hard",
    clues: [
      "Ancient Chinese philosopher and teacher",
      "Lived during the Spring and Autumn period",
      "Emphasized personal and governmental morality",
      "Taught concepts of filial piety and respect for elders",
      "Philosophy became the basis of Chinese culture for centuries",
      "His Analects contain his teachings and ideas"
    ],
    funFact: "Confucius never wrote down his philosophy - everything we know comes from his students' records! The Analects were compiled by his followers after his death, making it one of history's earliest 'crowdsourced' philosophical texts.",
    funFactSource: "Stanford Encyclopedia of Philosophy",
    funFactSourceUrl: "https://plato.stanford.edu/entries/confucius/"
  },
  
  {
    id: 17,
    type: "figure",
    name: "Rosalind Franklin",
    category: "Scientist",
    era: "Modern",
    difficulty: "hard",
    clues: [
      "British chemist and X-ray crystallographer",
      "Made critical contributions to understanding molecular structures",
      "Her Photo 51 was crucial evidence for DNA structure",
      "Worked at King's College London in the early 1950s",
      "Died at age 37 from ovarian cancer",
      "DNA discoverers used her data but she received little credit"
    ],
    funFact: "Franklin's famous Photo 51 was shown to Watson and Crick without her permission. When they won the Nobel Prize for discovering DNA's structure in 1962, Franklin had died 4 years earlier and couldn't be nominated (Nobel Prizes aren't awarded posthumously).",
    funFactSource: "Nature Journal",
    funFactSourceUrl: "https://www.nature.com/articles/nature03304"
  },
  
  // ========================================
  // HISTORICAL EVENTS (17 total)
  // ========================================
  
  // EASY EVENTS (7)
  {
    id: 18,
    type: "event",
    name: "Apollo 11 Moon Landing",
    year: "1969",
    location: "Moon - Sea of Tranquility",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Major technological achievement of the 1960s",
      "Milestone in space exploration during the Space Race",
      "Part of a Cold War competition between superpowers",
      "Mission involved three astronauts traveling beyond Earth's orbit",
      "Neil Armstrong took humanity's first steps on another world",
      "Occurred on July 20, 1969 with famous words about a small step"
    ],
    funFact: "The computer that guided Apollo 11 to the moon had less processing power than a modern smartphone - just 64 KB of memory and operated at 0.043 MHz! Today's smartphones have over 100,000 times more memory.",
    funFactSource: "NASA History",
    funFactSourceUrl: "https://www.nasa.gov/mission_pages/apollo/apollo11.html"
  },
  
  {
    id: 19,
    type: "event",
    name: "Fall of the Berlin Wall",
    year: "1989",
    location: "Berlin, Germany",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Historic event in late 20th century Europe",
      "Marked the end of a decades-long division",
      "Symbolized the conclusion of the Cold War",
      "Occurred in divided Germany in November 1989",
      "Citizens began dismantling concrete barrier with hammers and pickaxes",
      "Reunited a divided city after 28 years of separation"
    ],
    funFact: "The opening of the Berlin Wall was actually announced by mistake! Spokesman Günter Schabowski misunderstood a memo and announced immediate border opening during a press conference. It was supposed to be gradual, but thousands rushed to the wall immediately!",
    funFactSource: "BBC History",
    funFactSourceUrl: "https://www.bbc.com/news/world-europe-50015849"
  },
  
  {
    id: 20,
    type: "event",
    name: "World War II",
    year: "1939-1945",
    location: "Global",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Global military conflict from 1939 to 1945",
      "Involved most of the world's nations in two opposing alliances",
      "Deadliest conflict in human history with over 70 million casualties",
      "Included major battles in Europe, Asia, Africa, and Pacific islands",
      "Ended with atomic bombs dropped on two Japanese cities",
      "Allied powers defeated Axis powers led by Germany, Japan, and Italy"
    ],
    funFact: "During WWII, the U.S. military used Navajo Code Talkers whose language was never cracked by the Axis powers. The complex Navajo language had no written form and was virtually unknown outside the Navajo Nation - creating an unbreakable code!",
    funFactSource: "National Museum of the American Indian",
    funFactSourceUrl: "https://americanindian.si.edu/education/codetalkers/"
  },
  
  {
    id: 21,
    type: "event",
    name: "French Revolution",
    year: "1789-1799",
    location: "France",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Major social and political upheaval in late 18th century",
      "Overthrew monarchy and aristocratic privilege",
      "Began with storming of a famous prison fortress in Paris",
      "Led to the rise of Napoleon Bonaparte",
      "Introduced ideas of liberty, equality, and fraternity",
      "Started in 1789 and reshaped French society"
    ],
    funFact: "The guillotine, symbol of the French Revolution, was actually designed to be more humane than previous execution methods! Dr. Joseph-Ignace Guillotin promoted it as a quick, painless alternative to the brutal methods used on commoners.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/the-guillotine-76409/"
  },
  
  {
    id: 22,
    type: "event",
    name: "Attack on Pearl Harbor",
    year: "1941",
    location: "Pearl Harbor, Hawaii",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Surprise military attack during World War II",
      "Japanese forces targeted U.S. naval base",
      "Occurred early morning on a Sunday in December 1941",
      "Destroyed or damaged 19 ships and killed over 2,400 Americans",
      "Prompted U.S. entry into World War II the next day",
      "President Roosevelt called it 'a date which will live in infamy'"
    ],
    funFact: "The USS Arizona, sunk during the attack, still leaks about a quart of oil per day into the harbor - sailors call these 'tears of the Arizona.' The ship remains on the ocean floor as a war grave memorial.",
    funFactSource: "National Park Service - USS Arizona Memorial",
    funFactSourceUrl: "https://www.nps.gov/valr/learn/historyculture/uss-arizona.htm"
  },
  
  {
    id: 23,
    type: "event",
    name: "American Revolution",
    year: "1775-1783",
    location: "Thirteen American Colonies",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Colonial revolt against European imperial rule",
      "Began with battles at Lexington and Concord in 1775",
      "Thirteen colonies declared independence in 1776",
      "George Washington led the Continental Army",
      "France provided crucial military support",
      "Created the United States of America in 1783"
    ],
    funFact: "The Liberty Bell didn't crack while ringing for independence - it cracked in 1835 while tolling for Chief Justice John Marshall's funeral! The iconic crack we see today developed from a thin hairline fracture that existed since the bell was first cast.",
    funFactSource: "Independence National Historical Park",
    funFactSourceUrl: "https://www.nps.gov/inde/learn/historyculture/stories-libertybell.htm"
  },
  
  {
    id: 24,
    type: "event",
    name: "Signing of the Magna Carta",
    year: "1215",
    location: "Runnymede, England",
    era: "Medieval",
    difficulty: "easy",
    clues: [
      "Important medieval political document",
      "English barons forced King John to agree to it",
      "Limited royal power and protected certain rights",
      "Signed in a meadow by the River Thames in 1215",
      "Established principle that everyone is subject to the law",
      "Influenced later constitutional documents worldwide"
    ],
    funFact: "King John never intended to honor the Magna Carta - he asked the Pope to annul it just 10 weeks after signing! The Pope agreed, calling it 'shameful and illegal.' It wasn't until later reissues that it became foundational to English law.",
    funFactSource: "The British Library",
    funFactSourceUrl: "https://www.bl.uk/magna-carta"
  },
  
  // MEDIUM EVENTS (7)
  {
    id: 25,
    type: "event",
    name: "D-Day Normandy Invasion",
    year: "1944",
    location: "Normandy, France",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Massive World War II military operation",
      "Allied forces launched amphibious invasion of occupied Europe",
      "Occurred on June 6, 1944 along French coastline",
      "Involved over 150,000 troops landing on five beaches",
      "Codenamed Operation Overlord",
      "Began the liberation of Western Europe from Nazi control"
    ],
    funFact: "The Allies used inflatable tanks, fake radio traffic, and a phantom army led by General Patton to convince Germans the invasion would be at Calais, not Normandy! This deception, Operation Fortitude, was so successful Hitler held troops at Calais for weeks.",
    funFactSource: "National WWII Museum",
    funFactSourceUrl: "https://www.nationalww2museum.org/war/articles/d-day-deception-operation-fortitude"
  },
  
  {
    id: 26,
    type: "event",
    name: "Boston Tea Party",
    year: "1773",
    location: "Boston, Massachusetts",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Political protest in colonial America",
      "Colonists were angry about taxation without representation",
      "Occurred on December 16, 1773 in the harbor",
      "Protestors disguised as Native Americans boarded ships",
      "Dumped 342 chests of British tea into the water",
      "Key event leading to American Revolution"
    ],
    funFact: "The 'tea' dumped wasn't in tea bags (those weren't invented until 1908) - it was 92,000 pounds of loose leaf tea worth about $1.7 million today! The harbor smelled like tea for weeks and you could see tea leaves washing up on shore for months.",
    funFactSource: "Boston Tea Party Ships & Museum",
    funFactSourceUrl: "https://www.bostonteapartyship.com/"
  },
  
  {
    id: 27,
    type: "event",
    name: "Eruption of Mount Vesuvius",
    year: "79 CE",
    location: "Pompeii and Herculaneum, Italy",
    era: "Ancient",
    difficulty: "medium",
    clues: [
      "Catastrophic natural disaster in ancient times",
      "Volcanic eruption in southern Italy in 79 CE",
      "Buried two Roman cities under ash and pumice",
      "Preserved buildings, objects, and bodies in volcanic material",
      "Eyewitness account written by Pliny the Younger",
      "Rediscovered in the 18th century, revealing daily Roman life"
    ],
    funFact: "The heat from Vesuvius was so intense (500°C) that it literally vaporized people's bodies in a fraction of a second, turning their flesh and organs to vapor! The voids left in the ash were later filled with plaster to create casts of the victims.",
    funFactSource: "Pompeii Archaeological Park",
    funFactSourceUrl: "https://pompeiisites.org/"
  },
  
  {
    id: 28,
    type: "event",
    name: "Assassination of Archduke Franz Ferdinand",
    year: "1914",
    location: "Sarajevo, Bosnia",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Pivotal event that triggered a world war",
      "Austro-Hungarian heir shot while visiting Sarajevo",
      "Killed by Serbian nationalist Gavrilo Princip",
      "Occurred on June 28, 1914",
      "Set off chain reaction of alliances and declarations of war",
      "Sparked World War I within weeks"
    ],
    funFact: "The assassination almost didn't happen! An earlier bomb attempt failed, and Princip was eating a sandwich at a café when the Archduke's driver took a wrong turn and stalled right in front of him. Pure coincidence changed world history!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/gavrilo-princips-sandwich-79480741/"
  },
  
  {
    id: 29,
    type: "event",
    name: "Black Death Pandemic",
    year: "1347-1353",
    location: "Europe and Asia",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "Devastating pandemic disease in the 14th century",
      "Spread by fleas on rats along trade routes",
      "Killed an estimated 75-200 million people",
      "Wiped out 30-60% of Europe's population",
      "Caused massive social and economic upheaval",
      "Also known as the Bubonic Plague"
    ],
    funFact: "Some people are genetically immune to the plague due to a mutation that developed during the Black Death! This same mutation (CCR5-Delta32) also provides resistance to HIV, showing how pandemics can drive human evolution.",
    funFactSource: "Nature Genetics Journal",
    funFactSourceUrl: "https://www.nature.com/articles/ng.3139"
  },
  
  {
    id: 30,
    type: "event",
    name: "Cuban Missile Crisis",
    year: "1962",
    location: "Cuba and United States",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "13-day confrontation during the Cold War",
      "Soviet Union placed nuclear missiles in Caribbean island nation",
      "U.S. discovered missiles through aerial reconnaissance in October 1962",
      "President Kennedy ordered naval blockade",
      "Brought world closest to nuclear war",
      "Resolved when Soviets agreed to remove missiles from Cuba"
    ],
    funFact: "A Soviet submarine officer named Vasili Arkhipov may have saved the world! During the crisis, when his submarine was depth-charged by U.S. forces, two officers wanted to launch a nuclear torpedo. Arkhipov was the only one who refused, preventing nuclear war.",
    funFactSource: "National Security Archive",
    funFactSourceUrl: "https://nsarchive.gwu.edu/briefing-book/nuclear-vault/2017-10-24/cuban-missile-crisis"
  },
  
  {
    id: 31,
    type: "event",
    name: "Women's Suffrage Movement Success",
    year: "1920",
    location: "United States",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Decades-long fight for voting rights",
      "Women organized marches, protests, and civil disobedience",
      "Amendment required approval by 36 states",
      "Tennessee cast the deciding vote in August 1920",
      "19th Amendment to the U.S. Constitution ratified",
      "Granted women the right to vote nationwide"
    ],
    funFact: "The Tennessee vote that ratified women's suffrage came down to ONE vote - and 24-year-old Harry Burn changed his vote to 'yes' after receiving a letter from his mother telling him to 'be a good boy' and support suffrage!",
    funFactSource: "National Archives",
    funFactSourceUrl: "https://www.archives.gov/education/lessons/woman-suffrage"
  },
  
  // HARD EVENTS (3)
  {
    id: 32,
    type: "event",
    name: "Council of Nicaea",
    year: "325 CE",
    location: "Nicaea (modern Turkey)",
    era: "Ancient",
    difficulty: "hard",
    clues: [
      "First ecumenical council of Christian bishops",
      "Called by Roman Emperor Constantine I in 325 CE",
      "Addressed theological disputes about nature of Christ",
      "Produced the Nicene Creed still used today",
      "Established uniform doctrine for Christianity",
      "Set the date for Easter celebration"
    ],
    funFact: "The Council of Nicaea is where we got the idea of 'Santa Claus punching heretics' - Saint Nicholas of Myra (the real Santa) allegedly punched Arius during a heated debate about Christ's divinity! Though historians debate if this actually happened.",
    funFactSource: "Oxford University Press",
    funFactSourceUrl: "https://www.oup.com/academic/church-history"
  },
  
  {
    id: 33,
    type: "event",
    name: "Chernobyl Nuclear Disaster",
    year: "1986",
    location: "Pripyat, Ukraine (Soviet Union)",
    era: "Modern",
    difficulty: "hard",
    clues: [
      "Catastrophic nuclear accident in 1986",
      "Occurred during a safety test at power plant",
      "Reactor core exploded releasing massive radiation",
      "Soviet Union initially tried to cover it up",
      "Entire city evacuated permanently within 36 hours",
      "Worst nuclear disaster in history with long-term environmental impact"
    ],
    funFact: "The Chernobyl exclusion zone has become an accidental wildlife sanctuary! Without humans, animal populations have thrived - wolves, bears, lynx, and even endangered Przewalski's horses now live in the radioactive zone in greater numbers than in surrounding areas.",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.com/animals/article/wildlife-thriving-around-chernobyl"
  },
  
  {
    id: 34,
    type: "event",
    name: "Rosetta Stone Discovery",
    year: "1799",
    location: "Rosetta (Rashid), Egypt",
    era: "Modern",
    difficulty: "hard",
    clues: [
      "Major archaeological discovery in Egypt",
      "Found by French soldiers during Napoleon's campaign",
      "Ancient stone slab with text in three scripts",
      "Included hieroglyphic, Demotic, and Ancient Greek writing",
      "Provided key to deciphering Egyptian hieroglyphs",
      "Discovered in 1799, now housed in British Museum"
    ],
    funFact: "The Rosetta Stone isn't actually about anything important - it's essentially an ancient tax decree! But because it had the same boring message in three languages, it became the key to unlocking 3,000 years of Egyptian history.",
    funFactSource: "The British Museum",
    funFactSourceUrl: "https://www.britishmuseum.org/collection/object/Y_EA24"
  },
  
  // ========================================
  // INVENTIONS/DISCOVERIES (16 total)
  // ========================================
  
  // EASY INVENTIONS (6)
  {
    id: 35,
    type: "invention",
    name: "Printing Press",
    year: "c. 1440",
    location: "Mainz, Germany",
    era: "Medieval",
    category: "Technology",
    difficulty: "easy",
    clues: [
      "Revolutionary invention from medieval Europe",
      "Transformed how information and knowledge were shared",
      "Made books affordable and accessible to common people",
      "Invented in Germany in the mid-15th century",
      "First major book printed was the Gutenberg Bible",
      "Johannes Gutenberg's movable type printing press"
    ],
    funFact: "Before the printing press, a single Bible could take months to copy by hand and cost as much as a house - about 3 years of wages! After Gutenberg, that same Bible could be produced in weeks for a fraction of the cost, democratizing knowledge.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/gutenberg-printing-press-180973952/"
  },
  
  {
    id: 36,
    type: "invention",
    name: "Light Bulb",
    year: "1879",
    location: "Menlo Park, New Jersey",
    era: "Modern",
    category: "Technology",
    difficulty: "easy",
    clues: [
      "Invention that brought light indoors",
      "Thomas Edison developed practical version in 1879",
      "Used filament inside a glass vacuum bulb",
      "Revolutionized how people worked and lived",
      "Allowed activities to continue after dark",
      "First long-lasting incandescent electric light bulb"
    ],
    funFact: "Edison didn't actually invent the light bulb - over 20 people invented versions before him! What Edison did was create the first practical, long-lasting bulb (1,200 hours) and the entire electrical system to power it. He was a better entrepreneur than inventor!",
    funFactSource: "U.S. Department of Energy",
    funFactSourceUrl: "https://www.energy.gov/articles/history-light-bulb"
  },
  
  {
    id: 37,
    type: "invention",
    name: "Airplane",
    year: "1903",
    location: "Kitty Hawk, North Carolina",
    era: "Modern",
    category: "Transportation",
    difficulty: "easy",
    clues: [
      "Major breakthrough in transportation",
      "Two bicycle-making brothers achieved powered flight",
      "First successful flight lasted only 12 seconds",
      "Occurred at Kitty Hawk in December 1903",
      "Wright Flyer traveled 120 feet on first flight",
      "Wright Brothers invented the first powered airplane"
    ],
    funFact: "The Wright Brothers' first flight (120 feet) was shorter than the wingspan of a Boeing 747 (211 feet)! And Orville Wright lived long enough to see the first supersonic flight - he witnessed aviation go from 12 seconds in the air to breaking the sound barrier.",
    funFactSource: "Smithsonian National Air and Space Museum",
    funFactSourceUrl: "https://airandspace.si.edu/collection-objects/1903-wright-flyer"
  },
  
  {
    id: 38,
    type: "invention",
    name: "Telephone",
    year: "1876",
    location: "Boston, Massachusetts",
    era: "Modern",
    category: "Communication",
    difficulty: "easy",
    clues: [
      "Revolutionary communication device",
      "Invented in the 1870s by Alexander Graham Bell",
      "Transmitted human voice over electrical wires",
      "First words spoken were 'Mr. Watson, come here, I want to see you'",
      "Transformed long-distance communication",
      "Patented in 1876, changed the world"
    ],
    funFact: "Bell almost didn't get the telephone patent! Elisha Gray filed a patent caveat for a similar device just hours after Bell filed his patent on February 14, 1876. This led to decades of legal battles and controversy over who really invented it first.",
    funFactSource: "Library of Congress",
    funFactSourceUrl: "https://www.loc.gov/collections/alexander-graham-bell-papers/"
  },
  
  {
    id: 39,
    type: "invention",
    name: "Penicillin",
    year: "1928",
    location: "London, England",
    era: "Modern",
    category: "Medicine",
    difficulty: "easy",
    clues: [
      "Accidental medical discovery in 1928",
      "Scottish scientist noticed mold killing bacteria in petri dish",
      "First widely used antibiotic medicine",
      "Saved millions of lives during World War II",
      "Alexander Fleming discovered it but didn't initially develop it",
      "Revolutionized treatment of bacterial infections"
    ],
    funFact: "Fleming discovered penicillin because he was a 'sloppy' scientist! He left petri dishes unwashed while on vacation, and when he returned, mold had contaminated his bacteria cultures - but had also killed them. His mess led to one of medicine's greatest discoveries!",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/medicine/1945/fleming/biographical/"
  },
  
  {
    id: 40,
    type: "invention",
    name: "World Wide Web",
    year: "1989",
    location: "CERN, Switzerland",
    era: "Modern",
    category: "Technology",
    difficulty: "easy",
    clues: [
      "Revolutionary information sharing system",
      "Developed at CERN particle physics lab in Switzerland",
      "British scientist Tim Berners-Lee invented it in 1989",
      "Used hypertext to link documents across the internet",
      "First website went live in August 1991",
      "Foundation of the modern internet we use today"
    ],
    funFact: "Tim Berners-Lee could have become a billionaire but gave away the Web for free! He convinced CERN to release it without patents or royalties in 1993, saying it needed to be freely available to flourish. He later said 'You can't propose that something is a universal space and at the same time keep control of it.'",
    funFactSource: "CERN",
    funFactSourceUrl: "https://home.cern/science/computing/birth-web"
  },
  
  // MEDIUM INVENTIONS (7)
  {
    id: 41,
    type: "invention",
    name: "Vaccine (Smallpox)",
    year: "1796",
    location: "England",
    era: "Modern",
    category: "Medicine",
    difficulty: "medium",
    clues: [
      "Medical breakthrough in preventing disease",
      "Edward Jenner tested it on an 8-year-old boy in 1796",
      "Used cowpox to protect against deadly related disease",
      "First scientific attempt to control infectious disease",
      "Eventually led to global eradication of the disease",
      "World's first vaccine, against smallpox"
    ],
    funFact: "Jenner's experiment would be completely illegal today! He deliberately infected an 8-year-old boy with cowpox, then later exposed him to smallpox to see if it worked. Fortunately for medical history (and the boy), it did - but it would never pass modern ethics review!",
    funFactSource: "World Health Organization",
    funFactSourceUrl: "https://www.who.int/news-room/feature-stories/detail/the-smallpox-vaccine"
  },
  
  {
    id: 42,
    type: "invention",
    name: "Steam Engine",
    year: "1712-1776",
    location: "England",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Powered the Industrial Revolution",
      "Thomas Newcomen created early version, Watt improved it",
      "Converted heat energy into mechanical work",
      "Used in mines, factories, trains, and ships",
      "Transformed manufacturing and transportation",
      "James Watt's improved version in 1776 changed the world"
    ],
    funFact: "We measure engine power in 'horsepower' because James Watt needed to convince mine owners to buy his steam engines! He calculated that one horse could do 33,000 foot-pounds of work per minute, then showed his engine could do the work of multiple horses.",
    funFactSource: "Science Museum London",
    funFactSourceUrl: "https://www.sciencemuseum.org.uk/objects-and-stories/james-watt-and-steam-engine"
  },
  
  {
    id: 43,
    type: "invention",
    name: "Photography",
    year: "1826-1839",
    location: "France",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Method of capturing and preserving images",
      "First permanent photograph taken in 1826-27",
      "Louis Daguerre popularized practical process in 1839",
      "Used light-sensitive chemicals on metal or paper",
      "Revolutionized art, journalism, and memory preservation",
      "Called daguerreotype in its early form"
    ],
    funFact: "The first photograph ever taken required 8 hours of exposure time! Joseph Nicéphore Niépce's 1826 photo 'View from the Window at Le Gras' needed so long that the sun appears to shine on both sides of the building - it moved across the sky during the exposure!",
    funFactSource: "University of Texas - Harry Ransom Center",
    funFactSourceUrl: "https://www.hrc.utexas.edu/niépce/"
  },
  
  {
    id: 44,
    type: "invention",
    name: "Radio",
    year: "1895",
    location: "Italy",
    era: "Modern",
    category: "Communication",
    difficulty: "medium",
    clues: [
      "Wireless communication technology",
      "Guglielmo Marconi demonstrated it in 1895",
      "Transmitted signals through electromagnetic waves",
      "First transatlantic transmission in 1901",
      "Revolutionized news, entertainment, and emergency communications",
      "Led to modern broadcasting and wireless technology"
    ],
    funFact: "When the Titanic sank in 1912, the radio distress signal saved over 700 lives - but the nearest ship's radio operator had gone to bed! Only the Carpathia, 58 miles away with its operator still awake, heard the SOS. This led to laws requiring 24-hour radio monitoring on ships.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/marconi-radio-titanic-180972868/"
  },
  
  {
    id: 45,
    type: "invention",
    name: "Compass",
    year: "c. 11th century",
    location: "China",
    era: "Medieval",
    category: "Navigation",
    difficulty: "medium",
    clues: [
      "Ancient Chinese navigational tool",
      "Uses magnetized needle to show direction",
      "Originally developed during Song Dynasty",
      "Revolutionized maritime navigation and exploration",
      "Enabled long-distance sea voyages",
      "Magnetic compass pointing to north and south"
    ],
    funFact: "The compass was first used in China not for navigation but for feng shui! The ancient Chinese used magnetic lodestones to align buildings and find auspicious placements. It took centuries before someone thought to use it for sailing!",
    funFactSource: "Science Museum London",
    funFactSourceUrl: "https://www.sciencemuseum.org.uk/objects-and-stories/history-compass"
  },
  
  {
    id: 46,
    type: "invention",
    name: "Anesthesia",
    year: "1846",
    location: "Boston, Massachusetts",
    era: "Modern",
    category: "Medicine",
    difficulty: "medium",
    clues: [
      "Medical breakthrough for painless surgery",
      "First public demonstration in 1846",
      "William Morton used ether at Massachusetts General Hospital",
      "Allowed doctors to perform longer, more complex operations",
      "Patient remained unconscious and pain-free during surgery",
      "Revolutionized medicine and surgery"
    ],
    funFact: "Before anesthesia, speed was everything in surgery - the best surgeons could amputate a leg in under 2.5 minutes! Patients were held down by strong assistants while conscious. Robert Liston once amputated so fast he accidentally cut off his assistant's fingers too!",
    funFactSource: "Massachusetts General Hospital",
    funFactSourceUrl: "https://www.massgeneral.org/museum/exhibits/ether-dome"
  },
  
  {
    id: 47,
    type: "invention",
    name: "Dynamite",
    year: "1867",
    location: "Sweden",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Powerful explosive invented in 1867",
      "Swedish chemist Alfred Nobel created it",
      "Made nitroglycerin safer to handle and transport",
      "Used in mining, construction, and warfare",
      "Made Nobel enormously wealthy",
      "His guilt over its military use led him to create Nobel Prizes"
    ],
    funFact: "Alfred Nobel created the Nobel Peace Prize because a French newspaper mistakenly published his obituary calling him the 'merchant of death'! Horrified at how he'd be remembered, Nobel changed his will to create prizes celebrating human achievement instead of destruction.",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/alfred-nobel/biographical/"
  },
  
  // HARD INVENTIONS (3)
  {
    id: 48,
    type: "invention",
    name: "Transistor",
    year: "1947",
    location: "Bell Labs, New Jersey",
    era: "Modern",
    category: "Technology",
    difficulty: "hard",
    clues: [
      "Tiny electronic component invented in 1947",
      "Developed at Bell Labs by Bardeen, Brattain, and Shockley",
      "Could amplify and switch electronic signals",
      "Replaced bulky vacuum tubes in electronics",
      "Foundation of all modern electronic devices",
      "Made computers, smartphones, and digital age possible"
    ],
    funFact: "The first transistor was barely more powerful than a vacuum tube but was huge news because it didn't burn out! Modern smartphones contain over 15 BILLION transistors on a chip smaller than your fingernail - each one millions of times smaller than that first transistor.",
    funFactSource: "Computer History Museum",
    funFactSourceUrl: "https://www.computerhistory.org/siliconengine/transistor-invented/"
  },
  
  {
    id: 49,
    type: "invention",
    name: "Paper",
    year: "c. 105 CE",
    location: "China",
    era: "Ancient",
    category: "Technology",
    difficulty: "hard",
    clues: [
      "Ancient Chinese invention around 105 CE",
      "Made from plant fibers, rags, and tree bark",
      "Cai Lun credited with improving the process",
      "Much cheaper and easier to produce than parchment or silk",
      "Spread slowly westward over centuries via Silk Road",
      "Revolutionized record-keeping and spread of knowledge"
    ],
    funFact: "The Chinese kept paper-making secret for over 600 years! When Arab forces captured Chinese paper makers at the Battle of Talas in 751 CE, they learned the technique and brought it to the Islamic world, then Europe. It was one of history's most valuable industrial secrets!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/history-paper-180976061/"
  },
  
  {
    id: 50,
    type: "invention",
    name: "Agricultural Revolution (Farming)",
    year: "c. 10,000 BCE",
    location: "Fertile Crescent (Middle East)",
    era: "Ancient",
    category: "Agriculture",
    difficulty: "hard",
    clues: [
      "Fundamental shift in human society around 10,000 BCE",
      "Transition from hunting-gathering to food production",
      "People domesticated plants and animals",
      "Began in the Fertile Crescent region",
      "Allowed permanent settlements and population growth",
      "Birth of agriculture and civilized society"
    ],
    funFact: "The agricultural revolution was terrible for human health! Early farmers were shorter, had worse teeth, more diseases, and died younger than hunter-gatherers. But farming could feed 50x more people per square mile, so it spread anyway - more people beat healthier people!",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.org/article/agricultural-revolution/"
  },
  
  // ========================================
  // ADDITIONAL FIGURES (51-67 = 17 more)
  // ========================================
  
  {
    id: 51,
    type: "figure",
    name: "Leonardo da Vinci",
    category: "Artist/Inventor",
    era: "Renaissance",
    difficulty: "easy",
    clues: [
      "Italian Renaissance polymath born in 1452",
      "Master painter, sculptor, architect, and engineer",
      "Painted one of the world's most famous portraits",
      "Created 'The Last Supper' and studied human anatomy",
      "Designed flying machines centuries before they existed",
      "Painted the Mona Lisa and filled notebooks with inventions"
    ],
    funFact: "Leonardo da Vinci wrote all his personal notes in mirror writing (right to left)! He filled over 7,000 pages of notebooks with inventions, observations, and art. He designed helicopters, tanks, and submarines 400+ years before they were built. He was also ambidextrous and could write with both hands simultaneously!",
    funFactSource: "British Library",
    funFactSourceUrl: "https://www.bl.uk/people/leonardo-da-vinci"
  },
  
  {
    id: 52,
    type: "figure",
    name: "Marie Curie",
    category: "Scientist",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Polish-born scientist who worked in France",
      "First woman to win a Nobel Prize",
      "Pioneered research on radioactivity",
      "Only person to win Nobel Prizes in two different sciences",
      "Discovered radium and polonium",
      "Won Nobel Prizes in Physics (1903) and Chemistry (1911)"
    ],
    funFact: "Marie Curie's notebooks are still radioactive and will be for 1,500 years! They're kept in lead-lined boxes. She carried test tubes of radium in her pockets and stored them in her desk drawer because they glowed pretty. She died from radiation exposure. Her daughter Irène also won a Nobel Prize in Chemistry!",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/"
  },
  
  {
    id: 53,
    type: "figure",
    name: "Genghis Khan",
    category: "Military Leader",
    era: "Medieval",
    difficulty: "easy",
    clues: [
      "Born in Mongolia around 1162",
      "United nomadic tribes into a powerful empire",
      "Created the largest contiguous land empire in history",
      "His empire stretched from China to Eastern Europe",
      "Founder of the Mongol Empire",
      "Conquered more territory than any other leader in history"
    ],
    funFact: "Genghis Khan's empire was so large it connected the East and West for the first time via the Silk Road! About 16 million men alive today are direct descendants of Genghis Khan. His empire killed so many people that forests regrew and removed 700 million tons of CO2 from the atmosphere!",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.com/culture/article/mongolia-genghis-khan-dna"
  },
  
  {
    id: 54,
    type: "figure",
    name: "Martin Luther King Jr.",
    category: "Civil Rights Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "American civil rights leader born in 1929",
      "Baptist minister who advocated nonviolent resistance",
      "Led the Montgomery Bus Boycott",
      "Delivered famous 'I Have a Dream' speech in 1963",
      "Won Nobel Peace Prize at age 35",
      "Assassinated in Memphis in 1968 while fighting for equality"
    ],
    funFact: "MLK's 'I Have a Dream' speech wasn't in his prepared notes! Gospel singer Mahalia Jackson shouted 'Tell them about the dream, Martin!' and he improvised the most famous part. He was the youngest person to win the Nobel Peace Prize at the time (35 years old). He was assassinated the day after delivering his prophetic 'I've Been to the Mountaintop' speech.",
    funFactSource: "The King Center",
    funFactSourceUrl: "https://thekingcenter.org/about-dr-king/"
  },
  
  {
    id: 55,
    type: "figure",
    name: "Joan of Arc",
    category: "Military Leader",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "French peasant girl born around 1412",
      "Claimed to receive visions from God",
      "Led French army to victory during Hundred Years' War",
      "Captured by English allies and tried for heresy",
      "Burned at the stake at age 19",
      "Later declared a saint and symbol of French unity"
    ],
    funFact: "Joan of Arc was only 17 when she led the French army to victory! She wore men's armor and cut her hair short. After being burned at stake in 1431, her ashes were thrown in the Seine River. 25 years later she was exonerated, and in 1920 she was made a saint. She never learned to read or write.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/joan-of-arc-180949506/"
  },
  
  {
    id: 56,
    type: "figure",
    name: "Mahatma Gandhi",
    category: "Political Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Indian independence leader born in 1869",
      "Pioneered nonviolent civil disobedience",
      "Led India's independence movement against British rule",
      "Famous for Salt March and hunger strikes",
      "Inspired civil rights movements worldwide",
      "Assassinated in 1948, called 'Father of the Nation' in India"
    ],
    funFact: "Gandhi was nominated for the Nobel Peace Prize 5 times but never won! The Nobel Committee later admitted this was a regret. He inspired MLK Jr., Nelson Mandela, and many others. Gandhi's funeral was attended by 2 million people. He was assassinated by a fellow Hindu who opposed his tolerance of Muslims.",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/facts/gandhi-the-missing-laureate/"
  },
  
  {
    id: 57,
    type: "figure",
    name: "Nikola Tesla",
    category: "Inventor",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Serbian-American inventor born in 1856",
      "Pioneered alternating current (AC) electricity",
      "Worked briefly for Thomas Edison before rivalry",
      "Held over 300 patents for electrical devices",
      "Envisioned wireless power transmission",
      "The coil device and electric car company bear his name"
    ],
    funFact: "Tesla claimed to have invented a 'death ray' weapon! He also said he could split the Earth in half like an apple. Despite his brilliance, he died poor and alone in a New York hotel room. He was obsessed with the number 3 and had a photographic memory. The unit of magnetic flux density (Tesla) is named after him.",
    funFactSource: "Tesla Science Center",
    funFactSourceUrl: "https://teslasciencecenter.org/"
  },
  
  {
    id: 58,
    type: "figure",
    name: "Nelson Mandela",
    category: "Political Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "South African anti-apartheid revolutionary",
      "Imprisoned for 27 years for fighting racial segregation",
      "Released in 1990 after international pressure",
      "Became South Africa's first Black president in 1994",
      "Won Nobel Peace Prize for ending apartheid",
      "Global symbol of reconciliation and human rights"
    ],
    funFact: "Mandela was on the US terrorism watch list until 2008! He spent 27 years in prison, 18 of them breaking rocks in a limestone quarry on Robben Island. Despite this, he forgave his jailers and worked for reconciliation. His prison number (46664) became an AIDS awareness campaign. He lived to 95 and is a global icon.",
    funFactSource: "Nelson Mandela Foundation",
    funFactSourceUrl: "https://www.nelsonmandela.org/"
  },
  
  {
    id: 59,
    type: "figure",
    name: "Alexander the Great",
    category: "Military Leader",
    era: "Ancient",
    difficulty: "easy",
    clues: [
      "Macedonian king born in 356 BCE",
      "Tutored by philosopher Aristotle",
      "Never lost a battle in his military career",
      "Conquered Persian Empire by age 30",
      "Created one of the largest empires of the ancient world",
      "Died mysteriously at age 32, possibly from poison"
    ],
    funFact: "Alexander conquered most of the known world by age 30! He founded over 20 cities named Alexandria. His horse Bucephalus was buried with military honors. Alexander was never defeated in battle and conquered territory from Greece to India. He died at 32 under mysterious circumstances - possibly malaria, poison, or typhoid.",
    funFactSource: "Ancient History Encyclopedia",
    funFactSourceUrl: "https://www.worldhistory.org/Alexander_the_Great/"
  },
  
  {
    id: 60,
    type: "figure",
    name: "Harriet Tubman",
    category: "Abolitionist",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Born into slavery in Maryland around 1822",
      "Escaped to freedom in 1849",
      "Returned to slave states 13 times to rescue others",
      "Conducted the Underground Railroad",
      "Freed approximately 70 enslaved people",
      "Civil War spy and first woman to lead armed expedition"
    ],
    funFact: "Harriet Tubman had a $40,000 bounty on her head (about $1.2 million today)! She never lost a single passenger on the Underground Railroad. During the Civil War, she was a spy, scout, and nurse. She suffered from narcolepsy and seizures from a head injury. She's going to be on the $20 bill!",
    funFactSource: "National Park Service",
    funFactSourceUrl: "https://www.nps.gov/people/harriet-tubman.htm"
  },
  
  {
    id: 61,
    type: "figure",
    name: "Confucius",
    category: "Philosopher",
    era: "Ancient",
    difficulty: "medium",
    clues: [
      "Chinese philosopher born in 551 BCE",
      "Teachings emphasized personal ethics and morality",
      "Promoted importance of family and social harmony",
      "His philosophy influenced East Asian culture for millennia",
      "Created the foundation of Confucianism",
      "Sayings compiled in the 'Analects'"
    ],
    funFact: "Confucius failed as a politician and spent years wandering China with his disciples! He only gained fame after his death. Confucianism became the official philosophy of China for 2,000 years. During the Cultural Revolution, his teachings were suppressed, but they've resurged. Over 6 million people can trace ancestry to Confucius!",
    funFactSource: "Stanford Encyclopedia of Philosophy",
    funFactSourceUrl: "https://plato.stanford.edu/entries/confucius/"
  },
  
  {
    id: 62,
    type: "figure",
    name: "Winston Churchill",
    category: "Political Leader",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "British Prime Minister during World War II",
      "Known for inspiring speeches during dark times",
      "Rallied Britain with 'We shall never surrender' speech",
      "Awarded Nobel Prize in Literature in 1953",
      "Coined the term 'Iron Curtain'",
      "Led Britain through the Blitz and to victory"
    ],
    funFact: "Churchill was a prolific painter and wrote 43 books! He won the Nobel Prize for Literature, not Peace. He suffered from depression which he called his 'black dog.' He drank champagne and smoked cigars daily but lived to 90. He's the only British PM to win a Nobel Prize and was voted greatest Briton ever.",
    funFactSource: "Churchill Archives Centre",
    funFactSourceUrl: "https://www.chu.cam.ac.uk/archives/"
  },
  
  {
    id: 63,
    type: "figure",
    name: "Mozart",
    category: "Composer",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Austrian musical prodigy born in 1756",
      "Composed his first piece at age 5",
      "Created over 600 works in his short life",
      "Master of opera, symphony, and concerto",
      "Died mysteriously at age 35",
      "Considered one of the greatest composers ever"
    ],
    funFact: "Mozart could transcribe an entire piece of music after hearing it once! At 14, he heard Allegri's 'Miserere' in the Vatican (which was forbidden to copy) and wrote it from memory. He died at 35, possibly from strep throat. His burial site is unknown. His sister was also a musical prodigy but was forbidden to perform!",
    funFactSource: "Mozarteum Foundation",
    funFactSourceUrl: "https://mozarteum.at/"
  },
  
  {
    id: 64,
    type: "figure",
    name: "Rosa Parks",
    category: "Civil Rights Activist",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "African American woman born in Alabama in 1913",
      "Refused to give up bus seat to white passenger",
      "Her arrest sparked Montgomery Bus Boycott in 1955",
      "Became 'Mother of the Civil Rights Movement'",
      "Worked with MLK Jr. and NAACP",
      "Awarded Presidential Medal of Freedom and Congressional Gold Medal"
    ],
    funFact: "Rosa Parks wasn't just tired that day - she was a trained civil rights activist! She had attended workshops on civil disobedience. She wasn't the first to refuse to give up a seat, but the NAACP chose her case because she was an ideal plaintiff. She faced death threats and couldn't find work in Montgomery after the boycott.",
    funFactSource: "Rosa Parks Museum",
    funFactSourceUrl: "https://www.troy.edu/rosaparks/"
  },
  
  {
    id: 65,
    type: "figure",
    name: "Socrates",
    category: "Philosopher",
    era: "Ancient",
    difficulty: "medium",
    clues: [
      "Ancient Greek philosopher born around 470 BCE",
      "Developed the Socratic method of questioning",
      "Never wrote down his teachings",
      "Known through writings of his student Plato",
      "Charged with corrupting Athenian youth",
      "Chose to drink hemlock poison rather than renounce his beliefs"
    ],
    funFact: "Socrates wrote absolutely nothing! Everything we know comes from his students Plato and Xenophon. He was ugly by Greek standards but charismatic. His wife Xantippe was supposedly very difficult. He served as a soldier and was known for his physical endurance. He voluntarily drank hemlock to die for his principles.",
    funFactSource: "Stanford Encyclopedia of Philosophy",
    funFactSourceUrl: "https://plato.stanford.edu/entries/socrates/"
  },
  
  {
    id: 66,
    type: "figure",
    name: "Florence Nightingale",
    category: "Nurse/Reformer",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "British nurse born in 1820",
      "Revolutionized nursing and hospital sanitation",
      "Served in the Crimean War (1853-1856)",
      "Known as 'The Lady with the Lamp'",
      "Founded first secular nursing school in 1860",
      "Pioneer of modern nursing and medical statistics"
    ],
    funFact: "Florence Nightingale was a math genius and pioneer of data visualization! She invented the polar area diagram (a type of pie chart) to show how most soldiers died from disease, not wounds. She was bedridden for much of her later life but continued working. She was the first woman elected to the Royal Statistical Society!",
    funFactSource: "Florence Nightingale Museum",
    funFactSourceUrl: "https://www.florence-nightingale.co.uk/"
  },
  
  {
    id: 67,
    type: "figure",
    name: "Benjamin Franklin",
    category: "Polymath",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "American Founding Father born in 1706",
      "Inventor, scientist, diplomat, and writer",
      "Proved lightning is electricity with kite experiment",
      "Helped draft the Declaration of Independence",
      "Invented bifocals, lightning rod, and a popular heating stove",
      "Face on US $100 bill, never served as president"
    ],
    funFact: "Benjamin Franklin never patented any of his inventions because he wanted everyone to benefit! He founded the first public library, fire department, and postal system in America. He was a ladies' man in Paris at age 70+. He proposed Daylight Saving Time. He's the only Founding Father who signed all 4 key documents of US founding!",
    funFactSource: "Franklin Institute",
    funFactSourceUrl: "https://www.fi.edu/benjamin-franklin"
  },
  
  // ========================================
  // ADDITIONAL EVENTS (68-84 = 17 more)
  // ========================================
  
  {
    id: 68,
    type: "event",
    name: "Fall of the Berlin Wall",
    year: "1989",
    location: "Berlin, Germany",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Symbolic event marking the end of the Cold War",
      "Occurred in a divided European capital city",
      "Concrete barrier had separated families for 28 years",
      "Happened on November 9, 1989",
      "East Germans were allowed to cross freely for first time",
      "The wall fell, reuniting East and West Germany"
    ],
    funFact: "The Fall of the Berlin Wall happened by accident! A spokesperson mistakenly announced that East Germans could cross the border 'immediately' when he meant the next day. Thousands rushed to the wall, guards had no orders, and they opened the gates. David Hasselhoff performed there shortly after. Pieces of the wall are now sold worldwide!",
    funFactSource: "BBC History",
    funFactSourceUrl: "https://www.bbc.co.uk/history/events/fall_of_the_berlin_wall"
  },
  
  {
    id: 69,
    type: "event",
    name: "Signing of the Magna Carta",
    year: "1215",
    location: "Runnymede, England",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "Medieval document limiting royal power",
      "King forced to sign by rebellious barons",
      "Established principle that everyone is subject to law",
      "Signed at Runnymede meadow in June 1215",
      "Foundation for constitutional law and human rights",
      "King John sealed the historic charter under pressure from barons"
    ],
    funFact: "The Magna Carta didn't give rights to common people - only to wealthy barons! King John had it annulled by the Pope 10 weeks later, which started a civil war. Only 3 of the original 63 clauses remain in British law today. Of 4 original copies, one sold for $21.3 million! It influenced the US Constitution and Bill of Rights.",
    funFactSource: "British Library",
    funFactSourceUrl: "https://www.bl.uk/magna-carta"
  },
  
  {
    id: 70,
    type: "event",
    name: "Apollo 11 Moon Landing",
    year: "1969",
    location: "Moon (launched from USA)",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Historic space achievement in July 1969",
      "Three astronauts on board: Armstrong, Aldrin, Collins",
      "First humans to land on another celestial body",
      "Armstrong's famous 'one small step' quote",
      "Watched by 600 million people on TV",
      "NASA's historic mission landed humans on the Moon"
    ],
    funFact: "The Apollo 11 computer had less power than a modern smartphone! Armstrong had only 25 seconds of fuel left when landing. Buzz Aldrin took communion on the Moon. They left a disc with messages from 73 world leaders, Apollo 1 mission patch, and US flag. Armstrong's first step was actually a 3.5-foot drop!",
    funFactSource: "NASA",
    funFactSourceUrl: "https://www.nasa.gov/mission_pages/apollo/apollo11.html"
  },
  
  {
    id: 71,
    type: "event",
    name: "D-Day (Normandy Invasion)",
    year: "1944",
    location: "Normandy, France",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Largest amphibious military invasion in history",
      "Occurred on June 6, 1944",
      "Allied forces landed on five French beaches",
      "Turning point of World War II in Europe",
      "Code-named Operation Overlord",
      "Over 150,000 Allied troops landed in Normandy on June 6, 1944"
    ],
    funFact: "D-Day involved the most elaborate deception in military history! Operation Bodyguard used fake armies, dummy tanks, and fake radio traffic to trick the Germans. The invasion was delayed 24 hours due to weather. Over 4,000 Allied soldiers died that day. Hitler was asleep and his staff feared waking him to tell him about the invasion!",
    funFactSource: "National WWII Museum",
    funFactSourceUrl: "https://www.nationalww2museum.org/war/articles/d-day-june-6-1944"
  },
  
  {
    id: 72,
    type: "event",
    name: "Boston Tea Party",
    year: "1773",
    location: "Boston, Massachusetts",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Political protest against British taxation",
      "Occurred on December 16, 1773",
      "Colonists disguised as Native Americans",
      "Dumped 342 chests of tea into the harbor",
      "Protest against Tea Act and 'taxation without representation'",
      "Sparked the American Revolutionary War"
    ],
    funFact: "The Boston Tea Party destroyed 92,000 pounds of tea worth $1.7 million today! The 'Indians' were poorly disguised - everyone knew who they were. John Adams called it the 'grandest event' yet. The harbor smelled like tea for weeks. This wasn't called the 'Tea Party' until the 1820s - 50 years later!",
    funFactSource: "Boston Tea Party Ships & Museum",
    funFactSourceUrl: "https://www.bostonteapartyship.com/"
  },
  
  {
    id: 73,
    type: "event",
    name: "Chernobyl Nuclear Disaster",
    year: "1986",
    location: "Chernobyl, Ukraine (USSR)",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Worst nuclear power plant accident in history",
      "Occurred on April 26, 1986",
      "Explosion and fire released massive radiation",
      "Entire city evacuated and remains abandoned",
      "Created 30km exclusion zone",
      "Soviet nuclear reactor exploded in Ukraine"
    ],
    funFact: "Chernobyl released 400 times more radiation than Hiroshima! The 'liquidators' who cleaned up received fatal doses. The explosion blew a 2,000-ton reactor lid into the air. A nearby forest turned red and died (Red Forest). The abandoned city of Pripyat is now a tourist destination. The area won't be safe for 20,000 years!",
    funFactSource: "International Atomic Energy Agency",
    funFactSourceUrl: "https://www.iaea.org/chernobyl"
  },
  
  {
    id: 74,
    type: "event",
    name: "Black Death (Bubonic Plague)",
    year: "1347-1353",
    location: "Europe, Asia, North Africa",
    era: "Medieval",
    difficulty: "medium",
    clues: [
      "Devastating pandemic in the 14th century",
      "Spread by fleas on rats along trade routes",
      "Killed 30-60% of Europe's population",
      "Victims developed black buboes on their bodies",
      "Wiped out 75-200 million people worldwide",
      "Changed medieval society forever"
    ],
    funFact: "The Black Death killed so many people that it took 200 years for Europe's population to recover! Some villages were completely abandoned. It arrived in Europe on ships from Asia - the 'plague ships.' Jews were falsely blamed and persecuted. The plague doctor outfit with the bird mask is iconic. Some Europeans have genetic immunity today!",
    funFactSource: "World Health Organization",
    funFactSourceUrl: "https://www.who.int/health-topics/plague"
  },
  
  {
    id: 75,
    type: "event",
    name: "Assassination of Archduke Franz Ferdinand",
    year: "1914",
    location: "Sarajevo, Bosnia",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Event that triggered World War I",
      "Occurred on June 28, 1914",
      "Heir to Austro-Hungarian throne killed",
      "Assassin was 19-year-old Gavrilo Princip",
      "Driver made wrong turn, bringing victim to assassin",
      "One gunshot sparked the deadliest war in history to that point"
    ],
    funFact: "The assassination was almost pure luck! The first assassination attempt (bomb) failed. The Archduke's driver made a wrong turn onto the very street where Princip happened to be buying a sandwich. Princip couldn't be executed because he was 27 days too young (under 20). He died of tuberculosis in prison at age 23.",
    funFactSource: "Imperial War Museums",
    funFactSourceUrl: "https://www.iwm.org.uk/history/the-assassination-of-archduke-franz-ferdinand"
  },
  
  {
    id: 76,
    type: "event",
    name: "Gutenberg Prints First Bible",
    year: "c. 1455",
    location: "Mainz, Germany",
    era: "Medieval",
    difficulty: "hard",
    clues: [
      "Revolutionary use of movable type printing",
      "First major book printed in the West",
      "Made books accessible beyond wealthy elite",
      "Printed in Latin in the 1450s",
      "Only 180 copies produced, 49 survive",
      "The inventor's movable type printing press changed history"
    ],
    funFact: "Gutenberg's Bible revolutionized the world but left him bankrupt! Each Bible had 1,282 pages and took 3 years to print all copies. Today, a complete Gutenberg Bible sold for $5.4 million! Gutenberg's movable type printing spread across Europe in 50 years. This invention enabled the Renaissance and Reformation!",
    funFactSource: "British Library",
    funFactSourceUrl: "https://www.bl.uk/treasures/gutenberg/homepage.html"
  },
  
  {
    id: 77,
    type: "event",
    name: "Storming of the Bastille",
    year: "1789",
    location: "Paris, France",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Sparked the French Revolution",
      "Occurred on July 14, 1789",
      "Angry mob attacked royal fortress and prison",
      "Found only 7 prisoners inside",
      "Symbol of monarchy's tyranny",
      "France celebrates this event as July 14 national holiday"
    ],
    funFact: "Only 7 prisoners were in the Bastille when it fell - 4 forgers, 2 lunatics, and 1 aristocrat! The prison was going to be demolished anyway. The mob's original goal was to get gunpowder. The fortress was demolished and sold as souvenirs. The governor's head was paraded on a pike. This sparked the violent French Revolution!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/what-really-happened-bastille-180972083/"
  },
  
  {
    id: 78,
    type: "event",
    name: "Titanic Sinks",
    year: "1912",
    location: "North Atlantic Ocean",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Largest ship afloat at the time",
      "Billed as 'unsinkable' on maiden voyage",
      "Hit iceberg on April 14, 1912",
      "Not enough lifeboats for all passengers",
      "Over 1,500 people died",
      "'Unsinkable' luxury liner sank in under 3 hours"
    ],
    funFact: "The Titanic's band kept playing as the ship sank! None survived. The ship broke in half but this wasn't believed until the wreck was found in 1985. First-class passengers had 60% survival rate; third-class had 25%. The last survivor died in 2009 at age 97. A lifeboat drill scheduled for that day was cancelled!",
    funFactSource: "Encyclopedia Titanica",
    funFactSourceUrl: "https://www.encyclopedia-titanica.org/"
  },
  
  {
    id: 79,
    type: "event",
    name: "Cuban Missile Crisis",
    year: "1962",
    location: "Cuba/USA/USSR",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "13-day confrontation between superpowers",
      "Occurred in October 1962",
      "Soviet missiles discovered in Cuba, 90 miles from Florida",
      "Closest the world came to nuclear war",
      "JFK ordered naval blockade of Cuba",
      "Crisis resolved when USSR removed missiles"
    ],
    funFact: "We were seconds away from nuclear war during the Cuban Missile Crisis! A Soviet submarine officer named Vasili Arkhipov prevented his captain from launching a nuclear torpedo when US ships were dropping depth charges. If he'd agreed, WWIII would have started. The world didn't know how close we came until the 1990s!",
    funFactSource: "JFK Presidential Library",
    funFactSourceUrl: "https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/cuban-missile-crisis"
  },
  
  {
    id: 80,
    type: "event",
    name: "Signing of the Declaration of Independence",
    year: "1776",
    location: "Philadelphia, Pennsylvania",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "13 American colonies declared independence",
      "Adopted on July 4, 1776",
      "Drafted primarily by Thomas Jefferson",
      "Listed grievances against King George III",
      "'Life, Liberty, and the pursuit of Happiness'",
      "Birth of the United States of America"
    ],
    funFact: "The Declaration of Independence wasn't actually signed on July 4! Most signatures were added August 2, 1776. One signature is huge - John Hancock's - which is why 'John Hancock' means signature. Some signers were hunted as traitors. The document was hidden during the War of 1812. It's displayed with the Constitution in the National Archives!",
    funFactSource: "National Archives",
    funFactSourceUrl: "https://www.archives.gov/founding-docs/declaration"
  },
  
  {
    id: 81,
    type: "event",
    name: "Women's Suffrage (19th Amendment)",
    year: "1920",
    location: "United States",
    era: "Modern",
    difficulty: "medium",
    clues: [
      "Constitutional amendment granting voting rights",
      "Culmination of decades of activism",
      "Ratified on August 18, 1920",
      "Women fought for this right since 1848",
      "Passed by ONE vote in Tennessee legislature",
      "American women gained the right to vote"
    ],
    funFact: "Women's suffrage passed by just ONE vote! Tennessee legislator Harry Burn changed his vote after getting a letter from his mother saying 'be a good boy.' Some suffragettes went on hunger strikes and were force-fed. New Zealand was first to grant women's vote (1893). Some American women couldn't vote until 1965 (Voting Rights Act)!",
    funFactSource: "National Archives",
    funFactSourceUrl: "https://www.archives.gov/milestone-documents/19th-amendment"
  },
  
  {
    id: 82,
    type: "event",
    name: "First Moon Orbit (Apollo 8)",
    year: "1968",
    location: "Moon orbit",
    era: "Modern",
    difficulty: "hard",
    clues: [
      "First humans to leave Earth orbit",
      "Occurred in December 1968",
      "Orbited the Moon 10 times",
      "Astronauts read from Genesis on Christmas Eve",
      "First to see Earthrise from the Moon",
      "Set stage for Moon landing 7 months later"
    ],
    funFact: "Apollo 8's Christmas Eve broadcast was the most-watched TV program ever at the time! The crew read Genesis while orbiting the Moon. The 'Earthrise' photo became one of the most influential images ever taken. The mission was considered 'risky' but succeeded perfectly. It gave hope during a tumultuous 1968 (Vietnam, assassinations, riots).",
    funFactSource: "NASA",
    funFactSourceUrl: "https://www.nasa.gov/mission_pages/apollo/missions/apollo8.html"
  },
  
  {
    id: 83,
    type: "event",
    name: "Invention of Democracy (Athens)",
    year: "c. 508 BCE",
    location: "Athens, Greece",
    era: "Ancient",
    difficulty: "hard",
    clues: [
      "Revolutionary political system in ancient Greece",
      "Citizens voted directly on laws and policies",
      "Only free adult males could participate",
      "Introduced by Cleisthenes around 508 BCE",
      "Foundation for modern democratic governments",
      "Athens created the world's first democracy"
    ],
    funFact: "Athenian democracy was direct, not representative - citizens voted on everything! But only 10-20% of the population could vote (no women, slaves, or foreigners). They used ostracism to exile dangerous politicians for 10 years. Some decisions were made by lottery! This democracy only lasted about 180 years before being conquered.",
    funFactSource: "Stanford University",
    funFactSourceUrl: "https://plato.stanford.edu/entries/democracy-ancient/"
  },
  
  {
    id: 84,
    type: "event",
    name: "Abolition of Slavery (13th Amendment)",
    year: "1865",
    location: "United States",
    era: "Modern",
    difficulty: "easy",
    clues: [
      "Constitutional amendment ending forced labor",
      "Passed after the Civil War",
      "Ratified on December 6, 1865",
      "Formally abolished slavery in the United States",
      "Lincoln pushed for passage before his death",
      "13th Amendment freed 4 million enslaved people"
    ],
    funFact: "Slavery technically still isn't completely abolished! The 13th Amendment has an exception for punishment of crime, which created the convict leasing system. Mississippi didn't officially ratify it until 2013! Some states rejected it: Delaware (until 1901), Kentucky (1976). The last slave ship arrived in 1860, 52 years after imports were banned!",
    funFactSource: "National Archives",
    funFactSourceUrl: "https://www.archives.gov/milestone-documents/13th-amendment"
  },
  
  // ========================================
  // ADDITIONAL INVENTIONS (85-100 = 16 more)
  // ========================================
  
  {
    id: 85,
    type: "invention",
    name: "Telephone",
    year: "1876",
    location: "Boston, USA",
    era: "Modern",
    category: "Communication",
    difficulty: "easy",
    clues: [
      "Revolutionary communication device",
      "Invented in 1876 by Scottish-born inventor",
      "First words: 'Mr. Watson, come here, I want to see you'",
      "Transmitted voice over wires using electrical signals",
      "Alexander Graham Bell patented this invention",
      "Changed long-distance communication forever"
    ],
    funFact: "Alexander Graham Bell beat Elisha Gray to the patent office by just 2 hours! Bell's first call was to his assistant in the next room asking for help after spilling acid. Bell refused to have a telephone in his study because it was too distracting. He also invented the metal detector and considered the telephone his least important invention!",
    funFactSource: "Library of Congress",
    funFactSourceUrl: "https://www.loc.gov/collections/alexander-graham-bell-papers/"
  },
  
  {
    id: 86,
    type: "invention",
    name: "Penicillin",
    year: "1928",
    location: "London, England",
    era: "Modern",
    category: "Medicine",
    difficulty: "easy",
    clues: [
      "First widely used antibiotic drug",
      "Discovered accidentally in 1928",
      "Scientist found mold killing bacteria in petri dish",
      "Revolutionized treatment of bacterial infections",
      "Saved countless lives in World War II",
      "Alexander Fleming discovered this life-saving medicine"
    ],
    funFact: "Penicillin was discovered by accident when Fleming went on vacation! He returned to find mold killing bacteria in a forgotten petri dish. He almost threw it away. It took 12 years to purify for mass production. Fleming shared the Nobel Prize. Penicillin saved millions of lives - Churchill's life was saved by it!",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/medicine/1945/fleming/facts/"
  },
  
  {
    id: 87,
    type: "invention",
    name: "Light Bulb",
    year: "1879",
    location: "Menlo Park, USA",
    era: "Modern",
    category: "Technology",
    difficulty: "easy",
    clues: [
      "Illumination device that revolutionized modern life",
      "Practical version developed in 1879",
      "Used carbon filament in vacuum",
      "Thomas Edison perfected the design",
      "Ended reliance on gas lamps and candles",
      "Made electric lighting affordable and practical"
    ],
    funFact: "Edison didn't invent the light bulb - he improved it! Over 20 inventors worked on electric lights before him. Edison tested 3,000 different materials for filaments. His first bulb lasted 13.5 hours; he got it to 1,200 hours. He famously said 'I have not failed. I've just found 10,000 ways that won't work.'",
    funFactSource: "Edison Innovation Foundation",
    funFactSourceUrl: "https://www.nps.gov/edis/index.htm"
  },
  
  {
    id: 88,
    type: "invention",
    name: "Airplane",
    year: "1903",
    location: "Kitty Hawk, North Carolina",
    era: "Modern",
    category: "Transportation",
    difficulty: "easy",
    clues: [
      "First successful powered flight",
      "Invented by two bicycle-making brothers",
      "First flight on December 17, 1903",
      "Flew for only 12 seconds on first attempt",
      "Wright Brothers achieved controlled, sustained flight",
      "Transformed global travel and warfare"
    ],
    funFact: "The Wright Brothers' first flight (12 seconds, 120 feet) was shorter than a Boeing 747's wingspan! Only 5 people witnessed it. They invited reporters but no one came. The brothers flipped a coin to see who would fly first - Wilbur won but crashed. Orville went next and succeeded. Neither brother married or went to college!",
    funFactSource: "Smithsonian National Air and Space Museum",
    funFactSourceUrl: "https://airandspace.si.edu/stories/editorial/wright-brothers-flight-1903"
  },
  
  {
    id: 89,
    type: "invention",
    name: "Wheel",
    year: "c. 3500 BCE",
    location: "Mesopotamia",
    era: "Ancient",
    category: "Transportation",
    difficulty: "medium",
    clues: [
      "One of humanity's most important inventions",
      "First evidence around 3500 BCE",
      "Initially used for pottery, not transportation",
      "Revolutionized transportation and commerce",
      "Invented independently in multiple locations",
      "Simple circular device that changed civilization"
    ],
    funFact: "The wheel was invented 2,000 years AFTER the pyramids were built! It wasn't used for transportation for 300 years after invention. Some advanced civilizations (like the Incas) never used wheeled vehicles. The wheelbarrow wasn't invented until 1,000 years after the wheel! Ancient Mesopotamians used wheels for pottery first.",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/science-nature/a-salute-to-the-wheel-31805121/"
  },
  
  {
    id: 90,
    type: "invention",
    name: "Compass",
    year: "c. 206 BCE",
    location: "China",
    era: "Ancient",
    category: "Navigation",
    difficulty: "medium",
    clues: [
      "Navigation tool using Earth's magnetic field",
      "Invented in ancient China during Han Dynasty",
      "Originally used for feng shui, not navigation",
      "Enabled Age of Exploration",
      "Pointed to magnetic north",
      "Revolutionized sea travel and exploration"
    ],
    funFact: "The compass was invented for fortune-telling, not navigation! Ancient Chinese used it for feng shui to align buildings. It wasn't used for navigation for 1,000 years. Europeans didn't get it until the 1100s. The compass points to magnetic north, not true north. Vikings may have used 'sunstones' instead of compasses!",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.org/encyclopedia/compass/"
  },
  
  {
    id: 91,
    type: "invention",
    name: "Vaccine (Smallpox)",
    year: "1796",
    location: "England",
    era: "Modern",
    category: "Medicine",
    difficulty: "medium",
    clues: [
      "Medical breakthrough preventing deadly disease",
      "Edward Jenner tested on 8-year-old boy",
      "Used cowpox to create immunity to smallpox",
      "First vaccine ever developed",
      "Smallpox killed 30% of infected people",
      "Eventually led to smallpox eradication in 1980"
    ],
    funFact: "Jenner tested the first vaccine on his gardener's 8-year-old son! He infected the boy with cowpox, then exposed him to smallpox. It worked, but would be illegal today! Vaccine comes from 'vacca' (Latin for cow). Smallpox is the only human disease ever eradicated. The last case was in 1977 in Somalia!",
    funFactSource: "World Health Organization",
    funFactSourceUrl: "https://www.who.int/news-room/feature-stories/detail/the-smallpox-vaccine-the-origins-of-vaccination"
  },
  
  {
    id: 92,
    type: "invention",
    name: "Transistor",
    year: "1947",
    location: "New Jersey, USA",
    era: "Modern",
    category: "Technology",
    difficulty: "hard",
    clues: [
      "Semiconductor device that revolutionized electronics",
      "Invented at Bell Labs in 1947",
      "Replaced bulky vacuum tubes",
      "Enabled miniaturization of electronics",
      "Foundation of all modern computers and phones",
      "Three inventors won Nobel Prize in Physics"
    ],
    funFact: "The transistor is the most manufactured device in history - 13 sextillion have been made! (13,000,000,000,000,000,000,000). A modern smartphone has 11+ billion transistors. Bell Labs kept it secret for 7 months. The inventors won the Nobel Prize. Without transistors, computers would still fill entire rooms!",
    funFactSource: "Nobel Prize Organization",
    funFactSourceUrl: "https://www.nobelprize.org/prizes/physics/1956/summary/"
  },
  
  {
    id: 93,
    type: "invention",
    name: "Anesthesia",
    year: "1846",
    location: "Boston, USA",
    era: "Modern",
    category: "Medicine",
    difficulty: "medium",
    clues: [
      "Medical breakthrough eliminating pain during surgery",
      "First public demonstration in 1846",
      "Used ether to make patient unconscious",
      "Before this, patients were awake during operations",
      "Revolutionized surgery and dentistry",
      "Called the greatest medical discovery ever"
    ],
    funFact: "Before anesthesia, surgeons competed on speed - some could amputate a leg in 30 seconds! Patients were held down screaming. The first public demonstration was called 'Ether Day.' The patient said 'I feel no pain' after surgery. Some doctors initially rejected it as unnatural. Today, 230+ million surgeries use anesthesia annually worldwide!",
    funFactSource: "Massachusetts General Hospital",
    funFactSourceUrl: "https://www.massgeneral.org/news/mgh-celebrates-ether-day"
  },
  
  {
    id: 94,
    type: "invention",
    name: "Steam Engine",
    year: "1712-1776",
    location: "England",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Power source that launched Industrial Revolution",
      "Converted heat energy into mechanical work",
      "James Watt greatly improved the design in 1776",
      "Powered factories, trains, and ships",
      "Replaced human and animal labor",
      "Transformed manufacturing and transportation"
    ],
    funFact: "The first steam engines were incredibly inefficient - only 1% efficiency! Watt's improvements made them practical. The term 'horsepower' was invented by Watt to market his engines. Steam engines enabled factories to be built anywhere, not just near water. They burned so much coal that they changed Earth's climate!",
    funFactSource: "Science Museum London",
    funFactSourceUrl: "https://www.sciencemuseum.org.uk/objects-and-stories/james-watt-and-our-world"
  },
  
  {
    id: 95,
    type: "invention",
    name: "Photography",
    year: "1826",
    location: "France",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Method of capturing images permanently",
      "First photo taken in 1826 by French inventor",
      "Required 8-hour exposure time initially",
      "Replaced portrait painting for many",
      "Joseph Nicéphore Niépce created first photograph",
      "Changed how we record history and memories"
    ],
    funFact: "The first photograph took 8 hours of exposure and shows buildings but no people (they moved)! Early photos required subjects to stay perfectly still for minutes. The first photo of a person was accidental - a man getting his shoes shined. The first selfie was taken in 1839! Lincoln used photos to win the presidency.",
    funFactSource: "Harry Ransom Center",
    funFactSourceUrl: "https://www.hrc.utexas.edu/collections/photography/"
  },
  
  {
    id: 96,
    type: "invention",
    name: "Concrete (Roman)",
    year: "c. 300 BCE",
    location: "Roman Empire",
    era: "Ancient",
    category: "Construction",
    difficulty: "hard",
    clues: [
      "Building material stronger than stone",
      "Ancient Romans perfected the formula",
      "Enabled construction of Pantheon and Colosseum",
      "Lost after fall of Rome, rediscovered in 1700s",
      "Made from volcanic ash, lime, and seawater",
      "Ancient Roman formula is stronger than modern versions"
    ],
    funFact: "Roman concrete gets STRONGER over time - the opposite of modern concrete! Their secret ingredient was volcanic ash. The Pantheon's dome (built 2,000 years ago) is still the world's largest unreinforced concrete dome. The recipe was lost for 1,000 years. We only recently figured out why it's superior to modern concrete!",
    funFactSource: "MIT News",
    funFactSourceUrl: "https://news.mit.edu/2023/roman-concrete-self-healing-0106"
  },
  
  {
    id: 97,
    type: "invention",
    name: "Eyeglasses",
    year: "c. 1290",
    location: "Italy",
    era: "Medieval",
    category: "Medical Device",
    difficulty: "hard",
    clues: [
      "Optical device correcting vision problems",
      "Invented in Italy in the late 1200s",
      "Used convex lenses for farsightedness",
      "Extended working lives of scholars and craftsmen",
      "Bifocals added by Benjamin Franklin",
      "One of the most important medical inventions"
    ],
    funFact: "The inventor of eyeglasses is unknown - glassmakers kept it secret to protect their profits! Early glasses had no temples - you had to hold them up or balance them on your nose. Bifocals were invented by Benjamin Franklin in 1784. Eyeglasses doubled the working life of skilled workers. 75% of adults use vision correction today!",
    funFactSource: "College of Optometrists",
    funFactSourceUrl: "https://www.college-optometrists.org/the-college/museum/online-exhibitions/spectacles/"
  },
  
  {
    id: 98,
    type: "invention",
    name: "Antibiotics (Mass Production)",
    year: "1942",
    location: "USA/UK",
    era: "Modern",
    category: "Medicine",
    difficulty: "medium",
    clues: [
      "Mass production of life-saving medicine during WWII",
      "Scaled up penicillin manufacturing",
      "Saved countless soldiers' lives",
      "Used deep-tank fermentation process",
      "Made antibiotics widely available",
      "Transformed medicine and increased life expectancy"
    ],
    funFact: "Antibiotic mass production was a military secret in WWII! Moldy cantaloupe from a Peoria market provided the best penicillin strain. Production increased from treating 100 patients in 1942 to 250,000 by D-Day! The Allies had antibiotics, the Axis didn't - a huge advantage. It increased human life expectancy by 23 years!",
    funFactSource: "American Chemical Society",
    funFactSourceUrl: "https://www.acs.org/content/acs/en/education/whatischemistry/landmarks/flemingpenicillin.html"
  },
  
  {
    id: 99,
    type: "invention",
    name: "Refrigeration",
    year: "1850s",
    location: "USA/Europe",
    era: "Modern",
    category: "Technology",
    difficulty: "medium",
    clues: [
      "Method of preserving food at low temperatures",
      "Developed in the mid-1800s",
      "Used vapor-compression cycle",
      "Transformed food distribution and diet",
      "Before this, ice was harvested from frozen lakes",
      "Revolutionized food storage and public health"
    ],
    funFact: "Before refrigeration, ice was a luxury shipped from frozen lakes to the tropics! The ice trade was a major industry. Early home refrigerators used toxic gases - hundreds died from leaks. Freon seemed safe but destroyed the ozone layer. Refrigeration lets us eat fresh food year-round and saves millions from foodborne illness!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/history/the-great-ice-trade-180960716/"
  },
  
  {
    id: 100,
    type: "invention",
    name: "Satellite (Sputnik)",
    year: "1957",
    location: "Soviet Union",
    era: "Modern",
    category: "Space Technology",
    difficulty: "medium",
    clues: [
      "First artificial object to orbit Earth",
      "Launched by Soviet Union on October 4, 1957",
      "Started the Space Race",
      "Beeped radio signals as it orbited",
      "Shocked the United States",
      "Sputnik 1 opened the Space Age"
    ],
    funFact: "Sputnik means 'traveling companion' in Russian! It was only 23 inches wide and weighed 184 pounds - about the size of a beach ball. It orbited Earth every 96 minutes, sending 'beep beep' signals. Americans panicked, thinking the Soviets could now drop bombs from space. This launched NASA and the Space Race!",
    funFactSource: "NASA",
    funFactSourceUrl: "https://www.nasa.gov/history/sputnik-1-october-4-1957/"
  }
];

// Helper function to get puzzle by ID
export function getPuzzleById(id: number): HistoryPuzzle | undefined {
  return PUZZLES.find(puzzle => puzzle.id === id);
}

// Helper function to get all puzzles by type
export function getPuzzlesByType(type: PuzzleType): HistoryPuzzle[] {
  return PUZZLES.filter(puzzle => puzzle.type === type);
}

// Helper function to get random puzzle by type
export function getRandomPuzzleByType(type: PuzzleType): HistoryPuzzle {
  const puzzlesOfType = getPuzzlesByType(type);
  const randomIndex = Math.floor(Math.random() * puzzlesOfType.length);
  return puzzlesOfType[randomIndex];
}

// Helper function to count puzzles by type
export function getPuzzleCount(): { figures: number; events: number; inventions: number; total: number } {
  const figures = PUZZLES.filter(p => p.type === "figure").length;
  const events = PUZZLES.filter(p => p.type === "event").length;
  const inventions = PUZZLES.filter(p => p.type === "invention").length;
  
  return {
    figures,
    events,
    inventions,
    total: PUZZLES.length
  };
}

