class SessionHelper {
  static setSession(req, res, data) {
    let dataResult = data.resData;

    req.session["token"] = dataResult.token;
    req.session["userName"] = dataResult.userName;
    req.session["roleType"] = dataResult.roleType;
  }

  static getSession(req, res) {
    return req.session;
  }
}

module.exports = SessionHelper;
