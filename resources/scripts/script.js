if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
       navigator.serviceWorker.register('./serviceworker.js').then(function(){
           console.log('SW Registered...');
       },function(err){
           console.log(err);
       })
    })
}
else{
    console.log('nope')
}