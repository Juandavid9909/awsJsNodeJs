const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "RDSAdmins",
    PolicyArn: "arn:aws:iam::aws:policy/AmazonRDSDataFullAccess"
}

iam.attachGroupPolicy(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});