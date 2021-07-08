const url = require('url');

module.exports = async function (context, req) {
    const queryObject = url.parse(req.url,true).query;
    var rolesArray  = "";
    if (queryObject.userId == '1234' && queryObject.provider == 'google') {
        rolesArray = "authenticated,reader";
    } else if (queryObject.userId == '1235' && queryObject.provider == 'google') {
        rolesArray = "contributor";
    } else {
        rolesArray = "";
    }
    context.res.json({
        roles: rolesArray
    });
}; 
