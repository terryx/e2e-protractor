describe("Dashboard", function () {

    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
    });

    var params = browser.params;

    it('should diplay user name', function () {

        browser.get('#/dashboard');

        var name = element(by.binding('user.email'));
        expect(name.getText()).toEqual(params.login.email);

        ptor.sleep(30000);
    });


});


