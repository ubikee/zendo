import _ from 'lodash';

const Validator = {
  notEmpty(field) {
    console.log(_,field,_.isEmpty(field))
    return !_.isEmpty(field);
  }
}

export default Validator;
