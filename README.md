# **1. Differences between interfaces and types in TypeScript?**
Interfaces are mainly used to describe object shapes and can be extended or merged, making them more flexible for object structures. Type aliases are more powerful since they can define primitives, unions, intersections, and objects, but they cannot be reopened or merged once created.


# **3. Difference between any, unknown, and never?**
any disables type checking and allows all operations, while unknown accepts any value but requires type checking before use, making it safer. never represents a value that never occurs, such as for functions that throw errors or never return.


# **5. Union and intersection types?**
Union types allow a value to be one of several types, such as string | number. Intersection types combine multiple types into one, ensuring the final type includes all properties from both, like type FullProfile = User & Account;.