const newNode = require('../tree3');

test('Compare values', () => {
    let root1 = newNode(1);
    root1.left = newNode(2);

    let root2 = newNode(1);
    root2.left = newNode(2);

    function compateValues(){
        if(root1.value == root2.value){
            return true;
        }else{
            return false;
        }
    }
    expect(compateValues()).toBeTruthy();           

});