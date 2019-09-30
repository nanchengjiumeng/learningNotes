# 小马 nodejs 入门

[youtube link](https://www.youtube.com/watch?v=Vp_iIft0XNI&list=PLliocbKHJNwvbitOJ73M04PUoJae79kEg)

## situation

服务端有一组数据，需要获得数据并根据相应的数据生成 html，方便 SEO 检索。

## task

创建一个 server 服务，可以根据 url，在服务端进行 http 请求其它服务器数据后，渲染页面。

## action

1. 创建 node server。
2. 分析 url, 拿到 search 对象。
3. 引入 ejs。
4. fs 读取 ejs。
5. 请求数据列表。
6. 将数据渲染到到 html 文件夹，生成.html 文件。

## result

已根据数据生成 html.

## 术语概念

1. 什么是 nodejs?

   Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境即`runtime`。

   Node.js 使用了一个`事件驱动、非阻塞式 I/O`的模型，使其轻量又高效。

2. 线程模型和事件循环。

   线程模型：java、php、c#等主要实现模型。入 tomcat，每次收到请求后开辟一个线程去处理。

   事件循环：服务程序单线程运行，循环事件，当收到请求时，将请求作为参数传送到接受函数中，将函数压栈后被处理循环回调。
