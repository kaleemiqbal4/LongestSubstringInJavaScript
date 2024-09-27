# Longest Substring Without Repeating Characters

## Overview

This JavaScript program finds the longest substring without repeating characters from a given string. It efficiently tracks character occurrences to build substrings and identifies the longest one among them.

## Features

- Iterates through a string to create substrings.
- Uses an array to store substrings that contain unique characters.
- Utilizes the `reduce` method to determine the longest substring.

## How It Works

1. **Initialization**:

   - A string `strArray` contains the input characters.
   - An array `output` is created to store substrings without repeating characters.
   - A variable `noRepeatingResult` is initialized to accumulate the current substring being processed.

2. **Iterating Through the String**:

   - The program loops through each character in `strArray`.
   - For each character, it checks if it already exists in `noRepeatingResult`.
     - If it does, the current substring is pushed to the `output` array, and `noRepeatingResult` is reset to start a new substring with the current character.
     - If it does not exist, the character is added to `noRepeatingResult`.

3. **Final Output**:

   - After the loop, the last accumulated substring is pushed to the `output` array.
   - The program then uses the `reduce` method to find the longest substring by comparing the lengths of the substrings in `output`.

4. **Displaying Results**:
   - The program prints the array of substrings and the longest substring found.

## Example

Given the input string:

```javascript
var strArray = "abcdefghbijklmnopaqrstuvwxyzcd";

## Result is

--------SubString Array is----------------
abcdefghbijklmnopaqrstuvwxyzcd
longest substring is : abcdefghijklmnopaqrstuvwxyz
```
