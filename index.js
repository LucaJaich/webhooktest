var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1086795',
  key: 'cf58f89a3bd4a236a5c9',
  secret: 'e52ce0397dde58b164c9',
  cluster: 'us2',
});

console.log('tu mama')

exports.handler = async (event) => {
    pusher.trigger('my-channel', 'my-event', {
        'message': 'hello world'
    });
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
