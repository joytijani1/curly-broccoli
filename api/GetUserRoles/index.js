module.exports = async function (context, req) {
    context.res.json({
        roles: "authenticated, reader"
    });
};