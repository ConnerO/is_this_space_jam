class ReplyController < ApplicationController
  def reply
    puts "wake up, reply. Stand up, reply"
    replies = Reply.all
    replies_filtered = []
    replies.each do |reply|
      replies_filtered << reply.reply
    end
    render :json => {poo:replies_filtered}
  end
end
