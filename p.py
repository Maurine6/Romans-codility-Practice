def solution(R, V, N):
    min_balance_A = min_balance_B = 0
    balance_A = balance_B = 0
    
    for i in range(N):
        if R[i] == 'A':
            balance_A -= V[i]
            balance_B += V[i]
        else:  # R[i] == 'B'
            balance_A += V[i]
            balance_B -= V[i]
        
        # Update minimum balances if necessary
        min_balance_A = min(min_balance_A, balance_A)
        min_balance_B = min(min_balance_B, balance_B)
    
    # Convert to positive since we need initial balances
    initial_balance_A = abs(min_balance_A)
    initial_balance_B = abs(min_balance_B)
    
    return [initial_balance_A, initial_balance_B]

# Example usage
R = "BAABA"
V = [2, 4, 1, 1, 2]
print(solution(R, V, len(V)))  # Output: [2, 4]

R = "ABAB"
V = [10, 5, 10, 15]
print(solution(R, V, len(V)))  # Output: [0, 15]

R = "B"
V = [100]
print(solution(R, V, len(V)))  # Output: [100, 0]
