/**
 * A type that describes a class value that can be a string, number, dictionary, or array of these types.
 * @typedef {string | number | ClassDictionary | ClassArray} ClassValue
 */
type ClassValue = string | number | ClassDictionary | ClassArray;

type ClassArray = Array<ClassValue>;

/**
 * A dictionary object where the keys are CSS class names and the values are boolean flags
 * indicating whether or not each class should be included in the final generated class string.
 * @interface
 */
interface ClassDictionary {
  [id: string]: boolean;
}

/**
 * An array type that describes an array of `ClassValue`.
 * @typedef {Array<ClassValue>} ClassArray
 */

/**
 * A utility function to conditionally join class names together.
 * @function
 * @param {...ClassValue} args - Classes to be combined.
 * @returns {string} The final class name string.
 */
const classNames = (...args: ClassValue[]): string => {
  // Initialize an empty array to hold the final list of class names.
  const classes: string[] = [];

  const hasOwn = Object.prototype.hasOwnProperty;

  args.forEach((arg) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
        return;
      }

      for (const key in arg as ClassDictionary) {
        if (hasOwn.call(arg, key) && (arg as ClassDictionary)[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(' ');
};

export default classNames;
