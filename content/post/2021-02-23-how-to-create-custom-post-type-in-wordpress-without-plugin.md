---
title: How to Create Custom Post Type in Wordpress Without Plugin 2021
date: '2021-02-23'
slug: how-to-create-custom-post-type-in-wordpress-without-plugin
---
<!-- wp:paragraph -->
<p>In this tutorial, we will discuss how to create a WordPress plugin that can be used to add two new&nbsp;<strong>post types</strong>. After that, together, we will create new layouts for both post types using templates. Read the&nbsp;<a href="https://www.smashingmagazine.com/2011/09/how-to-create-a-wordpress-plugin/" target="_blank" aria-label="tutorial on creating a WordPress plugin (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">tutorial on creating a WordPress plugin</a>&nbsp;for more information.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We will also activate the Post editor&nbsp;<strong>Custom Fields&nbsp;</strong>feature for each post type and display the new template fields.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With the Custom Post Types, you can control and manage the displayed content. If you are currently writing blog posts for personal consumption or telling stories about your daily stories, you can make them more interesting by creating layouts. Even if you blog about movie or music reviews, you can add a content area as a container for posts that don't appear on the blog.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Understanding Custom Post Types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In short, WordPress custom post types allow you to sort your posts by content. The default post types in WordPress, for example, Post, Page, and Attachment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Generally, you write all posts in the Admin Control Panel post area, then create a category. Each post of each type appears in the same list, so it will be difficult for you to distinguish between them based on the content type.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The custom post type has its link in the admin control panel that points to a list of posts of that type. As with normal posts, you can add categories to posts created in this way so that you are free to sort and display the posts as you wish.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the example above, if a user accesses the&nbsp;<em>movie&nbsp;</em>database on the WordPress site, he cannot see the review article. It's different if you create, for example, the 'Action' and 'Romance' categories. When the user opens the&nbsp;<em>Action movies</em>&nbsp;category page, he can see all the movie reviews and entries.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When creating new custom post types, you have various options. For example, specifying an appropriate place in the admin menu to display the link, determining whether the post type can appear in search results, determining whether the new post type supports excerpts or not, defines whether visitors may leave comments, and much more.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also change the various text (specified by the&nbsp;<strong>$ labels</strong>&nbsp;array ), for example, changing&nbsp;&nbsp;<strong>Add New Post</strong>&nbsp;to&nbsp;&nbsp;<strong>Add New Movie</strong>. As another example, you want to change the&nbsp;<strong>Featured Image&nbsp;</strong>text to&nbsp;&nbsp;<strong>Add Poster</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also activate the custom field feature in the post editor. This feature was previously 'hidden' by default and must be enabled using the&nbsp;<strong>Screen Options&nbsp;</strong>link at the editor's top.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Still, with the Movies and Movie Reviews examples, you can complete the Movie post with custom fields for several things, such as the year it was published, the director, IMDB rating, and so on. You can also create a film synopsis as post content that is posted on your site.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Usually, any custom fields created can be selected in any post type. For this reason, plugins are needed to limit the Appearance of each field.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Also Read</strong>: <a href="https://waytoidea.com/how-to-change-wordpress-theme/" target="_blank" aria-label="How To Change WordPress Theme (3 Ways) (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">How To Change WordPress Theme (3 Ways)</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>How to Create Custom Post Types in WordPress</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Since you will be making some significant changes, we recommend&nbsp;creating a WordPress plugin. You can also create custom post types in the theme's&nbsp;<strong>functions.php</strong>&nbsp;file. This tutorial will&nbsp;<strong>create a WordPress plugin, and the example we use is a database/movie review.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To create custom post types, you have to write a new function that 'calls' the WordPress function&nbsp;&nbsp;<strong>register_post_type ()&nbsp;</strong>&nbsp;with two parameters. Your function&nbsp;<strong>must be&nbsp;</strong>hooked to the&nbsp;<strong>init</strong>&nbsp;action hook. If not, your custom post type cannot be registered correctly.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// The custom function MUST be hooked to the init action hook
add_action ( 'init' , 'lc_register_movie_post_type' ) ;  
// A custom function that calls register_post_type
function lc_register_movie_post_type ( ) { 
  // Set various pieces of text, $ labels is used inside the $ args array
 $ labels = array (
 'name' =&gt; _x ( 'Movies' , 'post type general name' ) ,  
 'singular_name' =&gt; _x ( 'Movie' , 'post type singular name' ) ,  
 ...
 ) ;
  // Set various pieces of information about the post type
 $ args = array (
 'labels' =&gt; $ labels,
 'description' =&gt; 'My custom post type' ,
 'public' =&gt; true,
 ...
 ) ;
  // Register the movie post type with all the information contained in the $ arguments array
 register_post_type ( 'movie' , $ args ) ; 
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>All custom functions must be prefixed to prevent problems with plugins or other theme functions. In this tutorial, we will use the initials LC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here are two parameters for&nbsp;&nbsp;<strong>register_post_type ()</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>Post type name, maximum of 20 characters, and&nbsp;<strong>must not&nbsp;</strong>contain spaces or capital letters.</li><li>The&nbsp;<strong>$ args&nbsp;</strong>associative array containing information about the post type in the pair&nbsp;&nbsp;<strong>'key' =&gt; 'value.'</strong></li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Since arguments and labels are both arrays, what you have to create first is to write the label in the variable itself, in the&nbsp;<strong>$ args</strong>&nbsp;variable<strong>,&nbsp;</strong>&nbsp;then 'call' the function in question.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>$ Args array</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Here are the most commonly used keys for the&nbsp;<strong>$ args</strong>&nbsp;array<strong>,&nbsp;</strong>&nbsp;and they are all selectable (optional):</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Labels&nbsp;</strong>-&nbsp;&nbsp;<strong>Array&nbsp;</strong>specifying various kinds of text, such as 'Add New Post' can be changed to 'Add New Movie.' A description of the keys for this array label can be found under this list of keys.</li><li><strong>Description&nbsp;</strong>- A short, descriptive summary of the post type. This key can be displayed in the post-type template but cannot be used anywhere.</li><li><strong>Public&nbsp;</strong>- Although this post type is visible to&nbsp;<em>authors&nbsp;</em>and&nbsp;<em>visitors alike</em>, the default value is FALSE, which means this key does not appear in the Admin Control Panel.</li><li><strong>exclude_from_search&nbsp;</strong>&nbsp;Determines whether posts of this type appear in normal search results or not. The default value is the opposite of the public value.</li><li><strong>publicly_queryable&nbsp;</strong>&nbsp;- Determines if posts of this type are accessible by URL, such as http://www.mywebsite.com/?post_type=movie, or in advanced use via the query_posts () function. The default value is the same as the public value.</li><li><strong>show_ui&nbsp;</strong>&nbsp;- Specifies whether the menu and post editor links appear in the Admin Control Panel or not. The default value is the same as the public value.</li><li><strong>show_in_nav_menus&nbsp;</strong>&nbsp;- Determines if posts of this type can be added to the navigation menu created via Appearance -&gt; Menus. The default value is the same as the public value.</li><li><strong>show_in_menu&nbsp;</strong>&nbsp;- Determines if the post type link appears in the Admin Control Panel navigation menu. Note, FALSE hides the link, while TRUE adds a link as a new top-level link. By including a link, you can place the link as a sub-link of an existing top-level link, for example, entering&nbsp;&nbsp;<strong>options-general.php&nbsp;</strong>&nbsp;and putting it under the Settings link.</li><li><strong>show_in_admin_bar&nbsp;</strong>&nbsp;- Specifies whether the post type appears above the Admin bar, under the&nbsp;<strong>+ New&nbsp;</strong>link or not.</li><li><strong>menu_position</strong>&nbsp;- A new link in the Admin Control Panel navigation menu, 5 under Posts and 100 under Settings. To see the complete list of positions, go to the WordPress Codex entry.</li><li><strong>Hierarchical&nbsp;</strong>- Determines if the post can be redirected to the Parent post. If TRUE, then the&nbsp;<strong>$ supports&nbsp;</strong>array must contain the 'page-attributes' feature.</li><li><strong>Supports&nbsp;</strong>- Enables various post features that have been selected, such as feature images, excerpts, custom fields, and others. If this key is set to FALSE instead of an array, the editor for this post type will be disabled - this option is very useful if you want to lock all posts of this type but still view them (below is a list of array values).</li><li><strong>Taxonomies&nbsp;</strong>- Array taxonomies that can be applied to posts of this type. Remember, register the taxonomy first, not create one!</li><li><strong>has_archive&nbsp;</strong>&nbsp;- Determines if the post type has an archive page, the URL follows the permalink structure, and the slug is the name you put in parameter 1 of register_post_types (), for example, http://www.mywebsite.com/movie]/ returns all moview_review posts.</li><li><strong>query_var&nbsp;</strong>&nbsp;- TRUE or FALSE sets posts to be viewed by typing the post type and post name as a query in the URL, for example, 'http://www.mywebsite.com/?&nbsp;<strong>Movie = the matrix</strong>. If you entered a text string, then you can set the text to be used after the? Character. For example, if you enter the string 'movie,' the result will look like this: '?&nbsp;<strong>film = the matrix</strong>.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You can see the complete list on the <a rel="noreferrer noopener" target="_blank" href="https://codex.wordpress.org/Function_Reference/register_post_type#Arguments" class="rank-math-link">WordPress Codex</a> page <a rel="noreferrer noopener" target="_blank" href="https://codex.wordpress.org/Function_Reference/register_post_type#Arguments" class="rank-math-link">for register_post_type ()</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Array labels</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The first key in the <strong>$ args </strong>array is named <strong>labels </strong>and must be set to an array. This array will determine various kinds of text related to the post type. Create a variable called <strong>$ labels </strong>to store all the information contained by the array <strong>labels</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here are some important keys for the array labels, and all of them can be selected (optional):</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Name&nbsp;</strong>- For post type, the name must be plural and generic, for example, movies.</li><li><strong>singular_name&nbsp;</strong>&nbsp;- The name for a post type, for example, movie.</li><li><strong>add_new&nbsp;</strong>&nbsp;- Change 'Add New', for example to 'Add Movie'.</li><li><strong>add_new_item&nbsp;</strong>&nbsp;- Change 'Add New Post', for example to 'Add New Movie'.</li><li><strong>edit_item&nbsp;</strong>&nbsp;- Change 'Edit Post', for example to 'Edit Movie'.</li><li><strong>featured_image&nbsp;</strong>&nbsp;- Changes the 'Featured Image' in the post editor, such as 'Movie Poster.'</li><li><strong>set_featured_image&nbsp;</strong>&nbsp;- Change the 'Set Featured Image', for example to 'Add Movie Poster'.</li><li><strong>menu_name</strong>&nbsp;- Replaces the text in top-level links. The default text for this link is the name of the key.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You can see the complete list on the&nbsp;<a target="_blank" href="https://codex.wordpress.org/Function_Reference/register_post_type#Arguments" rel="noreferrer noopener">WordPress Codex</a>&nbsp;page&nbsp;<a target="_blank" href="https://codex.wordpress.org/Function_Reference/register_post_type#Arguments" rel="noreferrer noopener">for register_post_type ()</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Array 'supports'</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// Enable specific features in the post editor for my post type
$ supports = array ('title', 'editor', 'author', 'thumbnail');

// Disable ALL features of the post editor for my post type
$ supports = FALSE;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>One of the keys in the&nbsp;<strong>$ args&nbsp;</strong>array is named&nbsp;<strong>supports</strong>. With this simple array, you can write a list of post editor features that you want to enable for the custom post type. By default, only the title and editor are enabled.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you don't want it set to an array, you can write FALSE to turn off all post-editing features, including the title and content area. As a result, the post cannot be edited but can still be viewed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here is a list of post editor features that you can enable in the&nbsp;<strong>$ supports</strong>&nbsp;array :</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>title</li><li>editor</li><li>author - NOTE: this feature allows you to change the&nbsp;<em>author&nbsp;</em>post.</li><li>thumbnail</li><li>excerpt</li><li>trackbacks</li><li>custom-fields</li><li>comments</li><li>revisions</li><li>page-attributes</li><li>post-formats</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>How to Create New Custom Post Types with Plugins</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After knowing what information is needed for this function, the next step is to create a WordPress plugin, write a custom function, and hook the function to the&nbsp;<strong>init</strong>&nbsp;action hook.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;? php
/ *
Plugin Name: My Custom Post Types
Description: Add post types for movies and movie reviews
Author: Liam Carberry
* /
 
// Hook &lt;strong&gt; lc_custom_post_movie () &lt;/strong&gt; to the init action hook
add_action ( 'init' , 'lc_custom_post_movie' ) ;  
 
// The custom function to register a movie post type
function lc_custom_post_movie ( ) { 
 
  // Set the labels, this variable is used in the $ args array
 $ labels = array (
 'name' =&gt; __ ( 'Movies' ) ,  
 'singular_name' =&gt; __ ( 'Movie' ) ,  
 'add_new' =&gt; __ ( 'Add New Movie' ) ,  
 'add_new_item' =&gt; __ ( 'Add New Movie' ) ,  
 'edit_item' =&gt; __ ( 'Edit Movie' ) ,  
 'new_item' =&gt; __ ( 'New Movie' ) ,  
 'all_items' =&gt; __ ( 'All Movies' ) ,  
 'view_item' =&gt; __ ( 'View Movie' ) ,  
 'search_items' =&gt; __ ( 'Search Movies' ) ,  
 'featured_image' =&gt; 'Poster' ,
 'set_featured_image' =&gt; 'Add Poster'
 ) ;
 
  // The arguments for our post type, to be entered as parameter 2 of register_post_type ()
 $ args = array (
 'labels' =&gt; $ labels,
 'description' =&gt; 'Holds our movies and movie specific data' ,
 'public' =&gt; true,
 'menu_position' =&gt; 5 ,
 'supports' =&gt; array ( 'title' , 'editor' , 'thumbnail' , 'excerpt' , 'comments' , 'custom-fields' ) ,  
 'has_archive' =&gt; true,
 'show_in_admin_bar' =&gt; true,
 'show_in_nav_menus' =&gt; true,
 'has_archive' =&gt; true,
 'query_var' =&gt; 'movie'
 ) ;
 
  // Call the actual WordPress function
  // Parameter 1 is a name for the post type
  // Parameter 2 is the $ args array
 register_post_type ( 'movie' , $ args ) ; 
}
 
// Hook &lt;strong&gt; lc_custom_post_movie buaya () &lt;/strong&gt; to the init action hook
add_action ( 'init' , 'lc_custom_post_movie]' ) ;  
 
// The custom function to register a movie review post type
function lc_custom_post_moviekamah ( ) { 
 
  // Set the labels, this variable is used in the $ args array
 $ labels = array (
 'name' =&gt; __ ( 'Movie Reviews' ) ,  
 'singular_name' =&gt; __ ( 'Movie Review' ) ,  
 'add_new' =&gt; __ ( 'Add New Movie Review' ) ,  
 'add_new_item' =&gt; __ ( 'Add New Movie Review' ) ,  
 'edit_item' =&gt; __ ( 'Edit Movie Review' ) ,  
 'new_item' =&gt; __ ( 'New Movie Review' ) ,  
 'all_items' =&gt; __ ( 'All Movie Reviews' ) ,  
 'view_item' =&gt; __ ( 'View Movie Reviews' ) ,  
 'search_items' =&gt; __ ( 'Search Movie Reviews' )  
 ) ;
 
  // The arguments for our post type, to be entered as parameter 2 of register_post_type ()
 $ args = array (
 'labels' =&gt; $ labels,
 'description' =&gt; 'Holds our movie reviews' ,
 'public' =&gt; true,
 'menu_position' =&gt; 6 ,
 'supports' =&gt; array ( 'title' , 'editor' , 'thumbnail' , 'excerpt' , 'comments' , 'custom-fields' ) ,  
 'has_archive' =&gt; true,
 'show_in_admin_bar' =&gt; true,
 'show_in_nav_menus' =&gt; true,
 'has_archive' =&gt; true
 ) ;
 
  // Call the actual WordPress function
  // Parameter 1 is a name for the post type
  // $ args array goes in parameter 2.
 register_post_type ( 'review' , $ args ) ; 
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If this plugin is activated, you will see two new links in the Admin Control Panel navigation, directly under the Posts link.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Move the mouse around it to see the 'View All' and 'Add New' sub-links. Of course, the text in the sub-links will be the text you have created in the relevant&nbsp;<strong>$ labels&nbsp;</strong>array. See the editor to check where the label was changed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Limiting Custom Fields to Specific Post Types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>No need to wait long. Custom fields can be saved quickly after being added to a post. The custom fields you add will appear in the drop-down list for each post. Of course, this won't be very clear if you want to find the required fields in a certain post type. If you're going to restrict custom fields to appear only in certain post types, the easiest way is to use a plugin.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Advanced Custom Fields plugin will add a simple editor to WordPress so you can create custom fields and set them to appear only in certain post types.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can set the input type to the field, for example, a text box, email address text area, or something more sophisticated, like&nbsp;<em>embed&nbsp;</em>&nbsp;Google maps so you can choose a location to highlight and display in the post.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Besides, you can also adjust the custom field layout on the&nbsp;<em>edit screen</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since these fields were created with plugins, to display them, you must use the plugin function. This will be explained in the next section.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>New Post Type&nbsp;<em>styling&nbsp;</em></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>New post types need a template. For that, create a file in the main directory with the correct name. WordPress will use&nbsp;&nbsp;<strong>single.php&nbsp;</strong>&nbsp;and&nbsp;&nbsp;<strong>archive.php</strong>&nbsp;to keep the posts and archives unchanged if the template is not created.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Templates for&nbsp;&nbsp;<em>individual posts&nbsp;</em>&nbsp;-&nbsp;&nbsp;<strong>single- {post-type} .php</strong></li><li>Template for archive pages -&nbsp;&nbsp;<strong>archive- {post-type} .php</strong></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>{post-type}&nbsp;</strong>&nbsp;in filename must come from the name in parameter 1&nbsp;&nbsp;<strong>register_post_type ()</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>For the post-movie type, the file names are&nbsp;&nbsp;<strong>single-movie.php&nbsp;</strong>&nbsp;and&nbsp;&nbsp;<strong>archive-movie.php</strong></li><li>For post-review&nbsp;<em>movie</em>&nbsp;types, the file names are&nbsp;&nbsp;<strong>single-review.php</strong>&nbsp;and&nbsp;<strong>archive-review.php</strong>.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The best way to start&nbsp;<em>styling the&nbsp;</em>post type is to duplicate&nbsp;&nbsp;<strong>single.php&nbsp;</strong>&nbsp;or&nbsp;&nbsp;<strong>archive.php&nbsp;</strong>&nbsp;and rename it as mentioned above. This indicates that the entire structure is the same as the theme and that all the required template tags are in place.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Display Custom Fields in Post</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To display custom fields created in the standard WordPress editor, you can use these two functions.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// Generates all custom fields attached to the post in a &lt;ul&gt; list
the_meta ();

// Get a specific piece of information
echo get_post_meta ($ post-&gt; ID, 'Budget', TRUE);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This function redirects to the template file used to display your post.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>the_meta ()</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This function displays all the custom fields that are attached to the post in the &lt;ul&gt; list. The result will be like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;ul class = 'post-meta' &gt;
 &lt;li&gt;
 &lt;span class = 'post-meta-key' &gt; { your_key } &lt;/span&gt; { your_value }
 &lt;/li&gt;
&lt;/ul&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This function can be used anywhere in the single post template. However, if you want to put it somewhere else, then place it inside the <a href="https://www.wpbeginner.com/glossary/loop/" target="_blank" aria-label="WordPress loop (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">WordPress loop</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>get_post_meta ()</h4>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>This function takes 3 parameters and&nbsp;<em>returns the</em>&nbsp;result.</li><li>The first parameter is the ID of the post. You can use the&nbsp;<strong>$ post-&gt; ID&nbsp;</strong>&nbsp;here to get the ID of the recently viewed post.</li><li>The second parameter is the name of the custom field and is very sensitive.</li><li>The third parameter is a&nbsp;&nbsp;<em>boolean&nbsp;</em>named&nbsp;&nbsp;<strong>$ single&nbsp;</strong>and can be set to TRUE (result as a string) or FALSE (result as an array).</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>NOTE</strong>: You can create multiple custom fields with the same name and different values. If there are multiple fields with the same name, set it to FALSE to return an array of all custom fields.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;? php
  $ movie_box_art = get_post_meta ($ post-&gt; ID, 'Box Art', TRUE);

if (! empty ($ movie_box_art)) {?&gt;
  &lt;div class = "movie-poster-box"&gt;
    &lt;img src = "&lt;? php echo $ movie_poster?&gt;" alt = "&lt;? php single_post_title ();?&gt;"&gt;
  &lt;/div&gt;
&lt;? }?&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Since the&nbsp;<strong>get_post_meta ()&nbsp;</strong>&nbsp;function can return a value, you can use the conditional statement's value<em>&nbsp;</em>to change the layout accordingly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the example above, we checked whether the&nbsp;<em>box art had</em>&nbsp;been switched to&nbsp;<em>a movie&nbsp;</em>via the custom field. If&nbsp;&nbsp;<strong>$ movie_box_art is&nbsp;</strong>filled, then&nbsp;<em>echo the&nbsp;</em>div and image.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Displays&nbsp;<a rel="noreferrer noopener" target="_blank" href="https://wordpress.org/plugins/advanced-custom-fields/" class="rank-math-link">Advanced Custom Fields</a></h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// Display field value
the_field ('FIELD NAME');

// Return field value
get_field ('FIELD NAME');</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The Advanced Custom Fields plugin has its functions and shortcodes for displaying fields.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>the_field ('FIELD NAME');</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This function displays the value of a particular field. We recommend that you use the Field Name that you entered when creating the&nbsp;<em>field group</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>get_field ('FIELD NAME');</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This function&nbsp;<em>returns the&nbsp;</em>value of a specified field, very useful for&nbsp;<em>conditional statements</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You will need this function. There are many advanced functions, and you can look for them in&nbsp;<a rel="noreferrer noopener" target="_blank" href="https://www.advancedcustomfields.com/resources/#functions" class="rank-math-link">the official&nbsp;<em>Documentation</em></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Shortcode</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&#91;acf field = "FIELD NAME"]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can directly display the fields in the post using the shortcode above.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Display Custom Post Type on Front Page</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/ Hook our custom function to the pre_get_posts action hook
add_action ('pre_get_posts', 'addkamah_to_frontpage');
 
// Alter the main query
function addlake_to_frontpage ($ query) {
    if (is_home () &amp;&amp; $ query-&gt; is_main_query ()) {
        $ query-&gt; set ('post_type', array ('post', 'movie', 'review'));
    }
    return $ query;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Custom post types are not displayed on the front page by default. Therefore, you have to write a new function to call&nbsp;<strong>the&nbsp;</strong><em>method&nbsp;</em><strong>set&nbsp;</strong>of the WordPress&nbsp;<strong>WP_Query</strong>&nbsp;object.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This function checks if the&nbsp;<em>visitor&nbsp;</em>is on the main page and checks whether the active query is the primary created by WordPress.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>$ query-&gt; set ()&nbsp;</strong>&nbsp;takes two parameters:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>The first parameter is the&nbsp;<em>property&nbsp;</em>you want to change if you want to change the&nbsp;&nbsp;<strong>post_type&nbsp;</strong><em>property</em>.</li><li>The second parameter is an array that you want as the value of the&nbsp;<em>property&nbsp;&nbsp;</em><strong>post_type</strong>.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>In the code above, the array starts with 'posts' - this is because every post in WordPress has a post type 'post,' and we want to include it on the front page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want only custom posts of a certain type on the front page, you can delete the 'post' and use the custom post type you want.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the examples in this tutorial, we want to add 'movie' and 'review' to the array. As a result, you will see the regular posts on the front page, all the posts about the&nbsp;<em>movie,&nbsp;</em>and their reviews.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The value you enter must be the name used in parameter 1 of the&nbsp;<strong>register_post_type ()</strong>&nbsp;function.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In this tutorial, you've learned how to create custom post types and know what required information. Apart from being flexible, custom post types also have several important features for websites built with WordPress.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the custom post type is combined with categories and taxonomies, you can control the posts and content.</p>
<!-- /wp:paragraph -->
