import { Switcher } from "components";
import useStore from "hooks/useStore";
import { Themes } from "../../types/thems";
import { observer } from "mobx-react";
import styled from "styled-components";

const Header = observer(() => {
  const { appStore } = useStore();

  return (
    <Root>
      <StyledSwitcher onChange={appStore.toggleTheme} checked={appStore.theme === Themes.DARK} />
    </Root>
  );
});

const Root = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme: { variables } }) => variables.desktopHeader};
  align-items: center;
`;

const StyledSwitcher = styled(Switcher)`
  margin-left: auto;
`;

export default Header;
