class AssemblyLine
  CAR_PER_HOUR = 221
  private_constant :CAR_PER_HOUR
  
  def initialize(speed)
    @speed = speed
  end

  private

  attr_reader :speed

  def success_rate
    case speed
    when 1..4
      1
    when 5..8
      0.9
    when 9
      0.8
    when 10
      0.77
    end
  end

  public

  def production_rate_per_hour
    speed * CAR_PER_HOUR * success_rate
  end

  def working_items_per_minute
    (production_rate_per_hour / 60).floor
  end
end
