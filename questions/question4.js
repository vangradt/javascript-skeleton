// Use this file to answer question 4

function answer04(rows, numberMachines) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < rows.length; i++) {
        let l = 0;

        let sum = 0;

        for(let j = 0; j < rows[i].length; j++) {
            if(rows[i][j] === 'X') {
                l = 0;
                sum = 0;
            }
            else {
                l++;

                sum += rows[i][j];

                if(l === numberMachines && sum < min) {
                    min = sum;

                    sum -= rows[i][j - l + 1];

                    l--;
                }


            }
        }
    }

    if(min !== Number.MAX_SAFE_INTEGER)
        return min;
    else
        return 0
}

module.exports = answer04