import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

import { AppPage } from '../app.po';

defineSupportCode(({ Given, When, Then, After, Before }) => {

    let page: AppPage;

    Before(() => {
        page = new AppPage();
    });

    Given('I am on the Automation Sample application', function () {
        return page.navigateTo();
    });

    Given('the value is {int}', function (expectedVal) {
        let actualValue = page.getIncrementValue();
        return expect(actualValue).to.eventually.equal(expectedVal.toString());
    });

    When('I click the increment button', function () {
        return page.clickIncrement();
    });

});