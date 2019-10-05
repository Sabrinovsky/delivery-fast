require 'test_helper'

class DeliveryConfigurationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @delivery_configuration = delivery_configurations(:one)
  end

  test "should get index" do
    get delivery_configurations_url, as: :json
    assert_response :success
  end

  test "should create delivery_configuration" do
    assert_difference('DeliveryConfiguration.count') do
      post delivery_configurations_url, params: { delivery_configuration: { max_time: @delivery_configuration.max_time, radius: @delivery_configuration.radius } }, as: :json
    end

    assert_response 201
  end

  test "should show delivery_configuration" do
    get delivery_configuration_url(@delivery_configuration), as: :json
    assert_response :success
  end

  test "should update delivery_configuration" do
    patch delivery_configuration_url(@delivery_configuration), params: { delivery_configuration: { max_time: @delivery_configuration.max_time, radius: @delivery_configuration.radius } }, as: :json
    assert_response 200
  end

  test "should destroy delivery_configuration" do
    assert_difference('DeliveryConfiguration.count', -1) do
      delete delivery_configuration_url(@delivery_configuration), as: :json
    end

    assert_response 204
  end
end
