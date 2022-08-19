# Strata

<img src='https://github.com/ItsZeusBro/Strata/blob/f969b7a2fa72b77677c2938214cd6d70c34879cd/strata.jpeg'/>

Strata is defined as a recursive structure where each layer is an object of Arrays or an Array of Objects, where the base case is an Array without an object or an object without an Array.


3 Classes of Strata:
1. Structured Strata (where a payload key or keys are defined for objects in strata that are excluded from the accounting principles of the recursive structure OR where where payload is defined as part of the array portion of strata, where payload in the Array is considered to be anything other than an object strata layer)
2. Unstructured Strata (where there is no distinction between payload and strata but there still exists noise around the strata)
3. Mixed Strata (where both structured strata and unstructured strata are present in the recursive construction. This only works with payload patterns on arrays or payload keys on objects that are scattered throughout arbitrary schema that contains strata)
