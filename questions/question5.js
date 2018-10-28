// Use this file to answer question 5

function answer05(allowedAllocations, totalValue) {
    let T = [0];

    allowedAllocations.sort(function(a, b){return a-b});

    let maxValue = totalValue;

    while(maxValue % allowedAllocations[0] !== 0)
        maxValue++;

    for(let i = 1; i <= maxValue; i++) {
        T.push(Number.MAX_SAFE_INTEGER);
    }

    for (let j = 0; j < allowedAllocations.length; j++) {
        let current = allowedAllocations[j];

        for (let i = 0; i <= maxValue - current; i++) {
            if (T[i] < Number.MAX_SAFE_INTEGER) {
                if (T[i] + 1 < T[i + current]) {
                    T[i + current] = T[i] + 1;
                }
            }
        }
    }

    while (T[totalValue] === Number.MAX_SAFE_INTEGER) {
        totalValue++;
    }

    return T[totalValue];

}

module.exports = answer05