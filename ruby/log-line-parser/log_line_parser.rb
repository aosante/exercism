class LogLineParser
  LINE_REGEX = /\[(?<log_level>[A-Z]+)\]:\s+(?<message>.+)/

  attr_reader :log_level,
              :message

  def initialize(line)
    message_groups = LINE_REGEX.match(line)

    @message = message_groups[:message].strip
    @log_level = message_groups[:log_level].downcase
  end

  def reformat(format_string = '%s (%s)')
    format_string % [@message, @log_level]
  end
end
