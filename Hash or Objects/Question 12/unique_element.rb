def unique_elements(arr)
    hash_elements = {}
    arr.each { |ele| hash_elements[ele] = true }
    return hash_elements.keys
  end
  
  print unique_elements(['a', 'b', 'a', 'a', 'b', 'c']) #=> ["a", "b", "c"]
  puts