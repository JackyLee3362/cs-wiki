# 6.5 万维网 WWW

## WWW 的概念与组成结构

- 统一资源定位符 URL（区别统一资源标识符 URI）
- 超文本传输协议 HTTP
- 超文本标记语言 HTML

## 超文本传输协议（HTTP）

- HTTP 使用 TCP 作为传输层协议，保证了数据的可靠传输。但是，HTTP 本身是无连接的

## 习题

### 2 从协议分析角度，WWW 服务的第一步操作是浏览器对服务器的

A 请求地址解析
B 传输连接建立
C 请求域名解析
D 会话连接建立 →C

### 7 仅需 Web 服务器对 HTTP 报文进行响应，但不需要返回请求对象时，HTTP 请求报文应该使用的方法是

A GET
B PUT
C POST
D HEAD→D HEAD

### 9 「Cookie 存储在服务器端」→ 错误

### 10

### 11 【2014】使用浏览器访问某大学的 Web 网站主页时，不可能用到的协议是

A PPP
B ARP
C UDP
D SMTP→SMTP

### 12 【2015】某浏览器发出的 HTTP 请求报文如下

```
GET /index.html HTTP1.1
HOST: www.test.edu.cn
Connection: Close
Cookie: 123456
```

A 该浏览器请求浏览 index.html
B index.html 存放在www.test.edu.cn上
C 该浏览器请求使用持续连接
D 该浏览器曾经浏览过www.test.edu.cn→C

- 综合题 4【2011】 没做，看起来综合性很高
