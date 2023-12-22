// User
// In java 15:
// A password string, pwd, consists of binary characters (0s, and 1s). A cyber security expert is trying to determine the minimum number of changes required to make the password secure. To do so, it must be divided into substrings of non-overlapping, even length substrings. Each substring can contain 1s or 0s not a mix. This helps to ensure that the password is strong and less vulnerable to hacking attacks. Find the minimum number of characters that must be flipped in the password string, i.e. changed from 0 to 1 or 1 to 0 to allow the string to be divided as described. 
// Note: a Substring is a contiguous sequence of characters in a string
// Function description:
// Complete the function getMinFlips(String pwd)
// getMinFlips takes the following arguments:
// str pwd: the binary string
// Returns:
// int: the minimum number of flips to make the division possible
// Constraints 2<= pwd<=10e5
// the length of pwd is even
// pwd contains only 1s and 0s