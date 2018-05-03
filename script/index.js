$(document).ready(function() {
    $("#panel-admin").css("display", "none");

    $('.open').click(function() {
        $("#panel-admin").animate({ width: 'toggle' }, 100);
    });

    if (!document.getElementById('wrapper').className && !localStorage.getItem("selectedColor")) {
        //console.log('in if');
        document.getElementById('wrapper').classList.add('blue');
    } else {
        //console.log('else');
        var colorClass = localStorage.getItem("selectedColor");
        document.getElementById('wrapper').classList.add(colorClass);
    }


    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

});


$(window).scroll(function() {

    if ($(this).scrollTop() > 50) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}

function mytheme(index) {
    switch (index) {
        case 0:
            changeColor('cyan');
            break;
        case 1:
            changeColor('orange');
            break;
        case 2:
            changeColor('lightgreen');
            break;
        case 3:
            changeColor('red');
            break;
        case 4:
            changeColor('green');
            break;
        case 5:
            changeColor('blue');
            break;
        default:
            changeColor('blue');
    }
    var selectedClass = document.getElementById('wrapper').className;
    localStorage.setItem("selectedColor", selectedClass);
}

function changeColor(color) {
    $('#wrapper').removeClass();
    $('#wrapper').addClass(color);
}
// window.onload = function() {
//   document.querySelector('body').className = 'loaded';
// };
// parallax
// var parallax
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//   relativeInput: true
// });
// parallaxInstance.friction(0.2, 0.2);


$(document).ready(function() {
    
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000);
    
});


!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}