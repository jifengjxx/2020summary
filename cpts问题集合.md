 
Flash提供了ExternalInterface接口与JavaScript通信，ExternalInterface有两个方法，call和addCallback： 
ExternalInterface.addCallback("在js里可调用的flash方法名",flash内方法) //在flash中通过这个方法公开 在js中可调用的flash内的方法;
ExternalInterface.call("js方法",传给js的参数) //在flash里调用js里的方法

exec() 方法是一个正则表达式方法。
exec() 方法用于检索字符串中的正则表达式的匹配。
该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
本题的exec执行结果是一个数组，但是使用了document.write，所以显示在html中的内容是数组中的元素，即e
js还有一个test()方法，用于检测字符串是否匹配某个模式，返回值为boolean


scope: true和transclude: true会创建新的子作用域，并且进行原型继承；
  scope: {...} 会创建新的独立作用域，不会进行原型继承;
 默认情况下创建directive使用了scope: false，不会创建子作用域.
 
 
 contents() 方法获得匹配元素集合中每个元素的子节点，包括文本和注释节点。 find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。 
 html() 方法返回或设置被选元素的内容 (inner HTML)。 children() 方法返回匹配元素集合中每个元素的子元素，添加可选参数可通过选择器进行过滤。
 
 基本数据类型（原始数据类型）：Number,String, Null, Undefined,  Boolean，Symbol（es6新增）
 引用数据类型：Object，Function
 JS数据类型：JS 的数据类型有几种？ 
      8种。Number、String、Boolean、Null、undefined、object、symbol、bigInt。 
 JS数据类型：Object 中包含了哪几种类型？
       其中包含了Data、function、Array等。这三种是常规用的。
 JS数据类型：JS的基本类型和引用类型有哪些呢？
     基本类型（单类型）：除Object。 String、Number、boolean、null、undefined。
     引用类型：object。里面包含的 function、Array、Date。 
  js 规定的NaN 不等于NaN。
  
  
  js数组与字符串的相互转换方法
  var a, b;
  a = new Array(0,1,2,3,4);
  b = a.join("-");      //"0-1-2-3-4"
  var s = "abc,abcd,aaa";
  ss = s.split(",");// 在每个逗号(,)处进行分解  ["abc", "abcd", "aaa"]
  var s1 = "helloworld";
  ss1 = s1.split('');  //["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
  
  
  创建 Array 对象的语法：
  new Array();
  new Array(size);
  new Array(element0, element1, ..., elementn);
  
  运算中，+号，数字隐式转换成字符串。其余的运算符号是字符串隐式转换成数字。
  
  
  第一个：let将i绑定到for循环快中，事实上它将其重新绑定到循环体的每一次迭代中，确保上一次迭代结束的值重新被赋值。setTimeout里面的function()属于一个新的域，
  通过 var 定义的变量是无法传入到这个函数执行域中的，通过使用 let 来声明块变量，这时候变量就能作用于这个块，所以 function就能使用 i 这个变量了；输出为0,1.
  第二个：settimeout是异步执行，1s后往异步任务队列里面添加一个任务，只有同步的全部执行完，才会执行异步任务队列里的任务，当主线执行完成后，i是2，
  所以此时再去执行任务队列里的任务时，所以输出两次2.
  
  
  <track> 标签为诸如 video 元素之类的媒介规定外部文本轨道。
  用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。
  
  块级元素： div、p、h1-h6、form、ul、ol、dl、dt、dd、li、table、tr、td、th、hr 行内元素： span、img、a、
  label、code、input、abbr、em、b、big、cite、i、q、textarea、select、small、sub、sup，strong、u
  
  网页html文档支持的图片格式有jpg     ,    gif   ,    png   和   bmp   这四种，jpg ， gif   和   png 格式的图片特点是体积很小，因为在网上很常见，
  然而 bmp就不常见了，因为这种格式虽然很清晰色彩丰富，但是所占内存很大，所以很少见，但是也是支持的。一共这4种。
  
  超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了，解决方法是改变CSS属性的排列顺序？
  Link,visited,hover,active.
   L o v e h a t e  爱与恨
   为了符合浏览器解析CSS所遵循的就近原则，将一般的放在上面，将特殊的放在下面。
   a:link; a:visited; a:hover; a:active;
   a:hover必须放在a:link和a:visited之后；
   a:active必须放在a:hover之后
   
   如果JanaScript是外部脚本，不是嵌入脚本，放在head里，会在页面加载之时就被执行，也就是文件要被下载，执行之后才会呈现页面内容；放在body底部，在解析js代码之前，页面的内容就会完全呈现在浏览器中。   所以，在body里的js应该是在页面加载之后执行的吧。
   之所以把js放在body之后，是为了预防外部js文件过多时，浏览器呈现页面出现延迟，延迟期间浏览器的窗口一片空白。
   head部分中的JavaScripts会在被调用的时候才执行。
   body部分中的JavaScripts会在页面加载的时候被执行。
   
   回流是页面结构变化（元素大小，定位），所以是整体刷新；重绘是某些元素外观风格（颜色等）变化，不影响整体布局结构，只需要局部刷新。
   
   为了解决AngularJS性能问题，编译阶段应分为两个阶段
   1,compile (绑定DOM)   
   2,link（数据绑定）
   
   只要 协议 、 域名 、 端口 有任何一个 不同, 都被当作是 不同 的域。
   
    
   
   1.CORS
   CORS（Corss-Origin Resource Sharing,跨资源共享），基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的Origin头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
   2.document.domain
   将页面的document.domain设置为相同的值，页面间可以互相访问对方的JavaScript对象。
   注意：
   不能将值设置为URL中不包含的域；
   松散的域名不能再设置为紧绷的域名。
   3.图像Ping
   var img=new Image();
   img.onload=img.onerror=function(){
   ... ...
   }
   img.src="url?name=value";
   请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或204响应。
   图像Ping最常用于跟踪用户点击页面或动态广告曝光次数。
   缺点：
   只能发送GET请求；
   无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
   4.Jsonp
   6.WebSocket
   
   1、DOM0级事件
   就是直接通过 onclick 等方式实现相应的事件
   这说明 DOM0 级添加事件时，后面的事件会覆盖前面的事件，而 DOM2级则不会，多个事件都会执行；
   
   另外，DOM0级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行
   
   2、DOM1级事件
   因为DOM 1一般只有设计规范没有具体实现,所以一般跳过
   
   3、DOM2级事件
   主流浏览器 DOM2 级事件是通过以下两个方法用于处理指定和删除事件处理程序的操作
   只有DOM2事件流包括三个阶段：
   事件捕获阶段
   
   处于目标阶段
   
   事件冒泡阶段
   
   
   静态语言（强类型语言）
   静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
   例如：C++、Java、Delphi、C#等。
   
   动态语言（弱类型语言）
   动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 
   例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等
   
   
   a) 置换元素：浏览器根据元素的标签和属性，来决定元素的具体显示内容。 
   例如：浏览器会根据<img>标签的src属性的 值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；<input>标签的type属性来决定是显示输入 框，还是单选按钮等。
	(x)html中 的<img>、<input>、<textarea>、<select>、<object> 都是置换元素。这些元素往往没有实际的内容，即是一个空元素。
   
   置换元素在其显示中生成了框，这也就是有的内联元素能够设置宽高的原因。
   b) 不可替换元素：(x)html 的大多数元素是不可替换元素，即其内容直接表现给用户端（如浏览器）。
   例如： <label>label中的内容</label> 标签<label>是一个非置换元素，文字label中的内容”将全被显示。
   
   
   document.getElementById();
   document.getElementsByTagName();
   document.getElementsByName();
   document.getElementsByClassName();
   
   除了ById是Element，其余都是Elements
   
   
   升序排序return a-b，降序排序return b-a。
   
   
   iframe可用在以下几个场景中：
   1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 
   2：ajax上传文件。 
   3：加载别的网站内容，例如google广告，网站流量分析。
   4： 在上传图片时，不用flash实现无刷新。
   5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。
   
    this的值要等到代码真正执行时才能确定
	
	
	同时this的值具体有以下几种情况：
	new 调用时指的是被构造的对象
	call、apply调用，指向我们指定的对象
	对象调用，如执行obj.b()，this指向obj
	默认的，指向全局变量window(相当于执行window.fun())
	
	
	JavaScript实现继承共6种方式：
	原型链继承、借用构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合式继承。