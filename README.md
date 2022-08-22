# Strata

<img src='https://github.com/ItsZeusBro/Strata/blob/f969b7a2fa72b77677c2938214cd6d70c34879cd/strata.jpeg'/>

Stratum is an array with an object or an object with an array (with or without other data types which are called 'payload').

Strata is defined as recursive stratums that collectively create a structure of depth greater than or equal to 1. In otherwords, stratum is not strata and strata is not stratum, but both are needed by the other.

Stratum Types (singular layer of otherwise recurrable strata):
1. Pure Stratum 
- is defined as a strata layer not including any undefined payload in a strata layer
2. Impure Stratum (or just Stratum)
- is defined as a stratum layer that can include any type of payload whatsoever, so long as it is recursive (includes the next layer of possible stratum)


Strata Types (reccurring stratum)
1. Pure Strata (where all non recursive strata is predefined in a set of payload keys or patterns)
- Regular Pure Strata (where the Pure Strata is regular throughout)
- Irregular Pure Strata (where the Pure Strata is not regular throughout; payload can be represented differently at different layers)
3. Impure Strata (where some non recursive strata is not predefined in a set of payload keys or patterns)
- Regular Impure Strata (where the impure strata has the same impurity throughout the entire strata)
- Irregular Impure Strata (where the impure strata varries throught the entire strata)
