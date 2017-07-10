/**
 * Created by ym on 2017/7/10.
 */

import ToastComponent from 'components/y-taost'
import { mergeOptions } from './pluginHelper'

let $vm

const plugin = {
    install(vue, options){
        const Toast = vue.extend(ToastComponent)
        if (!$vm){
            $vm = new Toast({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }
        
        const toast = {
            show(options){
                if( typeof options == 'string'){
                    $vm.content = options
                } else if ( typeof options == 'object'){
                    mergeOptions($vm, options)
                }
                
                this.watcher && this.watcher()
                if ( typeof options == 'object' && (options.onShow || options.onHide) ){
                    this.watcher = $vm.$watch('show', val=>{
                        val && options.onShow && options.onShow($vm)
                        val === false && options.onHide && options.onHide($vm)
                    })
                }
                
                if ($vm.show){
                    clearTimeout($vm.timeout)
                    $vm.timeout = setTimeout(()=>{
                        $vm =false
                    }, 1500)
                    $vm.transition = "no-transition";
                    $vm.show = false;
                    setTimeout(()=>{
                        $vm.transition = options.transition;
                        $vm.show = true;
                    }, 50)
                } else {
                    $vm.show = true;
                }
            },
            hide(){
                $vm.show = false
            }
        }

        if ( !vue.$myPlugin ){
            vue.$myPlugin = {
                toast
            }
        } else {
            vue.$myPlugin.toast = toast
        }

        vue.mixin({
            created(){
                this.$myPlugin = vue.$myPlugin
            }
        })
    }
}

export default plugin
export const install = plugin.install