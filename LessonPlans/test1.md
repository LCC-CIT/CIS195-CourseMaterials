---
title: 'Week 3, Day 1, Unit Testing + Repositories'
---

**CS296N Web Development 2: ASP.NET                                     
        January 23, 2018\
**

<div>

Brian Bird

</div>

\

***Repositories and Unit Testing ***
====================================

**
==

**Topics by week\
**

  ----------------------------------- --------------------
  1\. Intro to MVC                    6\. Midterm

  2\. Views and controllers           7\. Authorization

  3\. Repositories and Unit testing   8\. Authentication

  4\. Entity Framework                9\. Web API\

  5\. Deploying to a Linux server     10\. TBD\
  ----------------------------------- --------------------

\

****Contents****
----------------

<div>

-   [Introduction](#topic1)
-   [Review - Controller Action Methods\
    ](#topic2)
-   [Unit Testing Overview](#topic3)
-   [Repositories](#topic4)
-   [Models](#topic5)
-   [Example](#topic6)
-   [Further Reading](#topic7)
-   [Next Class](#topic8)

</div>

::: {.section}
 

Introduction
------------

-    Review lab due dates on Moodle
-   Answer questions about lab 2

### Announcements

-   Scholarship
-   Startup weekend
-   Hack for a cause\

### Main focus today

-   Designing domain models
-   Creating repositories

<!-- -->

 

Review - Controller Action Methods
----------------------------------

<!-- -->

Action Method return types we covered last week:

-   String
-   ViewResult

Data gets passed to an action method:

Via the method parameters

-   Method parameters get arguments from HTTP requests (any type)

Via context objects (less common)

Data gets sent to views

-   Via a model of the type that the view has as it\'s model property
-   Via the ViewBag

<!-- -->

<!-- -->

<!-- -->

 

Unit Testing Overview
---------------------

[We\'ll cover more details of unit testing later, but here are some
basic concepts:\
]{.seoSummary
style="margin: 0px; padding: 0px; border: 0px; color: rgb(51, 51, 51); font-family: \"Open Sans\", arial, x-locale-body, sans-serif; font-style: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"}[]{style="color: rgb(51, 51, 51); font-family: \"Open Sans\", arial, x-locale-body, sans-serif; font-size: medium; font-style: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); display: inline !important; float: none;"}

MVC facilitates unit testing

-   One reason to use the MVC pattern is that it facilitates unit
    testing

What to test?

Business logic (in models, or in separate classes)

-   If Models just contain simple C\# properties, they don\'t really
    need tests

Controller methods

-   This is what usually makes the most sense to test

Test using data from a real database? No!

Why?

-   The database may not contain optimal data for doing certain tests.
-   It's not advisable to put test data into a production database
-   The data can change over time and cause tests to fail.
-   The tests could cause unwanted changes to the real data.

Solution - test against a \"fake\" repository

xUnit

-   Used by the .NET Core team to test their own code.
-   Test runner integrated in Visuals Studio
-   Note: Assert.Equal method uses the Equal method of .NET objects for
    comparison. Primitive .NET types and many classes in the .NET
    library have fully implemented this method. You only need to write a
    Compare class (as shown in the textbook) if you are using a class
    that doesn\'t already have a comparator implemented for the Equals
    method.

Reference - [xunit.github.io](https://xunit.github.io)

 

Repositories
------------

Rather than accessing data directly through Entity Framework, the data
will be accessed through a repository.\

Reasons for using a repository:

-   It facilitates unit testing since the repository can be replaced by
    a fake for testing
-   It can facilitate a simple source of \"hard coded\" data for
    integration testing during early development
-   It provides an additional layer of abstraction for implementing
    common data operations

Implementation

Real and Fake repositories both inherit from an interface

-   This supports dependency injection so that the fake repository can
    be easily injected when testing.

Fake repositories

Just used for unit testing

Contain hard-coded test data

Different test data can be supplied for different tests

 

Models
------

### Object Relationships

Inheritance: is-a, triangle

-   Example: A student is a person

Composition: has-a, black diamond

-   Example: A student has an address

Aggregation: whole-part, open diamond

-   A student is a part of a class

### Types of Models

Domain Model

-   Represents things in the application domain
-   Usually represents the entities stored in the database and / or
    repositories
-   Used by the Controller and possibly Views

View Model

-   Just used to pass data from a controller method to a View

### 

Example
-------

Design the domain model for a Book Information web site that provides
information about Books and Authors. Store the following information:

Author

-   Name
-   Birth date

Book

-   Title
-   Author or authors
-   Publication date

\

Further Reading
---------------

[Testing Controller Logic in ASP.NET
Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/testing)[]{style="color: #0000ee;"}\
[](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/testing)\
[Dependency Injection
Demystified](http://www.jamesshore.com/Blog/Dependency-Injection-Demystified.html)\
\

 

Next Class
----------

We will go into more detail on unit testing

\
:::
