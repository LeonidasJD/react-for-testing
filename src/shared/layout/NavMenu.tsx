import TanstackLink from "../ui/TanstackLink";

const NavMenu = () => {
  return (
    <div className="flex h-screen w-full max-w-[15%] flex-col items-start bg-gray-200 p-4">
      <div>
        <nav className="flex flex-col items-start gap-4">
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
          <TanstackLink variant="primary" href="/text-example/">
            Text Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/select-example/">
            Select Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/tab-example/">
            Tab Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/tanstack-ai-chat/">
            Tanstack AI Chat
          </TanstackLink>
          <TanstackLink variant="primary" href="/toaster/">
            Toaster Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/drawer-example/">
            Drawer Example
          </TanstackLink>
          <TanstackLink variant="primary" href="/switch-example/">
            Switch Example
          </TanstackLink>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
