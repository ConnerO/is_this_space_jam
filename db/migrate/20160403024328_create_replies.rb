class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.string :reply

      t.timestamps null: false
    end
  end
end
