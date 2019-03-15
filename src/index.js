module.exports = function getZerosCount(number, base) {
  if(number===1) return 0;
  
  let ans = Number.MAX_SAFE_INTEGER
  let primesOfBase = {}; 
  primesOfBase = getPrimeFactorOfBase(base);
  for(let k of Object.keys(primesOfBase)){
    let count = Math.floor(sumOfPower(number, k) / primesOfBase[k]);
    ans = Math.min(ans, count);
  }

  return ans;
}


function getPrimeFactorOfBase(num){
  let primes = {};
  for (let i = 2; num != 1; i++) { 
    if (num % i == 0) { 
        let count = 0; 
        while (num % i == 0) { 
            num = num / i; 
            count++; 
        } 

        primes[i] = count; 
    } 
  } 
  return primes; 
}

function sumOfPower(num, k) 
{ 
    let count = 0; 
    let r = k; 
    while (r <= num) {
        count += Math.floor(num / r); 
        r = r * k; 
    } 
    return count; 
} 