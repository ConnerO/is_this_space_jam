class Reply < ActiveRecord::Base
  def self.calculate movie
    is_spacejam = movie == "Space Jam"
    {is_spacejam: is_spacejam}
  end
end
