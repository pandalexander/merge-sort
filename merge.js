function merge(A, B) {
  let newArray = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      newArray[k++] = A[i++];
    } else {
      newArray[k++] = B[j++];
    }
  }

  for (; i < A.length; i++) {
    newArray[k++] = A[i];
  }

  for (; j < B.length; j++) {
    newArray[k++] = B[j];
  }

  return newArray;
}

// this function ^ merges an array based on lower number

function mergeSort(arr) {
  if (arr.length > 1) {
    let middle = Math.round((arr.length - 1) / 2); // find middle index rounded to closest int
    let firstArray = mergeSort(arr.slice(0, middle)); // this array is the first half of arr => recursively broken down and merged together
    let secondArray = mergeSort(arr.slice(middle)); // this array is the second half of arr => recursively broken down and merged together
    return merge(firstArray, secondArray);
  } else {
    return arr; // base case - just returns a single element in its own array after splitting
  }
}

let printArray = [1, 6, 7, 3, 21, 5, 6, 2, 3, 4, 0, 1, 55];

console.log(mergeSort(printArray));
