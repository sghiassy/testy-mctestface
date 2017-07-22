module.exports = {
  'Test Website' : function (browser) {
    browser
      .url('http://localhost:3000')
      .pause(1000);

    browser.expect.element('body').to.be.present.before(1000);

    browser.assert.title('Testy McTestFace');

    browser.expect.element('h1').to.be.present;

    browser.expect.element('h1').text.to.equal('Hello World Testing Page');

    browser.end();
  }
};