let pages = require('../config/pageCollection'),
axis = require('../data/axis.json'),
emailDetails =require('../data/email.json'),
   EC = protractor.ExpectedConditions;
const dragDrop1 = require('../utils/dragDrop.js')();


describe('fuseapptesting', function () {
   beforeAll(() => {
      pages.basePage.gotoURL();
   });

   it('clicking on create APP', async function () {

      await pages.homePage.gotoCreateAppPage();
      await pages.homePage.messagingLink().click();
      await browser.wait(EC.visibilityOf(pages.homePage.sendSMSList()), 20000);
      await dragDrop1.DragAndDropWithAxis(pages.homePage.sendSMSList(),axis.sms);
      await dragDrop1.ConnectNodes(pages.homePage.startNode(),pages.homePage.receptorNode());
    
      await browser.sleep(3000);
      await pages.sendSMSPage.sendSMSphoneNumber().sendKeys("1234567890");
      await pages.sendSMSPage.sendSMSMessage().sendKeys("Hello");
  
//Dragging and dropping SendEmail under Messaging
      await dragDrop1.DragAndDropWithAxis(pages.homePage.sendEmailList(),axis.email);
      await pages.sendEmailPage.enterDetails(emailDetails);
      await dragDrop1.ConnectNodes(pages.sendSMSPage.sendSMSMessageENode(),pages.homePage.sendEmailReceptor());
      await browser.wait(EC.visibilityOf(pages.sendSMSPage.sendSMSMessageENode()), 20000);
      await pages.homePage.basicLinkList().click();
      await browser.wait(EC.visibilityOf(pages.homePage.exitApp()), 20000);
   
      await dragDrop1.DragAndDropWithAxis(pages.homePage.exitApp(),axis.exit.first);
      await dragDrop1.ConnectNodes(pages.sendSMSPage.sendSMSMessageWNode(),pages.homePage.exitAppReceptor('module-3'));

      
      await dragDrop1.DragAndDropWithAxis(pages.homePage.exitApp(),axis.exit.second);
      await dragDrop1.ConnectNodes(pages.sendEmailPage.sendEmailWNode(),pages.homePage.exitAppReceptor('module-4'));

      await dragDrop1.DragAndDropWithAxis(pages.homePage.exitApp(),axis.exit.third);
      await dragDrop1.ConnectNodes(pages.sendEmailPage.sendEmailENode(),pages.homePage.exitAppReceptor('module-5'));
 
   })

});