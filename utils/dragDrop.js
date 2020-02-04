
var EC = protractor.ExpectedConditions;
module.exports=function(){

    function DragAndDropWithAxis(sourceEle,axis){

        return browser.sleep(3000).then(function(){
            browser.driver.actions()
   
            .dragAndDrop(sourceEle, { x: axis.x, y: axis.y })
        
            .mouseMove(sourceEle, { x: axis.x, y: axis.y }) // 900px from left, 100 px from top of plot0
        
            .mouseDown()
        
            .mouseMove({ x: 600, y: 0 }) // 600px to the right of current location
        
            .perform();
        }) 
   
}

function ConnectNodes(sourceEle,destEle){

    return browser.wait(EC.visibilityOf(destEle, 30000)).then(function(){
        browser.actions().
        mouseDown(sourceEle).
        mouseMove(destEle).mouseUp().perform();
    })
 }   

return{
    DragAndDropWithAxis: DragAndDropWithAxis,
    ConnectNodes: ConnectNodes
} 
}


