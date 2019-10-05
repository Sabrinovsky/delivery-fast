class DeliveryConfigurationSerializer < ActiveModel::Serializer
  attributes :id, :max_time, :radius
end
