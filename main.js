function xify(string){
    x1="x";
    x="";
    for (char of string) {
        x=x+x1;

    }
    return x

}


function yellingChars(string){
    
    x="";
    for (char of string) {
        x=x+char+"!";

    }
    return x

}


function indexChars(string){
    
    x="";
    y=0
    for (char of string) {
        x=x+y.toString()+char;
        y+=1;
    }
    return x

}
function numberedChar(string){
    x=""
    y=0
    for (char of string) {
        x=x+"("+y.toString()+")"+char;
        y+=1;
    }
    return x

}
function exclaim(string){
    result=string.split(".").join("!");
    result2=result.split("?").join("!");
    return result2
    

}

function repeatIt(string,n){
    temp="";
    x=0;
    while (x<n){
        temp=temp+string;
        x+=1;
    }
    return temp
}

function truncate(string){
    if (string.length>15){

        temp=string.substring(0,15);
        temp=string+"..."
        return temp
    }
}
function ciEailify(string){
    string.replace(' ','.');
    string=string+"@codeimmersive.com";
    return string
    

}
function reverse(str) {
    return str.split("").reverse().join("");
}
function onlyVowels(str){
   
    temp=str.split('').filter(c => ['a','e','i','o','u'].includes(c)).join('');
    return temp

}
t="test? Test.";

console.log(t+" xify: "+xify(t));
console.log(t+"yellingChars"+yellingChars(t));
console.log(t+"indexchars"+ indexChars(t));
console.log(t+"numchars"+ numberedChar(t));
console.log(t+"ex"+ exclaim(t));
console.log(repeatIt(t,3));
console.log(truncate(repeatIt(t,3)));
console.log(ciEailify(t));
console.log(reverse(t));
console.log(onlyVowels(t));

