import { Angular2TestingPage } from './app.po';

describe('angular2-testing App', function() {
  let page: Angular2TestingPage;

  beforeEach(() => {
    page = new Angular2TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
