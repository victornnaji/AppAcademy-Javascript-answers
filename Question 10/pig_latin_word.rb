def pig_latin_word(word)
    vowels = "aeiou"
  
    if vowels.include?(word[0])
       return word + "yay"
    end
  
    word.each_char.with_index do |char, i|
      if vowels.include?(char)
        return word[i..-1] + word[0...i] + "ay"
      end
    end
  end
  
  puts pig_latin_word("apple")   # => "appleyay"
  puts pig_latin_word("eat")     # => "eatyay"
  puts pig_latin_word("banana")  # => "ananabay"
  puts pig_latin_word("trash")   # => "ashtray"