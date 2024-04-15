const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const figthing = (Tiger, Wolf) => {
    if (Tiger.strength > Wolf.strength) {
        Tiger.growl();
        return;
    }

    if (Tiger.strength < Wolf.strength) {
        Wolf.howl();
        return;
    }

    console.log('Tiger and wolf hace same strength')
}

const tiger = new Tiger();
const wolf = new Wolf();

figthing(tiger, wolf);