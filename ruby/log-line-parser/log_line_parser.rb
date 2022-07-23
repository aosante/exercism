class LogLineParser
  attr_reader :log_level, :message, :reformat

  def initialize(line)
    log_level, message = line.split(':')

    @message = message.strip
    @log_level = log_level.gsub(/"|\[|\]/, '').downcase
    @reformat = "%s (%s)" % [@message, @log_level]
  end
end
