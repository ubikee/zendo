import _ from 'lodash';

const Validator = {
  notEmpty(field) {
    return !_.isEmpty(field);
  }
}

export default Validator;
