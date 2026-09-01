---
title: xml
description:
date: 2025-09-27
update_date:
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 1 介绍

- 万维网联盟(W3C)

  万维网联盟(W3C)创建于 1994 年，又称 W3C 理事会。1994 年 10 月在麻省理工学院计算机科学实验室成立。
  建立者： Tim Berners-Lee (蒂姆·伯纳斯·李)。
  是 Web 技术领域最具权威和影响力的国际中立性技术标准机构。
  到目前为止，W3C 已发布了 200 多项影响深远的 Web 技术标准及实施指南，
  - 如广为业界采用的超文本标记语言 HTML（标准通用标记语言下的一个应用）、

  - 可扩展标记语言 XML（标准通用标记语言下的一个子集）

  - 以及帮助残障人士有效获得 Web 信息的无障碍指南（WCAG）等

    ![01_w3c概述](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292245867.png)

- xml 概述

  XML 的全称为(EXtensible Markup Language)，是一种可扩展的标记语言
  标记语言: 通过标签来描述数据的一门语言(标签有时我们也将其称之为元素)
  可扩展：标签的名字是可以自定义的,XML 文件是由很多标签组成的,而标签名是可以自定义的

- 作用
  - 用于进行存储数据和传输数据
  - 作为软件的配置文件

- 作为配置文件的优势
  - 可读性好
  - 可维护性高

## 3 语法规则【应用】

语法规则

- XML 文件的后缀名为：xml

- 文档声明必须是第一行第一列

  <?xml version=“1.0” encoding=“UTF-8” standalone=“yes”?>

  version：该属性是必须存在的
  encoding：该属性不是必须的

  打开当前 xml 文件的时候应该是使用什么字符编码表(一般取值都是 UTF-8)

  standalone: 该属性不是必须的，描述 XML 文件是否依赖其他的 xml 文件，取值为 yes/no

- 必须存在一个根标签，有且只能有一个

- XML 文件中可以存在以下特殊字符

  ```java
  &lt; < 小于
  &gt; > 大于
  &amp; & 和号
  &apos; ' 单引号
  &quot; " 引号
  ```

- XML 文件中可以存在 CDATA 区

  <![CDATA[ …内容… ]]>

## 4 xml 解析【应用】

- 概述

  xml 解析就是从 xml 中获取到数据

- 常见的解析思想

  DOM(Document Object Model)文档对象模型:就是把文档的各个组成部分看做成对应的对象。
  会把 xml 文件全部加载到内存,在内存中形成一个树形结构,再获取对应的值

  ![02_dom解析概述](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292245868.png)

- 常见的解析工具
  - JAXP: SUN 公司提供的一套 XML 的解析的 API
  - JDOM: 开源组织提供了一套 XML 的解析的 API-jdom
  - DOM4J: 开源组织提供了一套 XML 的解析的 API-dom4j,全称：Dom For Java
  - pull: 主要应用在 Android 手机端解析 XML

- 需求
  - 解析提供好的 xml 文件
  - 将解析到的数据封装到学生对象中
  - 并将学生对象存储到 ArrayList 集合中
  - 遍历集合

- 代码实现

```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!--注释的内容-->
  <!--本xml文件用来描述多个学生信息-->
  <students>

      <!--第一个学生信息-->
      <student id="1">
          <name>张三</name>
          <age>23</age>
      </student>

      <!--第二个学生信息-->
      <student id="2">
          <name>李四</name>
          <age>24</age>
      </student>

  </students>
```

```java
  /**
   * 利用dom4j解析xml文件
   */
  public class XmlParse {
      public static void main(String[] args) throws DocumentException {
          //1.获取一个解析器对象
          SAXReader saxReader = new SAXReader();
          //2.利用解析器把xml文件加载到内存中,并返回一个文档对象
          Document document = saxReader.read(new File("myxml\\xml\\student.xml"));
          //3.获取到根标签
          Element rootElement = document.getRootElement();
          //4.通过根标签来获取student标签
          //elements():可以获取调用者所有的子标签.会把这些子标签放到一个集合中返回.
          //elements("标签名"):可以获取调用者所有的指定的子标签,会把这些子标签放到一个集合中并返回
          //List list = rootElement.elements();
          List<Element> studentElements = rootElement.elements("student");
          //System.out.println(list.size());

          //用来装学生对象
          ArrayList<Student> list = new ArrayList<>();

          //5.遍历集合,得到每一个student标签
          for (Element element : studentElements) {
              //element依次表示每一个student标签

              //获取id这个属性
              Attribute attribute = element.attribute("id");
              //获取id的属性值
              String id = attribute.getValue();

              //获取name标签
              //element("标签名"):获取调用者指定的子标签
              Element nameElement = element.element("name");
              //获取这个标签的标签体内容
              String name = nameElement.getText();

              //获取age标签
              Element ageElement = element.element("age");
              //获取age标签的标签体内容
              String age = ageElement.getText();

              Student s = new Student(id,name,Integer.parseInt(age));
              list.add(s);
          }
          //遍历操作
          for (Student student : list) {
              System.out.println(student);
          }
      }
  }
```

## 5 DTD 约束【理解】

- 什么是约束

  用来限定 xml 文件中可使用的标签以及属性

- 约束的分类
  - DTD
  - schema

- 编写 DTD 约束
  - 步骤
    1. 创建一个文件，这个文件的后缀名为.dtd

    2. 看 xml 文件中使用了哪些元素

       <!ELEMENT> 可以定义元素

    3. 判断元素是简单元素还是复杂元素

       简单元素：没有子元素。
       复杂元素：有子元素的元素；

  - 代码实现

    ```java
    <!ELEMENT persons (person)>
    <!ELEMENT person (name,age)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT age (#PCDATA)>
    ```

- 引入 DTD 约束
  - 引入 DTD 约束的三种方法
    - 引入本地 dtd

      <!DOCTYPE 根元素名称 SYSTEM ‘DTD文件的路径'>

    - 在 xml 文件内部引入

      <!DOCTYPE 根元素名称 [ dtd文件内容 ]>

    - 引入网络 dtd

      <!DOCTYPE 根元素的名称 PUBLIC "DTD文件名称" "DTD文档的URL">

  - 代码实现
    - 引入本地 DTD 约束

      ```xml
      // 这是persondtd.dtd文件中的内容,已经提前写好
      <!ELEMENT persons (person)>
      <!ELEMENT person (name,age)>
      <!ELEMENT name (#PCDATA)>
      <!ELEMENT age (#PCDATA)>

      // 在person1.xml文件中引入persondtd.dtd约束
      <?xml version="1.0" encoding="UTF-8" ?>
      <!DOCTYPE persons SYSTEM 'persondtd.dtd'>

      <persons>
          <person>
              <name>张三</name>
              <age>23</age>
          </person>

      </persons>
      ```

    - 在 xml 文件内部引入

      ```xml
      <?xml version="1.0" encoding="UTF-8" ?>
      <!DOCTYPE persons [
              <!ELEMENT persons (person)>
              <!ELEMENT person (name,age)>
              <!ELEMENT name (#PCDATA)>
              <!ELEMENT age (#PCDATA)>
              ]>

      <persons>
          <person>
              <name>张三</name>
              <age>23</age>
          </person>

      </persons>
      ```

    - 引入网络 dtd

      ```xml
      <?xml version="1.0" encoding="UTF-8" ?>
      <!DOCTYPE persons PUBLIC "dtd文件的名称" "dtd文档的URL">

      <persons>
          <person>
              <name>张三</name>
              <age>23</age>
          </person>

      </persons>
      ```

- DTD 语法
  - 定义元素

    定义一个元素的格式为：<!ELEMENT 元素名 元素类型>
    简单元素：

    EMPTY: 表示标签体为空

    ANY: 表示标签体可以为空也可以不为空

    PCDATA: 表示该元素的内容部分为字符串

    复杂元素：
    直接写子元素名称. 多个子元素可以使用","或者"|"隔开；
    ","表示定义子元素的顺序 ; "|": 表示子元素只能出现任意一个
    "?"零次或一次, "+"一次或多次, "\*"零次或多次;如果不写则表示出现一次

    ![03_DTD语法定义元素](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292245869.png)

  - 定义属性

    格式

    定义一个属性的格式为：<!ATTLIST 元素名称 属性名称 属性的类型 属性的约束>
    属性的类型：
    CDATA 类型：普通的字符串

    属性的约束:

    // #REQUIRED： 必须的
    // #IMPLIED： 属性不是必需的
    // #FIXED value：属性值是固定的

  - 代码实现

    ```java
    <!ELEMENT persons (person+)>
    <!ELEMENT person (name,age)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT age (#PCDATA)>
    <!ATTLIST person id CDATA #REQUIRED>

    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE persons SYSTEM 'persondtd.dtd'>

    <persons>
        <person id="001">
            <name>张三</name>
            <age>23</age>
        </person>

        <person id = "002">
            <name>张三</name>
            <age>23</age>
        </person>

    </persons>
    ```

    ```

    ```

## 6 schema 约束【理解】

- schema 和 dtd 的区别
  1. schema 约束文件也是一个 xml 文件，符合 xml 的语法，这个文件的后缀名.xsd
  2. 一个 xml 中可以引用多个 schema 约束文件，多个 schema 使用名称空间区分（名称空间类似于 java 包名）
  3. dtd 里面元素类型的取值比较单一常见的是 PCDATA 类型，但是在 schema 里面可以支持很多个数据类型
  4. schema 语法更加的复杂

  ![04_schema约束介绍](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292245870.png)

- 编写 schema 约束
  - 步骤

    1，创建一个文件，这个文件的后缀名为.xsd。
    2，定义文档声明
    3，schema 文件的根标签为： <schema>
    4，在<schema>中定义属性：
    xmlns=<http://www.w3.org/2001/XMLSchema>
    5，在<schema>中定义属性 ：
    targetNamespace =唯一的 url 地址，指定当前这个 schema 文件的名称空间。
    6，在<schema>中定义属性 ：
    elementFormDefault="qualified“，表示当前 schema 文件是一个质量良好的文件。
    7，通过 element 定义元素
    8，判断当前元素是简单元素还是复杂元素

    ![05_schema约束编写](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292245871.png)

  - 代码实现

    ```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <schema
        xmlns="http://www.w3.org/2001/XMLSchema"
        targetNamespace="http://www.itheima.cn/javase"
        elementFormDefault="qualified"
    >

        <!--定义persons复杂元素-->
        <element name="persons">
            <complexType>
                <sequence>
                    <!--定义person复杂元素-->
                    <element name = "person">
                        <complexType>
                            <sequence>
                                <!--定义name和age简单元素-->
                                <element name = "name" type = "string"></element>
                                <element name = "age" type = "string"></element>
                            </sequence>

                        </complexType>
                    </element>
                </sequence>
            </complexType>
        </element>
    </schema>
    ```

- 引入 schema 约束
  - 步骤

    1，在根标签上定义属性 xmlns="<http://www.w3.org/2001/XMLSchema-instance>"
    2，通过 xmlns 引入约束文件的名称空间
    3，给某一个 xmlns 属性添加一个标识，用于区分不同的名称空间
    格式为: xmlns:标识=“名称空间地址” ,标识可以是任意的，但是一般取值都是 xsi
    4，通过 xsi:schemaLocation 指定名称空间所对应的约束文件路径
    格式为：xsi:schemaLocation = "名称空间 url 文件路径“

  - 代码实现

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<persons
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.itheima.cn/javase"
    xsi:schemaLocation="http://www.itheima.cn/javase person.xsd"
>
    <person>
        <name>张三</name>
        <age>23</age>
    </person>

</persons>
```

- schema 约束定义属性
  - 代码示例

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<schema
    xmlns="http://www.w3.org/2001/XMLSchema"
    targetNamespace="http://www.itheima.cn/javase"
    elementFormDefault="qualified"
>

    <!--定义persons复杂元素-->
    <element name="persons">
        <complexType>
            <sequence>
                <!--定义person复杂元素-->
                <element name = "person">
                    <complexType>
                        <sequence>
                            <!--定义name和age简单元素-->
                            <element name = "name" type = "string"></element>
                            <element name = "age" type = "string"></element>
                        </sequence>

                        <!--定义属性，required( 必须的)/optional( 可选的)-->
                        <attribute name="id" type="string" use="required"></attribute>
                    </complexType>

                </element>
            </sequence>
        </complexType>
    </element>

</schema>

<?xml version="1.0" encoding="UTF-8" ?>
<persons
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.itheima.cn/javase"
    xsi:schemaLocation="http://www.itheima.cn/javase person.xsd"
>
    <person id="001">
        <name>张三</name>
        <age>23</age>
    </person>

</persons>
```
