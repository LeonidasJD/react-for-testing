import TanstackLink from "../ui/TanstackLink";

const NavMenu = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-4">
      <div>
        <nav className="flex flex-row items-center gap-4">
          <TanstackLink variant="primary" href="/">
            All examples
          </TanstackLink>
          <TanstackLink variant="primary" href="/accordion-example/">
            Accordion Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/modal-example/">
            Modal Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/inputs-example/">
            Inputs Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/avatar/">
            Avatar Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/buttons-example/">
            Buttons Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/skeleton-example/">
            Skeleton Example
          </TanstackLink>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
