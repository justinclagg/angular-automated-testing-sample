import { browser, by, element } from 'protractor';

export class AppPage {

  title = element(by.css('app-root h1'));
  incrementBtn = element(by.name('incrementBtn'));
  incrementValue = element(by.name('incrementValue'));

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return this.title.getText();
  }

  clickIncrement() {
    return this.incrementBtn.click();
  }

  getIncrementValue() {
    return this.incrementValue.getAttribute('value');
  }

  setIncrementValue(val) {
    this.incrementValue.clear();
    return this.incrementValue.sendKeys(val);
  }

}
