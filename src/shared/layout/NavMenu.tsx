import TanstackLink from "../ui/TanstackLink";
import Text from "../ui/Text";

const NavMenu = () => {
  return (
    <div className="flex h-screen w-full max-w-[15%] flex-col items-start bg-gray-200 p-4">
      <div className="flex flex-col items-start gap-6">
        <div>
          <Text variant="h4" color="primary">
            Base UI Examples
          </Text>
        </div>
        <nav className="flex flex-col items-start gap-4">
          <TanstackLink href="/">All examples</TanstackLink>
          <TanstackLink href="/accordion-example/">
            Accordion Example
          </TanstackLink>
          <TanstackLink href="/modal-example/">Modal Example</TanstackLink>
          <TanstackLink href="/inputs-example/">Inputs Example</TanstackLink>
          <TanstackLink href="/avatar/">Avatar Example</TanstackLink>
          <TanstackLink href="/buttons-example/">Buttons Example</TanstackLink>
          <TanstackLink href="/skeleton-example/">
            Skeleton Example
          </TanstackLink>
          <TanstackLink href="/text-example/">Text Example</TanstackLink>
          <TanstackLink href="/select-example/">Select Example</TanstackLink>
          <TanstackLink href="/tab-example/">Tab Example</TanstackLink>
          <TanstackLink href="/tanstack-ai-chat/">
            Tanstack AI Chat
          </TanstackLink>
          <TanstackLink href="/toaster/">Toaster Example</TanstackLink>
          <TanstackLink href="/drawer-example/">Drawer Example</TanstackLink>
          <TanstackLink href="/switch-example/">Switch Example</TanstackLink>
          <TanstackLink href="/number-counter-example/">
            Number Counter Example
          </TanstackLink>
          <TanstackLink href="/radio-example/">Radio Example</TanstackLink>
          <TanstackLink href="/field-example/">Field Example</TanstackLink>
          <TanstackLink href="/checkbox-example/">
            Checkbox Example
          </TanstackLink>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
