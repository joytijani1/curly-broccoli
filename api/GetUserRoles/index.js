//const url = require('url');
const fetch = require("node-fetch");

module.exports = async function (context, req) {
    /*const queryObject = url.parse(req.url,true).query;*/
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const clientPrincipal = JSON.parse(decoded);
    var rolesArray = [];
    let id = clientPrincipal.userId;
    let tok = clientPrincipal.accessToken;
    let response = await fetch(`https://graph.microsoft.com/v1.0/users/${id}/memberOf`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tok,
        }
    });
    let json = await response.json();
    console.log(json);
    for (let x of json.value) {
        console.log(x.displayName);
        rolesArray.push(x.displayName);
    } 
    //console.log(response.json);
    console.log(rolesArray);

    context.res.json({
        "userRoles": rolesArray,
        "denyAccess": false

    });
};
