'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

    var AWS = require('aws-sdk');
    var cloudformation = new AWS.CloudFormation({apiVersion: '2010-05-15'});
    var params = {
        StackName: process.env.STACK_NAME,
        TemplateURL: process.env.S3_BUCKET_FILE_LOCATION,
        Capabilities: [ 'CAPABILITY_NAMED_IAM' ]
    }
    cloudformation.createStack(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });




    callback(null, {
        statusCode:  '200',
        body: "hello",
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
