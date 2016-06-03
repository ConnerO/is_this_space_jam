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
end
