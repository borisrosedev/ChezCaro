module Message 
    def showMessage x
        puts x
    end 
end 


class MessageService
    include Message 
end

message = MessageService.new
message.showMessage "\nTâches à effecter\n"


todos = [ 
    { theme: "infrastructure", content: "Docker" },
    { theme: "infrastructure", content: "Github Actions" },
    { theme: "testing", content: "Jest" },
    { theme: "testing", content: "Testing-library" },
    { theme: "language", content: "TS" }
]

displayer = -> (x){ puts "| " + x[:theme] + " | " + x[:content] + " |" }

puts "\n"
todos.each do |todo|
    puts "|-----------------------------------------------|"
    displayer.call(todo)
    puts "|-----------------------------------------------|"
end