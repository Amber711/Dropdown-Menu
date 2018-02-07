import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('dropdown-menu App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Movie:', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movie:');
  });

  it('should display dropdown menu', () => {
  	page.navigateTo();
  	page.getInput().click();
  	expect(page.getDropdownMenu())
  })
});
