class WelcomeController < ApplicationController
    def determine_spacejam
      puts "new one bro bro"
      current_movie = params["currentMovie"]
      # puts "params time #{params["currentMovie"]}"
      reply = Reply.calculate current_movie
      puts "reply: #{reply}"
      render :json => reply
    end
end
