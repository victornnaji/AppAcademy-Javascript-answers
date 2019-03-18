def is_valid_email(str)
    parts = str.split("@")
  
    if parts.length != 2
      return false
    end
  
    first = parts[0]
    second = parts[1]
    alpha = "abcdefghijklmnopqrstuvwxyz"
  
    first.each_char do |char|
      if !alpha.include?(char)
        return false
      end
    end
  
    if second.split('.').length == 2
      return true
    else
      return false
    end
  end
  