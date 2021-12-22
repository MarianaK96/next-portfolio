import { Styles, Wrapper } from "./Navigation.styles";
import { PageContext } from "context";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <PageContext.Consumer>
          {(value) => (
            <ul>
              {value.pageStatus.map(
                (item, index) =>
                  item.navItem && (
                    <NavItem
                      key={`page-status-${item.page}`}
                      onSelection={() => value.updatePage(item.page)}
                      selected={item.selected}
                      value={item.page}
                    />
                  )
              )}
            </ul>
          )}
        </PageContext.Consumer>
      </Wrapper>
    </>
  );
};

export default Navigation;
