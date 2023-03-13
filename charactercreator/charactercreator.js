new Vue({
    el: "#app",
    data: {
        race: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
        chosenRace: '',

        class: ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
        chosenClass: '',

        background: ['Acolyte', 'Charlatan', 'Criminal/Spy', 'Entertainer', 'Folk Hero', 'Gladiator', 'Guild Artisan/Merchant', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'],
        chosenBackground: '',

        backstory: ['It was never my plan to become an adventurer, but I have to get away from...', 
                    'I don\'t care much about fame or fortune. What I\'m really looking for is...', 
                    'I joined this adventuring party because I got word that someone spotted my long lost...', 
                    'I would have been content to live a quiet life in my hometown, but here I am on the road to gods know where, being dragged along by my...', 
                    'I\'ve tried everything. Nothing is working and time is running out. I have to find a cure for my...'],
        chosenBackstory: '',
    },
    methods: {
        picker: function() {
            var chosenNumberRace = Math.floor(Math.random() * this.race.length);
            this.chosenRace = this.race[chosenNumberRace];

            var chosenNumberClass = Math.floor(Math.random() * this.class.length);
            this.chosenClass = this.class[chosenNumberClass];

            var chosenNumberBackground = Math.floor(Math.random() * this.background.length);
            this.chosenBackground = this.background[chosenNumberBackground];

            var chosenNumberBackstory = Math.floor(Math.random() * this.backstory.length);
            this.chosenBackstory = this.backstory[chosenNumberBackstory];
        }
    }
});