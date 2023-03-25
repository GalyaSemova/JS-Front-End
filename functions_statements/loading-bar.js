// 30% [%%%.......]
// Still loading...
// 100% Complete!
function loadingBar(status) {
    let percentages =  '%'.repeat(status / 10);
    let dots = '.'.repeat(10 - status / 10);
    if(status === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${status}% [${percentages}${dots}]`);
        console.log(`Still loading...`);
        
        
    }


    
}
loadingBar(30)
loadingBar(100)
loadingBar(60)

