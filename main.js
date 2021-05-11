const text = 'Hi I am Mahendran Front-end Developer';

let index = 0;

function write(){
    document.body.innerHTML = text.slice(0,index);
    index++;

    if(index > text){
        index = 0;
    }
}

setInterval(write,200);