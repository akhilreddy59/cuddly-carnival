- Assignment (=): No copy; just another pointer to the same memory.
- Shallow Copy ({...}): Copies the first layer only. Nested objects are still shared.
- Deep Copy (structuredClone): Complete independence. Recommended for complex data. MDN Reference for structuredClone.

**Ways to Shallow Copy:**

- Spread Operator: const copy = { ...original };
- Object.assign: const copy = Object.assign({}, original);

**Ways to Deep Copy:**

- A. The 2025 Standard: structuredClone()
  This is now the native, recommended way to deep copy in all modern browsers. It handles nested objects, arrays, and even Dates.

- B. The "Old" Way: JSON.parse(JSON.stringify(obj))
  Before 2022, developers used this hack. Warning: It breaks if your object has functions, undefined, or Map/Set. Use structuredClone instead.
