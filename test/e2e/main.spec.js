describe("Starting App", function () {

    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
    });

    describe("Main Page", function () {

        var params = browser.params;

        it("should login successfully", function () {

            //test the login page
            ptor.get('/');

            //select element by model
            var email = element(by.model('form.email'));
            var password = element(by.model('form.password'));

            // fill in the value in protractor.conf.js
            email.sendKeys(params.login.email);
            password.sendKeys(params.login.password);


            //test here, syntax is similar to jasmine
            //refer to docs - https://github.com/angular/protractor/blob/master/docs/api.md#elementfinder
            expect(email.getAttribute('value')).toBe(params.login.email);
            expect(password.getAttribute('value')).toBe(params.login.password);

            //we have set the id of the form in app/views/main.html
            element(by.id('loginForm')).submit();

            ptor.waitForAngular();


            // ptor.sleep(30000);
        });


    });


});
