class PinsController < ApplicationController
	require 'will_paginate/array'
  def index
  	@pins = JSON.parse(File.read("app/assets/javascripts/pins_formatted.json"))
  	@pins.paginate(page: params[:page], per_page: 10) 
  end
end
