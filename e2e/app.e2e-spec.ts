import { Ng2AuthZeroSpotifyPage } from './app.po';

describe('ng2-auth-zero-spotify App', function() {
  let page: Ng2AuthZeroSpotifyPage;

  beforeEach(() => {
    page = new Ng2AuthZeroSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
