### Code snippet

#### Proxy
```javascript
$( "button" ).on( "click", function () {

    setTimeout( $.proxy( function () {
        // "this" 现在关联了我们想要的元素
        $( this ).addClass( "active" ); 
    }, this), 500);

    // 最后的参数'this'代表了我们的dom元素并且传递给了$.proxy()方法
});
```

#### Object.defineProperty

```javascript
Object.defineProperty(newObject, "someKey", {
	value: "for more control of the property's behavior",
	writable: true,
	enumerable: true,
	configurable: true
});
```

#### jQuery plugin

写法
```javascript
(function( $ ){
  $.fn.myPluginName = function () {
    // our plugin logic
  };
})( jQuery );
```
```javascript
(function( $ ){
    $.extend($.fn, {
        myplugin: function(){
            // your plugin logic
        }
    });
})( jQuery );
```
jQuery lightweight plugin
```javascript
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in our plugin).

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
```

Clean
```javascript
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */
 
;(function ( $, window, document, undefined ) {

    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
    	
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
```

jQuery widget
```javascript
/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    // define our widget under a namespace of your choice
    // with additional parameters e.g.
    // $.widget( "namespace.widgetname", (optional) - an
    // existing widget prototype to inherit from, an object
    // literal to become the widget's prototype );

    $.widget( "namespace.widgetname" , {

        //Options to be used as defaults
        options: {
            someValue: null
        },

        //Setup widget (e.g. element creation, apply theming
        // , bind events etc.)
        _create: function () {

            // _create will automatically run the first time
            // this widget is called. Put the initial widget
            // setup code here, then we can access the element
            // on which the widget was called via this.element.
            // The options defined above can be accessed
            // via this.options this.element.addStuff();
        },

        // Destroy an instantiated plugin and clean up
        // modifications the widget has made to the DOM
        destroy: function () {

            // this.element.removeStuff();
            // For UI 1.8, destroy must be invoked from the
            // base widget
            $.Widget.prototype.destroy.call( this );
            // For UI 1.9, define _destroy instead and don't
            // worry about
            // calling the base widget
        },

        methodB: function ( event ) {
            //_trigger dispatches callbacks the plugin user
            // can subscribe to
            // signature: _trigger( "callbackName" , [eventObject],
            // [uiObject] )
            // e.g. this._trigger( "hover", e /*where e.type ==
            // "mouseenter"*/, { hovered: $(e.target)});
            this._trigger( "methodA", event, {
                key: value
            });
        },

        methodA: function ( event ) {
            this._trigger( "dataChanged", event, {
                key: value
            });
        },

        // Respond to any changes the user makes to the
        // option method
        _setOption: function ( key, value ) {
            switch ( key ) {
            case "someValue":
                // this.options.someValue = doSomethingWith( value );
                break;
            default:
                // this.options[ key ] = value;
                break;
            }

            // For UI 1.8, _setOption must be manually invoked
            // from the base widget
            $.Widget.prototype._setOption.apply( this, arguments );
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        }
    });

})( jQuery, window, document );
```

Clean jQuery widget
```javascript
/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {
    $.widget( "namespace.widgetname" , {

        //Options to be used as defaults
        options: {
            someValue: null
        },

        _create: function () {

        },

        destroy: function () {

            $.Widget.prototype.destroy.call( this );
        },

        methodB: function ( event ) {
            this._trigger( "methodA", event, {
                key: value
            });
        },

        methodA: function ( event ) {
            this._trigger( "dataChanged", event, {
                key: value
            });
        },

        // Respond to any changes the user makes to the
        // option method
        _setOption: function ( key, value ) {
            switch ( key ) {
            case "someValue":
                // this.options.someValue = doSomethingWith( value );
                break;
            default:
                // this.options[ key ] = value;
                break;
            }

            $.Widget.prototype._setOption.apply( this, arguments );
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        }
    });

})( jQuery, window, document );
```
### lazy load
```javascript
// <script>
    // 获取所有的图片标签
    const imgs = document.getElementsByTagName('img')
    // 获取可视区域的高度
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
    let num = 0
    function lazyload(){
        for(let i=num; i<imgs.length; i++) {
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0 ){
                // 给元素写入真实的src，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
                num = i + 1
            }
        }
    }
    // 监听Scroll事件
    window.addEventListener('scroll', lazyload, false);
// </script>
```

### JS delegate event
```javascript
document.getElementById("myDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
	// matches: IE9+, https://caniuse.com/#search=matches
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
	}
});
```

### PoW（Proof of Work）