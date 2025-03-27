const { test, expect } = require('@playwright/test');

test.only('Test1',async ({page}) => { 
    console.log('Aqui');
});


test.skip('Test2',async ({page}) => { 
    console.log('Aqui');
});

test.fail('Test3',async ({page}) => { 
    console.log('Aqui');
});
test.fixme('Test4',async ({page}) => { 
    console.log('Aqui');
});
test.slow('Test5',async ({page}) => { 
    console.log('Aqui');
});