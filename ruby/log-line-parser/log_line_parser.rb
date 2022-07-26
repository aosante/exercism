class LogLineParser
  LINE_REGEX = /\[(?<log_level>[A-Z]+)\]:\s+(?<message>.+)/
  REPORT = '%<message>s (%<log_level>s)'
  private_constant :LINE_REGEX, :REPORT

  attr_reader :log_level,
              :message,
              :report

  def initialize(line, report = REPORT)
    message_groups = LINE_REGEX.match(line)

    @log_level = message_groups[:log_level].downcase
    @message = message_groups[:message].strip
    @report = report
  end

  def reformat()
    report % { message: message, log_level: log_level }
  end
end
