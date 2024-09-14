const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    PolicyArn: "arn:aws:iam::934586660530:policy/newuserfullpolicy",
    UserName: "john"
}

iam.attachUserPolicy(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});