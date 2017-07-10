/**
 * Created by ym on 2017/7/10.
 */
import objectAssign from "object-assign"

const mergeOptions = function ($vm, options) {
    const defaults = {};
    for( let key in $vm.$options.props ){
        if ( key != 'value'){
            defaults[key] = $vm.$options.props[key].default
        }
    }
    const _options = objectAssign({}, defaults, options)
    for( let key in _options){
        $vm[key] = _options[key]
    }
}

export {
    mergeOptions
}