import "./Card.css";

const Card = (props) => {
  // All default HTML components support 'className' for adding CSS classes to the rendered HTML elements.
  // But your custom components only support what you tell them to support. If you want to make sure that 'className' can be set
  // for your custom component, you can handle a 'className' attribute through 'props'. Then you can do something like this:
  const classes = "card " + props.className;

  // Here we use one special prop which is built into React, which every component receives by default: 'children'.
  // Children is a reserved word, and the value of this special prop will always be the content between the opening
  // and closing tagsof your custom component.
  return <div className={classes}>{props.children}</div>;
};

export default Card;
