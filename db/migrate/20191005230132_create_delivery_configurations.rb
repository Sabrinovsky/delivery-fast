class CreateDeliveryConfigurations < ActiveRecord::Migration[5.2]
  def change
    create_table :delivery_configurations do |t|
      t.numeric :max_time
      t.decimal :radius

      t.timestamps
    end
  end
end
