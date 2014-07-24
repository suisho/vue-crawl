'use strict'

exports.install = function(Vue, options){
  var textDirective = Vue.require("directives").text
  var htmlDirective = Vue.require("directives").html
  
  // usage: crawlValue.call(this)
  var crawlValue = function(){
    var attr = this.el.nodeType === 3
        ? 'nodeValue'
        : 'textContent'
    this.vm.$data[this.key] = this.el[attr]
  }
  
  Vue.directive("crawl", {
    bind : function(){
      console.log("s")
      crawlValue.call(this)
    }
  })
  
  Vue.directive("crawl-text", {
    bind : function(){
      crawlValue.call(this)
    },
    update : function(value){
      textDirective.update.call(this, value)
    }
  })
  Vue.directive("crawl-html", {
    bind : function(){
      this.vm.$data[this.key] = this.el.innerHTML
    },
    update : function(value){
      htmlDirective.update.call(this, value)
    }
  })
}