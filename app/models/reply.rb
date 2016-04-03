class Reply < ActiveRecord::Base
  def self.calculate movie
    reply = ""
    is_spacejam = false
    fbmessage = ""
    if movie == "Space Jam" || movie === "space jam"
      is_spacejam = true
      if movie === "space jam"
        reply = "space jam is like Space Jam right before S & J drank Michael's Secret Stuff and became big."
      else
        reply = "Yes. This is the Space Jam."
        fbmessage = "I was correct! " + movie + " is indeed Space Jam. Thank god for 'Is This Space Jam'!"
      end
    else
      fbmessage = "I thought " + movie + " was Space Jam. Thank god for 'Is This Space Jam'. Now I know it's not.";
    end
    {fbmessage:fbmessage, reply:reply,is_spacejam: is_spacejam}
  end
end
