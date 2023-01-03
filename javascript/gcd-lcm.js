// GCD(Greatest Common Divisor) : 최대공약수
// LCM(Least Common Multiple) : 최소공배수
//* 1. 일반적인 방법 
//? 최대공약수는, 주어진 수의 공통 약수중 최대값이다
//? 2부터 순차적으로 나누어서 주어진 수와 나누어 떨어지는 값중 최대값을 리턴한다

//! GCD
function getGCDNormal (num1, num2) {
  let gcd = 1;

  for(let i = 2 ; i <= Math.min(num1, num2) ; i++) {
    if(num1 % i === 0 && num2 % i === 0) {
      gcd = i
    }
  }

  return gcd
}

console.log(getGCDNormal(24, 18))

//! LCM
function getLCMNormal (num1, num2) {
  let base = Math.max(num1, num2)
  let lcm = base

  while(true) {
    if(lcm % num1 === 0 && lcm % num2 === 0) {
      break
    }
    lcm++
  }
  return lcm
}

console.log(getLCMNormal(15,6))

//* 유클리드 호제법
//? 단, num1 > num2
//! GCD 반복문
function getGCD1 (num1, num2) { 
  while(num2 > 0){
      let r = num1 % num2;
      num1 = num2;
      num2 = r;
  } 

  return num1;
}

console.log(getGCD1(24, 12))

//! GCD 재귀
function getGCD2 (num1, num2) {
  return num2 > 0 ? getGCD2(num2, num1 % num2) : num1
}

console.log(getGCD2(32,16))

//! LCM 
//? LCM의 경우 주어진 값을 GCD로 나눈 몫과 GCD를 곱한다
function getLCM (num1, num2) {
  return num1 * num2 / getGCD2(num1, num2)
}

console.log(getLCM(15,35))