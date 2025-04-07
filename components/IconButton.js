// IconButton.js
import Button from "./Button";
import Icon from "./Icon";

export default function IconButton({
  iconName = "",
  iconSize = 20,
  iconSet = "lui",
  children,
  ...props
}) {
  return (
    <Button {...props}>
      {iconName && (
        <Icon name={iconName} size={iconSize} className="mr-2" set={iconSet} />
      )}
      {children}
    </Button>
  );
}
