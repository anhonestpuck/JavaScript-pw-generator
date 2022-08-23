# JavaScript-pw-generator
This was my first attempt at writing JavaScript.  I have to admit
the language is more confusing that I could have imagined. 
It seems as though I know that I am able to code things, but am at a loss
as to how to express it and really could just get it if I knew there was an operator to express exactly what
I want instead of chasing down a bunch of conditionals.

## Description
Basically its exactly as it sounds.  It will generate a pw for you.
I got behind and frustrated so after I added conditionals, I ended up just making
the code loop back if you denied any of the options.  I understand that you can, in a myriad of ways,
further specify that you want a pw without those characters but for my purposes it made more sense to just loop
it around. The instructions didn't specify that it can't loop back, only that it shouldn't return undefined.

## Acceptance Criteria
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Credits
I want to thank, in case they're looking; Patty, Payne, Ruthie, Cody my tutor, and everyone who
put up with me banging my head against the wall to get this done.  I hope I'm not too behind to finish.