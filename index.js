const swap = function(item, left, right){
    const _temp = item[left];
    item[left] = item[right];
    item[right] = _temp;
  };
  
  const partition = function(item, left, right){
    const pivot = item[Math.floor((left + right)/2)];
    let i = left;
    let j = right;
    while(i <= j){
      while(item[i] < pivot){
        i++
      };
  
      while(item[j] > pivot){
        j--
      };
  
      if(i <= j){
        swap(item, i, j);
        i++
        j--
      };
    };
    return i;
  };
  
  const arrays = [93, 75, 94, 54, 61, 27, 18, 34, 23, 36, 6, 14, 81, 90, 65, 73, 10, 28, 68, 0, 40, 65, 37, 18, 61] 
  
  const quickSort = function(item, left, right){
    if(item.length > 1){
      const key = partition(item, left, right);
      console.log(item);
      if(key - 1 > left){
        quickSort(item, left, key - 1);
      }
      if(key< right){
        quickSort(item, key ,right)
      };
      return item
    }
  };
  console.log(quickSort(arrays,0,arrays.length - 1));