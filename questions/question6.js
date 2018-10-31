// Use this file to answer question 6

let PriorityQueue =  require('js-priority-queue');

function answer06(numServers, targetServer, times) {

    let d = [];

    for (let i = 0; i < numServers; i++) {
        d.push(Number.MAX_SAFE_INTEGER);
    }

    d[0] = 0;

    let compare = function(a, b) {
        return a.d - b.d;
    }

    let q = new PriorityQueue({comparator: compare});

    q.queue({n: 0, d: d[0]});

    while (q.length > 0) {
        let current = q.dequeue();

        for(let i = 0; i < numServers; i++) {
            if (d[i] > d[current.n] + times[current.n][i]) {
                d[i] = d[current.n] + times[current.n][i];

                q.queue({n: i, d: d[i]});
            }
        }
    }

    return d[targetServer];
}

module.exports = answer06