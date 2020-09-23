'use strict';

const
    js0 = require('js0')
;

class Request
{

    constructor()
    {
        this._actions = {};
    }

    async executeAction_Async(actionName, actionArgs)
    {
        js0.args(arguments, 'string', js0.RawObject);

        if (!(actionName in this._actions))
            throw new Error(`Action '${actionName}' does not exists.`);

        let actionInfo = this._actions[actionName];
        if (actionInfo.type === 'w') {
            throw new Error('Test');
        }

        return await this._actions[actionName]['fn'](actionArgs);
    }

    setA(actionName, actionFn)
    {
        this.setAction(actionName, actionFn);
    }

    setAction(actionName, actionFn)
    {
        js0.args(arguments, 'string', 'function');

        if (actionName in this._actions)
            throw new Error(`Action '${actionName}' already exists.`);

        this._actions[actionName] = {
            fn: actionFn,
        };
    }

}
module.exports = Request;