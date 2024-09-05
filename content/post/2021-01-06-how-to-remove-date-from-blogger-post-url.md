---
title: How To Remove Date From Blogger Post Url in 4 Simple Steps - 2023
date: '2021-01-06'
slug: how-to-remove-date-from-blogger-post-url
---
<!-- wp:paragraph -->
<p>If your blog or website is on blogger, you face showing date and month in blogger post URL. Want to know how to remove date from blogger post URL? Want to <strong>make blogger post URL like WordPress</strong>. So be with me till the end of the post.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In <a href="https://www.blogger.com" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">blogger</a>, there is no option to remove date from blogger post URL, like WordPress. You have to remove the date from blogger post URL manually.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When we publish a post on blogger, that will contain the published date of that post. The following is the screen capture of the default blogger post URL.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Yet, when you compose a post on WordPress, it's URL is extraordinary, here the date and .html won't come in the post URL. There are options to show or hide date and month in post URL.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>WordPress post URL looks more professional than the blogger Post URL. That is the reason we suggest all of you, remove date from blogger post URL.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So today, we will learn how to remove date from blogger post URL in 4 simple Steps. And make it more professional like WordPress post URL.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Pros and Cons Of Removing Date From Blogger Post URL</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you <a href="https://support.google.com/blogger/thread/3420805?hl=en" class="rank-math-link">remove the date from the blogger post URL</a>, there are some pros and cons of eliminating the date and time. So let's know these pros and cons.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table><tbody><tr><td><strong>Pros</strong></td><td><strong>Cons</strong></td></tr><tr><td>1. Removing Date from Blogger blog post will not make your content user feel old. Your website content will look fresh.</td><td>1. It is good to remove the date from the post URL, but only for new bloggers. If your blog has 15+ Posts, then don't remove date from blogger post URL. It will make many redirects.</td></tr><tr><td>2. After removing the date and time from the blogger post URL, it will help to better rank in search engines.</td><td>2. Suppose your blog post <a href="https://backlinko.com/rank-high-on-google" target="_blank" aria-label="ranked in Google (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">ranked in Google</a> or any search engine. Then you can lose from ranking in search engines.</td></tr></tbody></table><figcaption>Pros and Cons Of Removing Date From Blogger Post URL</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2>How To Remove Date From Blogger Post URL</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Follow 4 simple steps <strong>to remove date from blogger post URL.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>Login Into Your <strong>Blogger Dashboard</strong> and go to the <strong>theme section</strong>.</li><li>After clicking on the Theme section, Get into the "<strong>Edit HTML</strong>."</li><li>Now, Find out the <strong>&lt;head&gt;</strong> tag here. You can also find it out with the help of Ctrl+F.</li><li>Now, Copy the Below Given Code and Paste it after the &lt;head&gt; tag and click on <strong>Save theme</strong>.</li></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;script type="text/javascript"&gt;
//&lt;!&#91;CDATA&#91;
// BloggerJS v0.3.1
// Copyright (c) 2017-2018 Kenny Cruz
// Licensed under the MIT License
var urlTotal,nextPageToken,postsDatePrefix=!1,accessOnly=!1,useApiV3=!1,apiKey="",blogId="",postsOrPages=&#91;"pages","posts"],jsonIndex=1,secondRequest=!0,feedPriority=0,amp="&amp;"&#91;0];function urlVal(){var e=window.location.pathname,t=e.length;return".html"===e.substring(t-5)?0:t&gt;1?1:2}function urlMod(){var e=window.location.pathname;"p"===e.substring(1,2)?(e=(e=e.substring(e.indexOf("/",1)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../"+e)):(e=(e=postsDatePrefix?e.substring(1):e.substring(e.indexOf("/",7)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../../"+e))}function urlSearch(e,t){var n=e+".html";t.forEach(function(e){-1!==e.search(n)&amp;&amp;(window.location=e)})}function urlManager(){var e=urlVal();0===e?accessOnly||urlMod():1===e?getJSON(postsOrPages&#91;feedPriority],1):2===e&amp;&amp;(accessOnly||history.replaceState(null,null,"/"))}function getJSON(e,t){var n=document.createElement("script");if(useApiV3){var o="https://www.googleapis.com/blogger/v3/blogs/"+blogId+"/"+e+"?key="+apiKey+"#maxResults=500#fields=nextPageToken%2Citems(url)#callback=bloggerJSON";nextPageToken&amp;&amp;(o+="#pageToken="+nextPageToken),nextPageToken=void 0}else o=window.location.protocol+"//"+window.location.hostname+"/feeds/"+e+"/default?start-index="+t+"#max-results=150#orderby=published#alt=json-in-script#callback=bloggerJSON";o=o.replace(/#/g,amp),n.type="text/javascript",n.src=o,document.getElementsByTagName("head")&#91;0].appendChild(n)}function bloggerJSON(e){var t=&#91;];if(useApiV3||void 0===urlTotal&amp;&amp;(urlTotal=parseInt(e.feed.openSearch$totalResults.$t)),useApiV3){try{e.items.forEach(function(e,n){t.push(e.url)})}catch(e){}nextPageToken=e.nextPageToken}else try{e.feed.entry.forEach(function(n,o){var r=e.feed.entry&#91;o];r.link.forEach(function(e,n){"alternate"===r.link&#91;n].rel&amp;&amp;t.push(r.link&#91;n].href)})})}catch(e){}urlSearch(window.location.pathname,t),urlTotal&gt;150?(jsonIndex+=150,urlTotal-=150,getJSON(postsOrPages&#91;feedPriority],jsonIndex)):nextPageToken?getJSON(postsOrPages&#91;feedPriority]):secondRequest&amp;&amp;(nextPageToken=void 0,urlTotal=void 0,jsonIndex=1,secondRequest=!1,0===feedPriority?(feedPriority=1,getJSON("posts",1)):1===feedPriority&amp;&amp;(feedPriority=0,getJSON("pages",1)))}function bloggerJS(e){e&amp;&amp;(feedPriority=e),urlManager()}bloggerJS();
//]]&gt;
&lt;/script&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now, you have done it. After this, If you go to any blogger post, you will see that date has been removed from the blogger post. If your are facing issues, then you can watch below given video tutorial to remove date from blogger post URL.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Video Tutorial on How To Remove Date From Blogger Post URL in 2021</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://youtu.be/2W-MKD8FB4Q","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/2W-MKD8FB4Q
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"textAlign":"center"} -->
<h2 class="has-text-align-center">FAQs on How To Remove Date From Blogger Post URL</h2>
<!-- /wp:heading -->

<!-- wp:rank-math/faq-block {"questions":[{"id":"faq-question-1609928566162","title":"What is URL in Blogger?","content":"Full form of URL is \u003cstrong\u003e\u0022Uniform Resource Locator.\u0022\u003c/strong\u003e The URL - a system of unified e-resources, or uniform resource location determiner. It is used as a standard for recording links to objects on the Internet (Hypertext links on the \u0022World Wide Web\u0022).","visible":true}]} -->
<div class="wp-block-rank-math-faq-block"><div class="rank-math-faq-item"><h3 class="rank-math-question">What is URL in Blogger?</h3><div class="rank-math-answer">Full form of URL is <strong>"Uniform Resource Locator."</strong> The URL - a system of unified e-resources, or uniform resource location determiner. It is used as a standard for recording links to objects on the Internet (Hypertext links on the "World Wide Web").</div></div></div>
<!-- /wp:rank-math/faq-block -->

<!-- wp:heading -->
<h2>Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As you saw how easy it is to <strong>remove date from blogger post URL</strong>. You have to follow 4 simple steps to remove date from blogger post URL. If you get stuck in any step, then feel free to comment below.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We hope this article helped you learn how to remove date from blogger post URL easily.</p>
<!-- /wp:paragraph -->
