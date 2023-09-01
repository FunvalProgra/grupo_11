// <= n para encontrar si riega todo
const minTaps = function (n, ranges) {
  if (ranges.every( rng => rng === 0)) return -1;

  let intervals = ranges.map((range, idx) => {
    let start = idx - range;
    return [start > 0 ? start : 0, idx + range];
  });


  if (intervals.some( int => cubrirArea(int).length > n && int[0] == 0)) return 1
  
  // intervals = intervals.sort( (a,b) => a[0] - b[0]);
  intervals = intervals.sort( (a,b) => cubrirArea(b).length - cubrirArea(a).length);
  
  console.log(intervals)

  let restantes = [...intervals];
  for (let interval of intervals) {
    let usados = 1;
    restantes.shift();

    let areaCubierta = cubrirArea(interval);
    let lng = areaCubierta.length;
    let biggest = areaCubierta[lng - 1];

    for (let restante of restantes) {
      
      areaCubierta = [...areaCubierta, ...cubrirArea(restante)]
      areaCubierta = [...new Set(areaCubierta)];
      
      if (areaCubierta.length > lng && (restante[1] < biggest || restante[1] <= n) ) {
        console.log(restante)
        lng = areaCubierta.length;
        usados++;
        console.log("si", usados, areaCubierta)
        areaCubierta.sort( (a, b) => a - b);
        console.log(areaCubierta)
        if (areaCubierta[0] === 0 && areaCubierta.length > n && areaCubierta.every( a => a >= 0) ) return usados;
      }
      
      console.log(areaCubierta.length)
    }


  }

  function cubrirArea(interval) {
    let covered = [];
    for (let i = interval[0]; i <= interval[1]; i++) {
      covered.push(i);
    }
     return covered
  }


  return -1
};

let result = minTaps(17, [0,3,3,2,2,4,2,1,5,1,0,1,2,3,0,3,1,1]);

console.log(result);

function cuanto(arr) {
  return arr[1] - arr[0]
}