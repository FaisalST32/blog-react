const ReactIf = ({showIf, ...props}) => {
  return showIf ? props.children : null;
}

export default ReactIf
