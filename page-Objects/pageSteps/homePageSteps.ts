import { Page } from '@playwright/test';
import homePage from '../pageElements/HomePageElements.json' with {type :'json'};
import { webCommons } from '../../commons/web/webCommons.js';

export class HomePageSteps {

    page: Page;
    web: webCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new webCommons(page);
    }

    //Method to verify home page is displayed. 
    async verifyHomePageIsDisplayed() {
        await this.web.verifyElementIsVisible(homePage.homePageHeaderLink);
    }


}

export default HomePageSteps;