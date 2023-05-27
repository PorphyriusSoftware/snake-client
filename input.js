

let connection;

const moveSet = {
    up: 'Move: up',
    down: 'Move: down',
    left: 'Move: left',
    right: 'Move: right'
}

let userInput = [];

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();


    stdin.on("data", handleUserInput);


    return stdin;
};


const handleUserInput = function (key) {
    // your code here

    switch (key) {
        case '\u0003':
            process.exit();
            break;
        case 'w':
            connection.write(moveSet.up);
            break;
        case 's':
            connection.write(moveSet.down);
            break;
        case 'a':
            connection.write(moveSet.left);
            break;
        case 'd':
            connection.write(moveSet.right);
            break;
        case '\u000d':
            /**
             * push the array to the server as string and clear the array
             */
            connection.write(`Say: ${userInput.join('')}`);
            userInput.length = 0;
            break;
        default:
            userInput.push(key);

    }



};

module.exports = { setupInput };