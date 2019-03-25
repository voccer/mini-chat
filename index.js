const login = require("facebook-chat-api");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// Create simple echo bot
login({email: "nduc535@gmail.com", password: "tddt.hust.vatm"}, function callback (err, api) {
    if(err) {
        switch (err.error) {
            case 'login-approval':
            console.log('Enter code > ');
            rl.on('line', (line) => {
                err.continue(line);
                rl.close();
            });
            break;
            default:
            console.error(err);
        }
        return;
    }

    api.listen(function callback(err, message) {
        api.sendMessage("Hi, mình tên là Voccer_Bot, mình là bot chat của Trong Duc, hiên tại Trong Duc không thể trả lời được tin nhắn, nói chuyện sau nhé!", message.threadID);
    });
});