const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    NewPassword: "Mypassword1",
    OldPassword: "Myoldpassword"
}

iam.changePassword(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});