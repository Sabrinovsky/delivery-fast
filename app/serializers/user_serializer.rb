class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :kind, :can_access_delivery_configuration

  def can_access_delivery_configuration
    return true if @object.kind == 'admin' || @object.kind == 'manager'
  end
end
