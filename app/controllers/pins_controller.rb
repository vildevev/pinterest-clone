require 'will_paginate/array'

class PinsController < ApplicationController
  def index
  	@pins = JSON.parse(File.read("app/assets/javascripts/pins_formatted.json"))
  	@pins = @pins.paginate(page: params[:page], per_page: 8) 
  	render :json => @pins
  end
end
