import { ItunesPracPage } from './app.po';

describe('itunes-prac App', () => {
  let page: ItunesPracPage;

  beforeEach(() => {
    page = new ItunesPracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
