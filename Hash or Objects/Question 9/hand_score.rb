def hand_score(hand)
    points = {
      "A"=>4,
      "K"=>3,
      "Q"=>2,
      "J"=>1
    }
  
    score = 0
    hand.each_char { |char| score += points[char.upcase] }
    return score
  end
  
  puts hand_score("AQAJ") #=> 11
  puts hand_score("jJka") #=> 9