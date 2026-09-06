---
title: Network Programming Exercises
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Network Programming Exercises

### 练习一：多发多收

需求：

​	客户端：多次发送数据

​	服务器：接收多次接收数据，并打印

代码示例：

```java
public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：多次发送数据
        //服务器：接收多次接收数据，并打印

        //1. 创建Socket对象并连接服务端
        Socket socket = new Socket("127.0.0.1",10000);

        //2.写出数据
        Scanner sc = new Scanner(System.in);
        OutputStream os = socket.getOutputStream();

        while (true) {
            System.out.println("请输入您要发送的信息");
            String str = sc.nextLine();
            if("886".equals(str)){
                break;
            }
            os.write(str.getBytes());
        }
        //3.释放资源
        socket.close();
    }
}
```

```java
public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：多次发送数据
        //服务器：接收多次接收数据，并打印

        //1.创建对象绑定10000端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据
        InputStreamReader isr = new InputStreamReader(socket.getInputStream());
        int b;
        while ((b = isr.read()) != -1){
            System.out.print((char)b);
        }

        //4.释放资源
        socket.close();
        ss.close();
    }
}
```



### 练习二：接收并反馈

- 案例需求

  客户端：发送数据，接受服务器反馈

  服务器：收到消息后给出反馈

- 案例分析

  - 客户端创建对象，使用输出流输出数据
  - 服务端创建对象，使用输入流接受数据
  - 服务端使用输出流给出反馈数据
  - 客户端使用输入流接受反馈数据

- 代码实现

  ```java
  // 客户端
  public class ClientDemo {
      public static void main(String[] args) throws IOException {
          Socket socket = new Socket("127.0.0.1",10000);
  
          OutputStream os = socket.getOutputStream();
          os.write("hello".getBytes());
         // os.close();如果在这里关流,会导致整个socket都无法使用
          socket.shutdownOutput();//仅仅关闭输出流.并写一个结束标记,对socket没有任何影响
          
          BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
          String line;
          while((line = br.readLine())!=null){
              System.out.println(line);
          }
          br.close();
          os.close();
          socket.close();
      }
  }
  // 服务器
  public class ServerDemo {
      public static void main(String[] args) throws IOException {
          ServerSocket ss = new ServerSocket(10000);
  
          Socket accept = ss.accept();
  
          InputStream is = accept.getInputStream();
          int b;
          while((b = is.read())!=-1){
              System.out.println((char) b);
          }
  
          System.out.println("看看我执行了吗?");
  
          BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(accept.getOutputStream()));
          bw.write("你谁啊?");
          bw.newLine();
          bw.flush();
  
          bw.close();
          is.close();
          accept.close();
          ss.close();
      }
  }
  ```

### 练习三：上传练习（TCP协议）

- 案例需求

  客户端：数据来自于本地文件，接收服务器反馈

  服务器：接收到的数据写入本地文件，给出反馈

- 案例分析

  - 创建客户端对象，创建输入流对象指向文件，每读一次数据就给服务器输出一次数据，输出结束后使用shutdownOutput()方法告知服务端传输结束
  - 创建服务器对象，创建输出流对象指向文件，每接受一次数据就使用输出流输出到文件中，传输结束后。使用输出流给客户端反馈信息
  - 客户端接受服务端的回馈信息

- 相关方法

  | 方法名                | 说明                               |
  | --------------------- | ---------------------------------- |
  | void shutdownInput()  | 将此套接字的输入流放置在“流的末尾” |
  | void shutdownOutput() | 禁止用此套接字的输出流             |

- 代码实现

  ```java
  public class Client {
      public static void main(String[] args) throws IOException {
          //客户端：将本地文件上传到服务器。接收服务器的反馈。
          //服务器：接收客户端上传的文件，上传完毕之后给出反馈。
  
  
          //1. 创建Socket对象，并连接服务器
          Socket socket = new Socket("127.0.0.1",10000);
  
          //2.读取本地文件中的数据，并写到服务器当中
          BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
          BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
          byte[] bytes = new byte[1024];
          int len;
          while ((len = bis.read(bytes)) != -1){
              bos.write(bytes,0,len);
          }
  
          //往服务器写出结束标记
          socket.shutdownOutput();
  
  
          //3.接收服务器的回写数据
          BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
          String line = br.readLine();
          System.out.println(line);
  
  
          //4.释放资源
          socket.close();
  
      }
  }
  ```

  ```java
  public class Server {
      public static void main(String[] args) throws IOException {
          //客户端：将本地文件上传到服务器。接收服务器的反馈。
          //服务器：接收客户端上传的文件，上传完毕之后给出反馈。
  
  
          //1.创建对象并绑定端口
          ServerSocket ss = new ServerSocket(10000);
  
          //2.等待客户端来连接
          Socket socket = ss.accept();
  
          //3.读取数据并保存到本地文件中
          BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
          BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\a.jpg"));
          int len;
          byte[] bytes = new byte[1024];
          while ((len = bis.read(bytes)) != -1){
              bos.write(bytes,0,len);
          }
          bos.close();
          //4.回写数据
          BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
          bw.write("上传成功");
          bw.newLine();
          bw.flush();
  
          //5.释放资源
          socket.close();
          ss.close();
      }
  }
  ```

### 练习四：文件名重复

     ```java
public class UUIDTest {
    public static void main(String[] args) {
        String str = UUID.randomUUID().toString().replace("-", "");
        System.out.println(str);//9f15b8c356c54f55bfcb0ee3023fce8a
    }
}
     ```

```java
public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();


        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);


        //4.释放资源
        socket.close();

    }
}
```

```java
public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据并保存到本地文件中
        BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
        String name = UUID.randomUUID().toString().replace("-", "");
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));
        int len;
        byte[] bytes = new byte[1024];
        while ((len = bis.read(bytes)) != -1) {
            bos.write(bytes, 0, len);
        }
        bos.close();
        //4.回写数据
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        bw.write("上传成功");
        bw.newLine();
        bw.flush();

        //5.释放资源
        socket.close();
        ss.close();
    }
}
```

### 练习五：服务器改写为多线程

服务器只能处理一个客户端请求，接收完一个图片之后，服务器就关闭了。

优化方案一：

​	使用循环

弊端：

​	第一个用户正在上传数据，第二个用户就来访问了，此时第二个用户是无法成功上传的。

​	所以，使用多线程改进

优化方案二：

​	每来一个用户，就开启多线程处理

```java
public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();


        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);


        //4.释放资源
        socket.close();

    }
}
```

```java
public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        while (true) {
            //2.等待客户端来连接
            Socket socket = ss.accept();

            //开启一条线程
            //一个用户就对应服务端的一条线程
            new Thread(new MyRunnable(socket)).start();
        }

    }
}


public class MyRunnable implements Runnable{

    Socket socket;

    public MyRunnable(Socket socket){
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            //3.读取数据并保存到本地文件中
            BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
            String name = UUID.randomUUID().toString().replace("-", "");
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));
            int len;
            byte[] bytes = new byte[1024];
            while ((len = bis.read(bytes)) != -1) {
                bos.write(bytes, 0, len);
            }
            bos.close();
            //4.回写数据
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            bw.write("上传成功");
            bw.newLine();
            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //5.释放资源
           if(socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
        }
    }
}
```

### 练习六：线程池改进

```java
public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();


        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);


        //4.释放资源
        socket.close();

    }
}
```

```java
public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //创建线程池对象
        ThreadPoolExecutor pool = new ThreadPoolExecutor(
                3,//核心线程数量
                16,//线程池总大小
                60,//空闲时间
                TimeUnit.SECONDS,//空闲时间（单位）
                new ArrayBlockingQueue<>(2),//队列
                Executors.defaultThreadFactory(),//线程工厂，让线程池如何创建线程对象
                new ThreadPoolExecutor.AbortPolicy()//阻塞队列
        );



        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        while (true) {
            //2.等待客户端来连接
            Socket socket = ss.accept();

            //开启一条线程
            //一个用户就对应服务端的一条线程
            //new Thread(new MyRunnable(socket)).start();
            pool.submit(new MyRunnable(socket));
        }

    }
}
```

```java
public class MyRunnable implements Runnable{

    Socket socket;

    public MyRunnable(Socket socket){
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            //3.读取数据并保存到本地文件中
            BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
            String name = UUID.randomUUID().toString().replace("-", "");
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));
            int len;
            byte[] bytes = new byte[1024];
            while ((len = bis.read(bytes)) != -1) {
                bos.write(bytes, 0, len);
            }
            bos.close();
            //4.回写数据
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            bw.write("上传成功");
            bw.newLine();
            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //5.释放资源
           if(socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
        }
    }
}
```
