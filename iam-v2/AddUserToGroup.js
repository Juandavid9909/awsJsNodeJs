const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    GroupName: "RDSAdmins",
    UserName: "john"
}

iam.addUserToGroup(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});