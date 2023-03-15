let image = "";

addEventListener('load', (e)=>{
    document.querySelectorAll('#sel_btn')[0].style.backgroundColor = 'rgb(90, 90, 90)';
})

function changeMenu(el){
    document.querySelectorAll('#sel_btn').forEach((element) =>{
        element.style.backgroundColor = 'gray';
    })
    let index = parseInt(Array.prototype.slice.call(document.querySelectorAll('#sel_btn'), 0).indexOf(el));

    for(var i = 1; i<document.getElementById('main').children.length; i++){
        document.getElementById('main').children[i].style.display = 'none';
    }
    document.getElementById('main').children[index+1].style.display = 'block';
    el.style.backgroundColor = 'rgb(90, 90, 90)';
}


function fileDialog(){
    const input = document.getElementById('file');
    
    input.onchange = function(e){
        image = window.URL.createObjectURL(e.target.files[0]);
        document.getElementById('img').style.backgroundImage = 'url(' + window.URL.createObjectURL(e.target.files[0]) + ')';
        document.getElementById('select_img').style.opacity = 0;
    }

    document.getElementById('select_img').style.animation = '1s popout forwards';
    input.click();
}

function leaveMS(el){
    if(image != "") el.style.animation = '1s popout forwards';
}