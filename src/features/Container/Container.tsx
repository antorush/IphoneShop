interface IContainer {
  maxWidth: "1440" | "1600" | "1920";
  style?: React.CSSProperties;
  className?: string;
  padding: "20" | "30" | "40";
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({
  maxWidth = "1440",
  style,
  className,
  padding = "30",
  children,
}) => {
  const isPadding = padding == undefined || padding == null ? "20" : padding;
  const isMaxWidth =
    maxWidth == undefined || maxWidth == null ? "1440" : maxWidth;
  return (
    <div
      className={`block mx-auto h-auto ${className}`}
      style={{ padding: `0px ${isPadding}px`, maxWidth: `${isMaxWidth}px` }}
    >
      {children}
    </div>
  );
};

export default Container;
