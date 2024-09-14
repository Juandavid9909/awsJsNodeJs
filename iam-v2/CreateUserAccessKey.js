const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "john"
}

iam.createAccessKey(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});