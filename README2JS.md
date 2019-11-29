# Implementing Basic JavaScript for Form Validation

I know that I will be referring to a lot of items in the HTML more than once, so in order to make my code easier to write (and to read) I start by getting those DOM nodes and storing them as variables using the syntax:

```var [appropriateName] = document.getElementById('[elementIdName]');```

The DOM variables are:
1. The form itself
1. The ```<p>``` element styled to look like a button
1. The input field for 'Name'
1. The input field for 'Email'
1. The ```<textarea>``` for the message

Next I declare three further variables but don't assign them a value yet. These will hold booleans.

The actual function starts by implementing the ```addEventListener()``` method on the 'submit' ```<p>``` that listens for a user click. When the user clicks, a callback function runs which will conditionally establish those boolean values.

First the function simply checks to see if the ```value``` of the 'Name' field is ```''``` meaning is it empty, but using the operator ```!==```. If it is not empty, the user entered *something*, and the appropriate boolean is set to ```true```. If the field is blank, the boolean is ```false```, there is an alert to this effect, and the ```focus()``` method ensures that the user is clued in further by placing the curser in the field that requires attention.

Second, a similar ```if/else``` statement performs a check on the 'Email' field, only this time there is a nested conditional statement if the user entered something. This time a further check is run to see if the input contains an '@' character. This is done by using the ```'indexOf('@')'``` method on the ```value``` property, and checking to see if it exists (if compared to a value of ```-1``` using the ```!==``` operator, and returns ```false```, '@' **exists** and therefore has an index of *at least* ```0```. If ```true``` then the index is ```-1``` meaning it *does not exist*). Dependent on the outcomes, a boolean is assigned and/or a message is alerted. *I could have also used the operator ```&&``` and avoided a nested statement, but would have had to navigate having different alerts, this is a choice.* *NOTE: if the index of '@' is zero, it wouldn't be a valid email address because email addresses cannot start with it. For a more in depth check, a regular expression could be used - see below.*

Third, the function does the exact same thing as the first conditional but on the 'Message' field.

Ultimately, if all three booleans have been returned ```true```, the form submits. All that happens so far with the user-data is that the user inputs can be seen in the URL bar, demonstrating that if the website were connecting to a server, *something* would happen.

## Regex

I know it is possible to validate forms by using regular expressions. I also know that using "```regex```" as a solution for anything is an issue that is up for debate. My personal feeling on the subject is that while I might consider using it on a password field, I would NOT use it on an email field. The main reasoning behind this is that while a user might enter something that is syntactically correct, it still does not make it a valid email address. A better system would be to simply check for the main prerequisite (@), and then utilize a system whereby a user is automatically sent a confirmation email including a *"Click here to validate this email address"* link. Then once the user clicks that link, the email is confirmed as valid AND existing. This would also provide an extra layer of security as far as identity theft is concerned.

While I do have a basic understanding of what regular expressions mean, I only partially understand how to actually make them functional within JavaScript, and so have ommitted them entirely from my code. However, below is an example of an expression I would use to validate email, along with my explanation of what it is doing. I did not create this expression myself (as much as anyone *can* create a regex...), but these *are* my own words in explanation:

```/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/```

Explanations by sections:

```/^([a-z\d\.-_]+)```  
```/^``` this must be at the beginning of the expression  
```()``` everything in the parentheses is evaluated as one expression within the larger expression  
```[]``` everything in the brackets is one character  
```a-z``` any lower case letter  
```\d``` any number (digit)  
```\.``` a period. (NOTE: '.' on its own means ANY character, the '\' ESCAPES the standard definition of any character following it)  
```-_``` the literal characters '-' and '_'  
```+``` the character preceding this must exist a minimum of one time  
  
```@``` there must be an '@' character at this point in the expression  
  
```([a-z\d-]+)```  
```()``` everything in the parentheses is evaluated as one expression within the larger expression  
```[]``` everything in the brackets is one character  
```a-z``` any lower case letter  
```\d``` any number (digit)  
```-``` the literal character '-'  
```+``` the character preceding this must exist a minimum of one time  
  
```\.``` There must be a '.' at this point  
  
```([a-z]{2,8})```  
```()``` everything in the parentheses is evaluated as one expression within the larger expression  
```[]``` everything in the brackets is one character  
```a-z``` any lower case letter  
```{2,8}``` this part must have between 2 & 8 characters  
  
```(\.[a-z]{2,8})?```  
```()``` everything in the parentheses is evaluated as one expression within the larger expression  
```\.``` There must be a '.' at this point  
```[]``` everything in the brackets is one character  
```a-z``` any lower case letter  
```{2,8}``` this part must have between 2 & 8 characters  
```?``` the expression preceding this is optional  
  
```$/``` this ends the expression  