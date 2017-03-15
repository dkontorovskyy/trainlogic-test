import { TrainlogicTestPage } from './app.po';

describe('trainlogic-test App', function() {
  let page: TrainlogicTestPage;

  beforeEach(() => {
    page = new TrainlogicTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
