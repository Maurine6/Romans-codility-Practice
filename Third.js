// You are given an implementation of a function:

// int solution(int A[], int N, int B[], int M);

// that, given a non-empty array A of N non-negative integers and a non-empty array B of M non-negative integers, returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.

// For example, given arrays A and B such that:

//     A[0] = 1    B[0] = 4
//     A[1] = 3    B[1] = 2
//     A[2] = 2    B[2] = 5
//     A[3] = 1    B[3] = 3
//                 B[4] = 2
// your function should return 2, since 2 is the minimal value which occurs in both arrays A and B (another value which occurs in both arrays is 3).

// Given arrays A and B such that:

//     A[0] = 2    B[0] = 3
//     A[1] = 1    B[1] = 3
// your function should return −1, since there is no value that occurs in both arrays.

// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000].

// Here's the solution.

function solution(A, B) {
    // Convert A into a Set for efficient lookup
    const ASet = new Set(A);

    // Find the minimum common element in B
    const minCommonValue = B.reduce((acc, curr) => {
        if (ASet.has(curr)) {
            return Math.min(acc, curr);
        }
        return acc;
    }, Infinity);

    // Return -1 if no common element is found
    return minCommonValue === Infinity ? -1 : minCommonValue;
}

// Test Cases
const testCase1A = [1, 3, 2, 1];
const testCase1B = [4, 2, 5, 3, 2];
console.log("Test Case 1 Result:", solution(testCase1A, testCase1B)); // Expected output: 2

const testCase2A = [2, 3];
const testCase2B = [3, 3];
console.log("Test Case 2 Result:", solution(testCase2A, testCase2B)); // Expected output: 3

const testCase3A = [6, 7, 8, 9, 8];
const testCase3B = [8, 10, 11, 12, 9];
console.log("Test Case 3 Result:", solution(testCase3A, testCase3B)); // Expected output: 8

// New Test Case: A[2,1], B[3,3]
const newTestCaseA = [2, 1];
const newTestCaseB = [3, 3];
console.log("New Test Case Result:", solution(newTestCaseA, newTestCaseB)); // Expected output: -1
