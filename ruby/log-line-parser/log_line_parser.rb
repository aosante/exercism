class LogLineParser
  LINE_REGEX = /\[(?<log_level>[A-Z]+)\]:\s+(?<message>.+)/
  REPORT = '%<message>s (%<log_level>s)'
  private_constant :LINE_REGEX, :REPORT

  def initialize(line, report = REPORT)
    message_groups = LINE_REGEX.match(line)

    @log_level = message_groups[:log_level].downcase
    @message = message_groups[:message].strip
    @report = report
  end

  private

  attr_reader :report

  public

  attr_reader :log_level,
              :message

  def reformat()
    report % { message: message, log_level: log_level }
  end

  alias to_s reformat
end
