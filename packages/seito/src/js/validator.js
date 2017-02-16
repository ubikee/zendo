import _ from 'lodash';

const Validator = {

  notEmpty(field) {
    return !_.isEmpty(field);
  },

  isFullfilled(form) {
    let result = true;
    for (var prop in form) {
      if (_.isEmpty(form[prop])) {
        result = false;
        break;
      }
    }
    return result;
  },

  isNumber(field) {
    return !isNaN(parseFloat(field))
  },

  isEmail(field) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.notEmpty(field) && re.test(field);
  },

}

export default Validator;
