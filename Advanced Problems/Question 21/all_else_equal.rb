def all_else_equal(arr)
    sum = sum_array(arr)
  
    arr.each do |ele|
      if ele == sum / 2.0
        return ele
      end
    end
  
    return nil
  end
  
  def sum_array(arr)
    sum = 0
  
    arr.each do |num|
      sum += num
    end
  
    return sum
  end
  
  p all_else_equal([2, 4, 3, 10, 1]) #=> 10
  p all_else_equal([6, 3, 5, -9, 1]) #=> 3
  p all_else_equal([1, 2, 3, 4])     #=> false