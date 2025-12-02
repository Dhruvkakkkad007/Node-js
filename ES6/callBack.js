function add(a,b,callback){
    ans = a + b;
    callback(ans);
}

function display(ans){
    console.log(ans);
}

add(5,5,display);