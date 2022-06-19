// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< odd number>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  let a = process.argv[2];
// let b = process.argv[3];
// let n = 15;
// for(let i = 1; i<=n; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
   
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<odd number using while loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.</odd>
// while loop
// let i = 1;
// while( i<=n){
//     if(i%2!==0){
//         console.log(i)
//     }
//     i++;
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< sum of Even number>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // ;
let sum =0 ;
let a = 10;
let b = 20;
for(let i = a; i<=b; i++){
if(i%2==0){
    sum = sum+i;
}

}
console.log(sum)


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< first digit & last digit>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let a = 2389;
// let ld = a % 10;

// let fd = a;
// while (fd >= 10){
//     fd = Math.floor(fd / 10);
// }
// console.log(fd)
// console.log(ld)


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Armstrong Number>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 153;
// let sum = 0; //27
// let arms = a;
// while (arms > 0) {
//    let remainder =arms % 10;// reminder 1
//    sum = sum + remainder**3;//27+125+1
//    arms = Math.floor(arms / 10);// quetient 1
// }
// if (sum == a) {
//     console.log(`this is an Armstrong number`);
// }
// else {
//     console.log(`this is not an Armstrong number.`);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> Product of two number >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 40;
// let b = 50;
// let product=1;
// 	for(let i=a;i<=b;i++)
// 	{
// 	  let checking = Math.floor(i/10);
// 		if( i%2 == 0 && checking%10 == 4)
// 		{
// 			product=product*i;
// 		}

// 	}
// 	console.log(product);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< using while >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 40;
// let b =50;
// let product = 1;
// let i = a;
// while(i<=b){
//     checking = Math.floor(i/10);
//     if(i%2==0 && checking%10==4){
//         product = product*i;
     
//     }  i++;
    
// } console.log(product);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< even number >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a=456;
// let r=0;
// while(a>0){// number  reverse
//    r=(r*10)+(a%10);
//    a=Math.floor(a/10);
// }
// let i=r;
// while(i>0){
//     r = i % 10;
//     if (r % 2 == 0) {
//       console.log(r);
     
// }
// i = Math.floor(i / 10);
//  }



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Check whether the given number is equal to its reverse number or not
// let a = 101;
// let rem, temp, res = 0;
// 		temp = a;
// 		while(a>0)
// 		{
// 			rem = a%10;
// 			a = Math.floor(a/10);
// 			res = res*10+rem;

// 		}
        
// if(res==temp)
// {
// 	console.log("the given number is equal to its reverse number");
// }
// else
// {
// 	console.log("the given number is not equal to its reverse numbere");
// }
