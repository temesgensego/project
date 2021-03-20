"use strict";
/* eslint-disable; */
exports.findPorcupineNumber = findPorcupineNumber;
exports.addToTarget = addToTarget;
exports.mostFrequent = mostFrequent;
exports.closestToZero = closestToZero;
exports.addTwoNumbers = addTwoNumbers;
exports.gcfStrings = gcfStrings;
exports.reverseVowels = reverseVowels;
exports.moveZeros = moveZeros;

exports.containsDuplicates = containsDuplicates;
exports.maxSubarray = maxSubarray;
exports.searchInsertPosition = searchInsertPosition;
exports.missingNumber = missingNumber;
exports.strobogrammaticNumber = strobogrammaticNumber;
exports.columnNumber = columnNumber;
exports.columnTitle = columnTitle;


function findPorcupineNumber( start, end)
{
     s = start, e = end;
     
    for (let i = s; i <= e; i++)
    {
        let  c = 0;
        for (let j = 1; j <= e; j++)
        {
            if (i % j == 0)
            {
                c++;
            }
         }
        if (c == 2)
        {
            if (i % 10 == 9)
            {
                alert(i+ " is an Porcupine Number.");
            }
        }
    }
    return 1;
}

alert(findPorcupineNumber(100,200));

//Q2A
function addToTarget(nums, target){ {
  for(let i = 0; i < nums.length; i++){
      for(let j = i; j < nums.length; j++){
          if(nums[i] + nums[j] == target){
              return [i, j]
          }
      }
  }
}
}

console.log( addToTarget([2,4,5,9 ],6))
console.log( addToTarget([3, 2, 4],7))
//Q3A
function mostFrequent(arr1){
 arr1=[3, 't', 't', 't', 2, 3, 't', 3, '6', 2, 4, ];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j]){
                 m++;}
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
}
console.log(mostFrequent(item+" ( " +mf +" times ) ") );
Q4A
function closestToZero(arr) {
  let array = [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        array[0] = arr[i];
        array[1] = arr[j];
        return array;
      } else if (sum > 0) {
        if (sum < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      } else {
        if (Math.abs(sum) < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      }
    }
  }
  return array;
}
// console.log(closestToZero([3, 5, -1, -2, -6]));
//Q5A
function addTwoNumbers(arr1,arr2){
    let sumArr=[];
    let arrjoined1=Number(arr1.join(""));
    let arrjoined2=Number(arr2.join(""));
    let sum =arrjoined1+arrjoined2;
    
     for (let each of String(sum)) {
        sumArr.push(Number(each));
      }
      return sumArr.join("");
    
    }
    
     console.log(addTwoNumbers([0, 1, 7], [9, 6, 4]));
//Q6A
function  addBinary(str1, str2) {
    let carry = 0;
    const res = [];
    //let l1 = , l2 = 
    for (let i = str1.length- 1, j = str2.length- 1; 0 <= i || 0 <= j; --i, --j) {
       let a = 0 <= i ? Number(str1[i]) : 0,
       b = 0 <= j ? Number(str2[j]) : 0;
       res.push((a + b + carry) % 2);
       carry = 1 < a + b + carry;
    };
    if (carry){
       res.push(1);
    }
    return res.reverse().join('');
 };
 //console.log(addBinary("11", "1"));
// Q7A
 function convertToTitle(n) {
  let num = n;
  let  tmp = 0;
  let  res = '';
  while (num > 0) {
   tmp = num % 26;
    if (tmp === 0) tmp = 26;
    res = getChar(tmp) + res;
    num = (num - tmp) / 26;
  }
  return res;
};

var getChar = function (num) {
  var start = 'A'.charCodeAt(0);
  return String.fromCharCode(start + num - 1);
};

console.log(convertToTitle(8));

//Q8A

function titleToNumber(s) {
    let  res = 0;
    let num = 0;
    let len = s.length;
    for (let  i = 0; i < len; i++) {
      num = getNum(s[len - 1 - i]);
      res += Math.pow(26, i) * num;
    }
    return res;
  };
  
  var getNum = function (char) {
    var start = 'A'.charCodeAt(0) - 1;
    return char.charCodeAt(0) - start;
  };
  console.log(getNum('A'));
//Q9A
function strobogrammaticNumber(str) {
  if (
    str.includes("2") ||
    str.includes("3") ||
    str.includes("4") ||
    str.includes("5") ||
    str.includes("7")
  ) {
    return false;
  } else {
    if (str.length % 2 !== 0) {
      //odd case
      let middleIndex = Math.floor(str.length / 2);
      if (str[middleIndex] === "9" || str[middleIndex] === "6") return false;
    }

    //even case plus odd
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (
        str[i] === "9" ||
        (str[i] === "6" && str[j] === "9") ||
        str[j] === "6"
      ) {
        if (str[i] === "9" && str[j] === "9") return false;
        else if (str[i] === "6" && str[j] === "6") return false;
      } else {
        if (str[i] !== str[j]) return false;
      }

      j--;
    }
  }

  return true;
}

// console.log(strobogrammaticNumber("068619890"));

  //Q10A
   function missingNumber(arr) {
  let missing;
  arr.sort((a, b) => (a > b ? 1 : -1));
  let i = 1;
  while (i < arr.length) {
    if (arr[i] - arr[i - 1] !== 1) {
      missing = arr[i] - 1;
      break;
    }
    i++;
  }
  return missing;
}
 console.log(missingNumber([3, 0, 1]));
//Q11A
function searchInsertPosition(arr, n) {
  let index;
  if (arr.includes(n)) {
    return arr.indexOf(n);
  } else {
    let concated = arr.concat(n);
    concated.sort((a, b) => (a > b ? 1 : -1));
    index = concated.indexOf(n);
  }
  return index;
}
// console.log(searchInsertPosition([1, 3, 5, 6], 5));
//Q12A
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );

//Q13A
function containsNearbyDuplicate (nums, k) {
    let myMap = new Map()
    for(let i=0; i<nums.length; i++){
        let currentNum = nums[i]
        if(myMap.has(currentNum) && i - myMap.get(currentNum) <= k){
            return true
        } else {
            myMap.set(nums[i], [i])
        }
    }
    return false
}
console.log(containsNearbyDuplicate());

//Q14A
function moveZeroes(nums) {
        let count = 0;
        for (let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                nums[count++] = nums[i];
            }
        }

        for (let i = count; i < nums.length; i++){
            nums[i] = 0;
        }
        return nums;    
    }
    console.log(moveZeroes([1,3,5,0,0]));
    function moveZeros(arr) {
      let newArr = arr.sort((a, b) => (a > b ? 1 : -1));
    
      let shifted = shiftZeros(newArr);
      return shifted;
    }
    
    // console.log(moveZeros([0, 1, 0, 12, 3])); // Output: [1,3,12,0,0]
    
    function shiftZeros(arr) {
      if (arr[0] === 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) {
            let x = arr.slice(0, i);
            let y = arr.slice(i);
            arr = y.concat(x);
            return arr;
          }
        }
      }
    
      return arr;
    }
    // console.log(shiftZeros([0, 0, 1, 2, 4]));
    
    // ?---------- 16 ----   done -
    // "helloo" to "holle"
    
    function reverseVowels(str) {
      let arr = [];
      console.log(str);
      let arrStr = str.split(""); // [ 'h', 'e', 'l', 'l', 'o', 'o' ]
    
      for (let i = 0; i < str.length; i++) {
        let x = str[i];
        if (
          str[i] === "a" ||
          str[i] === "e" ||
          str[i] === "i" ||
          str[i] === "o" ||
          str[i] === "u"
        ) {
          arr.push([x, i]);
        }
      }
    
      let reversedVowelsArray = reverseSecondArrayElement(arr); // [ [ 5, 'e', 1 ], [ 4, 'o', 4 ], [ 1, 'o', 5 ] ]
      for (let i = 0; i < reversedVowelsArray.length; i++) {
        arrStr[reversedVowelsArray[i][0]] = reversedVowelsArray[i][1];
      }
      let strArr = arrStr.join("");
      return strArr;
    }
    // console.log(reverseVowels("healloeo"));
    
    function reverseSecondArrayElement(arr) {
      let x = arr.length - 1;
      for (let i = 0; i < arr.length; i++) {
        arr[x].unshift(arr[i][arr[i].length - 1]);
    
        x--;
      }
      return arr;
    }
    // console.log(
    //   reverseSecondArrayElement([
    //     ["e", 1],
    //     ["o", 4],
    //     ["o", 5],
    //   ])
    // );
    
    function splitStr(str) {
      return str.split("");
    }
    
    console.log(splitStr("heloo"));
    
    //Q17A
    
    function summaryRanges(array) {
      let arr2 = [];
    
      helper(array);
    
      function helper(arr) {
        for (let i = 1; i < arr.length; i++) {
          // if (i === arr.length - 1) {
          //   arr2.push(`${arr[0]}->${arr[i]}`);
          //   break;
          // } else {
          if (arr[i] - arr[i - 1] !== 1) {
            arr2.push(`${arr[0]}->${arr[i - 1]}`);
    
            let arrNew = arr.slice(i);
            console.log(arrNew);
    
            if (arrNew.length === 1) {
              arr2.push(`${arrNew[0]}`);
              arr = [];
              break;
            } else helper(arrNew);
          }
          // }
        }
        return arr2;
      }
    
      return arr2;
    }
    console.log("^");
    function summaryRanges(arr) {
      let array = [];
      for (let i = 1; i < arr.length; i++) {
        let start = 0;
        let end = 0;
        if (arr[i] - arr[i - 1] === 1) {
          start = i - 1;
        } else end = arr[i - 1];
        array.push([arr[start], arr[end]]);
        arr = arr.splice(start, end - start);
      }
      return arr;
    }
    
    console.log(summaryRanges([1, 2, 3, 5, 6, 7]));
    // console.log(summaryRanges([1, 2, 3, 5, 6, 7,9]));
    // console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
    // summaryRanges([0, 1, 2, 4, 5, 7]), [
    //       "0->2",
    //       "4->5",
    //       "7",
    //     ])
    
    // ?---------- 18 ----   done
    function gcfStrings(str1, str2) {
      if (str1.includes(str2 + str2)) return str2;
      else if (str2.includes(str1 + str1)) return str1;
      else return "";
    }
