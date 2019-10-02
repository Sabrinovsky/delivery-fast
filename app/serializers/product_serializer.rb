class ProductSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :price
end
