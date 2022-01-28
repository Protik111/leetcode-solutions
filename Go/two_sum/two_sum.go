package main

import "fmt"

//time complexity O(n^2)
func twoSum(nums []int, target int) []int {
	res := []int{0, 0}
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				res[0] = i
				res[1] = j
				break
			}
		}
	}
	return res
}

func main() {
	nums := []int{5, 4, 8, 9}
	fmt.Println(twoSum(nums, 13))
}
