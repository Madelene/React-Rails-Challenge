class AddsActiveFlagToPosts < ActiveRecord::Migration[5.1]
  def self.up
    add_column :posts, :is_active, :boolean, default: true
  end

  def self.down
    remove_column :posts, :is_active, :boolean, default: true
  end
end
