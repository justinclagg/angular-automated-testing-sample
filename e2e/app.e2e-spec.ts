import { AppPage } from './app.po';

describe('angular-automated-testing-sample App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Welcome to Automation Sample!');
  });

  it('the increment button should increase the increment value when clicked', () => {
    let initialValue = page.getIncrementValue();
    page.clickIncrement();
    expect(page.getIncrementValue()).toEqual("1");
  });

  it('the increment value can be set by the input field', () => {
    page.setIncrementValue('2');
    expect(page.getIncrementValue()).toEqual('2');
  });
  
});
