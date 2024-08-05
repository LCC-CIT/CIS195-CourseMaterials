---
title: Site Files
description: Additional site files
keywords: HTML, Web page
generator: Typora
author: Brian Bird
---
[TOC]



# Favicon

```html
 <link rel="shortcut icon" href="Images/favicon.ico" type="image/x-icon">
 <link rel="icon" href="Images/favicon.ico" type="image/x-icon">
```



# Opengraph

```html
 <!-- OpenGraph Metadata -->
    <meta property="og:title" content="Intro to AI" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lcc-cit.github.io/CS123-CourseMaterials/" />
    <meta property="og:image" content="https://lcc-cit.github.io/CS123-CourseMaterials/Images/AI_Initials2.webp" />
    <meta property="og:description"
        content="A repository of course materials for the Intro to AI course at LCC, an introduction to Artificial Intelligence for non-programmers" />
    <meta property="og:site_name" content="CS 123 Course Materials Repository" />
    <meta property="og:locale" content="en_US" />
```



# Sitemap

[XML-Sitemaps.com](https://www.xml-sitemaps.com/)



```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/CS123_Syllabus_8wk.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/CS123_GettingStartedGuide_8wk.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic01-2-AiOverview.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic01-3-OverviewPart2.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/Topic-01-4-ZombieCrossingSolution.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic02-1-ProblemSolving2.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic02-2-Bayes.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic03-1-MachineLearning.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic04-1-History.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic05-1-NueralNets.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic06-1-GenerativeAI.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic06-2-PromptEngineering.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/Images/Building19FloorPlan.pdf</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/Research/ZombiesAndHumansSolution.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://lcc-cit.github.io/CS123-CourseMaterials/Research/TryingToStumpGenerativeAI.html</loc>
  <lastmod>2024-08-03T23:41:07+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>
```



# Robots.txt

https://developers.google.com/search/docs/crawling-indexing/robots/intro

Example:

```plaintext
User-agent: *
Disallow: LessonPlans/
Disallow: LabAutoGrading/
Disallow: LabStarters/

Sitemap: https://lcc-cit.github.io/CIS195-CourseMaterials/sitemap.xml
```



# Search

## Bing

[Bing Webmaster Tools](https://www.bing.com/webmasters/)

Files in root of site: 

- BingSiteAuth.xml
- b7d71bf419dd4da19baff106615b73da.txt. (for indexNow)

[IndexNow](https://www.bing.com/indexnow/getstarted)

Post request to index site:

```json
POST /IndexNow HTTP/1.1
Content-Type: application/json; charset=utf-8
Host: api.indexnow.org
{
  "host": "https://lcc-cit.github.io/CIS195-CourseMaterials/",
  "key": "bc112d7ae6bf46eca8ec257c2b58adaa",
  "keyLocation": "https://lcc-cit.github.io/CIS195-CourseMaterials/56afccb3e21546688bac697ed5060a27.txt",
  "urlList": [
      "https://lcc-cit.github.io/CIS195-CourseMaterials"
      ]
}
```



