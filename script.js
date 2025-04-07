// Globale Variablen für den Spielzustand
const gameState = {
    character: {
        name: "Lucia",
        level: 15,
        health: { current: 320, max: 400 },
        mana: { current: 150, max: 200 },
        stats: {
            strength: 85,
            agility: 72,
            intelligence: 64,
            stamina: 78
        },
        inventory: [],
        activeQuests: [],
        skills: []
    },
    // Initialisiere das Spiel
    init: function() {
        this.loadGameData();
        this.setupEventListeners();
        this.updateUI();
    },
    // Lade gespeicherte Spieledaten
    loadGameData: function() {
        const savedGame = localStorage.getItem('luciaRPG');
        if (savedGame) {
            Object.assign(this.character, JSON.parse(savedGame));
        }
    },
    // Speichere Spielstand
    saveGame: function() {
        localStorage.setItem('luciaRPG', JSON.stringify(this.character));
    },
    // Event Listener einrichten
    setupEventListeners: function() {
        // Stat-Balken Animation
        document.querySelectorAll('.stat-bar').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });

        // Inventar-Buttons
        document.querySelectorAll('.inventory-item button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.textContent;
                const itemId = e.target.closest('.item-card').dataset.id;
                this.handleInventoryAction(action, itemId);
            });
        });

        // Quest-Buttons
        document.querySelectorAll('.quest-card button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const questId = e.target.closest('.quest-card').dataset.id;
                this.completeQuest(questId);
            });
        });
    },
    // UI aktualisieren
    updateUI: function() {
        // Charakterstats
        document.getElementById('char-level').textContent = this.character.level;
        document.getElementById('char-hp').textContent = `${this.character.health.current}/${this.character.health.max}`;
        document.getElementById('char-mp').textContent = `${this.character.mana.current}/${this.character.mana.max}`;
        
        // Stat-Balken
        document.getElementById('hp-bar').style.width = `${(this.character.health.current / this.character.health.max) * 100}%`;
        document.getElementById('mp-bar').style.width = `${(this.character.mana.current / this.character.mana.max) * 100}%`;
    },
    // Inventaraktionen verarbeiten
    handleInventoryAction: function(action, itemId) {
        console.log(`${action} auf Item ${itemId} ausgeführt`);
        // Hier würde die tatsächliche Logik implementiert werden
    },
    // Quest abschließen
    completeQuest: function(questId) {
        console.log(`Quest ${questId} abgeschlossen`);
        // Hier würde die tatsächliche Logik implementiert werden
    }
};

// Initialisiere das Spiel wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    gameState.init();
});