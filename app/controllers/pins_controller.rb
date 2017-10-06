class PinsController < ApplicationController
  def index
  	@pins = File.read("app/assets/javascripts/pins_formatted.json")
  	render :json => @pins 
  end
end
