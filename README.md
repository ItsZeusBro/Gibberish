# Strata

<img src='https://github.com/ItsZeusBro/Strata/blob/f969b7a2fa72b77677c2938214cd6d70c34879cd/strata.jpeg'/>

Strata is defined as a recursive structure where each layer is an object of Arrays or an Array of Objects, where the base case is an Array without an object or an object without an Array.

Strata type is evaluated at each layer, but is still recursive as strata or is a base case.  

Stratum Types:
1. Pure Stratum 
- is defined as a strata layer not including any undefined payload in a strata layer
2. Impure Stratum
- is defined as a strata layer that can include undefined payload alongside predefined payload in a strata layer or without predefined payload present

Strata Types (reccurring stratum)
1. Pure Strata (where all non recursive strata is predefined in a set of payload keys or patterns)
- Regular Pure Strata (where the Pure Strata is regular throughout)
- Irregular Pure Strata (where the Pure Strata is not regular throughout; payload can be represented differently at different layers)
3. Impure Strata (where some non recursive strata is not predefined in a set of payload keys or patterns)
- Regular Impure Strata (where the impure strata has the same impurity throughout the entire strata)
- Irregular Impure Strata (where the impure strata varries throught the entire strata)
