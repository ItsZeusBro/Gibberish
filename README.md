# Strata

<img src='https://github.com/ItsZeusBro/Strata/blob/f969b7a2fa72b77677c2938214cd6d70c34879cd/strata.jpeg'/>

Strata is defined as a recursive structure where each layer is an object of Arrays or an Array of Objects, where the base case is an Array without an object or an object without an Array.

Strata type is evaluated at each layer, but is still recursive as strata or is a base case.  

General Strata Types:
1. Pure Strata 
- is defined as not including any undefined payload
2. Impure Strata 
- is defined as strata that can include undefined payload alongside defined payload

3 Classes of Strata:
1. Structured Strata 
- where there is some regular payload structure based on a predefined set of payload keys or patterns throughout the entire strata strcuture
2. Unstructured Strata 
- where there is no regularity to the payload structure but payload structure is still present
