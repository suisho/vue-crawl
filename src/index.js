'use strict'

exports.install = function(Vue, options){
  var textDirective = Vue.require("directives").text
  Vue.directive("crawl-text", {
    bind : function(){
      var attr = this.el.nodeType === 3
          ? 'nodeValue'
          : 'textContent'
      var val = this.vm.$data[this.key] 
      
      if(val === undefined){
      }else{
        val = [val]
      }
      this.vm.$data[this.key] = this.el[attr]
    },
    update : function(value){
      textDirective.update(value)
    }
  })
}