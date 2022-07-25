class LogLineParser
  attr_reader :log_level,
              :message,
              :reformat

  def initialize(line)
    message_groups = /\[(?<log_level>[A-Z]+)\]:\s+(?<message>.+)/.match(line)

    @message = message_groups[:message].strip
    @log_level = message_groups[:log_level].downcase
  end

  def reformat(str_format = '%s (%s)')
    str_format % [@message, @log_level] 
  end
end
