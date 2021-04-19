function headerValues() {
    return $('#jsgrid-odata').data('JSGrid')
        .fields
        .filter(function (d) {
            return d.name != '';
        })
        .map(function (d) {
            return d.name
        })
}

function dataObjects() {
    return $('#jsgrid-odata').data('JSGrid').data
}

function createJSONForSingle(object) {
    var hash = {};

    headerValues().map(function (key) {
        hash[key] = object[key]
    });

    return hash;
}

function createJSON() {
    objects = dataObjects().map(function (o) {
        return createJSONForSingle(o)
    });

    return JSON.stringify(objects, null, 2);
}
