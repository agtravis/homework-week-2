# Week two homework

## Building a website using only HTML and CSS, but also using Bootstrap to add features and make responsive

### [Link](https://agtravis.github.io/homework-week-2/index.html) to uploaded webpage (most recent commit)

## First Commit

Since this page was going to be based around the first assignment, I knew there was a lot of code I could re-use. For the CSS, I decided I would copy the whole stylesheet from the first homework, and adapt as I went along. For the HTML, I decided that would be best to start with a new empty file, and copy and paste in appropriate chunks. This is because even though a lot of the styles are the same, due to importing the bootsrap classes for responsive features a lot of the containers will need so much CSS reworked, it is better to start from scratch.

## Browsing Bootstrap

Having achieved a somewhat decent understanding of HTML and CSS, I really wanted to challenge myself with this task. Therefore I chose some fairly ambitious features to implement: a carousel, and a navbar that includes a dropddown menu. I understood that in order to get these to work, I would need to include the JavaScript and jQuery links that Bootstrap provides, so my very first step for the HTML was to copy the **Starter Template** provided on the Bootstrap documentation page. This also includes the ```stylesheet``` link for the ```<head>``` section.

## Practice Site

Before trying to implement any of this, I wanted to play around with the concepts some more, especially the responsive features. I created an index.html file specifically for this purpose. To see the code and functionality i played with, you can view this [repo](https://github.com/agtravis/bootstrap-practice) and [page](https://agtravis.github.io/bootstrap-practice/). Once I felt comfortable I was ready to apply to my portfolio.

## New Header

The main responsive feature I wanted with my header was to change the style if it might be viewed on a smartphone. What I opted for is more stylized than the options they give you - I didn't want a button with 3 lines on it to bring up a dropdown menu, I wanted to reposition my links entirely. I achieved this by simply writing two sets of links, and then by using Bootstrap classes to make one set of links only visible at the smallest screen size, and the other set only hidden on that size. I realize that this is not the most efficient way to do this, but the objective of the task at hand is to minimize @media queries and implement Bootstrap, and with @media queries I could get this to simply reposition, perhaps by utilizing ```display: block;``` or something similar.

I also thought it would be great to have a dropdown menu on the portfolio tab so that anyone looking at the page could go to the portfolio page if they wanted to see the thumbnails, or they could link direct to the project from the dropdown. I have actually made the first link a link to the first homework page, so my portfolio already has some useful functionality.

As with most Bootstrap, I have either removed elements I didn't like from the template code, or added to it. For example, when using the ```class="nav-link"``` I found that there was some padding applied in Bootstrap's CSS, so I overwrote that to remove it, and made it sync up nicely with my other code.

Due to the nature of the size of the ```<div>```s when scaling, and the size of the fonts being used, there is some unpleasantness when my name is briefly for about 30 pixels or so wrapped onto two lines. The header increases in height for that period. There is no loss of functionality or visual aesthetic anywhere else, and so I did not spend any time trying to counter this - again I feel like using an @media query would be the best solution.

As far as Changes in the CSS go, I did have to re-adjust some ```width```s, some ```flex``` and some ```margin: 0 auto;``` instances, although as it goes with CSS, I would be hardpressed to recall specifically where. I used Chrome dev tools *A LOT* to get things where I wanted to be.

I also have some ```:hover``` pseudoclass CSS styled as well on the links.

## Index.html / Main Content

I **REALLY** struggled for a long time to get my header and main content boxes to line up perfectly. And just when I managed to get it right, I would adjust the screen width, and the responsiveness would show me I had just made it worse! So, after doing a lot of independent research, I discovered the concept of ```container-fluid```, which is comparing width to the full screen, rather than the containing ```<div>```, and this seemed to be the key to me. I also struggled for a long time with the width of the content on contact.html and portfolio.html, but this was simple due to the content not being wide enough to force the ```<div>``` to the maximum width, and so I set the width in CSS to be 100%, which resolved that. That was a long night!

I applied the same responsive column dispensation to the main content as to the header, so on the ```XS``` or (as it is now called) ```COL``` there are no margins (the content takes up all 12 columns).

I also applied some responsive features to my profile photo, using the same trick as the repositioning of the navbar (i.e. it is a different ```<img>``` tag with a different class and width). on ```COL``` size screen there is no image float so the text no longer wraps, and it is centered and smaller. Even though it is different code in the HTML, it is still the same image FILE, and so therefore the browser does not have to load two images, although some additional processing bandwidth will be used to manipulate the image in the resizing.

## Portfolio.html

I have implemented slightly different responsive screen sizes on this page. The Header still alters at the ```COL``` size screen, and indeed so does the content ```<div>```, however the actual portfolio switches from a carousel to ```flex```ed image links at screen size ```SM```. The reason for this is I felt the carousel was shrinking too much, and on a smaller screen like a small tablet, It might be better to view the same as on a smartphone. But the overall page layout responds exactly the same as the other links on the page.

To implement the carousel, again I started by simply copying the code on Bootstrap. Some of their class names are fairly intuitive, so I changed ```w-100``` to ```w-75```, and correct to my assumption that reduced the size by 25%. Once I had placed in my own images, I noticed that the next/previous glyphicons imported were outside the boundary of the ```<img>```, so I created my own class in CSS with the same name (to overwrite Bootstrap defaults), and adjusted the positioning so they would be visible.

One area I really tried to resolve but couldn't, was to change the color of the glyphicons. I saw techniques on resources like *w3schools* but for whatever reason I could not implement them into my own code. If this is entirely not possible, then I could either simply use darker images, or give the glyphicon some background color - I did play around with this, but was spending too much time on something that was not overtly important, so I undid all my changes and decided to leave it for now.

I did encounter some ```z-index``` issues with the carousel indicator glyphicon in that it was showing over the footer. I gave the footer a ```z-index``` of *2*, however this did not resolve in the same way it did for the header issues I was having. After some research I discovered that Bootstrap uses ```z-index``` values of *1000-1070*, so to be sure I set my footer ```z-index``` to *1080* and this proved the magic number, and worked perfectly. I expect there would be similar issues with the other glyhpicons, however my page doesn't scroll that far, and this is a property I have been directed to avoid where possible, so I have not included it, but could add later if necessary.

For the smaller screen portfolio, the images are simply ```display: block;``` and stacked on top of eachother with margin.

In both cases I have made the parent element of the image and text ```relative```, and the text is ```absolute``` and positioned in a place that works visually for me.

Here as well I have replaced the placeholder image and text with an actual link to the first homework, and all these links (and in the navbar dropdown) are coded with ```target="_blank"``` to ensure the browser opens it in a new window.

## Contact.html

Not much has changed on this page, except since the page is now responsive, I have changed the lengths of the ```input```s. Previously they were coded in the HTML with attributes, however now I have given them ```width: 100%;``` properties in the CSS, so now they contract when the screen is less wide proportionately.

I also was unhappy with the way the button appear when it scrolled. It had the same color as the top border of the footer, and so when positioned behind or right up against the footer, it appeared to merge with it. I spent some time playing around with different color arrangements, sticking to the color scheme, until I was happy. I also gave a ```:hover``` pseudoclass to the button to darken it.