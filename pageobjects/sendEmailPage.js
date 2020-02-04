
function sendEmailPage(){

    sendEmailENode =element(By.xpath('//div[@id="module-2"]/descendant::div[contains(@class,"syn-node-attached-e")]')),
    sendEmailWNode =element(By.xpath('//div[@id="module-2"]/descendant::div[contains(@class,"syn-node-attached-w")]')),
    smtpHost=element(By.css('input[name="smtp_url"]')),
    smtpPort=element(By.css('input[name="port"]')),
    userName=element(By.css('input[name="username"]')),
    password=element(By.css('input[name="password"]')),
    fromInput=element(By.css('[name="from_constant"]')),
    toInput=element(By.css('[name="to_constant"]')),
    subjectInput=element(By.css('[name="subject_constant"]'))
    var EC = protractor.ExpectedConditions;

    this.sendEmailENode=function(){
        return sendEmailENode;
    }

    this.sendEmailWNode=function(){
        return sendEmailWNode;
    }

    this.enterDetails=function(emailDetails){
           return browser.wait(EC.visibilityOf(smtpHost, 30000)).then(function(){
            smtpHost.sendKeys(emailDetails.smtpHost);
            smtpPort.sendKeys(emailDetails.port);
            userName.sendKeys(emailDetails.username);
            password.sendKeys(emailDetails.password);
            fromInput.sendKeys(emailDetails.from);
            toInput.sendKeys(emailDetails.to);
            subjectInput.sendKeys(emailDetails.subject);
           });
          

      
    }

}

module.exports= sendEmailPage;