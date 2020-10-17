'use strict';

const 
    js0 = require('js0'),
    
    ABDField = require('./ABDField')
;

class ABDDouble extends ABDField
{

    constructor(properties)
    {
        super(properties);
    }

    getType()
    {
        return 'Float';
    }


    __escape(value)
    {
        js0.args(arguments, 'number');

        return String(value);
    }

    __unescape(value)
    {
        return parseFloat(value);
    }

}
module.exports = ABDDouble;