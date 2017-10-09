require 'will_paginate/array'

class PinsController < ApplicationController
  def index
  	@pins = JSON.parse(File.read("app/assets/javascripts/pins_formatted.json"))
  	@pins.paginate(page: params[:page], per_page: 10) 
  end
end
