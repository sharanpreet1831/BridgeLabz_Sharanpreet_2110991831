const promiseone = new Promise (function (resolve , reject ){
    setTimeout(() => {
        console.log("set time out khtm ho gya ");
        resolve();
    }, 5000);
} )

promiseone.then(
    function (){
        console.log("done");
    }
)