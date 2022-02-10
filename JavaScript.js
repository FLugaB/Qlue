/*

Assignments:
Write the NodeJS function which, taking in a raw data set as first mentioned, will return the improved json-encoded string and expose it into standard RESTFul API Notes:
it can be assumed that all records in the initial JSON result set have the same fields, and that said fields are indexed in the same order.
make your functions generic (where the field names of the records in the resultset are not known in advance)

*/

const fs = require(`fs`)
const data = JSON.parse(fs.readFileSync(`./rawData.json`, `utf8`));

const getData = (data) => {

    if (!data) return { msg: "No data"}

    let output = {
        h: [],
        d: []
    }

    const objectKeys = Object.keys(data[0])
    output.h = objectKeys

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        output.d.push(Object.values(element))
    }

    return JSON.stringify(output) // json output
}

console.log(getData(data))