class ReplyController < ApplicationController
  def reply
    replies = Reply.all
    replies_filtered = []
    replies.each do |reply|
      replies_filtered << reply.reply
    end
    puts "I reply hard, I play hard!"
    render :json => {poo:replies_filtered}
  end
end
