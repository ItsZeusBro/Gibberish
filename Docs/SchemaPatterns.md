## Schema Pattern Algorithm

#### What about schema?
1. It must have some sort of pattern that is recuring 
2. A schema is different than an object, in that objects use a particular schema, whereas schema itself is more general. 
3. Schema is the language of data structures, so specific data structures that are common have well recognized patterns
4. All schema have terminal values that can be looked at as base cases
5. Schema typically has a recursive pattern, and an arbitrary payload at each 'level' which is defined as n number of primitive schema levels
6. The top level of all schema must be an array or a key/value store, or some other data structure, otherwise its just a terminal and not schema at all but it still must be dealt with as if it were
7. Intermediate levels are the same

#### What it all means?
1. Schema is so general, that validating it can only be done with a specific pattern in mind, otherwise its just GobbledyGook
2. Validating should be done with very general utilities with specific utilities in between them. What this means is that a validation interface should look like this.
3. So general patterns at each recursive step are required, and right after them some specific you want to check for.
4. We don't want to force any general or specific validations on any given schema without it being specified.

#### What are the general utilities?
1. Every n recursive steps is an array or object starting with the top level, and if not is a base case, otherwise is invalid
