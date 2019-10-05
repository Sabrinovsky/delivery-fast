class DeliveryConfigurationsController < ApplicationController
  before_action :set_delivery_configuration, only: [:show, :update, :destroy]

  # GET /delivery_configurations
  def index
    @delivery_configurations = DeliveryConfiguration.all

    render json: @delivery_configurations
  end

  # GET /delivery_configurations/1
  def show
    render json: @delivery_configuration
  end

  # POST /delivery_configurations
  def create
    @delivery_configuration = DeliveryConfiguration.new(delivery_configuration_params)

    if @delivery_configuration.save
      render json: @delivery_configuration, status: :created, location: @delivery_configuration
    else
      render json: @delivery_configuration.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /delivery_configurations/1
  def update
    if @delivery_configuration.update(delivery_configuration_params)
      render json: @delivery_configuration
    else
      render json: @delivery_configuration.errors, status: :unprocessable_entity
    end
  end

  # DELETE /delivery_configurations/1
  def destroy
    @delivery_configuration.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_delivery_configuration
      @delivery_configuration = DeliveryConfiguration.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def delivery_configuration_params
      params.require(:delivery_configuration).permit(:max_time, :radius)
    end
end
