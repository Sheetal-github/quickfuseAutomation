function basePage(){

    this.gotoURL= function(){
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get(browser.hostname);
    }

}

module.exports= basePage;