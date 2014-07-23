'use strict'

exports.install = function(Vue, options){
  var textDirective = Vue.require("directives").text
  var htmlDirective = Vue.require("directives").html
  
  Vue.directive("crawl-text", {
    bind : function(){
      var attr = this.el.nodeType === 3
          ? 'nodeValue'
          : 'textContent'
      this.vm.$data[this.key] = this.el[attr]
    },
    update : function(value){
      textDirective.update.call(this, value)
    }
  })
  Vue.directive("crawl-html", {
    bind : function(){
      var val = this.el.innerHTML
      this.vm.$data[this.key] = val
    },
    update : function(value){
      return htmlDirective.update.call(this, value)
    }
  })
}