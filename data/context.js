//
// Registration Class
//

function Context() {

}

exports.build = function(req) {
  var c = new Context();
  c.registrationId  = req.tcapi_param('registration');
  c.activityId      = req.tcapi_param('activityId');
  c.stateId         = req.tcapi_param('stateId');
  c.statementId     = req.tcapi_param('statementId');
  c.actor           = req.tcapi_param('actor');
  return c;
}
