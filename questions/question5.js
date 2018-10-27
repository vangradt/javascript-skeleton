// Use this file to answer question 5

function answer05(allowedAllocations, totalValue) {
    let T = [0];

    for(let i = 1; i <= totalValue; i++) {
        T.push(Number.MAX_SAFE_INTEGER);
    }

    allowedAllocations.sort(function(a, b){return a-b});

    for (let j = 0; j < allowedAllocations.length; j++) {
        let current = allowedAllocations[j];

        for (let i = 0; i <= totalValue - current; i++) {
            if (T[i] < Number.MAX_SAFE_INTEGER) {
                if (T[i] + 1 < T[i + current]) {
                    T[i + current] = T[i] + 1;
                }
            }
        }
    }

    return T[totalValue];
}

module.exports = answer05