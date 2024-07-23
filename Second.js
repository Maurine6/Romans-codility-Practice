// Given four digits, count how many valid times can be displayed on a digital clock (in 24-hour format) using those digits. The earliest time is 00:00 and the latest time is 23:59.

// Write a function:

// int solution(int A, int B, int C, int D);

// that, given four integers A, B, C and D (describing the four digits), returns the number of valid times that can be displayed on a digital clock.

// Examples:

// 1. Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are: 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18.

// 2. Given A = 2, B = 3, C = 3, D = 2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32.

// 3. Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to display any valid time using the given digits.

// Assume that:

// A, B, C and D are integers within the range [0..9].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// Here's the solution.
function solution(A, B, C, D) {
    const digits = [A, B, C, D];
    // A set is chosen because it automatically eliminates duplicates
    const times = new Set();

// Generate all permutations of the four digits
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (j === i) continue;
        for (let k = 0; k < 4; k++) {
            if (k === i || k === j) continue;
            for (let l = 0; l < 4; l++) {
                if (l === i || l === j || l === k) continue;

                // Forming hours and minutes (tens place and ones place)
                const hours = digits[i] * 10 + digits[j];
                const minutes = digits[k] * 10 + digits[l];

                // Check if the time is valid
                if (isValidTime(hours, minutes)) {
                    times.add(hours * 100 + minutes);
                }
            }
        }
    }
}

// Return the count of unique times
return times.size;

// Helper function to check if a time is valid
function isValidTime(hours, minutes) {
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}
}

// Test cases
console.log(solution(1, 8, 3, 2)); // Should return 6
console.log(solution(2, 3, 3, 2)); // Should return 3
console.log(solution(6, 2, 4, 7)); // Should return 0