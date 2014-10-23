/**
 *
 * main
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-23
 * @update 2014-10-23
 */

(function() {
  var $ = {
    findOne : function (str) {
      return document.querySelector(str);
    },
    findAll : function (str) {
      return document.querySelectorAll(str);
    }
  };

  $.findOne('#add').onclick = function () {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td><input type="text"></td><td><input type="text"></td><td><input type="password"></td>';

    $.findOne('#table').appendChild(tr);
  };

  var result = [];

  $.findOne('#generate').onclick = function () {
    var list = $.findAll('#table tr');

    for(var i = 0; i < list.length; i++) {

      var subList = list[i].children;
      var element = {};

      for(var j = 0; j < subList.length; j++) {
        var temp = subList[j].children[0].value;

        switch (j) {
          case 0: element.name = temp; break;
          case 1: element.account = temp; break;
          case 2: element.password = temp; break;
        }
      }

      result.push(element);
    }

    $.findOne('#result').innerHTML = window.btoa(JSON.stringify(result));
  };

})();