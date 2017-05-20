import { ForeadevPage } from './app.po';

describe('foreadev App', function() {
  let page: ForeadevPage;

  beforeEach(() => {
    page = new ForeadevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
