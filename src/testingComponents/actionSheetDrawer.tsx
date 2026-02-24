import { useState } from "react";
import Button from "../shared/ui/Button";
import { MdClose } from "react-icons/md";

import {
  DrawerRoot,
  DrawerTrigger,
  DrawerPortal,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "../shared/ui/DrawerComponent";
const ACTIONS = [
  "Unfollow",
  "Mute",
  "Add to Favourites",
  "Add to Close Friends",
  "Restrict",
];

const ActionSheetDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerRoot open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Button variant="success" size="medium">
          Open action sheet
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop className="fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.4] data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:duration-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]" />
        <DrawerViewport className="fixed inset-0 flex items-end justify-center">
          <DrawerPopup className="pointer-events-none box-border flex w-full max-w-md transform-[translateY(var(--drawer-swipe-movement-y))] flex-col gap-3 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none focus-visible:outline-none data-swiping:select-none data-[ending-style]:[transform:translateY(calc(100%+1rem))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[starting-style]:[transform:translateY(calc(100%+1rem))]">
            <DrawerContent className="pointer-events-auto overflow-hidden rounded-2xl bg-gray-50 text-gray-900 outline outline-gray-200 dark:outline-gray-300">
              <DrawerTitle className="sr-only">Profile actions</DrawerTitle>
              <DrawerDescription className="sr-only">
                Choose an action for this user.
              </DrawerDescription>

              <ul
                className="m-0 list-none divide-y divide-gray-200 p-0"
                aria-label="Profile actions"
              >
                {ACTIONS.map((action, index) => (
                  <li key={action} className="relative">
                    {index === 0 && (
                      <DrawerClose>
                        <MdClose />
                      </DrawerClose>
                    )}
                    <button
                      type="button"
                      className="block w-full border-0 bg-transparent px-5 py-4 text-center text-base text-gray-900 select-none hover:cursor-pointer hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      {action}
                    </button>
                  </li>
                ))}
              </ul>
            </DrawerContent>
            <div className="pointer-events-auto overflow-hidden rounded-2xl bg-gray-50 outline outline-gray-200 dark:outline-gray-300">
              <button
                type="button"
                className="block w-full border-0 bg-transparent px-5 py-4 text-center text-base text-red-700 select-none hover:cursor-pointer hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none"
                onClick={() => setOpen(false)}
              >
                Block User
              </button>
            </div>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </DrawerRoot>
  );
};
export default ActionSheetDrawer;
