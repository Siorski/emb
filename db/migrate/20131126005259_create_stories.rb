class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :body
      t.string :author
      t.string :published

      t.timestamps
    end
  end
end
