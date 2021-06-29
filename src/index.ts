const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const sortArr = function f(array: any[], reverse: boolean = false, func: Function): any[] {
  let arr: any = [];
  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    if (typeof x === 'string' || typeof x === 'number') {
      arr.push(x)
    } else {
      arr.push(func(x, reverse))
    }
  }
  arr = arr.sort(collator.compare)
  if (reverse) arr = arr.reverse();
  return arr;
}

function deepSorter(o: any, reverse: boolean = false): any {
  let ops = Object.keys(o).sort();
  if (reverse)
    ops = ops.reverse();
  if (Array.isArray(o)) return sortArr(o, reverse, deepSorter);
  return ops.reduce(
    (obj: any, key: string) => {
      const p = o[key];
      if (Array.isArray(p)) {
        obj[key] = sortArr(p, reverse, deepSorter);
      } else if (typeof p === 'object') {
        obj[key] = deepSorter(p, reverse);
      } else {
        obj[key] = o[key]
      }
      return obj;
    },
    {}
  )
}

export {};
module.exports = deepSorter;