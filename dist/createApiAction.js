'use strict';

exports.__esModule = true;

exports['default'] = function (name, endpoint, method, body, headers, rest) {
  if (body === undefined) {
    return function () {
      return {
        type: 'CALL_API',
        CALL_API: {
          types: [name + '_REQUEST', name + '_SUCCESS', name + '_FAILURE'],
          endpoint: endpoint,
          method: method
        }
      };
    };
  } else if (typeof body === 'function') {
    return function () {
      return {
        type: 'CALL_API',
        CALL_API: {
          types: [name + '_REQUEST', name + '_SUCCESS', name + '_FAILURE'],
          endpoint: endpoint,
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: body.apply(undefined, arguments)
        }
      };
    };
  } else {
    var _ret = (function () {
      var stringified = JSON.stringify(body);
      return {
        v: function () {
          return {
            type: 'CALL_API',
            CALL_API: {
              types: [name + '_REQUEST', name + '_SUCCESS', name + '_FAILURE'],
              endpoint: endpoint,
              method: method,
              headers: { 'Content-Type': 'application/json' },
              body: stringified
            }
          };
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }
};

module.exports = exports['default'];
//# sourceMappingURL=createApiAction.js.map