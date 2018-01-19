class AddsFactorialToPosts < ActiveRecord::Migration[5.1]
  def self.up
    add_column :posts, :factorial, :integer
  end

  def self.down
    remove_column :posts, :prefix, :integer
  end
end
