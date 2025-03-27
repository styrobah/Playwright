const { test, expect } = require('@playwright/test');
//import {test, expect} from '@playwright/test';

test('Test1 @sanity',async ({page}) => { 
    console.log('this is test 1.');
});

test('Test2@reg',async ({page}) => { 
    console.log('this is test 2.');
});



test('Test3@reg',async ({page}) => { 
    console.log('this is test 3.');
});

test('Test4@reg@sanity',async ({page}) => { 
    console.log('this is test 4.');
});

// to run you just need to 
//npx playwright test tests/Tags.spec.js --grep @sanity
//or you can put whatever tag you want