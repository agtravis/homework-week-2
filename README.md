# Week two homework

## Building a website using only HTML and CSS, but also using Bootstrap to add features and make responsive

### [Link](https://agtravis.github.io/homework-week-2/index.html) to uploaded webpage (most recent commit)

## First Commit

Since this page was going to be based around the first assignment, I knew there was a lot of code I could re-use. For the CSS, I decided I would copy the whole stylesheet from the first homework, and adapt as necessary. For the HTML however, I decided that it would be best to start with a new empty file, and copy and paste in appropriate chunks. This is because even though a lot of the styles are the same, due to importing the bootsrap classes for responsive features a lot of the containers will need so much CSS reworked, it is better to start from scratch.

## Browsing Bootstrap

Having wrapped my head around basic HTML and CSS concepts at this point, I really wanted to challenge myself with this task. Therefore I chose some fairly ambitious features to implement: a carousel, and a navbar that includes a dropddown menu. I understood that in order to get these to work, I would need to include the JavaScript and jQuery links that Bootstrap provides (not necessarily requiring any knowledge of the operation of the JavaScript involved), so my very first step for the HTML was to copy the **Starter Template** provided on the Bootstrap documentation page. This also includes the ```stylesheet``` link for the ```<head>``` section.

## Practice Site

Before trying to implement any of this, I wanted to play around with the concepts some more, especially the responsive features. I created an index.html file specifically for this purpose. To see the code and functionality I played with, this [repo](https://github.com/agtravis/bootstrap-practice) and [page](https://agtravis.github.io/bootstrap-practice/) can be accessed. Once I felt comfortable I was ready to apply to my portfolio. I also knew that with the features that I managed to implement successfully here I would be able to implement and debug in the future by referring back to this code, so I littered my HTML with comments to help myself.

## New Header

The main responsive feature I wanted with my header was to change the layout if it might be viewed on a smartphone. What I opted for is more stylized than the default options presented - I didn't want a button with 3 lines on it to bring up a dropdown menu, I wanted to reposition my links entirely. I achieved this by simply hard-coding two sets of links, and then by using Bootstrap classes to make one set of links only *visible* at the smallest screen size, and the other set only *hidden* on that same size. This is not the most efficient way to do this, but if the code is not identical (which it is not due to the drop down menu), it is not as simple as using Bootstrap column class assignment. I do use this concept however later in my project (portfolio page).

I thought it would be great to have a dropdown menu on the portfolio tab so that anyone looking at the page could go to the portfolio page if they wanted to see the thumbnails, or they could link direct to the project from the dropdown. I have actually made the first link a link to the first homework page, so my portfolio already has some useful functionality. On a small screen, I could choose to have my dropdown menu appear horizontally (```<ul class="navbar-nav">``` would do it), but on a narrow screen, once I had more than 3 items in my portfolio, this menu could be unsightly.

As with most Bootstrap, I have either removed elements I didn't like from the template code, or added to it. For example, when using the ```class="nav-link"``` I found that there was some ```padding``` applied in Bootstrap's CSS, so I overwrote that to remove it, and made it sync up nicely with my other code, with no loss in functionality. I did this by selecting the Bootstrap class, but I could have also done this by using an ID for the element. I only have one existence of this class, so I didn't need to worry about this styling affecting other elements, I would use ID if I had multiple elements but only wanted to affect change on this specific case, since ID supercedes class.

Due to the nature of the size of the ```<div>```s when scaling, and the size of the fonts being used, there is some unpleasantness when my name is briefly (for about 30 pixels or so) wrapped onto two lines. The header increases in height for that period to accommodate. There is no loss of functionality or visual aesthetic anywhere else, and so I did not spend any time trying to counter this - again I feel like using a ```@media``` query would be the best solution. This is only noticable when actually going through the process of changing the width of the screen, which most users do not spend time doing unless developers themselves; and on a smart phone my name only occupies one line.

As far as changes in the CSS from my first homework goes, I did have to re-adjust some ```width```s, some ```flex``` and some ```margin: 0 auto;``` instances, although as it goes with CSS, I would be hardpressed to recall specifically where, and it was not all in one clean ```git commit``` because of the nature of the changes happening as they were necessary. I used Chrome dev tools *A LOT* to get things where I wanted to be. I also have done my best to remove any redundant properties or even selectors that are no longer relevant.

I wrote some ```:hover``` pseudoclass CSS styled as well on the links.

## Index.html / Main Content

I **REALLY** struggled for a long time to get my header and main content boxes to line up perfectly. And just when I would manage to get it right, I would adjust the screen width, and the responsiveness would show me I had just made it worse. So, after doing some research, I discovered the concept of ```container-fluid```, which is comparing width to the full screen, rather than the containing ```<div>``` or anything else, and this seemed to be the key to solving this problem. I also struggled with the width of the content on ```contact.html``` and ```portfolio.html```, but this turned out to be simple and due to the content not being wide enough to force the ```<div>``` to the maximum width, and so I set the width in CSS to be 100%, which resolved it.

I applied the same responsive column dispensation to the main content as to the header, so on the ```XS``` or (as it is now operates) ```COL``` there are no margins (the content takes up all 12 columns).

I also applied some responsive features to my profile photo, using the same trick as the repositioning of my navbar (i.e. it is a different ```<img>``` tag with a different class). On ```COL``` size screen there is no image left-float so the text no longer wraps, and it is centered and smaller. Even though it is different code in the HTML, it is still the same image FILE, and so therefore the browser does not have to load two images, although some additional processing bandwidth will be used to manipulate the image in the resizing.

## Portfolio.html

I have implemented slightly different responsive screen sizes on this page. The Header still alters at the ```COL``` size screen, and indeed so does the content container ```<div>```, however the actual portfolio switches from a carousel to columns of image links at screen size ```MD```. I further applied different column allocations at each screen size, so plenty of responsive changes happen as the browser shrinks width.

To implement the carousel, again I started by simply copying the code on Bootstrap. Some of their class names are fairly intuitive, so I changed ```w-100``` to ```w-75```, and true to my assumption: the size reduced by 25%. Once I had coded my own images, I noticed that the next/previous glyphicons imported were outside the boundary of the ```<img>```, so I created my own class in CSS with the same name (to overwrite Bootstrap defaults), and adjusted the positioning so they would be visible.

One area I really tried unsuccessfully to resolve was to change the color of the glyphicons. I saw techniques working on resources like *w3schools 'Try it!'* but for whatever reason I could not implement them into my own code. If this is entirely not possible, then I could either simply use darker images, or give the glyphicon some background color - I did play around with this, but was spending too much time on something that was not overtly important, so I undid all my changes and decided to leave it for now.

I did encounter some ```z-index``` issues with the carousel indicator glyphicon in that it was showing over the footer. I gave the footer a ```z-index``` of *2*, however this did not resolve in the same way it did for the header issues I was having in the first homework. After some research I discovered that Bootstrap classes use ```z-index``` values of *1000-1070*, so to be sure I set my footer ```z-index``` to *1080* and this proved the magic number, and worked perfectly. I expect there would be similar issues with the other glyhpicons, however my page doesn't scroll that far, and ```z-index``` is a property I have been directed to avoid where possible, so I have not assigned it anywhere else, but could add later if necessary.

In class I overheard some conversation about *responsive* images versus *fluid* images. This concerned me because I was unsure of the difference, and also if my attempt at including these concepts was accurate. After discussion with Dane, he showed me explicitly what was required, and so I spent some time adapting my portfolio page.

I kept the carousel on the large screen size. Anything below large and the carousel disappears, and instead is a grid system using Bootstrap columns and rows. The column classes mean that the grid is responsive dependent on the size of the screen. Here is the collection of classes I am using for my portfolio page (screen size medium or smaller):

```<div class="col-lg-6 col-md-6 col-sm-12 col-6">```

The first class is irrelevant. It dictates that on large screen mode, this div will occupy 6 of the 12 columns, or 50%. However, in an ancestral container, ```d-lg-none``` is used as a class, which hides that whole ancestor (containing this descendent) on large screen mode. I have left this class applied in the event I later decide not to use the carousel for the large screen, but for now it is redundant.

The next class states that on medium size, the column will again occupy 6 of the available 12 allocations, and so does the final class for smart phone screens - meaning the user sees two columns of images. The penultimate class here specifies that on the small size screen the column now occupies the full width of the div, taking up all 12 columns, and the user sees only one column.

In short: on large format there is a carousel, on medium it is 2 columns, on small it is 1 column, and on the smallest size again it is 2 columns.

As the window width contracts, the columns get narrower. One way to handle content in this situation is to apply the Bootstrap class ```img-fluid``` to the images. I have opted to apply this so that the images will shrink as the window does, as opposed to having hard coded CSS widths applied, or ```@media``` queries.

In both cases I have made the parent element of the image and text ```relative```, and the text is ```absolute``` and positioned in a place that works visually for me.

Here as well I have replaced the placeholder image and text with an actual link to the first homework, and these links (and in the navbar dropdown) are coded with ```target="_blank"``` to ensure the browser opens in a new window.

One somewhat buggy feature of using fluid images is how an ```absolute```ly positioned element over the fluid element behaves during motion. When the image dramatically changes sizes (when the screen size increases/decreases and columns switch from 6 to 12), the placement of the ```absolute``` element appears to shift position. It is positioned to a ```relative``` container, and so is fixed to that element *as it changes*. This gave me some difficulty trying to navigate, and so I decided that since Bootstrap applies a *mobile first* ethos to its styles, I should too. With that in mind I used Google's dev tools to view my page as a smart phone, and played with the CSS from there until I was happy - and then as a last step made sure it didn't look ridiculous on a larger image as it scaled.

To counter this effect, instead of simply not using the class, I could incorporate the absolute element into that actual file of the image, therefore the image would not require any additional formatting, and thus would transition smoothly. However, on a very small screen, the text would not compensate for this (with ```<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">```), and could be illegible. Another solution would be to hard code different sections to appear visible at explicit and unique screen sizes, then I could perfectly align the position for each set of HTML. Alternatively, I could remove the ```fluid```ity of the images, but for the purposes of this task I want to illustrate it.

Not having time enough to get too far into this, I opted for the best aesthetic choice available to me in my opinion and moved on.

## Contact.html

Not much has changed on this page, except since the page is now responsive, I have changed the lengths of the ```input```s. Previously they were hard coded in the HTML with attributes, however now I have given them ```width: 100%;``` properties in the CSS, so now they contract when the screen is less wide proportionately.

I also was unhappy with the way the button looks when it scrolled. It was the same color as the top border of the footer, and so when positioned behind or right up against the footer they appeared to merge together. I spent some time playing around with different color arrangements (sticking to the established color family), until I was happy. I also used a ```:hover``` pseudoclass to the button to darken it when the cursor is over it.

## Form Validation & basic JavaScript

HTML 5 has some potential to ensure a user will fill out a ```<form>``` correctly, for instance: ```input type="email"``` means that if a user hasn't entered an '@' character for example, when the cursor is over the field in question, a message displays directing the user to address the issue.

I had not planned on utilizing any JavaScript in this portfolio, because it clearly comes outside the boundary of the brief. However, after talking with Spencer on the subject, he encouraged me to push myself and and write some code if I could to interface with the page, so I have. This is for my own personal desire to see a project behave the way I want it, and I do not expect it to be considered towards my final grade, as long as its inclusion does not negatively impact my grade (the ONLY content of my ```.js``` file relates to this validation, no other JavaScript features exist). As such, there is a second ```readme.md``` to act as a coda to the project [here](https://github.com/agtravis/homework-week-2/blob/master/README2JS.md), and this is mostly for my own reference.

I became aware that Bootstrap does provide form validation features very late in the run up to the submission date, after observing a class-mate's succesful implementation. I would consider implementing some elements myself, however I do not like the design layout of the form, and would want to apply a lot of my own styles to it. I do not have enough time to experiment at this point, but I like that this option exists.

## Learning from Feedback from Homework 1

### Validating HTML

In review of my first homework, Elrey provided me with this resource: *https://validator.w3.org/#validate_by_input*. In pointing out the flaws (which the forgiving browser chose to overlook) of my code, this proved very useful in two distinct ways.
1. It obviously showed me where to correct my code. I had a couple of ```<div>```s I had not closed off on two of my HTML pages, and I would not have noticed this without the aid of this tool. I also had multiple ```<div>```s with the same ID, which had not caused any issues - and therefore gone unnoticed - since there was no CSS actually referencing the multiple IDs. Removing the ID attributes fixed the issue.
1. I was able to learn new concepts with regards to the HTML, both with regards to conventions (add ```<h#>``` tags to an ```<article>```) and definitions (the code copied from Bootstrap contained attributes I did not understand, and previously had assumed were simply essential for the code to work. However when the validation pointed out how one of the attributes was throwing an error, in order to fix the error I had to understand why there was an error. Specifically I am referring to ```aria-labelledby="dropdown_target"```, and in this instance it is to do with accessibility, and how a screen reader might title a section it is reading - to fix this I had to give another element an ID matching the value of this attribute, and then the reader would use the content of that element as the title for this element). *This error was evidently caused by my cherry-picking from the Bootstrap HTML.*

![Validator Finds](https://github.com/agtravis/homework-week-2/blob/master/assets/images/html-errors-index.PNG)

### In-line Styling

I transferred the styling of the image (width) from an HTML attribute to the CSS. This makes complete sense.

### Submit Button

In my README for the first homework I had mentioned that instead of using a ```<submit>``` button for the form I had used ```<a>``` for the styling benefits this brings. I had indeed, as Elrey highlighted, actually used ```<p>``` tags. Beyond this observation, another error here was that I had used ```<p>``` with an ```href=""``` attribute. First, I removed the attribute, and second I styled the cursor to *appear* as though it is a link when it hovers over the element (using ```cursor: pointer;```). I will be using JavaScript to make this element operate like a submit button. It remains a ```<p>```. NOTE: *This will not entirely function like a submit button - since it is not a ```<button>``` it cannot be selected by the cursor, and it cannot be submitted by hitting the return key either*.

### Personal Information

I was marked down for not including a personal bio. I will be including that on this submission, and acknowledge that I will be updating this as I gain more experience and am exposed to conventions and techniques.

## Future Endeavors

I still expect to eventually make the contact form perform its anticipated function, beyond the JavaScript I have coded. Without knowing anything about the technology, form submission frequently uses PHP, and to interact with a database either SQL or JSON, whichever route we take.

I hope to be able to implement the concept of *views* so I can write one page of HTML for the contents of the ```<header>```, similar to how the CSS operates when accessed from multiple webpages.

Obviously my portfolio projects will be updated as they are completed, and I do not anticipate using my first homework as a real project for a professional portfolio (*"Here is a link to an inferior version of this portfolio!"*), that is only there as a placeholder example.

I would also like to address some of the responsive features that Bootstrap classes do not transition as cleanly as I would like.

