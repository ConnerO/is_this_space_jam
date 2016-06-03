class Reply < ActiveRecord::Base
  def self.calculate movie
    is_spacejam = false
    fbmessage = ""
    if movie == "Space Jam"
      is_spacejam = true
      fbmessage = "I was correct! #{movie} is indeed Space Jam. Thank god for 'Is This Space Jam'!"
    else
      fbmessage = "I thought #{movie} was Space Jam. Thank god for 'Is This Space Jam'. Now I know it's not.";
    end
    {fbmessage: fbmessage,
    is_spacejam: is_spacejam}
  end
end
