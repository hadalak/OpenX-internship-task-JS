const findFurthestLeaf = require('../tree2');

test('Finding furthest leaf', () => {
    const root =  {"left": null, "right": null, "value": 4};
    const path = [4];
    expect(findFurthestLeaf(root)).toEqual(
        path
    );
});