// Funtion Syntex :-

//function functionName(para1 ,para2){    // Creating function
    // do some thing;       // task like : add , sub , loop
    // console.log();       // prinfting function 
//}
// fuctionName();           // Calling a fuction 



// 2 add function :-
// function add(a,b){
    // return a+b;
//}
// var result = add(2, 4);
//console.log(result);



// 3 Arrow function 

//var add = (a,b)=>{
//    return (a * b);
//}
//var result = add (2,5);
//console.log(result);

// More Example ::
//var mult = (x,y)=>{
//    return (x * y);
//}

//const hello = ()=>{  console.log("hello"); }



// 4 shortest way for create fuction 
//var add = (a,b) => a+b;
//console.log(result);


function countVowels(str){     // fun with string paramiter
    let count = 0;              // count 0 se start hoga
    for(const char of str){     // new for loop hai
        if(
            char ==="a" ||       // OR operation use kiya h to compare
            char ==="e" ||
            char ==="i" ||
            char ==="o" || 
            char ==="u"
         )
    
{
    count++;            // count ki value bad rahi h loop ke sath
}
    }
console.log(count);     // print the function 
}
