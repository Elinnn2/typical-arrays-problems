
exports.min = function min(array) {
  if (Array.isArray(array) == false || array == undefined) return 0;
  else if (array.length == 0) return 0;
  else {
      let min = array[0];
      for (let i = 0; i < array.length; i++) {
          if (min > array[i]) min = array[i];
      }
      return min;
  }
};

exports.max = function max(array) {
  if (Array.isArray(array) == false || array == undefined) return 0;
  else if (array.length == 0) return 0;
  else {
      let max = array[0];
      for (let i = 0; i < array.length; i++) {
          if (max < array[i]) max = array[i];
      }
      return max;
  }
};

exports.avg = function avg(array) {
  if (Array.isArray(array) == false || array == undefined) return 0;
  else if (array.length == 0) return 0;
  else {
      let summ = 0;
      array.forEach(item => (summ += item));
      console.log(summ / array.length);
      return summ / array.length;
  }
};
