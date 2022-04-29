# 一个开发记录，仅供个人使用
1. 设计原型
2. html+css实现页面布局
3. 开始写功能
   1. 实现搜索功能
   2. 网站列表的增删
      1. 增：首先是js创建新卡片添加上去，然后是得把这个卡片保留
      下来，不然网页一刷新就没了，使用一个数组储存哈希表的形式进行保存
      2. 删：只是删除哈希表中的值，删除后重新渲染就可以实现删除效果
---
## 实现过程
**描述**：给用户一个输入界面，输入想要收藏的网址，然后出现一个新的网址卡片，
点击这个卡片就跳转到相关网页。然后要让界面记住添加的网页。
使用一个数组来进行链接卡片储存， 渲染的时候去数组读数据就可以,
核心思想就是渲染存放数据的哈希表。

在渲染hash表的过程中又有一个问题，存入数据后哈希表会变大，
所以每次渲染都是把之前渲染过的重新渲染了一遍，
这个时候需要在渲染之前把上次渲染的效果清空（虽然有点丑但是能实现效果）

到这一步，就可以正常渲染了。但是刷新界面之前保存的会消失，这是因为只是把数据存在数组里，网页一刷新就没了。

想要让他不消失可以在页面刷新前把哈希表存在localstorage里面,然后让哈希表从localstorage去读就可以了。

到上面这步已经基本完成了，接下来继续完善。
删除卡片，其实就是从哈希数组中删除，然后重新渲染，注意这里要阻止冒泡事件。

之后使用媒体查询搞定pc端和手机端的页面排版。

然后加上一个更加方便的键盘事件（这里如果网站开头字母一样
，比如说两个b开头的，会把两个窗口一起弹出来，这个可以继续优化）



**技术点：**
* [window.prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)
* [indexOf方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
* [js模版字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)
* [hashmap](https://zhuanlan.zhihu.com/p/78079598)
* [forEach方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [onbeforeunload事件](https://developer.mozilla.org/zh-CN/docs/conflicting/web/api/window/beforeunload_event)
* [localstorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 注意localstorage只能以字符串形式去存
* [JSON.stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [JSON.parse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* [30分钟入门正则表达式](https://deerchao.cn/tutorials/regex/regex.htm)
* [媒体查询](https://developer.mozilla.org/zh-CN/docs/web/css/media_queries/using_media_queries)
* [flex布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)