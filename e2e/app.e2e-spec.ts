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
  	browser.pause()
  	expect(page.getDropdownMenu()).isPresent;
  })

  it('movie items should be numbered 20', () => {
  	page.navigateTo();
  	expect(page.getMovieItems().count()).toBe(20)
  })

  it('dropdown menu should be hidden', () => {
  	page.navigateTo();
  	page.getInput().click();
  	page.getInput().click();
  	expect(page.getDropdownMenu().isPresent()).toBeTruthy();
  })

  it('the movie user clicked should show up in input, ane clear the movie user clicked', () => {
  	page.navigateTo();
  	page.getInput().click();
  	let movie = page.getMovieItems().first().getText();
 	page.getMovieItems().get(0).click();
  	expect(page.getInput().getAttribute('value')).toBe(movie);
  	expect(page.getClearButton().isPresent()).toBeTruthy();
  	page.getClearButton().click();
  	expect(page.getInput().getAttribute('value')).toBe('');
  	
  })
});
