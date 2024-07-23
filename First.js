// You are given a list of N transfers (numbered from 0 to N−1) between two banks: bank A and bank B. The K-th transfer is described by two values:

// R[K] (either “A” or “B”) representing the recipient (the bank the transfer is sent to);
// V[K] denoting the value sent via the transfer.
// All transfers are completed in the order they appear on the list. The banks do not want to go into debt (in other words, their account balance may not drop below 0). What minimum initial account balance in each bank is necessary in order to complete the transfers?

// Assume that the following declarations are given:

// struct Results {
// int * A;
// int M; // Length of the array
// };

// Write a function:

// struct Results solution(char *R, int V[], int N);

// that, given a string R and an array of integers V, both of length N, returns an array of two integers. The integers should represent the minimum initial account balances for banks A and B in the following order: [bank A, bank B].

// Result array should be returned as a structure Results.

// Examples:

// Given R = “BAABA” and V = [2, 4, 1, 1, 2], the function should return [2, 4]. The bank accounts’ balances after each transfer are shown in the following table:
//                        | A | B
// ------------------------±–±--
// initial balance | 2 | 4
// transfer 2 from A to B | 0 | 6
// transfer 4 from B to A | 4 | 2
// transfer 1 from B to A | 5 | 1
// transfer 1 from A to B | 4 | 2
// transfer 2 from B to A | 6 | 0

// Given R = “ABAB” and V = [10, 5, 10, 15], the function should return [0, 15].

// Given R = “B” and V = [100], the function should return [100, 0].

// Write an efficient algorithm for the following assumptions:

// string R and array V are both of length N;
// N is an integer within the range [1…100,000];
// each element of array V is an integer within the range [1…10,000];
// string R is made only of the characters ‘A’ and/or ‘B’.


// Here's the solution.
function solution(R, V) {
    let N = R.length;
    let balanceA = 0;
    let balanceB = 0;
    let minA = 0;
    let minB = 0;

for (let i = 0; i < N; i++) {
    if (R[i] === 'B') {
        balanceA -= V[i];
        balanceB += V[i];
    } else {
        balanceB -= V[i];
        balanceA += V[i];
    }
    
    minA = Math.min(minA, balanceA);
    minB = Math.min(minB, balanceB);
}

return [Math.abs(minA), Math.abs(minB)];
}

// Test cases
function runTest(R, V, expected) {
    const result = solution(R, V);
    console.log(`Input: R = "${R}", V = [${V}]`);
    console.log(`Expected: [${expected}]`);
    console.log(`Result: [${result}]`);
    console.log(JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL");
    console.log("---");
}

// Test case 1 (from example)
runTest("BAABA", [2, 4, 1, 1, 2], [2, 4]);

// Test case 2 (from example)
runTest("ABAB", [10, 5, 10, 15], [0, 15]);

// Test case 3 (from example)
runTest("B", [100], [100, 0]);

// Test case 4: All transfers to A
runTest("AAA", [1, 2, 3], [0, 6]);

// Test case 5: All transfers to B
runTest("BBB", [1, 2, 3], [6, 0]);

// Test case 6: Alternating transfers
runTest("ABABAB", [1, 1, 1, 1, 1, 1], [0, 1]);

// Test case 7: Large values
runTest("AB", [10000, 10000], [0, 10000]);

// Test case 8: Long sequence
runTest("ABABABABABABABABABAB", Array(20).fill(100), [0, 100]);

// Test case 9: Single large transfer
runTest("A", [10000], [0, 10000]);

// Test case 10: Edge case - empty transfers
runTest("", [], [0, 0]);