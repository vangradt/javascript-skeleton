// Use this file to answer question 1

function answer01(portfolios) {

    let max = 0;

    for (let i = 0; i < portfolios.length - 1; i++) {
        for (let j = i + 1; j < portfolios.length; j++) {
            let sum = portfolios[i] ^ portfolios[j];

            if (sum > max) {
                max = sum;
            }
        }
    }

    return max;
}

module.exports = answer01