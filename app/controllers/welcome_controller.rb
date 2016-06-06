class WelcomeController < ApplicationController
    def determine_spacejam
      puts "new one bro bro"
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
      headers['Access-Control-Max-Age'] = "1728000"
      current_movie = params["currentMovie"]
      # puts "params time #{params["currentMovie"]}"
      reply = Reply.calculate current_movie
      puts "reply: #{reply}"
      render :json => reply
    end
end
