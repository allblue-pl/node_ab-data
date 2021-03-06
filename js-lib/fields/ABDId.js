'use strict';

const 
    js0 = require('js0'),

    ABDField = require('./ABDField'),

    ABDLongValidator = require('../validators/ABDLongValidator')
;

class ABDId extends ABDField
{

    constructor(properties)
    {
        js0.args(arguments);
        super([], properties);
    }

    getType()
    {
        return 'Id';
    }


    __getFieldValidator(fieldValidatorInfo)
    {
        return new ABDLongValidator(fieldValidatorInfo);
    }

    __escape(value)
    {
        js0.args(arguments, js0.Long);

        return String(value);
    }

    __unescape(value)
    {
        return Number(value);
    }

}
module.exports = ABDId;
