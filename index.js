const swap = function(item, left, right){
    const _temp = item[left];
    item[left] = item[right];
    item[right] = _temp;
  };
  
  const partition = function(item, left, right){
    const pivot = item[Math.floor((left + right)/2)];
    console.log('i: ', left)
    console.log('j: ', right - 1 )
    let i = left;
    let j = right - 1;
    while(i < j){
      while(item[i] < pivot){
        i++
      };
  
      while(item[j] > pivot){
        j--
      };
  
      if(i < j){
        swap(item, i, j);
      };
    };
    return i;
  };
  
  const arrays = [5,3,7,6,2,9]
  // [46,77,51,78,47,70,98,0,30,58,96,97,8,71,1];
  
  const quickSort = function(item, left, right){
    const key = partition(item, left, right);
    console.log(item);
    if(key > left){
      quickSort(item,left, key);
    }
    if(key + 1 < right){
      quickSort(item, key + 1 ,right)
    };
    return item
  };
  console.log(quickSort(arrays,0,arrays.length));