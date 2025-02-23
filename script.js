console.log("JavaScript-filen er lastet!");

// Generer en tilfeldig testerID (for eksempel 23)
function generateTesterId() {
    return Math.floor(Math.random() * 90) + 10; // tilfeldig tosifret tall
}
console.log("JA");
// Håndterer klikk på hotspot
function handleClick(event, taskNumber) {
    console.log("Klikket på hotspot");
    console.log("JA1");
    const testerId = generateTesterId(); // Dynamisk tester ID
    const oppgave = event.target.getAttribute('data-task');
    const klikkX = event.clientX;
    const klikkY = event.clientY;
    console.log("JA2");
    if (!oppgave) {
        console.error("Feil: Ingen 'data-task' funnet på klikket element.");
        return;
    }

    console.log(`Klikket på oppgave: ${oppgave} ved (${klikkX}, ${klikkY})`);

    // Bygg JSON data
    const jsonData = {
        "TesterID": testerId,
        "Oppgave 1": taskNumber === 1 ? oppgave : null,
        "Oppgave 2": taskNumber === 2 ? oppgave : null,
        "Oppgave 3": taskNumber === 3 ? oppgave : null,
        "Oppgave 4": taskNumber === 4 ? oppgave : null,
        "Fullført": taskNumber === 4 ? "Ja" : null
    };

    // Legg til klikk data for oppgaven
    jsonData[`Oppgave ${taskNumber}`] = oppgave;

    console.log("JSON Data:", JSON.stringify(jsonData, null, 2));

    // Gå til neste oppgave
    console.log(`Navigerer til oppgave ${taskNumber + 1}`);
    if (taskNumber < 4) {
        window.location.href = `oppg${taskNumber + 1}.html`;
    } else {
        window.location.href = 'takk.html';
    }
}

// Kjør konfetti når takk-siden åpnes
window.onload = function() {
    if (window.location.pathname.includes("takk.html")) {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
};
