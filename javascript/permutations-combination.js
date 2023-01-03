//1. 조합
//* 순서 고려하지 않고 뽑기
const getCombinations = (array, selectNumber) => {
  const results = [];
  if(selectNumber === 1) return array.map((el) => [el])

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index+1) 
    const combinations = getCombinations(rest, selectNumber - 1)
    const attached = combinations.map(el => [fixed, ...el])
    
    //? 빈배열이 나올 경우 spread syntax로 풀기 때문에 제거된다.
    results.push(...attached)
  })

  return results
}

console.log(getCombinations([1,2,3,4], 3))

//2. 순열
//* 순서 고려하여 뽑기
const getPermutations = (array, selectNumber) => {
  const results = []
  if(selectNumber === 1) return el => [el]

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
    const permutations = getPermutations(rest, selectNumber - 1)
    const attached = permutations.map((el) => [fixed, ...el])
    results.push(attached)
  })

  return results
}

console.log(getPermutations([1,2,3],2))
