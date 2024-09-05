---
title: How to Protect your WordPress Site from Brute-force Attacks
date: '2020-09-26'
slug: protect-your-site-from-brute-force-attacks
---
<!-- wp:paragraph -->
<p>Brute-force attacks pose a real and very dire threat to WordPress users. These attacks rely on various brute force methods. If someone manages to figure out your username and password, your site may be damaged, or all of its content will be deleted instantly. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you also lose access to your email, you will not be able to return to your account to restore your website.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are several ways to block your site and make it more resistant to potential attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is better to take security measures now than wait until you lose access to your account. With the right tactics, successful brute-force attacks can be stopped, or most attempts can be prevented altogether.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>What is a brute-force attack?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are many ways to hack someone's account.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>find a vulnerability on a website,</li><li>trick someone into giving up their password, or</li><li>install a keylogger on a computer and steal data.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The problem is that all these actions are expensive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead, attackers usually resort to a much simpler method: guessing. And you will be surprised how effective it can be; many people have usernames and passwords that are very easy to guess.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Guessing is a tedious process, which is why attackers usually use automated programs that can guess hundreds of combinations in one second. These programs are launched through a list of common passwords. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the attempt fails, they either move on or resort to random combinations of words, letters, and symbols until they get the right solution. A weak password can be cracked in as little as 29 milliseconds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An essential difference between brute force attacks and other forms of password theft is that they do not involve spyware, social engineering, or manipulating vulnerabilities on your site. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Manually or with a program, they try to guess the usernames and passwords until they breakthrough.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>What makes WordPress Vulnerable</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>WordPress is powered by 37.6% of all websites. It's a boon in many ways – an active community makes it the most accessible CMS. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unfortunately, this makes it available to attackers who want to take advantage of its ubiquitous distribution.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Security vulnerabilities in WordPress are universal – they apply to all the websites it runs on. One tiny hole in a system can affect millions. All attackers have to guess the username and password, and they have access to all content.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By default, WordPress has several security flaws:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>The admin login screen is always in the same place.</li><li>Older WordPress installations used the default username "admin," which means hackers only had to guess your password.</li><li>Anyone can try to log in as many times as they want.</li><li>If someone from a new IP address logs into your account, you will not receive a notification, and no code is required to do so.</li><li>Multiple admin users mean several potential ways to hack your backend and mess things up.</li><li>By default, WordPress doesn't come with a firewall. Many do not even know that they need it.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>All you have to do is find out if you are using WordPress (which is trivial: there is a site that defines WordPress ) and could be a victim of any of these vulnerabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>How to Protect your WordPress site from brute-force attacks?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Using WordPress might give you extra scrutiny from hackers, but you're not entirely vulnerable. The platform comes with some security measures to protect you. Take a few extra steps, and you will deflect the brunt of these attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is difficult to prevent someone from deciding on access to your account since they already know all these tricks. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is no guarantee they won't find a way out. But doing something is better than doing nothing, and most hackers give up when faced with any significant obstacle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let's know these 7 perfect ways to protect your&nbsp;<strong>WordPress site from brute-force attacks</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>1. Use a strong Username and Password.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>81% of hacks use stolen or weak passwords. They will try the most common credentials and move on to an easier target.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A strong username and password will stop most attacks. Here are some tips for choosing them:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>The length is at least six characters, ideally more than 15. The longer, the better.</li><li>Use a mix of uppercase and lowercase letters, numbers, and symbols.</li><li>Do not use the same password on multiple websites – if one of them gets hacked, the other could suffer its fate.</li><li>Avoid common passwords like "parol", "abc123", "qwerty" or simple words. Avoid usernames such as "user", "username" or "admin".</li><li>Do not enter personal information like your name, address, or even your pet's name. This will be the first thing attackers can try.</li><li>Gibberish passwords are difficult to remember but secure. Try using a password manager for tracking.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To change your password, go to the&nbsp;<em>Users&gt; Your Profile</em>&nbsp;page. Scroll down and click&nbsp;<em>Create Password</em>. You can save or enter a new one and then click&nbsp;<em>Update Profile</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unfortunately, it is not possible to change your default username. If you want a more secure one, you can try the Username Changer plugin or create a new admin and delete the old one. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also change the name directly in the database using <strong>phpMyAdmin</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>2. Secure accounts of other users</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While your administrator account is by far the most critical to blocking out, it is not the only login. If another user with edit rights is compromised, your site may be deleted or damaged.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is no way to check any of your users' current passwords as WordPress encrypts them. But you can change them yourself to keep them safe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Just go to&nbsp;&nbsp;<strong>Users&gt; All Users</strong>&nbsp;and find the account you want to change. Scroll down to&nbsp;<strong>generate a password</strong>. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Enter your own or use a random one that WordPress generates. Be sure to inform the user that their old credentials will not work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Again, changing the username is not possible without editing the database or plugin. If you want to change it without these methods, create a new user account and delete the old one. Be sure to transfer his articles to your new account.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>3. Install a firewall</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Any site without a firewall is vulnerable not only to brute attacks but other forms of hacking that exploit holes in your security.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A firewall cannot wholly stop brute-force attacks by method, but it can detect malicious traffic and provides tools to block suspicious IP addresses.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Other useful features might include strong passwords, CAPTCHAs, and geo-blocking for countries commonly involved in hacker incidents.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It may also have a blacklist of IP addresses known to be associated with suspicious activity. Installing a web firewall application can have a massive impact on the number of attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Wordfence is a well-known security plugin that comes with a firewall and can defend against brute force attacks. Sucuri is another excellent option, although its firewall isn't free. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All In One WP Security &amp; Firewall / is 100% free and has brute-force protection and many other features.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>4. Turn on two-factor authentication (2FA)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While a strong password is your best defense, and a firewall is a great security tool, implementing two-factor authentication is the next critical step that makes you immune to account loss.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2FA adds an extra step to log in. One option: asks a security question. While it may help, the best solution is to send the code to your email or phone. Without a code, no one can enter.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Using another device, such as a phone, is the best way to prevent rude coercion. Get the code sent to you, and unless you have malware on your phone or someone hasn't physically taken over your phone, your account is pretty much secure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But, like any other method of protection, it is not 100% reliable. Sometimes there are ways to manipulate the server to get through the 2FA, and you can always fall prey to social engineering.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It can also be annoying to have to open your email or look at your phone every time you sign in. But the benefits far outweigh this slight inconvenience.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Among other security features, the Wordfence plugin includes two-factor authentication. If you're looking for something a little more focused, try Google Authenticator, which works with the popular 2FA or Two-Factor app.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>5. Limit login attempts</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Brute-force attacks rely on the ability to test tens or even hundreds of username and password combinations as quickly as possible. In a clean WordPress install, the only thing stopping this is the capacity of your server.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By restricting login attempts, anyone who uses the wrong password multiple times in a row will be blocked. If the attackers get just a few tries, the chances of guessing correctly are minimal.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Disadvantage: It will bite you if you forget your password, and this annoys legitimate users. You can always have less stringent settings with less blocking times and increased security when you notice suspicious behavior from a specific IP.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Limit Login Attempts Reloaded and WP Limit Login Attempts do their job well. These plugins are not reliable. If hackers use a VPN, reset their IP address, or use a program that attacks multiple IP addresses, they can easily bypass it. This is why it is essential to add multiple layers of security.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>6. Hide login page</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>WordPress's big problem is that it's easy to find the login page and start executing a password cracking script. Just add&nbsp;&nbsp;<strong>/ login, / admin&nbsp;or&nbsp;&nbsp;/wp-login.php</strong>&nbsp;&nbsp;to any WordPress site URL, and you will receive a login prompt.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The change in location won't fool everyone, as there are other ways to detect it, but it can stop multiple attacks or delay them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>WPS Hide Login allows you to change the URL of the login page. No one will be able to access the regular login pages. While workarounds exist, changing the login page will put an end to most hacking attempts.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>7. Update WordPress</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In 2018, 44% of WordPress hacks happened when using outdated software. Brute-force attacks don't usually exploit such vulnerabilities, but it's worth mentioning how important it is to keep WordPress up to date. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Go to&nbsp;<strong>Dashboard&gt; Updates</strong>&nbsp;now and make sure you are using the latest version of WordPress.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You should also back up your site manually or with a plugin like UpdraftPlus. If someone manages to log in, they can delete articles and pages, modify them by inserting unnecessary images and text or even inject malicious code into your theme.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With a backup, you can press a button and restore everything to normal. Without such a copy, you will have to manually go through the entire site and fix anything they might break. Anything deleted will be lost forever.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Summary – Stop brute-force attacks in WordPress</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If your site has been hacked, the recovery process can take days or weeks. Attackers can delete articles, delete users, spoil your home page, or insert malware into your site, which is very difficult to fix. And if your email gets hacked, you could lose everything.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Creating a good password is the best way to prevent a hack, but there are other, more technical methods you can try to block login. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Installing a security plugin or firewall, enabling two-factor authentication, and limiting login attempts will give you the best chance to survive a brute-force attack or prevent it altogether.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now let's hear your story in the comments: Has your WordPress site been hacked? What happened, and how did you manage to regain access?</p>
<!-- /wp:paragraph -->
