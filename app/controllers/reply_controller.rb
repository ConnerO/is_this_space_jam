class ReplyController < ApplicationController
  def reply
    puts "Shake and Bake!!!"
    replies = Reply.all
    puts "the amount of entries in the database are #{Reply.count}"
    replies_filtered = []
    # replies.each do |reply|
    #   replies_filtered << reply.reply
    # end
    # render :json => {poo:replies_filtered}
    render :json => {dong: "hceking what replies does"}
  end
end
