# Implementing Basic JavaScript for Form Validation





## Regex

I know it is possible to validate forms by using regular expressions. I also know that using "```regex```" as a soultion is an issue that is up for debate. My personal feeling on the subject is that while I might consider using it on a password field, I would NOT use it on an email field. The main reasoning behind this is that while a user might enter something that is syntactically correct, it still does not make it a valid email address. A better system would be to simply check for the main prerequisite (@), and then utilize a system whereby a user is automatically sent a confirmation email including a *"Click here to validate this email address"* link. Then once the user clicks that link, the email is confirmed as valid AND existing.

While I do have an understanding of what regular expressions mean, I only partially understand how to actually make them functional within JavaScript, and so have ommitted them entirely from my code. However, below is an example of an expression I would use to validate email, along with my explanation of what it is doing. I did write this, and these are my own words in explanation:

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