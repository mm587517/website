import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";
import darkTheme from "prism-react-renderer/themes/okaidia";
import { useColorModeValue } from "@chakra-ui/react";

export const CodeBlock: React.FC<{
  children: React.ReactElement<{
    className: string;
    children: string;
  }>;
}> = (props) => {
  const className = props.children?.props.className ?? "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = (matches?.groups?.lang ?? "") as Language;
  const theme = useColorModeValue(lightTheme, darkTheme);

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
