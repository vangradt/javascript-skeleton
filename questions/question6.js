// Use this file to answer question 6

function answer06(numServers, targetServer, times) {

    let d = [];

    for (let i = 0; i < numServers; i++) {
        d.push(Number.MAX_SAFE_INTEGER);
    }

    d[0] = 0;

    let q = [0];

    while (q.length > 0) {
        let current = q.shift();

        for(let i = 0; i < numServers; i++) {
            if (d[i] > d[current] + times[current][i]) {
                q.push(i);
                d[i] = d[current] + times[current][i];
            }
        }
    }

    return d[targetServer];
}

module.exports = answer06