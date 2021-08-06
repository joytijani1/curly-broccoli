const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const clientPrincipal = JSON.parse(decoded);
    var rolesArray = [];
    let id = clientPrincipal.userId;
    let tok = clientPrincipal.accessToken;
    let response = await fetch(`https://graph.microsoft.com/v1.0/me/memberOf?`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tok,
        }
    });
    let json = await response.json();
    for (let x of json.value) {
        rolesArray.push(x.displayName);
    }

    context.res.json({
        "userRoles": rolesArray,
        "denyAccess": false

    });
};
