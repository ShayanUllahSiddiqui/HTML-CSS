// https://dev.to/dip15739/responsive-website-with-only-1-css-property-3ea9?fbclid=IwAR075JUHpYjOVbsJNUbpz1ouNdhXK2HF1mRyUFSwO5QabdejrF7nuQt7FN8
// clamp CSS

// // var a = '10';
// // var b = 15;

// // function age(){
// //     if (b === 16) {
// //         console.log('he is eligible')
// //     }else {
// //         console.log('he is not eligible')
// //     };
// // };

// // console.log(age());


// // function age (a){
// //     if ( a >= 25 || a <= 26) {
// //         console.log(true)
// //     }
// //     else {
// //         console.log(false)
// //     };
// // };    
// // console.log(age(25));

// // var week = 2
// // switch (week) {
// //     case 1:
// //          console.log('today is monday')
        
// //         break;
// //     case 2: 
// // console.log('today is tuesday')
// //         break;
// //         default:console.log('error')
// // }
// // console.log(week)

// var a = 'Nice bhund';
// console.log(a.length);

// var b = 'shayan Ullah'
// console.log(b.includes('ullah'));

// console.log(b.toUpperCase());
// console.log(b.toLowerCase());

// var value = 'Javascript';
// console.log(value[0]);
// console.log(value[1]);
// console.log(value[2]);
// console.log(value[3]);

// console.log(value[value.length - 2]);

// var name = 'Shayan'

// console.log(name.substring(3));
// console.log(name.substring(1,5));

// var nameA = 'Alexendra'
// var nameB = 'Daddario'

// console.log(`Female Actor name is ${nameA} ${nameB}`)

// var a = 10 
// var b = 2 
// var c = 1 
// var d = a + 6 * c - b / (5 + b)
// //            
// // 0.2
// console.log(d)



// function bhund(r,s){
//     return (r+s)
// }
// console.log(bhund(6,8))

// function add (W1, W2){
// var W3 = W1 + W2
// console.log('the output is ' + W3)
// }

// var W4 = add(2, 2)
// W4;

// function sub (a,b) {
//     return (a-b)
// }
// function divide(c,d){
//     return sub(c,d)/d
// }
// var total = divide (8,4)
// console.log(total)

// var a = x => x + 2
// console.log(a(4));

// var c = (x, y) => x + y
// console.log(c(2, 2))

// let w = a => a + 6
// console.log(w(12))

// var r = (a,b) => a+b
// console.log(r(4,4))


// let a = t  => t + 7
// console.log(a(7))


// var l = (w,b) => w+b
// console.log(l(9,9))



// function promise(){
// return new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=false;
//         if(!error){
//             console.log('server started')
//             resolve()
//         }else{
//             console.log('request rejected')
//             reject();

//             }
//         })
        
//     }, 2000);

// };
// promise().then(() => {
//     console.log('port 3000');
// }).catch(() =>{
//     console.log('port 4000')
// });
// ////////////////////////////////////////////////////////// 
// function promise(){
// return new Promise(function(resolve,reject){
//     setTimeout(() => {
//     let error=false;
//     if(!error){
//         console.log('server started')
//         resolve()
//     } else{
//         console.log('request rejected')
//         reject();
    
//         }
//     });
//    }, 2000);
// };
// promise().then(() => {
//     console.log('port 3000');
// }).catch(() => {
//     console.log('port 4000')
// })

// async function getData() {
//      let promise01 = new Promise(function(resolve,reject){
//          try { 
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//              .then(function(response){
//                     return response.json()
//          })
//          .then(function(result){
//               resolve(result)
//          })
//          } catch (error) {
//              console.log(error)
//          }
//      let data =await promise01
//      console.log(data)  
// }


// getData();


// class Obj {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     name() {
//         console.log(this.name, this.age)
//     }
// };

// let obj = new Obj('Bilal', 12);
// console.log(obj);


// async function getData() {
//     let promise01 = new Promise(function(resolve, reject) {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(result) {
//             resolve(result)
//         })
//         .catch(function(error) {
//             reject(error)
//         })
//     })
//     let data = await promise01
//     console.log(data)
// };

// getData();



// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} stands still.`);
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     } 

//     hide() {
//         alert(`${this.name} hide and ${this.earLength} ear length`)
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit('Sexy rabbit', 10);
// alert(rabbit.hide());
