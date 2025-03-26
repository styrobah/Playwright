//const { test, expect } = require('@playwright/test');
import {test, expect} from '@playwright/test';

test.beforeAll(async () =>{
    console.log('this is a beforeAll hook');
});


test.afterAll(async () =>{
    console.log('this is a afterAll hook');
});

test.beforeEach(async () =>{
    console.log('this is a beforeEach hook');
});

test.afterEach(async () =>{
    console.log('this is a afterEach hook');
});

test.describe('Group 1', () =>{
    test('Test1',async ({page}) => { 
        console.log('this is test 1.');
    });
    
    test('Test2',async ({page}) => { 
        console.log('this is test 2.');
    });
})

test.describe('Group 2', () =>{
    test('Test3',async ({page}) => { 
        console.log('this is test 3.');
    });
    
    test('Test4',async ({page}) => { 
        console.log('this is test 4.');
    });
})
