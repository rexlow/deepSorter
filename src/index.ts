const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

function sortArr(array: any[], reverse: boolean = false): any[] {
  let arr: any = [];
  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    if (typeof x === 'string' || typeof x === 'number') {
      arr.push(x)
    } else {
      arr.push(deepSorter(x, reverse))
    }
  }
  arr = arr.sort(collator.compare)
  if (reverse) arr = arr.reverse();
  return arr;
}

export function deepSorter(o: any, reverse: boolean = false): any {
  let ops = Object.keys(o).sort();
  if (reverse)
    ops = ops.reverse();
  if (Array.isArray(o)) return sortArr(o, reverse);
  return ops.reduce(
    (obj: any, key: string) => {
      const p = o[key];
      if (Array.isArray(p)) {
        obj[key] = sortArr(p, reverse);
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

module.exports = deepSorter;