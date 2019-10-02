class Product < ApplicationRecord
  validates :code, presence: true, uniqueness: true
  validates :price, presence: true
end
