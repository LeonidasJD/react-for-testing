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
import Button from "../shared/ui/Button";
const BottomDrawer = () => {
  return (
    <DrawerRoot>
      <DrawerTrigger>
        <Button variant="secondary" size="medium">
          Open Bottom Drawer
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop className="fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.2] [--bleed:3rem] data-[ending-style]:opacity-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[starting-style]:opacity-0 data-[swiping]:duration-0 supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]" />
        <DrawerViewport className="fixed inset-0 flex items-end justify-center">
          <DrawerPopup className="-mb-12 max-h-[calc(80vh+3rem)] w-full transform-[translateY(var(--drawer-swipe-movement-y))] touch-auto overflow-y-auto overscroll-contain rounded-t-2xl bg-gray-50 px-6 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+3rem)] text-gray-900 outline outline-1 outline-gray-200 transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-[ending-style]:[transform:translateY(calc(100%-3rem))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[starting-style]:[transform:translateY(calc(100%-3rem))] data-[swiping]:select-none dark:outline-gray-300">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gray-300 hover:cursor-pointer" />
            <DrawerContent className="mx-auto w-full max-w-lg">
              <DrawerTitle className="mb-1 text-center text-lg font-medium">
                Notifications
              </DrawerTitle>
              <DrawerDescription className="mb-6 text-center text-base text-gray-600">
                You are all caught up. Good job!
              </DrawerDescription>
              <div className="flex justify-center gap-4">
                <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                  Close
                </DrawerClose>
              </div>
            </DrawerContent>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </DrawerRoot>
  );
};

export default BottomDrawer;
