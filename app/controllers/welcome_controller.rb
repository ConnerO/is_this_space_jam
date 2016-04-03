class WelcomeController < ApplicationController
    def determine_spacejam
      puts "new one bro bro"
      reply = Reply.calculate "howeward bound"
      puts "reply: #{reply}"
      render :json => reply
    end
end
