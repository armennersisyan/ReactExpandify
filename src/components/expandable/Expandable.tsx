import './styles.css';

import { ReactNode, useEffect, useRef } from 'react';

import classNames from '../../utils/classNames';

interface ExpandableProps {
  /** Determines whether the content is expanded or not. */
  expanded: boolean;

  /** Children to be rendered inside the component. */
  children: ReactNode;

  /** The HTML element type for the Expandable component. */
  elementType?: keyof JSX.IntrinsicElements;

  /** Duration for the expand animation in milliseconds. */
  expandDuration?: number;

  /** Duration for the collapse animation in milliseconds. */
  collapseDuration?: number;

  /** Easing function for the expand and collapse animations. */
  easing?: string;

  /** Additional className for the Expandable component. */
  className?: string;

  /** Callback when the content has collapsed. */
  onCollapse?: () => void;

  /** Callback when the content has expanded. */
  onExpand?: () => void;
}

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
  easing = 'ease-in-out',
  className,
  onCollapse,
  onExpand,
}: ExpandableProps): JSX.Element => {
  // Timer reference for controlling timeouts
  const timer = useRef<number>();

  // Reference to track the first mount of the component
  const isFirstMount = useRef(true);

  // Dynamic element type, defaults to 'div'
  const Element = elementType;

  // Compute class names using the classNames utility
  const classes = classNames({
    ...(className && { [className]: true }),
    expandable: true,
    expanded: expanded,
  });

  /**
   * Effect hook to manage expand and collapse callbacks.
   */
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (expanded) {
      if (onExpand) {
        timer.current = setTimeout(() => {
          onExpand();
        }, expandDuration);
      }
      return;
    }

    if (!expanded) {
      if (onCollapse) {
        timer.current = setTimeout(() => {
          onCollapse();
        }, collapseDuration);
      }
      return;
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [expanded]);

  return (
    <Element
      aria-expanded={expanded}
      className={classes}
      style={{
        transitionDuration: `${expanded ? expandDuration : collapseDuration}ms`,
        transitionTimingFunction: easing,
      }}
    >
      <div aria-hidden={!expanded} className="expandable-inner">
        {children}
      </div>
    </Element>
  );
};

export default Expandable;
