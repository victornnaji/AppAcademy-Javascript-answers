def to_initials(name)
    parts = name.split(" ")
    initials = ""
    parts.each { |part| initials += part[0] }
    return initials
  end