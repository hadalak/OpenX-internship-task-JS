const newNode = require('../tree1');
const findLeaf = require('../tree1');

test('Adding a value to new node', () => {
    console.log(newNode(5));
    expect(newNode(5)).toEqual(
        {"left": null, "right": null, "value": 5}
    );
});

test('Find leaf', () => {
    const rootValueNull = null;
    const rootRightValueNull = null;
    const rootValue = 4;

    expect(findLeaf(rootValueNull)).toEqual(
        {"left": null, "right": null, "value": null}
    );
    expect(findLeaf(rootRightValueNull)).toEqual(
        {"left": null, "right": null, "value": null}
    );
    expect(findLeaf(rootValue)).toEqual(
        {"left": null, "right": null, "value": 4}
    );
});