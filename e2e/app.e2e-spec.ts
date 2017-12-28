import { AngyAppPage } from './app.po';

describe('angy-app App', () => {
  let page: AngyAppPage;

  beforeEach(() => {
    page = new AngyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
