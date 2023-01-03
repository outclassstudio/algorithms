// 이진탐색(Binary Search)
//* 중간값을 기준으로 타겟이 큰지 작은지 비교하여 재탐색
//* 의미없는 나머지 절반을 제외하고 탐색
//! 이진탐색의 조건 : 데이터가 반드시 순서대로 정렬되어 있어야 함
function binarySearch (numbers, target) {
  let left = 0
  let right  = numbers.length - 1
  let mid = Math.floor(right/2)

  while(left <= right) {
    if(numbers[mid] === target) {
      return mid
    }

    if(numbers[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }

    mid = Math.floor((right + left)/2)
  }

  return -1
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(binarySearch(array, 12))