let  pageCollection=(function(){

    let homePage=require('../pageobjects/homePage'),
    sendSMSPage=require('../pageobjects/sendSMSPage'),
    sendEmailPage=require('../pageobjects/sendEmailPage'),
    basePage=require('../pageobjects/basePage');

    return{
        homePage : new homePage(),
        sendSMSPage : new sendSMSPage(),
        sendEmailPage: new sendEmailPage(),
        basePage: new basePage()

    };

}());

module.exports=pageCollection;