class ReplyController < ApplicationController
  def reply
    puts "Shake and Bake!!!"
    replies = Reply.all
    replies_filtered = []
    # replies.each do |reply|
    #   replies_filtered << reply.reply
    # end
    # render :json => {poo:replies_filtered}
    render :json => {sup: "supppppppp"}
  end
end
