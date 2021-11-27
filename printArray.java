Approach 1: Printing elements of an array using loops

// Java Program to Print the Elements of an Array
// Using loops (considering for loop here)
public class GFG {

	// Main driver method
	public static void main(String[] args)
	{

		// Initialize array of random numbers and size
		// Suppose array named 'arr' contains 9 elements
		int[] arr = { -7, -5, 5, 10, 0, 3, 20, 25, 12 };

		System.out.print("Elements of given array are: ");

		// Looping through array by incrementing value of i
		//'i' is an index of array 'arr'
		for (int i = 0; i < arr.length; i++) {

			// Print array element present at index i
			System.out.print(arr[i] + " ");
		}
	}
}

Approach 2: Printing elements of an array using standard library arrays

// Java Program to Print the Elements of an Array

// Importing specific array class
// so as to use inbuilt functions
import java.util.Arrays;

public class GFG {

	// Main driver method
	public static void main(String[] args)
	{

		// Initialize array
		// Array 'arr' contains 9 elements
		int[] arr = { -7, -5, 5, 10, 0, 3, 20, 25, 12 };

		System.out.print("Elements of given array are: ");

		// Pass the array 'arr' in Arrays.toString()
		// function to print array
		System.out.println(Arrays.toString(arr));
	}
}
