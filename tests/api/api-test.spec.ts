import {test} from '@playwright/test';
import { apiCommons } from '../../commons/api/apiCommons.ts';
import data from '../../fixtures/apidata.json' with { type: 'json' };

test.describe('API Tests', () => {
    
    let api: apiCommons;

    //prepare api request context before each test case.
    test.beforeEach(async () => {
        api = new apiCommons();
        await api.init();
    });

    //Test case 1: validate request to create an duplicate repository. 
    test('Validate request to create an duplicate repository', async () => {
        await api.getResponse("post",data.duplicateRepo.endpoint, data.duplicateRepo.body);
        await api.validateStatusCode(data.duplicateRepo.exepctedCode);
        await api.validateStatusMessage(data.duplicateRepo.expectedStatusMessage);
        await api.validateResponseBody("message", data.duplicateRepo.errorMessage);        
    });

    //Test case 2: validate request to create a repository with valid  name.
    test('Validate request to create a repository with valid name', async () => {
        await api.getResponse("post",data.createRepo.endPoint, data.createRepo.body);
        await api.validateStatusCode(data.createRepo.expectedCode);
        await api.validateStatusMessage(data.createRepo.expectedStatusMessage);
        await api.validateResponseBody("name", data.createRepo.body.name);        
    });

    // //Test case 3: delete the repository created .
    // test('Validate request to delete a repository', async () => {
    //     await api.getResponse("delete",data.deleteRepo.endPoint);
    //     await api.validateStatusCode(data.deleteRepo.expectedCode);
    //     await api.validateStatusMessage(data.deleteRepo.expectedStatusMessage);
    // });

});