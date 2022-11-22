const someLine = 'What is the average airspeed velocity of an unladen swallow';

console.log('The longest word (or words) is', findLongestWord(someLine));

function findLongestWord(line) {
    const words = line.split(' ');

    const result = words.reduce((acc, cur) => {
        if (acc.length === 0) {
            return [cur];
        } else if (acc[0].length === cur.length) {
            return [...acc, cur];
        } else if (acc[0].length < cur.length) {
            return [cur];
        } else {
            return acc;
        }
    }, []);

    return result.join(', ');
};
