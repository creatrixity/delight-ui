import * as React from "react";

const relativePosition:'relative' = 'relative';
const absolutePosition:'absolute' = 'absolute';

type transformValueTypes = {
  /** Sets the icon as open. */
  isOpen: boolean,
  /** Number of degrees the icon should rotate by. */
  rotate?: number
}

type HamburgerMenuProps = transformValueTypes & {
  /** Callback when the icon is clicked */
  menuClicked: () => any,
  /** Renders the open state of the icon */
  isOpen?: boolean,
  /** Icon width */
  width?: number,
  /** Icon height */
  height?: number,
  /** Stroke thickness for icon */
  strokeWidth: number,
  /** Fill color for the icon */
  color?: string,
  /** Radius size for the icon lines */
  borderRadius: number,
  /** Duration for icon animations */
  animationDuration: number
}

const defaultProps = {
  width: 32,
  height: 16,
  isOpen: false,
  strokeWidth: 4,
  animationDuration: 0.4,
  rotate: 0,
  borderRadius: 8,
  color: '#000'
}

const getTransformValue = (isOpen:any, defaultPos:any, rotate:any, halfHeight:any) => {
  let height =  isOpen ? halfHeight : defaultPos;
  height = height || 0;
  const rotationDegree = isOpen ? `${rotate}deg`: '0';

  return `translate3d(0,${height},0) rotate(${rotationDegree})`;
}

const getLineBase = (
  animationDuration:number,
  borderRadius: number,
  color:string,
  strokeWidth: number,
  marginTop: string
) => {
  return {
    display: 'block',
    height: `${strokeWidth}px`,
    width: '100%',
    background: color,
    transitionTimingFunction: "ease",
    transitionDuration: `${animationDuration}s`,
    borderRadius: `${borderRadius}px`,
    transformOrigin: 'center',
    position: absolutePosition,
    marginTop
  }
}

const getMedianLine = (animationDuration: number, isOpen:boolean, offsetTop:string, marginTop: string) => {
  return {
    transitionTimingFunction: 'ease-out',
    transitionDuration: `${animationDuration / 4}s`,
    opacity: isOpen ? 0 : 1,
    transform: isOpen ? 'translateX(500px)' : 'translateX(0)',
    top: offsetTop,
    marginTop
  }
}

export const HamburgerIcon:React.FC<HamburgerMenuProps> = (props) => {
  let { animationDuration, borderRadius, color, isOpen, strokeWidth } = props

  const width = `${props.width}px`,
    height = `${props.height}px`,
    halfHeight = `${parseInt(height) / 2}px`,
    halfStrokeWidth = `-${strokeWidth / 2}px`;

  const styles = {
    container: { width, height, transform: `rotate(${props.rotate}deg)`, position: relativePosition },
    lineBase: getLineBase(animationDuration, borderRadius, color || '#000', strokeWidth, halfStrokeWidth),
    firstLine: { transform: getTransformValue(isOpen, 0, 45, halfHeight) },
    secondLine: getMedianLine(animationDuration, isOpen, halfHeight, halfStrokeWidth),
    thirdLine: {transform: getTransformValue(isOpen, height, -45, halfHeight)}
  };

  return (
    <div style={{ ...styles.container }} onClick={props.menuClicked}>
      <span style={{ ...styles.lineBase, ...styles.firstLine }} />
      <span style={{ ...styles.lineBase, ...styles.secondLine }} />
      <span style={{ ...styles.lineBase, ...styles.thirdLine }} />
    </div>
  );
}

HamburgerIcon.defaultProps = defaultProps;