/* let arr = [1,2,5,23,91,3,9,11,];
arr.sort((a,b)=>{
  if(a>b){
    return 1;
  }else if(a<b){
  return -1;
  }else{
  return 0;
  }
}) 
console.log(arr); */

// let str = "a2b1c3";
// let i=0;
// let string = "";
// while(i<str.length){
//   if(/\d/.test(str[i])){
//     let last = string[string.length-1];
//     let j = 0;
//     while(j<str[i]){
//     string += last;
//       j++;
//     }
//   }else{
//     string += str[i];
//   }
//   i++;
// }
// console.log("result",string);

function subArraySumLessThanM(arr, n, m) {
    let start = 0;
    let end = 0;
    let count = 0;
    let sum = arr[0];
    while (start < n && end < n) {
      if (sum < m) {
        end++;
        if (start <= end) {
          count = count + (end - start);
        }
        if (end < n) {
          sum += arr[end];
        }
      } else {
        sum = sum - arr[start];
        start++;
      }
    }
    console.log(count);
  }
  
  // subArraySumLessThanM([1, 5, 1, 3, 2], 5, 5)
  
  function bubbleSort(N, arr) {
    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < N - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // let temp = arr[j];
          // arr[j] = arr[j+1];
          // arr[j+1] = temp;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      console.log("loop: ", i, "array: ", arr);
    }
    console.log(arr);
  }
  
  // bubbleSort(5,[3,5,0,9,8])
  //first pass i=0 -> [4,3,1,5];
  // second pass i=1, -> [3,1,4,5];
  // third pass i=2 -> [1,3,4,5];
  // fourth pass i=3 -> [1,3,4,5];
  
  function selectionSort(N, arr) {
    for (let i = 0; i < N - 1; i++) {
      let min_index = i;
      for (let j = i + 1; j < N; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    console.log(arr);
    // for(let i=0;)
  }
  
  // selectionSort(5, [9, 0, 8, 3, 5]);
  
  function removeDublicatesFromArray(N, arr) {
    arr.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    // [1, 1, 1, 8, 8];
    let x = 0;
    for (let i = 1; i < N; i++) {
      if (arr[i] !== arr[x]) {
        x++;
        arr[x] = arr[i];
      }
    }
    // console.log(x);
    console.log(arr.slice(0, x + 1));
  }
  
  // removeDublicatesFromArray(5, [1, 2, 3, 4, 5])
  
  function tripletSum(arr, X) {
    // sorted array
    let N = arr.length;
    for (let i = 0; i < N - 2; i++) {
      let left = i + 1;
      let right = N - 1;
      while (left < right) {
        let current_sum = arr[i] + arr[left] + arr[right];
        if (current_sum === X) {
          console.log(arr[i], arr[left], arr[right]);
          return;
        } else if (current_sum < X) {
          left++;
        } else {
          right--;
        }
      }
    }
    console.log("Triplet Not Present");
  }
  
  // tripletSum([0, -1, 2, 3, 1],0)
  
  function checkPairWhoseSumIsK(arr, k) {
    // arr should be sorted
    let n = arr.length;
    let i = 0,
      j = n - 1;
    while (i < j) {
      sum = arr[i] + arr[j];
      if (sum === k) {
        console.log("found: ", `${arr[i]} + ${arr[j]} = ${sum}`);
        return;
      } else if (sum < k) {
        i++;
      } else {
        j--;
      }
    }
    console.log("not found");
  }
  // checkPairWhoseSumIsK([1,5,2,3],4);
  
  function segregate0and1(arr, n) {
    // arr.sort((a,b)=>a-b);
    // console.log(arr);
    let left = 0;
    let right = n - 1;
    while (left < right) {
      while (left < right && arr[left] === 0) {
        left++;
      }
  
      while (left < right && arr[right] === 1) {
        right--;
      }
  
      if (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    console.log(arr);
    // time -> o(n), spac -> o(1);
  }
  
  // segregate0and1( [0, 0, 1, 0, 1, 0, 1, 1],8);
  
  function segregateEvenOrOdd(arr) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
      while (left < right && arr[left] % 2 === 0) {
        left++;
      }
      while (left < right && arr[right] % 2 === 1) {
        right--;
      }
  
      if (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // console.log("aaaa", arr);
        left++;
        right--;
      }
    }
    console.log(arr);
  }
  
  // segregateEvenOrOdd([2,4,2,3,1,5,7,9,10,6,8,12]);
  
  function mergeToSortedArray(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let i = 0;
    let j = 0;
    let temp = [];
    while (i < n && j < m) {
      if (arr1[i] <= arr2[j]) {
        temp.push(arr1[i]);
        i++;
      } else {
        temp.push(arr2[j]);
        j++;
      }
    }
  
    while (i < n) {
      temp.push(arr1[i]);
      i++;
    }
  
    while (j < n) {
      temp.push(arr2[j]);
      j++;
    }
    console.log(temp);
  }
  
  // mergeToSortedArray([2,4,6,8],[1,3,5,7])
  
  function minMumSumOfSubArrayOfSizeK(arr, k) {
    let max_sum = 0;
    for (let i = 0; i < k; i++) {
      max_sum += arr[i];
    }
    for (let i = k; i < arr.length; i++) {
      let temp_sum = 0;
      temp_sum = temp_sum + arr[i] - arr[i - k];
      if (temp_sum > max_sum) {
        max_sum = temp_sum;
      }
    }
    console.log("min sum", max_sum);
  }
  
  // minMumSumOfSubArrayOfSizeK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
  
  // Find is there any sub-array with the given sum [ return True/ False ]
  function checkSubArrayWithGivenSum(arr, k) {
    let sum = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      while (j < arr.length && sum < k) {
        sum += arr[j];
        j++;
      }
      if (sum === k) {
        console.log("Yes");
        return;
      } else {
        sum = sum - arr[i];
      }
    }
    console.log("No");
  }
  
  // checkSubArrayWithGivenSum([1, 4, 5, 6, 8], 9);
  
  function longestUniqueSubString(str) {
    let n = str.length;
    let subStrLength = 0;
    let left = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], 1);
        console.log(map);
        subStrLength = Math.max(subStrLength, map.size);
      } else {
        map.delete(str[left]);
        left++;
      }
    }
    console.log(subStrLength);
  }
  
  // longestUniqueSubString("helloworld");
  
  // let myMap = new Map();
  // myMap.set("a",1);
  // myMap.set("b",0);
  // myMap.delete("b");
  // console.log('size',myMap.size, myMap.has("b"));
  
  function checkValidAnaGram(str1, str2) {
    let map = new Map();
  
    if (str1.length != str2.length) {
      console.log(false);
      return false;
    }
  
    for (let i = 0; i < str1.length; i++) {
      map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    }
  
    for (let i = 0; i < str2.length; i++) {
      if (!map.has(str2[i])) {
        console.log("No");
        return false;
      }
  
      map.set(str2[i], map.get(str2[i]) - 1);
      if (!map.get(str2[i])) {
        map.delete(str2[i]);
      }
    }
  
    if (map.size === 0) {
      console.log("Yes");
      return true;
    }
    console.log("No");
    return false;
  }
  