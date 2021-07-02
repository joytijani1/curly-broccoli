module.exports = async function (context, req) {
    const queryObject = url.parse(req.url,true).query;
    const rolesArray  = "";
    if (queryObject.userId == '1234' && queryObject.provider == 'google') {
        rolesArray.append("authenticated, reader");
    } else if (queryObject.userId == '1235' && queryObject.provider == 'google') {
        rolesArray.append("contributor");
    } else {
        rolesArray.append();
    }
    context.res.json({
        roles: rolesArray
    });
}; 