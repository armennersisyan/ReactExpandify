import './styles.css';

import { ReactNode } from 'react';

import classNames from '../../utils/classNames';

interface ExpandableProps {
  expanded: boolean;
  children: ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
  expandDuration?: number;
  collapseDuration?: number;
  className?: string;
}

/**
 * @typedef {Object} ExpandableProps
 * @property {boolean} expanded - Whether the element is expanded.
 * @property {ReactNode} children - The content to display within the expandable element.
 * @property {keyof JSX.IntrinsicElements} [elementType='div'] - The HTML element type for the expandable container.
 * @property {number} [expandDuration=300] - The duration for the expand transition in milliseconds.
 * @property {number} [collapseDuration=300] - The duration for the collapse transition in milliseconds.
 * @property {string} [className] - Additional classNames to apply.
 */

/**
 * Expandable component to toggle content visibility.
 *
 * @param {ExpandableProps} props - The props object.
 * @returns {JSX.Element} The Expandable component.
 */

const Expandable = ({
  expanded = false,
  children,
  elementType = 'div',
  expandDuration = 300,
  collapseDuration = 300,
  className,
}: ExpandableProps): JSX.Element => {
  const Element = elementType;

  const classes = classNames({
    ...(className && { [className]: true }),
    expandable: true,
    expanded: expanded,
  });

  return (
    <Element
      aria-expanded={expanded}
      className={classes}
      style={{ transitionDuration: `${expanded ? expandDuration : collapseDuration}ms` }}
    >
      <div aria-hidden={!expanded} className="expandable-inner">
        {children}
      </div>
    </Element>
  );
};

export default Expandable;
