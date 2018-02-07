import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('p')).getText();
  }

  getInput() {
  	return element(by.css('input'));
  }

  getDropdownMenu() {
  	return element(by.css('ul'));
  }
}
