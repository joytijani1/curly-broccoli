//const url = require('url');

module.exports = async function (context, req) {
    /*const queryObject = url.parse(req.url,true).query;*/
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const clientPrincipal = JSON.parse(decoded);
    var rolesArray  = [];
    if (clientPrincipal.userId == 'd6b9de92ebba49a48e4888c54a3ee8ac' && clientPrincipal.provider == 'google') {
        rolesArray.push("reader");
    } else if (clientPrincipal.userId == '1235' && clientPrincipal.provider == 'google') {
        rolesArray.push("contributor");
    } else {
        rolesArray = rolesArray;
    }

    context.res.json({
        "userRoles": rolesArray,
        "denyAccess": false

    });
}; 
