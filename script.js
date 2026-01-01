// Data buckets (arrays) to hold the values
// Data buckets (arrays) to hold the values
const names = [
    "Haleah", "John", "Marshall", "Ruby", "Aniyah", 
    "Mateo", "Jasmine", "Isaiah", "Caleb", "Nevaeh", 
    "Marcus", "Devon", "Lillian", "Omar", "Raina"
];

const occupations = [
    "Line cook", "Nurse aide", "Freight yard supervisor", "Bus terminal cleaner", 
    "Teacher’s assistant", "Long-haul driver", "Gas station manager", "Custodian", 
    "Record store clerk", "Poetry workshop facilitator", "Bodega cashier", 
    "Mail carrier", "Community college instructor", "Bartender at a dive bar", 
    "Assistant pastor"
];

const secrets = [
    "I left my child with my mother and never came back.",
    "He died thinking I hated him.",
    "I lied about where I was the night my sister disappeared.",
    "I write her letters I never send.",
    "I’ve been clean six years, but no one at home knows.",
    "I haven’t spoken to my father since the day I walked out.",
    "My name isn’t the one on my birth certificate.",
    "I still have the engagement ring I never gave.",
    "I missed my mother's funeral by choice.",
    "I told them I moved for work — I moved to forget."
];

const destinations = [
    "Chicago", "San Francisco", "El Paso", "The Junction", "Saint Mary's", 
    "Back home", "Nowhere, Missouri", "Last Stop Café", "Union Station", 
    "Her porch", "The halfway house", "Ruby’s diner", "The river", 
    "Magnolia Hill", "Westbound, no return"
];

const origins = [
    "Chicago Union Station",
  "A Greyhound stop in Saint Louis",
  "A motel parking lot in Gary, Indiana",
  "A bus depot off I-40 in Memphis",
  "An Amtrak platform in Birmingham",
  "Cleveland’s east-side terminal",
  "Back porch of a rental in Cincinnati",
  "A sidewalk outside a Waffle House in Atlanta",
  "Milwaukee Central Station",
  "The curb outside her sister’s apartment in Detroit",
  "Flagstaff rail yard, Arizona",
  "The overnight shelter in Omaha",
  "A church parking lot in Kansas City",
  "Denver station, just before dawn",
  "Little Rock’s riverfront stop"
];

const ticketTypes = ["First Class", "Sleeper", "General Boarding", "Standby", "Cargo Hold"];

const luggage = [
    "A notebook filled with names I can’t forget",
    "One photo, water-stained, folded three times",
    "A pink toothbrush in a Ziploc bag",
    "Letters I wrote to someone who isn’t alive",
    "Tattered hoodie that smells like the past",
    "Bible with the margins filled in",
    "Cracked iPhone with no service",
    "Gold locket I never wear",
    "A mixtape labeled 'for the road'",
    "Ring box with nothing inside"
];

const companions = [
    "The woman I almost married",
    "My grandmother’s voice in my head",
    "A stranger I told everything to once",
    "The guilt I never outgrew",
    "My daughter’s silence",
    "A war buddy turned roommate",
    "The one person who still calls",
    "My parole officer",
    "A boy with eyes like my brother’s",
    "No one — I left them all behind"
];

const emotions = [
    "Running from something they can't undo.",
    "Trying to start over before it’s too late.",
    "Looking for someone who stopped waiting.",
    "Carrying a silence that never healed.",
    "Escaping a love that turned dangerous.",
    "Too many ghosts in that apartment.",
    "Didn’t leave a note. Didn’t need to.",
    "Trying to stay clean and stay gone.",
    "Searching for a version of themselves they lost.",
    "Walking away before they said something they'd regret.",
    "Chasing quiet in a world that won’t shut up.",
    "Tired of being forgotten where they were.",
    "Afraid they’ve run out of second chances.",
    "Hoping it’s not too late to be forgiven.",
    "Wanting to feel anything but numb again."
];

// Select the HTML elements we want to change
const aliasDisplay = document.getElementById('alias-display');
const emotionDisplay = document.getElementById('emotion-display');
const bioDisplay = document.getElementById('bio-display');
const destinationDisplay = document.getElementById('destination-display');
const originDisplay = document.getElementById('origin-display');
const ticketTypeDisplay = document.getElementById('ticket-type-display');
const luggageDisplay = document.getElementById('luggage-display');
const companionDisplay = document.getElementById('companion-display');
const seatDisplay = document.getElementById('seat-display');
const dateDisplay = document.getElementById('date-display');
const ticketIdDisplay = document.getElementById('ticket-id-display');

const generateBtn = document.getElementById('generate-btn');

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateIdentity() {
    // Pick a random item from each array
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomJob = occupations[Math.floor(Math.random() * occupations.length)];
    const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
    const randomDest = destinations[Math.floor(Math.random() * destinations.length)];
    const randomOrigin = origins[Math.floor(Math.random() * origins.length)];
    const randomTicket = ticketTypes[Math.floor(Math.random() * ticketTypes.length)];
    const randomLuggage = luggage[Math.floor(Math.random() * luggage.length)];
    const randomCompanion = companions[Math.floor(Math.random() * companions.length)];
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    
    // Generate random seat and ID
    const randomSeat = Math.floor(Math.random() * 15) + 1 + ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];
    const randomID = generateRandomString(8);
    
    // Date
    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();

    // Update the text on the screen
    aliasDisplay.innerText = randomName;
    if(emotionDisplay) emotionDisplay.innerText = randomEmotion;
    bioDisplay.innerText = `works as a ${randomJob}, ${randomSecret}`;
    
    if(destinationDisplay) destinationDisplay.innerText = randomDest.toUpperCase();
    if(originDisplay) originDisplay.innerText = randomOrigin.toUpperCase();
    if(ticketTypeDisplay) ticketTypeDisplay.innerText = randomTicket.toUpperCase();
    if(luggageDisplay) luggageDisplay.innerText = randomLuggage;
    if(companionDisplay) companionDisplay.innerText = randomCompanion;
    if(seatDisplay) seatDisplay.innerText = randomSeat;
    if(dateDisplay) dateDisplay.innerText = today;
    if(ticketIdDisplay) ticketIdDisplay.innerText = `ID: ${randomID}`;
}

// Tell the button to run the function when clicked
generateBtn.addEventListener('click', generateIdentity);

// Initial generation
generateIdentity();