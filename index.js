const login = require("facebook-chat-api");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create simple echo bot
login({email: "nduc535@gmail.com", password: "dttd.vatm.hust"}, function callback (err, api) {
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
        api.sendMessage("Chào chế, mình đang bận, nói chuyện sau đê!", message.threadID);
    });
});