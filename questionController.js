const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const performance = require('performance-now')
const question01 = require('./questions/question1')
const question02 = require('./questions/question2')
const question03 = require('./questions/question3')
const question04 = require('./questions/question4')
const question05 = require('./questions/question5')
const question06 = require('./questions/question6')

const app = express()
const port = process.env.PORT || 4000

const teamname = "javascript"

app.use(bodyParser.json({limit: '5mb'}))
  
app.post('/runq1', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq1
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 1,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response))
    
})

app.post('/runq2', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq2
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 2,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response))
    
})

app.post('/runq3', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq3
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 3,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response))
    
})

app.post('/runq4', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq4
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 4,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response))
    
})

app.post('/runq5', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq5
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 5,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response))
    
})

app.post('/runq6', (req, res) => {
    const question = req.body
    const tests = question.tests
    let promises = []
    for (let i=0; i<tests.length; i++) {
        try {
            const testRunner = new Promise((resolve, reject) => {
                const test = tests[i]
                const runtest = runq6
                    runtest(test)
                        .timeout(1000)
                        .then(({answer, timeTaken}) => {
                            correct = answer == test["output"]
                            resolve({
                                "teamName": teamname,
                                "questionNumber": 6,
                                "testNumber": i,
                                "correct": correct,
                                "speed": timeTaken * 1000000
                            })
                        })
                        .catch(Promise.TimeoutError, (e) => console.log("A question 1 test has timed out. Each individual test has a maximum of three seconds to run."))
            })
            promises.push(testRunner)
        } catch (error) {
            console.log(error)
        }
    }
    Promise.all(promises).then((response) => res.send(response)).catch(error => console.log(error))
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function runq1(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question01(input)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

function runq2(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question02(input.cashFlowIn, input.cashFlowOut)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

function runq3(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question03(input.numNodes, input.edges)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

function runq4(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question04(input.rows, input.numberMachines)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

function runq5(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question05(input.allowedAllocations, input.totalValue)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

function runq6(test) {
    return new Promise((resolve, reject) => {
        const input = test['input']
        const t0 = performance()
        const answer = question06(input.numServers, input.targetNode, input.arcs)
        const t1 = performance()
        const timeTaken = t1 - t0
        return resolve({
            answer,
            timeTaken
        })
    })
}

