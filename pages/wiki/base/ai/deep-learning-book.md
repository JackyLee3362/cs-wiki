---
title: Deep Learning Book
date: 2023-01-27
draft: false
author: JackyLee
tags:
  - 基础知识
  - AI
  - 深度学习
categories:
  - 计算机科学
comment: true
---

## 参考资料

# 深度学习-花书

## 第 2 章

## 2.12 Example: Principlal Components Analysis

## 第 3 章 Probability and Information Theory

3.1 Why Probability?

There are three possible sources of uncertainty

- Inherent stochasticity in the system being modeled.
- Incomplete observability.
- Incomplete modeling.

Frequentist probability vs Bayesian probability

### 3.2 Random Variables

### 3.3 Probability Distributions

### 3.3.1 Discrete Variables and Probability Mass Functions

Black Red

odd 2/6 1/6 3/6
even 2/6 1/6 3/6
4/6 2/6 1

- probability mass function(PMF)
- joint probability distribution
- uniform distribution

### 3.3.2 Continuous Variables and Probability Density Functions

射箭，符合正态分布
probability density function(PDF)

### 3.4 Marginal Probability

marginal probability

### 3.5 Conditional Probability

conditional probability

Eq. 3.5

intervention query

causal modeling

### 3.6 The Chain Rule of Conditional Probabilities

Eq. 3.6

chain rule or product rule

### 3.7 Independence and Conditional Independence

相互独立：P(X=我出门吃饭)P(Y=)

条件独立：

### 3.8 Expectation, Variance and Covariance

Eq. 3.9

Eq. 3.10

如何直观地理解「协方差矩阵」？

### 3.9 Common Probability Distributions

#### 3.9.1 Bernoulli Distribution

#### 3.9.2 Multinoulli Distribution

#### 3.9.3 Gaussian Distribution

normal distribution

#### 3.9.4 Exponential and Laplace Distributions

#### 3.9.5 The Dirac Distribution and Empirical Distribution

#### 3.9.6 Mixtures of Distributions

### 3.10 Useful Properties of Common Functions

logistic sigmoid:

Eq. 3.30

softplus function

Eq. 3.31

3.11 Bayes' Rule

Eq. 3.42

### 3.12 Technical Details of Continuous Variables

measure theory
measure zero

### 3.13 Information Theory

self-information of an event x = x to be Eq. 3.48
Shannon entropy
differential entropy
Kullback-Leibler(KL) divergence

### 3.14 Structured Probabilistic Models

structured probabilistic model/graphical model
Directed Eq. 3.53 （接力赛的例子）
Undirected（感冒的例子）

## 第 10 章

### 10.6 递归神经网络

### 10.7 长期依赖的挑战

### 10.8 回声状态网络

### 10.9 渗透单元和其他多时间尺度的策略

### 10.10 长短期记忆和其他门控 RNN

### 10.11 优化长期依赖

### 10.12 外显依赖

## 第 16 章 Structured Probabilistic Models for Deep Learning

### 16.1 The Challenge of Unstructured Modeling

Classification algorithms

### 16.2 Using Graphs to Describe Model Structure

### 16.2.1 Directed Models

例子：Alice，Bob，Carol 的接力赛

Figure 16.2

Eq. 16.1

Eq. 16.2

### 16.2.2 Undirected Models

例子：我，室友，同事的例子

Figure 16.3

Eq. 16.3

Table values
