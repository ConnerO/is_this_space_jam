class WelcomeController < ApplicationController
    def determine_spacejam
      puts "new one bro bro"
      reply = Reply.calculate "howeward bound"
      puts "reply: #{reply}"
      render :json => reply
    end

    def test
      puts "this is a new test"
      # render test
      render :json => {poo:"poo"}
    end
end
