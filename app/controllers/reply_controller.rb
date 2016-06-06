class ReplyController < ApplicationController
  def reply
    puts "Hiiiiii there friend"
    replies = Reply.all
    replies_filtered = []
    replies.each do |reply|
      replies_filtered << reply.reply
    end
    render :json => {poo:replies_filtered}
  end
end
