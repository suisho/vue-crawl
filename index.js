
//exports.install = function(Vue, options){
  var textDirective = Vue.require("directives").text
  Vue.directive("extext", {
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
//}

$(document).on("pjax:beforeReplace", function(content){
  $(content).hide()
}).on("pjax:success", function(){
  // show animation
})