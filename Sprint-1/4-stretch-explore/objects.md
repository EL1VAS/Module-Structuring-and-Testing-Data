## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?
I got that: 
console {debug: f, error: f, info:f, log: f, wrn: f...........}

Try also entering `typeof console`
I got 'Object'

Answer the following questions:

What does `console` store?
Console is an object that holds many methods and functions

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
.log and .assert are methods. The . is an operator that tells that we want the log or assert method from the console object. To further invoke those methods we need ().
