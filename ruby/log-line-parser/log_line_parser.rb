class LogLineParser
  def initialize(line)
    @message = line.split(' ')[1..-1].join(' ')
    @log_level = line.split(' ').shift.tr('[]:', '').downcase
  end

  def message
    return @message
  end

  def log_level
    return @log_level
  end

  def reformat
    return "#{@message} (#{@log_level})"
  end
end
