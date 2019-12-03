# Week two homework

## Building a website using only HTML and CSS, but also using Bootstrap to add features and make responsive

### [Link](https://agtravis.github.io/homework-week-2/index.html) to uploaded webpage (most recent commit)

## First Commit

Since this page was going to be based around the first assignment, I knew there was a lot of code I could re-use. For the CSS, I decided I would copy the whole stylesheet from the first homework, and adapt as I went along. For the HTML, I also decided that it would be best to start with a new empty file, and copy and paste in appropriate chunks. This is because even though a lot of the styles are the same, due to importing the bootsrap classes for responsive features a lot of the containers will need so much CSS reworked, it is better to start from scratch.

## Browsing Bootstrap

Having a somewhat decent understanding of HTML and CSS at this point, I really wanted to challenge myself with this task. Therefore I chose some fairly ambitious features to implement: a carousel, and a navbar that includes a dropddown menu. I understood that in order to get these to work, I would need to include the JavaScript and jQuery links that Bootstrap provides, so my very first step for the HTML was to copy the **Starter Template** provided on the Bootstrap documentation page. This also includes the ```stylesheet``` link for the ```<head>``` section.

## Practice Site

Before trying to implement any of this, I wanted to play around with the concepts some more, especially the responsive features. I created an index.html file specifically for this purpose. To see the code and functionality I played with, this [repo](https://github.com/agtravis/bootstrap-practice) and [page](https://agtravis.github.io/bootstrap-practice/) can be accessed. Once I felt comfortable I was ready to apply to my portfolio.

## New Header

The main responsive feature I wanted with my header was to change the layout if it might be viewed on a smartphone. What I opted for is more stylized than the default options presented - I didn't want a button with 3 lines on it to bring up a dropdown menu, I wanted to reposition my links entirely. I achieved this by simply hard-coding two sets of links, and then by using Bootstrap classes to make one set of links only *visible* at the smallest screen size, and the other set only *hidden* on that same size. I realize that this is not the most efficient way to do this, but the objective of the task at hand is to minimize ```@media``` queries and implement Bootstrap, and with ```@media``` queries I could get ONE ```<div>``` to simply reposition at certain screen widths, by utilizing ```display: block/inline;``` and other CSS properties.

I also thought it would be great to have a dropdown menu on the portfolio tab so that anyone looking at the page could go to the portfolio page if they wanted to see the thumbnails, or they could link direct to the project from the dropdown. I have actually made the first link a link to the first homework page, so my portfolio already has some useful functionality.

As with most Bootstrap, I have either removed elements I didn't like from the template code, or added to it. For example, when using the ```class="nav-link"``` I found that there was some ```padding``` applied in Bootstrap's CSS, so I overwrote that to remove it, and made it sync up nicely with my other code.

Due to the nature of the size of the ```<div>```s when scaling, and the size of the fonts being used, there is some unpleasantness when my name is briefly for about 30 pixels or so wrapped onto two lines. The header increases in height for that period. There is no loss of functionality or visual aesthetic anywhere else, and so I did not spend any time trying to counter this - again I feel like using a ```@media``` query would be the best solution.

As far as changes in the CSS from my first homework goes, I did have to re-adjust some ```width```s, some ```flex``` and some ```margin: 0 auto;``` instances, although as it goes with CSS, I would be hardpressed to recall specifically where, and it was not all in one clean ```git commit``` because of the nature of the changes happening as they were necessary. I used Chrome dev tools *A LOT* to get things where I wanted to be.

I also have some ```:hover``` pseudoclass CSS styled as well on the links.

## Index.html / Main Content

I **REALLY** struggled for a long time to get my header and main content boxes to line up perfectly. And just when I would manage to get it right, I would adjust the screen width, and the responsiveness would show me I had just made it worse. So, after doing a lot of research, I discovered the concept of ```container-fluid```, which is comparing width to the full screen, rather than the containing ```<div>``` or anything else, and this seemed to be the key to me. I also struggled for a long time with the width of the content on ```contact.html``` and ```portfolio.html```, but this turned out to be simply due to the content not being wide enough to force the ```<div>``` to the maximum width, and so I set the width in CSS to be 100%, which resolved it.

I applied the same responsive column dispensation to the main content as to the header, so on the ```XS``` or (as it is now called) ```COL``` there are no margins (the content takes up all 12 columns).

I also applied some responsive features to my profile photo, using the same trick as the repositioning of my navbar (i.e. it is a different ```<img>``` tag with a different class). on ```COL``` size screen there is no image float so the text no longer wraps, and it is centered and smaller. Even though it is different code in the HTML, it is still the same image FILE, and so therefore the browser does not have to load two images, although some additional processing bandwidth will be used to manipulate the image in the resizing.

## Portfolio.html

I have implemented slightly different responsive screen sizes on this page. The Header still alters at the ```COL``` size screen, and indeed so does the content ```<div>```, however the actual portfolio switches from a carousel to ```flex```ed image links at screen size ```SM```. The reason for this is I felt the carousel was shrinking too much, and on a smaller screen like a small tablet, It might be better to view the same as on a smartphone. But the overall page layout responds exactly the same as the other links on the page.

To implement the carousel, again I started by simply copying the code on Bootstrap. Some of their class names are fairly intuitive, so I changed ```w-100``` to ```w-75```, and true to my assumption: the size reduced by 25%. Once I had coded my own images, I noticed that the next/previous glyphicons imported were outside the boundary of the ```<img>```, so I created my own class in CSS with the same name (to overwrite Bootstrap defaults), and adjusted the positioning so they would be visible.

One area I really tried unsuccessfully to resolve was to change the color of the glyphicons. I saw techniques working on resources like *w3schools 'Try it!'* but for whatever reason I could not implement them into my own code. If this is entirely not possible, then I could either simply use darker images, or give the glyphicon some background color - I did play around with this, but was spending too much time on something that was not overtly important, so I undid all my changes and decided to leave it for now.

I did encounter some ```z-index``` issues with the carousel indicator glyphicon in that it was showing over the footer. I gave the footer a ```z-index``` of *2*, however this did not resolve in the same way it did for the header issues I was having in the first homework. After some research I discovered that Bootstrap classes use ```z-index``` values of *1000-1070*, so to be sure I set my footer ```z-index``` to *1080* and this proved the magic number, and worked perfectly. I expect there would be similar issues with the other glyhpicons, however my page doesn't scroll that far, and ```z-index``` is a property I have been directed to avoid where possible, so I have not assigned it anywhere else, but could add later if necessary.

For the smaller screen portfolio, the images are simply ```display: block;``` and stacked on top of eachother with margin.

In both cases I have made the parent element of the image and text ```relative```, and the text is ```absolute``` and positioned in a place that works visually for me.

Here as well I have replaced the placeholder image and text with an actual link to the first homework, and these links (and in the navbar dropdown) are coded with ```target="_blank"``` to ensure the browser opens in a new window.

## Contact.html

Not much has changed on this page, except since the page is now responsive, I have changed the lengths of the ```input```s. Previously they were hard coded in the HTML with attributes, however now I have given them ```width: 100%;``` properties in the CSS, so now they contract when the screen is less wide proportionately.

I also was unhappy with the way the button looks when it scrolled. It was the same color as the top border of the footer, and so when positioned behind or right up against the footer it appeared to merge with it. I spent some time playing around with different color arrangements (sticking to the color scheme), until I was happy. I also used a ```:hover``` pseudoclass to the button to darken it when the cursor is over it.

## Form Validation & basic JavaScript

I understand that HTML 5 has some potential to ensure a user will fill out a ```<form>``` correctly, for instance ```input type="email"``` means that if a user hasn't entered an '@' character for example, when the cursor is over the field in question, a message displays directing the user to address the issue.

I had not planned on utilizing any JavaScript in this portfolio, because it clearly comes outside the boundary of the brief. However, after talking with Spencer on the subject, he encouraged me to push myself and and write some code if I could to interface with the page, so I have. This is for my own personal desire to see a project behave the way I want it, and I do not expect it to be considered towards my final grade, as long as its inclusion does not negatively impact my grade (the ONLY content of my ```.js``` file relates to this, no other features exist). As such, there is a second ```readme.md``` to act as a coda to the project [here](https://github.com/agtravis/homework-week-2/blob/master/README2JS.md).

## Learning from Feedback from Homework 1

### Validating HTML

In review of my first homework, Elrey provided me with this resource: https://validator.w3.org/#validate_by_input. In pointing out the flaws (which the forgiving browser chose to overlook) of my code, this proved very useful in two distinct ways.
1. It obviously showed me where to correct my code. I had a couple of ```<div>```s I had not closed off on two of my HTML pages, and I would not have noticed this without the aid of this tool. I also had multiple ```<div>```s with the same ID, which had not caused any issues - and therefore gone unnoticed - since there was no CSS actually referencing the multiple IDs. Removing the ID attributes fixed the issue.
1. I was able to learn new concepts with regards to the HTML, both with regards to conventions (add ```<h#>``` tags to an ```<article>```) and definitions (the code copied from Bootstrap contained attributes I did not understand, and previously had assumed were simply essential for the code to work. However when the validation pointed out how one of the attributes was throwing an error, in order to fix the error I had to understand why there was an error. Specifically I am referring to ```aria-labelledby="dropdown_target"```, and in this instance it is to do with accessibility, and how a screen reader might title a section it is reading - to fix this I had to give another element an ID matching the value of this attribute, and then the reader would use the content of that element as the title for this element). *This error was evidently caused by my cherry-picking from the Bootstrap HTML.*

![Validator Finds](https://github.com/agtravis/homework-week-2/blob/master/assets/images/html-errors-index.PNG)

### In-line Styling

I transferred the styling of the image (width) from an HTML attribut to the CSS. This makes complete sense.

### Submit Button

In my README for the first homework I had mentioned that instead of using a ```<submit>``` button for the form I had used ```<a>``` for the styling benefits this brings. I had indeed, as Elrey highlighted, used ```<p>``` tags. Beyond this observation, another error here was that I had used ```<p>``` with an ```href=""``` attribute. First, I removed the attribute, and second I styled the cursor to *appear* as though it is a link when it hovers over the element (using ```cursor: pointer;```). I will be using JavaScript to make this element *behave* like a submit button. It remains a ```<p>```.

### Personal Information

I was marked down for not including a personal bio. I will be including that on this submission, and acknowledge that I will be updating this as I gain more experience and am exposed to conventions and techniques.

## Future Endeavors

I still expect to eventually make the contact form perform its anticipated function, beyond the JavaScript I have coded. Without knowing anything about it, form submission frequently uses PHP, and to interact with a database either SQL or JSON, whichever route we take.

I hope to be able to implement the concept of *views* so I can write one page of HTML for the children and descendents of the ```<header>```, similar to how the CSS operates.

Obviously my portfolio projects will be updated as they are completed, and I do not anticipate using my first homework as a real project for a professional portfolio (*"Here is a link to an inferior version of this portfolio!"*), that is only there as a placeholder example.

I would also like to address some of the responsive features that Bootstrap classes do not transition as cleanly as I would like.

