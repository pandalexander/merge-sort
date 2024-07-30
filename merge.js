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

let array1 = [1, 5, 8];
let array2 = [2, 4, 9];

console.log(merge(array1, array2));
