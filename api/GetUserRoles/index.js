const url = require('url');

module.exports = async function (context, req) {
    const queryObject = url.parse(req.url,true).query;
    var rolesArray  = [];
    if (queryObject.userId == '1234' && queryObject.provider == 'google') {
        rolesArray.push("reader");
    } else if (queryObject.userId == '1235' && queryObject.provider == 'google') {
        rolesArray.push("contributor");
    } else {
        rolesArray = rolesArray;
    }
    context.res.json({
        "userRoles": rolesArray
    });
}; 
