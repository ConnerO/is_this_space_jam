class ReplyController < ApplicationController
  def reply
    puts "New message yoh"
    puts "the amount of entries in the database are #{Reply.count}"
    # puts "not sure what should be here, but think it should be some sort of active record. #{Reply.class}"
    replies = Reply.all
    replies_filtered = []
    replies.each do |reply|
      replies_filtered << reply.reply
    end
    render :json => {poo:replies_filtered}
    # render :json => {sup: Reply.count}
  end

  def add
    reponses = ["No it's not Space Jam","No it's not The Jam","Still not Space Jam","You wish this was Space Jam","If you think this movie is Space Jam, you clearly don't know Space Jam","This isn't Space Jam, therefore you are stupid","This is not Space Jam. Sorry to hear about that bro."]
    reponses.each do |response|
      new_resonse = Reply.create reply: response
    end
  end
end
