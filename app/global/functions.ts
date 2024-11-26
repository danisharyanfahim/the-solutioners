export const returnElement: {
  (index: number, options: number): number;
  (index: number, options: []): [];
  (index: number, options: any[]): any; // General case
} = (index, options) => {
  if (Array.isArray(options)) {
    if (options.length === 0) return;
    if (index < 0) {
      return options[options.length + index];
    } else if (index >= options.length) {
      return options[index - options.length];
    } else {
      return options[index];
    }
  } else {
    if (index < 0) {
      return options + index;
    } else if (index >= options) {
      return index - options;
    } else {
      return index;
    }
  }
};

export const getRandomIntBetween = (
  min: number,
  max: number,
  ignoreList: number[]
): number => {
  if (min > max) {
    throw new Error(
      "Minimum value must be less than or equal to maximum value."
    );
  }
  let randomValue: number;
  do {
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (ignoreList.includes(randomValue));
  return randomValue;
};

export const insertLastElementsToFront = (
  numberOfElements: number,
  array: any[]
) => {
  if (numberOfElements <= 0 || numberOfElements > array.length) return array;
  const lastElements = array.slice(-numberOfElements);
  return lastElements.concat(array);
};

export const insertFirstElementsToEnd = (
  numberOfElements: number,
  array: any[]
) => {
  if (numberOfElements <= 0 || numberOfElements > array.length) return array;
  const firstElements = array.slice(0, numberOfElements);
  return array.concat(firstElements);
};

export const addToFrontAndEnd: {
  (numberOfElementsAtFront: number, array: any[]): any[];
  (
    numberOfElementsAtFront: number,
    numberOfElementsAtEnd: number,
    array: any[]
  ): any[];
} = (
  numberOfElementsAtFront: number,
  numberOfElementsAtEnd: number | any[],
  array?: any[]
): any[] => {
  // If the second argument is an array
  if (Array.isArray(numberOfElementsAtEnd)) {
    if (
      numberOfElementsAtFront <= 0 ||
      numberOfElementsAtFront > numberOfElementsAtEnd.length
    )
      return numberOfElementsAtEnd; // Return the original array if conditions are not met
    const firstElements = numberOfElementsAtEnd.slice(
      0,
      numberOfElementsAtFront
    );
    const lastElements = numberOfElementsAtEnd.slice(-numberOfElementsAtFront);
    return lastElements.concat(numberOfElementsAtEnd, firstElements);
  }

  // If the second argument is a number
  if (array && typeof numberOfElementsAtEnd === "number") {
    if (
      numberOfElementsAtFront <= 0 ||
      numberOfElementsAtFront > array.length ||
      numberOfElementsAtEnd <= 0 ||
      numberOfElementsAtEnd > array.length
    ) {
      return array; // Return the original array if conditions are not met
    }
    const firstElements = array.slice(0, numberOfElementsAtEnd);
    const lastElements = array.slice(-numberOfElementsAtFront);
    return lastElements.concat(array, firstElements);
  }

  return []; // Default return if no conditions are met
};
