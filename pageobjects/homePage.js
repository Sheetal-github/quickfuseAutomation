function homePage() {
    //locators
    createAppLink = element(By.linkText('Create an App')),
        startedButtonText = element(By.buttonText('Let\'s get started!')),
        messagingLink = element(By.linkText('Messaging')),
        sendSMSList = element(By.xpath('//li[text()="Send an SMS"]')),
        sendSMSListAdd = element(By.xpath('//li[text()="Send an SMS"]/a')),
        UIPanel = element(By.className('ui-page-panel')),
        startNode = element(By.xpath('//div[contains(@class,"start-module")]/descendant::div[contains(@class,"syn-node")]')),
        receptorNode = element(By.className('syn-receptor')),

        sendEmailList = element(By.xpath('//li[text()="Send an Email"]')),


        sendEmailReceptor = element(By.xpath('//div[@id="module-2"]/descendant::div[contains(@class,"syn-receptor")]')),
        basicLinkList = element(By.linkText('Basic')),
        exitApp = element(By.xpath('//li[text()="Hang Up or Exit"]')),
        exitAppReceptor = element(By.xpath('//div[@id="module-3"]/descendant::div[contains(@class,"syn-receptor")]'));
    //Declartions
    var EC = protractor.ExpectedConditions;

    this.messagingLink = function () {
        return messagingLink;
    }

    this.sendSMSList = function () {
        return sendSMSList;
    }

    this.UIPanel = function () {
        return UIPanel;
    }

    this.sendSMSListAdd = function () {
        return sendSMSListAdd;
    }

    this.startNode = function () {
        return startNode;
    }

    this.receptorNode = function () {
        return receptorNode;
    }

    this.sendEmailList = function () {
        return sendEmailList;
    }

    this.sendEmailReceptor = function () {
        return sendEmailReceptor;
    }

    this.basicLinkList = function () {
        return basicLinkList;
    }

    this.exitApp = function () {
        return exitApp;
    }

    this.exitAppReceptor = function (module) {
        return element(By.xpath("//div[@id='" + module + "']/descendant::div[contains(@class,'syn-receptor')]"));
    }

    this.gotoCreateAppPage = function () {
        return browser.wait(EC.visibilityOf(createAppLink, 30000)).then(function () {
            createAppLink.click();
            startedButtonText.click();
        });

    }

    // this.clickModule=function(moduleName){
    //     return element(By.linkText("'"+moduleName+"'")).click();
    // }
}

module.exports = homePage;