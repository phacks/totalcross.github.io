/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import * as styles from "./styles";
import { Menu } from "../Icons";

export const Header = (props) => {
  const { onOpen } = props;
  // const {
  //   themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
  // } = useConfig();
  // const { edit = true, ...doc } = useCurrentDoc();
  // const [colorMode, setColorMode] = useColorMode();

  // const toggleColorMode = () => {
  //   setColorMode(colorMode === "light" ? "dark" : "light");
  // };

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
    </div>
  );
};
