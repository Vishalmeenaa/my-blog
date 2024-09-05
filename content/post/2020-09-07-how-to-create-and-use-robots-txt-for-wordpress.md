---
title: How to Create and Use Robots.txt for Wordpress Website - 2023
date: '2020-09-07'
slug: how-to-create-and-use-robots-txt-for-wordpress
---
<!-- wp:paragraph -->
<p>You have more control over search engines than you realize.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, you can decide who is allowed to crawl and index your website - right down to individual subpages.&nbsp;The robots.txt file will help you with this.&nbsp;It is a simple text file that is located in the root directory of your website.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It communicates to the crawl bots of a search engine which websites should be crawled and which should be left out.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Even if the file is not omnipotent, it is still a powerful tool and allows you to present yourself to Google the way you want it to be.&nbsp;Search engines are tough critics, which is why it's important to leave a lasting good impression.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The robots.txt file, if used correctly, can increase the crawl frequency of your website, which can lead to faster results for your SEO efforts.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So how do you create such a robots.txt file?&nbsp;How is it used?&nbsp;What should be avoided?&nbsp;You can find answers to all of these questions in this post!</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header2">What is the robots.txt file anyway? &nbsp;</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When the Internet was still in its infancy, but its great potential was already evident, developers created a way to crawl and index new Internet pages.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They named these little scripts “Bots” and “Spiders”.&nbsp;In the process, these bots often came to websites that were not intended for crawling and indexing, because they are only sample pages or have just been maintained.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The creator of the world's first search engine, Aliweb, created a kind of roadmap that every crawling bot should follow.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This roadmap was&nbsp;finalized&nbsp;in 1994 by a collective of experienced web developers as the&nbsp;"<a aria-label="Robots Exclusion Protocol (opens in a new tab)" href="https://en.m.wikipedia.org/wiki/Robots_Exclusion_Standard" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Robots Exclusion Protocol</a>"&nbsp;.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A robots.txt file is the execution of this protocol.&nbsp;The protocol sets out the guidelines that every authentic bot must follow, including Google bots.&nbsp;Some illegitimate bots, such as&nbsp;By definition, malware, spyware and the like operate outside of these rules.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can take a look behind the scenes of any website by entering any URL and adding /robots.txt to the end.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, here's the robot.txt version of Nikola Roza:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1436,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/robot.txt-example-1024x245.jpg" alt="" class="wp-image-1436"/><figcaption>robot.txt example</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>As you can see, there is no need to have an egg-laying woolen milk sow as a file as POD Digital is a relatively small website.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header3">Where to find the robots.txt file</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Your robots.txt file is saved in the root directory of your website.&nbsp;To find them, open your&nbsp;<a rel="noreferrer noopener" href="https://youtu.be/9rUKJxELXE0" target="_blank" class="rank-math-link">FTP</a>&nbsp;cPanel.&nbsp;There you will find the file in the “public_html” directory of your website.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1437,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/ftp-file-manager.jpg" alt="" class="wp-image-1437"/><figcaption>FTP file manager</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The files do not contain complex media, just a simple text format.&nbsp;Therefore, they are only a few hundred bytes, if any.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once you've opened the file with your text editor, you'll be greeted with a sight like this:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1438,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/robot.txt-text-file-on-notepad-.jpg" alt="" class="wp-image-1438"/><figcaption>Robot.txt text on notepad</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>If you can't find a robots.txt file because it doesn't exist, you should create one yourself.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header4">How to create a robots.txt file?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are two simple ways to create a perfect robots.txt file in WordPress. You can choose the method that works best for you.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Method 1: Editing Robots.txt File Using Yoast SEO</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you are using the&nbsp;<a href="https://wordpress.org/plugins/wordpress-seo/" target="_blank" aria-label="Yoast SEO&nbsp;plugin (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Yoast SEO&nbsp;plugin</a>, then it already comes with a robots.txt file generator. You can use it to create and edit a robots.txt file directly from your WordPress admin area. Simply go to&nbsp;SEO » Tools&nbsp;page in your WordPress admin and click on the File Editor link.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1440,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/image-1.png" alt="" class="wp-image-1440"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>On the next page, Yoast SEO page will show your existing robots.txt file. If you don’t have a robots.txt file, then Yoast SEO will generate a perfect robots.txt file for you.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1439,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/image.png" alt="" class="wp-image-1439"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>By default, Yoast SEO’s robots.txt file generator will add the following rules to your robots.txt file:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>User-agent: *
Disallow: /</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>It is&nbsp;<strong>important</strong>&nbsp;that you delete this text because it blocks all search engines from crawling your website.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After deleting the default text, you can go ahead and add your own robots.txt rules. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We recommend using the ideal robots.txt format we shared above. Once you’re done, don’t forget to click on the ‘Save robots.txt file’ button to store your changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Method<strong> 2. Edit Robots.txt file Manually Using FTP</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All you need is a simple text editor like Notepad.&nbsp;Open a sheet and save the blank page as "robots.txt".</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now log into your cPanel and look for the “public_html” folder to access the root directory of the website.&nbsp;Once this is open, drag your file into it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Finally, you need to make sure that you have correctly set the permissions on the file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ideally, only you as the owner should be allowed to read, write and edit the file.&nbsp;Other users should not be allowed to do this.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Therefore, the file should have an access code of “0644”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If this is not already the case, you should change this.&nbsp;To do this, click on the file and select “Authorization”.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Voila!&nbsp;Your robots.txt file is complete!</p>
<!-- /wp:paragraph -->

<!-- wp:latest-posts /-->

<!-- wp:heading -->
<h2 id="header5">The robots.txt syntax&nbsp;</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A robots.txt file consists of several command sections in code form, each of which begins with a specific user agent.&nbsp;The user agent is the name of the specific crawl bot that the code will interact with.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are two options:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>You can use a&nbsp;<a rel="noreferrer noopener" href="https://geoffkenyon.com/how-to-use-wildcards-robots-txt/" target="_blank" class="rank-math-link">wildcard</a>&nbsp;to address all search engines at the same time.</li><li>You can address certain search engines individually.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>When a bot is used to search a web page, it will automatically read the command sections that address it.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here is an example:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1441,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/robot.txt-syntax.jpg" alt="" class="wp-image-1441"/><figcaption>Robot.txt syntax</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 id="header6">User agent command</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The first lines in each block are dedicated to the user agent who addresses the respective bot of the search engine.&nbsp;The user agent contains the name of the bot:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1442,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/User-command-in-robot.txt.jpg" alt="" class="wp-image-1442"/><figcaption>User agent command</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>So if you want to give commands to the google bot use:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>User agent: Googlebot</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Search engines always try to find specific commands that relate to them.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Even if, for example, you have two commands in the file: one for the Google Bot and one for the Bing Bot.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The bingbot that encounters the user agent “Bingbot” will execute this command.&nbsp;The bot “Googlebot Video”, however, will skip this command and look for a more specific instruction.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Most search engines have a few different bots, here is a&nbsp;<a rel="noreferrer noopener" href="https://www.distilnetworks.com/bot-directory/category/search-engine/" target="_blank" class="rank-math-link">list of the most common</a>&nbsp;ones&nbsp;<a rel="noreferrer noopener" href="https://www.distilnetworks.com/bot-directory/category/search-engine/" target="_blank">.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header7">Host command</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Currently, the host command is only supported by&nbsp;Yandex&nbsp;, even though Google is rumored to be.&nbsp;This command allows a user to decide whether the www.&nbsp;should be displayed before a URL with this block:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Host: poddigital.de</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since only Yandex certainly supports this command, it is not advisable to use it.&nbsp;Instead, you should use a 301 redirect for forwarding.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header8">Disallow command</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We'll look at this command in more detail later.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second line of a block in the file contains the Disallow commands.&nbsp;You can use them to determine which areas of the website the bot should not be allowed to access.&nbsp;An empty disallow block means that there are no restrictions.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header9">Sitemap commands (XML sitemaps)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You use the sitemap commands to tell search engines where&nbsp;to find&nbsp;your&nbsp;<a href="https://de.semrush.com/blog/xml-sitemap-leitfaden-tipps-tricks-sitemap-generator/">XML sitemap</a>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Still, it is probably best to submit the sitemap to Webmaster Tools in any search engine.&nbsp;They contain a lot of valuable and important information about your website.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you don't have time to do this, you can use the sitemap command.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header10">Crawl delay command</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Yahoo, Bing, and Yandex tend to crawl prematurely, but you can control behavior with a Crawl Delay command.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By adding this line to your block:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Crawl delay: 10</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Tell the search engine to wait 10 seconds before crawling the web page or wait 10 seconds before revisiting the page after crawling.&nbsp;In the end, it comes down to the same thing, but the individual search engines act slightly differently.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header11">Why you should use the robots.txt file?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You now have a basic understanding of the robots.txt file and some commands and their uses.&nbsp;You can create your own file.&nbsp;However, the next step depends on the type of content on your website.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Overall, the robots.txt file is not critical to the success of your website.&nbsp;In fact, your website can thrive and get high rankings even without this file.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>However, there are a few advantages to using it that you should know before you forego the file</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>You can protect private directories from bots:</strong>&nbsp;by entering the appropriate command in the file, you make it more difficult for search engines to index sensitive directories.&nbsp;</li><li><strong>You control your resources:</strong>&nbsp;every time a bot crawls your website, your hosting resources are used.&nbsp;With huge websites with a lot of content, such as e-commerce sites with thousands of subpages, crawling can quickly put a strain on your resources.&nbsp;With the robots.txt file, you can make certain subpages or elements difficult to access for search engines and thus save your valuable resources for the visitor.&nbsp;</li><li><strong>You communicate the location of your sitemap:</strong>&nbsp;This point is important because the crawling bots should know where your sitemap is at all times so that they can read it quickly.&nbsp;</li><li><strong>You prevent duplicate content:</strong>&nbsp;If you include the instruction in the file, you prevent the subpages with duplicate content from being indexed.&nbsp;</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Of course, you want search engines to have the best possible access to your most important subpages.&nbsp;By politely blocking off certain pages, you can control which pages are shown to searchers and which are not (just make sure you&nbsp;<strong>never</strong>&nbsp;completely stop&nbsp;search engines&nbsp;from seeing certain sub-&nbsp;pages&nbsp;).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1443,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/user-agent-disallow.jpg" alt="" class="wp-image-1443"/><figcaption>User agent disallow</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>For example, if we take a look at the my website's Robots File, we see that the following URL</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><em>WayToidea.in/wp-admin</em>&nbsp;- was given a&nbsp;<em>disallow</em>&nbsp;command.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Since this page was created just for us so that we can log into the control panel, it makes no sense to allow the bots to crawl it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header12">Noindex</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In July 2019, Google announced that it would&nbsp;no longer support&nbsp;the&nbsp;<a rel="noreferrer noopener" href="https://webmasters.googleblog.com/2019/07/a-note-on-unsupported-rules-in-robotstxt.html?m=1" target="_blank" class="rank-math-link">noindex command,</a>&nbsp;as well as many other unofficial&nbsp;<a rel="noreferrer noopener" href="https://webmasters.googleblog.com/2019/07/a-note-on-unsupported-rules-in-robotstxt.html?m=1" target="_blank" class="rank-math-link">rules</a>&nbsp;that many webmasters have relied on.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So many of us have looked for alternative methods that can achieve the same result.&nbsp;Below are some of these options that can help you achieve the same effect.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Noindex Tag / Noindex HTTP Response Header</strong>&nbsp;: This tag can be implemented in two ways: Firstly, as an HTTP response header with an X-Robots tag or by creating a &lt;meta&gt; tag within the &lt;head&gt; section.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Your &lt;meta&gt; tag should look like the following example: &lt;meta name = "robots" content = "noindex"&gt;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>TIP:</strong>&nbsp;Remember that if this page was blocked by the robots.txt file, the crawler will never see your noindex tag, and there is still a chance that this page will be included in the SERPs.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Password protection:</strong>&nbsp;Google states that most of the sub-pages that hide behind a login will be removed from the Google index.&nbsp;The only exception is subscription or&nbsp;<a rel="noreferrer noopener" href="https://developers.google.com/search/docs/data-types/paywalled-content" target="_blank" class="rank-math-link">paywall content</a>&nbsp;that you have appropriately tagged with&nbsp;<a href="https://www.searchenginejournal.com/technical-seo/schema/" target="_blank" aria-label="schema markup (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">schema markup</a>&nbsp;.&nbsp;</li><li><strong>404 &amp; 410 HTTP status code:</strong>&nbsp;404 &amp; 410 status codes represent the pages that no longer exist.&nbsp;As soon as a page with a 404/410 status has been crawled and completely processed, it is automatically removed from the Google index.&nbsp;</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You should crawl your page regularly to rule out 404 &amp; 410 errors.&nbsp;If there are error codes, you should set up a 301 redirect to send the traffic to an existing subpage.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Disallow command in the robots.txt:</strong>&nbsp;By adding a page-specific Disallow command to your robots.txt file, you prevent the search engine from crawling this subpage.&nbsp;In most cases, this will not index the page or its content.&nbsp;However, you should be aware that the search engines are still able to index the subpage based on links from other pages or other information.&nbsp;</li><li><strong>Search Console URL Removal Tool</strong>&nbsp;: This alternative does not completely solve the indexing problem because the&nbsp;<strong>Search Console tool</strong>&nbsp;only removes the URL from the SERPs for some time.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>However, this could give you enough time to prepare more crawler rules and tags so that the pages could be completely removed from the SERPs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can find the Remove URL Tool on the left side of the main navigation in the Google Search Console.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1444,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/Google-removal-Tool.jpg" alt="" class="wp-image-1444"/><figcaption>Google search console removal tool</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 id="header13">Noindex vs.&nbsp;Disallow</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Many of you are probably wondering whether it is better to use the noindex tag or the disallow rule in your robots.txt file.&nbsp;We have already covered in the previous part why the noindex rule is no longer supported in robots.txt and various alternatives.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to make sure that any of your pages are not being indexed by search engines, you should definitely take a look at the noindex meta tag.&nbsp;It allows the bots to access the page, but the tag tells that this page should not be indexed and should not appear in the SERPs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Disallow command might not be as effective as the noindex tag.&nbsp;Of course, by using the command in robots.txt you are preventing the bots from crawling your page, but if the mentioned page is connected to other pages by internal and external links, the bots could still index that page based on information provided by other sites.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You should remember that if you lock the page with a disallow rule and add the noindex tag, the robots will never see your noindex tag, which in turn can cause the page to appear in the SERPs.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header14">The use of regular expressions and wildcards&nbsp;</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So we now know exactly what the robots.txt file is and how it should be used.&nbsp;Now, on a large ecommerce site, you might want to exclude all URLs from the index that contain a question mark.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We would therefore like to introduce you to the principle of wildcards that can be integrated into robots.txt.&nbsp;There are currently two variants of the wildcards that you can use.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>* Placeholder - here the character * can be replaced with any special character or character string according to your wishes.&nbsp;These type of placeholders are a great solution for your URLs that are of a similar format.&nbsp;For example, you can undercut the crawling of all filter pages that contain a question mark (?) In the URL.&nbsp;</li></ul>
<!-- /wp:list -->

<!-- wp:image {"id":1445,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/PicsArt_09-07-01.40.26.jpg" alt="" class="wp-image-1445"/></figure>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>$ Placeholder - this replaces the $ symbol with the end of the URL to be excluded.&nbsp;For example, if you want to prevent all PDF files from being indexed, you should implement a command like the one below:&nbsp;</li></ul>
<!-- /wp:list -->

<!-- wp:image {"id":1446,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/PicsArt_09-07-01.40.16.jpg" alt="" class="wp-image-1446"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Let's quickly break down the example above.&nbsp;Your robots.txt allows all user agent bots to crawl your website, but it prohibits access to any page that contains a .pdf extension.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="header15">Mistakes to Avoid</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You are now familiar with several uses of your robots.txt file.&nbsp;We're going to dig a little deeper into each point in this section and explain how each one can become an SEO disaster if not used properly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header16">Don't block good content</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You should present your good content to the public and under no circumstances block it with the robots.txt file or the noindex tag.&nbsp;In the past, we have encountered several of these mistakes that have harmed the effectiveness of SEO campaigns.&nbsp;You should carefully examine your pages for any noindex tags and disallow commands.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header17">Excessive use of the crawl delay</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We already explained how the Crawl Delay command can be used and what it does.&nbsp;However, you shouldn't use it too often as it could limit the SEO potential of the pages in question.&nbsp;For some websites it may be the perfect solution.&nbsp;But especially with larger pages, the command could backfire and hinder your rankings and thus solid traffic.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header18">Consideration of upper and lower case</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The robots.txt file is case-sensitive.&nbsp;This should be taken into account when creating the file.&nbsp;So rename the file “robots.txt” in lower case for it to work.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header19">Using Robots.txt to prevent content from being indexed</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We have already touched on this part above.&nbsp;Locking a subpage about the file is the best way to prevent the bot from crawling.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&nbsp;This can, but does not have to work:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>If the subpage has already been linked from an external source, the bots will get to the subpage via this source, crawl it and still index it.&nbsp;</li><li>Illegitimate bots can always crawl and index the subpage.&nbsp;</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="header20">Use of Robots.txt to shield private content</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Some content that is not intended for the general public, such as PDFs or thank you pages, can be indexed even if you want to prevent the bot from doing so.&nbsp;An effective way to enforce the disallow command is to place private content behind a login.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Of course, this involves another step, but your content is protected.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="header21">Avoid harmful duplicate content with Robots.txt</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sometimes duplicate content cannot be avoided, as with printer-friendly subpages.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Still, Google and other search engines are advanced enough to know when you want to hide something.&nbsp;In fact, you only attract more attention to yourself and your duplicate content.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Google now recognizes the difference between natural duplicate content, such as printer-friendly subpages, and the attempt to fool the algorithm.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1447,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/PicsArt_09-07-01.46.52.jpg" alt="" class="wp-image-1447"/><figcaption>duplicate content algorithm</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>There's a chance he'll be discovered anyway.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>There are three methods you should use to handle this type of content:&nbsp;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li><strong>Rewrite the content:</strong>&nbsp;Creating exciting and useful content will cause the search engine to consider your website trustworthy, which can lead to better rankings in the long term.&nbsp;You should take this advice to heart, especially when it comes to a copy-and-paste task.&nbsp;</li><li><strong>Set up a 301 redirect:</strong>&nbsp;301 redirects inform search engines that a subpage has been transferred to another location.&nbsp;Put a 301 on a page with duplicate content and redirect visitors to the original page of content.&nbsp;</li><li><strong>Rel = “canonical:</strong>&nbsp;This tag informs Google of the original location of duplicated content.&nbsp;This is particularly relevant for an e-commerce website, as the CMS very often displays identical content in two versions.&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="header22">The moment of truth: test your Robots.txt file</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Now is the time to test your file to see if everything works the way you want it.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Google's Webmaster Tools have a test function for the robots.txt, but this is currently only available in the old version of the Google search console (Google is currently expanding the functions of the search console, so that we may have a test function for the Robots.txt in the future in the current version).&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First you will have to visit the Google Support page, where you will get an overview of the functions of the Robots.txt test function.&nbsp;You will also find the test tool there:&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1448,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/robot.txt-help-center-Google.jpg" alt="" class="wp-image-1448"/><figcaption>Google help center</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>First select the property you are working on - for example, your company website from the drop-down list.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1449,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://waytoidea.com/wp-content/uploads/2020/09/robot.txt-tester-Google.jpg" alt="" class="wp-image-1449"/><figcaption>Robot.txt tester Google</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Remove whatever is currently in the box, replace it with your new robots.txt file, and click "Test".</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the button "Test" switches to "Allowed", your&nbsp;<a rel="noreferrer noopener" href="https://support.google.com/webmasters/answer/6078399?hl=de" target="_blank" class="rank-math-link">robots.txt file is</a>&nbsp;fully functional.&nbsp;<br>Correct creation of this file will allow you to improve your SEO and user experience.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By communicating to the bots how to properly crawl your website, they are able to structure their content and present it in the form you want.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you have any question or suggestion then feel free to comment us.</p>
<!-- /wp:paragraph -->
