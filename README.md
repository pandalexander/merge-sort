# Merge Sort Algorithm

This project contains a JavaScript implementation of the Merge Sort algorithm. Merge Sort is a classic divide-and-conquer algorithm that divides the input array into smaller subarrays, sorts them, and then merges them back together to produce a sorted array.

## Functions

### `merge(A, B)`

The `merge` function takes two sorted arrays `A` and `B` and merges them into a single sorted array.

```javascript

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

```

#### Explanation

1\. **Initialization**: An empty array `newArray` and three pointers `i`, `j`, and `k` are initialized to zero.

2\. **Merging**: The function iterates through both arrays, comparing their elements. The smaller element is added to `newArray`, and the corresponding pointer (`i` or `j`) is incremented.

3\. **Remaining Elements**: After one of the arrays is exhausted, any remaining elements from the other array are added to `newArray`.

4\. **Return**: The merged array `newArray` is returned.

### `mergeSort(arr)`

The `mergeSort` function recursively divides the input array into smaller subarrays, sorts them, and merges them back together using the `merge` function.

```javascript

function mergeSort(arr) {

  if (arr.length > 1) {

    let middle = Math.round((arr.length - 1) / 2);

    let firstArray = mergeSort(arr.slice(0, middle));

    let secondArray = mergeSort(arr.slice(middle));

    return merge(firstArray, secondArray);

  } else {

    return arr;

  }

}

```

#### Explanation

1\. **Base Case**: If the array has one or zero elements, it is already sorted, so the array is returned.

2\. **Dividing**: The array is split into two halves:

   - `firstArray`: The first half of the array.

   - `secondArray`: The second half of the array.

3\. **Recursive Sorting**: The `mergeSort` function is called recursively on both halves until the base case is reached.

4\. **Merging**: The sorted halves are merged back together using the `merge` function.

## Example Usage

To see the merge sort algorithm in action, run the following code:

```javascript

let printArray = [1, 6, 7, 3, 21, 5, 6, 2, 3, 4, 0, 1, 55];

console.log(mergeSort(printArray));

```

This will output the sorted array:

```

[0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 21, 55]

```

## Conclusion

This implementation of Merge Sort efficiently sorts an array by recursively dividing it into smaller subarrays, sorting those, and then merging them back together. The `merge` function ensures that the merged arrays are sorted, and the `mergeSort` function handles the recursive division and merging process.
