addEventListener('load', (e) =>{
    console.log('loading...');

    console.log('loaded!');
})

function loadCookies(){
    if(window.localStorage.getItem('sidebar_open') == null){
        window.location.setItem('sidebar_open', false);
    }
}

