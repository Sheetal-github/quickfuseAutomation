function sendSMSPage(){
    sendSMSphoneNumber = element(By.css('textarea[name="phone_constant"]')),
    sendSMSMessage =element(By.xpath('//textarea[contains(@name,"message_phrase")]')),
    sendSMSMessageENode =element(By.xpath('//div[@id="module-1"]/descendant::div[contains(@class,"syn-node-attached-e")]')),
    sendSMSMessageWNode =element(By.xpath('//div[@id="module-1"]/descendant::div[contains(@class,"syn-node-attached-w")]'));

    this.sendSMSphoneNumber=function(){
        return sendSMSphoneNumber;
    }

    this.sendSMSMessage=function(){
        return sendSMSMessage;
    }

    this.sendSMSMessageWNode=function(){
        return sendSMSMessageWNode
    }
    
    this.sendSMSMessageENode=function(){
        return sendSMSMessageENode;
    }
}

module.exports= sendSMSPage;