---
title: Spring MVC REST Case
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## REST Case

#### 5.4.1 需求分析

需求一:图片列表查询，从后台返回数据，将数据展示在页面上

![1630508310063](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019000.png)

需求二:新增图片，将新增图书的数据传递到后台，并在控制台打印

![1630508367105](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019001.png)

**说明:**此次案例的重点是在 SpringMVC 中如何使用 RESTful 实现前后台交互，所以本案例并没有和数据库进行交互，所有数据使用`假`数据来完成开发。

步骤分析:

> 1.搭建项目导入 jar 包
>
> 2.编写 Controller 类，提供两个方法，一个用来做列表查询，一个用来做新增
>
> 3.在方法上使用 RESTful 进行路径设置
>
> 4.完成请求、参数的接收和结果的响应
>
> 5.使用 PostMan 进行测试
>
> 6.将前端页面拷贝到项目中
>
> 7.页面发送 ajax 请求
>
> 8.完成页面数据的展示

#### 5.4.2 环境准备

- 创建一个 Web 的 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itheima</groupId>
    <artifactId>springmvc_07_rest_case</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
      <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.1.0</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.2.10.RELEASE</version>
      </dependency>
      <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.9.0</version>
      </dependency>
    </dependencies>

    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.tomcat.maven</groupId>
          <artifactId>tomcat7-maven-plugin</artifactId>
          <version>2.1</version>
          <configuration>
            <port>80</port>
            <path>/</path>
          </configuration>
        </plugin>
      </plugins>
    </build>
  </project>

  ```

- 创建对应的配置类

  ```java
  public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
      protected Class<?>[] getRootConfigClasses() {
          return new Class[0];
      }

      protected Class<?>[] getServletConfigClasses() {
          return new Class[]{SpringMvcConfig.class};
      }

      protected String[] getServletMappings() {
          return new String[]{"/"};
      }

      //乱码处理
      @Override
      protected Filter[] getServletFilters() {
          CharacterEncodingFilter filter = new CharacterEncodingFilter();
          filter.setEncoding("UTF-8");
          return new Filter[]{filter};
      }
  }

  @Configuration
  @ComponentScan("com.itheima.controller")
  //开启json数据类型自动转换
  @EnableWebMvc
  public class SpringMvcConfig {
  }


  ```

- 编写模型类 Book

  ```java
  public class Book {
      private Integer id;
      private String type;
      private String name;
      private String description;
      //setter...getter...toString略
  }
  ```

- 编写 BookController

  ```java
  @Controller
  public class BookController {


  }
  ```

最终创建好的项目结构如下:

![1630508864017](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019002.png)

#### 5.4.2 后台接口开发

##### 步骤 1:编写 Controller 类并使用 RESTful 进行配置

```java
@RestController
@RequestMapping("/books")
public class BookController {

    @PostMapping
    public String save(@RequestBody Book book){
        System.out.println("book save ==> "+ book);
        return "{'module':'book save success'}";
    }

 	@GetMapping
    public List<Book> getAll(){
        System.out.println("book getAll is running ...");
        List<Book> bookList = new ArrayList<Book>();

        Book book1 = new Book();
        book1.setType("计算机");
        book1.setName("SpringMVC入门教程");
        book1.setDescription("小试牛刀");
        bookList.add(book1);

        Book book2 = new Book();
        book2.setType("计算机");
        book2.setName("SpringMVC实战教程");
        book2.setDescription("一代宗师");
        bookList.add(book2);

        Book book3 = new Book();
        book3.setType("计算机丛书");
        book3.setName("SpringMVC实战教程进阶");
        book3.setDescription("一代宗师呕心创作");
        bookList.add(book3);

        return bookList;
    }

}
```

##### 步骤 2：使用 PostMan 进行测试

测试新增

```json
{
  "type": "计算机丛书",
  "name": "SpringMVC终极开发",
  "description": "这是一本好书"
}
```

![1630509266954](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019003.png)

测试查询

![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019004.png)

#### 5.4.3 页面访问处理

##### 步骤 1:拷贝静态页面

将`资料\功能页面`下的所有内容拷贝到项目的`webapp`目录下

![1630510166433](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019005.png)

##### 步骤 2:访问 pages 目录下的 books.html

打开浏览器输入`http://localhost/pages/books.html`

![1630510225182](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019006.png)

(1)出现错误的原因?

![1630510264650](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019007.png)

SpringMVC 拦截了静态资源，根据/pages/books.html 去 controller 找对应的方法，找不到所以会报 404 的错误。

(2)SpringMVC 为什么会拦截静态资源呢?

![1630510397429](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019008.png)

(3)解决方案?

- SpringMVC 需要将静态资源进行放行。

```java
@Configuration
public class SpringMvcSupport extends WebMvcConfigurationSupport {
    //设置静态资源访问过滤，当前类需要设置为配置类，并被扫描加载
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        //当访问/pages/????时候，从/pages目录下查找内容
        registry.addResourceHandler("/pages/**").addResourceLocations("/pages/");
        registry.addResourceHandler("/js/**").addResourceLocations("/js/");
        registry.addResourceHandler("/css/**").addResourceLocations("/css/");
        registry.addResourceHandler("/plugins/**").addResourceLocations("/plugins/");
    }
}

```

- 该配置类是在 config 目录下，SpringMVC 扫描的是 controller 包，所以该配置类还未生效，要想生效需要将 SpringMvcConfig 配置类进行修改

```java
@Configuration
@ComponentScan({"com.itheima.controller","com.itheima.config"})
@EnableWebMvc
public class SpringMvcConfig {
}

或者

@Configuration
@ComponentScan("com.itheima")
@EnableWebMvc
public class SpringMvcConfig {
}
```

##### 步骤 3:修改 books.html 页面

```html
<!DOCTYPE html>

<html>
  <head>
    <!-- 页面meta -->
    <meta charset="utf-8" />
    <title>SpringMVC案例</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="../plugins/elementui/index.css" />
    <link
      rel="stylesheet"
      href="../plugins/font-awesome/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="../css/style.css" />
  </head>

  <body class="hold-transition">
    <div id="app">
      <div class="content-header">
        <h1>图书管理</h1>
      </div>

      <div class="app-container">
        <div class="box">
          <div class="filter-container">
            <el-input
              placeholder="图书名称"
              style="width: 200px;"
              class="filter-item"
            ></el-input>
            <el-button class="dalfBut">查询</el-button>
            <el-button type="primary" class="butT" @click="openSave()"
              >新建</el-button
            >
          </div>

          <el-table
            size="small"
            current-row-key="id"
            :data="dataList"
            stripe
            highlight-current-row
          >
            <el-table-column
              type="index"
              align="center"
              label="序号"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="图书类别"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="图书名称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="description"
              label="描述"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="pagination-container">
            <el-pagination
              class="pagiantion"
              @current-change="handleCurrentChange"
              :current-page="pagination.currentPage"
              :page-size="pagination.pageSize"
              layout="total, prev, pager, next, jumper"
              :total="pagination.total"
            >
            </el-pagination>
          </div>

          <!-- 新增标签弹层 -->
          <div class="add-form">
            <el-dialog title="新增图书" :visible.sync="dialogFormVisible">
              <el-form
                ref="dataAddForm"
                :model="formData"
                :rules="rules"
                label-position="right"
                label-width="100px"
              >
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="图书类别" prop="type">
                      <el-input v-model="formData.type" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="图书名称" prop="name">
                      <el-input v-model="formData.name" />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="描述">
                      <el-input
                        v-model="formData.description"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveBook()">确定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </body>

  <!-- 引入组件库 -->
  <script src="../js/vue.js"></script>
  <script src="../plugins/elementui/index.js"></script>
  <script type="text/javascript" src="../js/jquery.min.js"></script>
  <script src="../js/axios-0.18.0.js"></script>

  <script>
    var vue = new Vue({
      el: "#app",

      data: {
        dataList: [], //当前页要展示的分页列表数据
        formData: {}, //表单数据
        dialogFormVisible: false, //增加表单是否可见
        dialogFormVisible4Edit: false, //编辑表单是否可见
        pagination: {}, //分页模型数据，暂时弃用
      },

      //钩子函数，VUE对象初始化完成后自动执行
      created() {
        this.getAll();
      },

      methods: {
        // 重置表单
        resetForm() {
          //清空输入框
          this.formData = {};
        },

        // 弹出添加窗口
        openSave() {
          this.dialogFormVisible = true;
          this.resetForm();
        },

        //添加
        saveBook() {
          axios.post("/books", this.formData).then((res) => {});
        },

        //主页列表查询
        getAll() {
          axios.get("/books").then((res) => {
            this.dataList = res.data;
          });
        },
      },
    });
  </script>
</html>
```
