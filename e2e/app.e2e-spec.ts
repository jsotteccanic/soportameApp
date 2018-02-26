import { SoportameAppPage } from './app.po';

describe('soportame-app App', function() {
  let page: SoportameAppPage;

  beforeEach(() => {
    page = new SoportameAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
