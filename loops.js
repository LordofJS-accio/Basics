// for Loop 
// while loop 
// do while loop 


let n = 47867
 

// while(n>0){
//     last  = n%10 
//     console.log(last)
//     n = parseInt(n/10) // 4786.7 => 4786

// }

// 5/2 =>2.5


// for(i = 1; i<=5; i++){
//     console.log(i)

// }

for(i=n ;  i>0;  i = parseInt(i/10)){
     last = i%10
     console.log(last)
} 

// i = 47867
// last = 47867%10 => 7
// i = 4786
// last = 4786%10 => 6
// i = 478









// for(i = 2; i%2==0; i++){
//     console.log(i)
// }