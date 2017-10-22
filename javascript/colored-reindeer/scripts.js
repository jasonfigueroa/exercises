const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];    

    const coloredReindeer = [];

    const generateReindeerObj = function* (name, color) {
        yield Object.create(null, {
            "name": {
                enumerable: true,
                value: name
            },
            "color": {
                enumerable: true,
                value: color
            }
        });
    }

    const reindeerFactory = generateReindeerObj;
    
    // Write a for loop that looks at each reindeer
    for(let i = 0; i < reindeer.length; i++) {        
        // Invoke factory function to create reindeer object
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(reindeerFactory(reindeer[i], colors[i]).next().value);
    }

    // Return coloredReindeer array
    return coloredReindeer;
}

const coloredReindeerArray = coloredReindeerBuilder();