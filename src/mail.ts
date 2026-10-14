const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const collections: unknown[] = [
    {},
    15,
    'hello@test.pl',
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl',
];


function getMails(inputList: unknown[]) {
    let outputList : string[] = [];

    for (const item of collections) {
        if (typeof item === 'string')
        {
            if (regex.test(item))
            {
                outputList.push(item);
            }
        }
    }

    return outputList.sort();
}

console.log(getMails(collections));
console.log(`Original collections: ${collections}`);