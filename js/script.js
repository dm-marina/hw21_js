//  Task 1 indexOf
//  function indexOf(elem){
//      let arr=['nn', 'kt', 'll', 'fd', 'yt']
//      let i=0;
//      if (Math.sign(i)<0 || Math.sign(i)>=0){
//         for(; i<arr.length; i++){
//             if(i>=arr.length){
//                 return -1
//             }
//             if(arr[i]===elem){
//                 return i;
//             }
            
//          }
//      }
//  }
//  console.log( indexOf('kt'));

// Task2 lastIndexOf
// let str = 'Genius is one percent inspiration and 99 percent perspiration'
// function lastIndexOf(elem , from=0){
//     let i,  sliceStr
//     let j
//     let strToarray = str.split('')
//     console.log(strToarray);
//     for(i=0; i<strToarray.length; i++){
//         if (from>str.length ){
//             from === str.length
//         }
//         else if(from<0){
//             from = 0
//         }
//         if ( from === i){
//             sliceStr = strToarray.slice(0, strToarray.length-from)
//             console.log(sliceStr)
//             console.log(sliceStr.length)
        
//             for(j =sliceStr.length; j>=0; j--){
//                 if(elem===sliceStr[j]){
//                     return j
//                 }
               
//             }
//         }
//     }
// }
// console.log(lastIndexOf('s', 5));

// Task3 Find
// let arr = [3, 6, 4, 9, 7];
// function find(isEven, thisArg = undefined){
//     let i
//     thisArg = this
//     for(i =0; i<arr.length; i++){
//         arr[i].isEven(elem, index, array)
//         if(isEven()==true){
//             return arr[i]
//         }else{
//             return undefined
//         }
//     }
// }
// function isEven(elem, index, array){
//     if(elem%2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(arr.find(isEven));

// Task4 findIndex
// let arr = [3,5,1,9,7]
// function findIndex(isEven, thisArg = undefined){
//     let i
//     for(i =0; i<arr.length; i++){
//         arr[i]==elem;
//         arr[i].isEven(elem, index, array)
//         if(isEven()===true){
//             return i
//         }else {
//             return -1
//         }
//     }
// }
// function isEven(elem, index, array){
//         if(elem%2===0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(arr.findIndex(isEven));

// Task5 includes
// let arr =[9,4,2,6,8]
// function includesF(elem, from=0){
//     let i,j
//     let sliceArr
//     if(from >=arr.length){
//         return false
//     }else if(from<0){
//         fromInd === arr.length + from
//         if(fromInd<=0){ 
//             from = 0
//         }else if(fromInd>0){
//             fromInd = from
//         }else{
//             fromInd = 0
//         }
//     }
//     for(i=0; i<arr.length; i++){
//         if(i ===from){
//             sliceArr = arr.slice(0, arr.length-from)
//             console.log(sliceArr)
// //             console.log(sliceStr.length)
//             for(j=0; j<sliceArr.length-1;j++){
//                 if(elem===sliceArr[j]){
//                     return true
//                 }else{
//                     return false
//                 }
//             }
//         }
//     }
// }
// console.log(includesF(2,1))

// Task6 every
// let arr=[4,20,60,17]
// function every(isEven, thisArg = undefined){
//         let i
//         for(i =0; i<arr.length; i++){
//             arr[i].isEven(elem, index, array)
//             if(isEven()==true || !arr){
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
//     function isEven(elem, index, array){
//         if(elem%2===0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(arr.every(isEven));
 
// Task7 some
// let arr=[5, 8,91,34,66]
// function some(isEven, thisArg=undefined){
//     let i
//         for(i =0; i<arr.length; i++){
//             arr[i].isEven(elem, index, array)
//             if(isEven()==true ){
//                 return true
//             }else{
//                 return false
//             }
//         }
// }
//     function isEven(elem, index, array){
//         if(elem%2===0){
//             return true
//         }else{
//             return false
//         }
//     }
//     console.log(arr.some(isEven));