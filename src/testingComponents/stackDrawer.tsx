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
import { useState } from "react";
import Button from "../shared/ui/Button";

const StackDrawer = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <DrawerRoot
      open={firstOpen}
      onOpenChange={(nextOpen) => {
        setFirstOpen(nextOpen);
        if (!nextOpen) {
          setSecondOpen(false);
          setThirdOpen(false);
        }
      }}
    >
      <DrawerTrigger>
        <Button variant="danger" size="medium">
          {" "}
          Open drawer stack
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop className="fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.2] [--bleed:3rem] data-[ending-style]:opacity-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[starting-style]:opacity-0 data-[swiping]:duration-0 supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]" />
        <DrawerViewport className="fixed inset-0 flex items-end justify-center">
          <DrawerPopup className={popupClassName}>
            <div className={handleClassName} />
            <DrawerContent className={contentClassName}>
              <DrawerTitle className="mb-1 text-center text-lg font-medium">
                Account
              </DrawerTitle>
              <DrawerDescription className="mb-6 text-center text-base text-gray-600">
                Nested drawers can be styled to stack, while each drawer remains
                independently focus managed.
              </DrawerDescription>

              <div className="flex items-center justify-end gap-4">
                <div className="mr-auto">
                  <DrawerRoot
                    open={secondOpen}
                    onOpenChange={(nextOpen) => {
                      setSecondOpen(nextOpen);
                      if (!nextOpen) {
                        setThirdOpen(false);
                      }
                    }}
                  >
                    <DrawerTrigger className="-m-0.5 rounded px-1.5 py-0.5 text-base font-medium text-blue-800 hover:cursor-pointer hover:bg-blue-800/5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-blue-800/10">
                      Security settings
                    </DrawerTrigger>
                    <DrawerPortal>
                      <DrawerViewport className="fixed inset-0 flex items-end justify-center">
                        <DrawerPopup className={popupClassName}>
                          <div className={handleClassName} />
                          <DrawerContent className={contentClassName}>
                            <DrawerTitle className="mb-1 text-center text-lg font-medium">
                              Security
                            </DrawerTitle>
                            <DrawerDescription className="mb-6 text-center text-base text-gray-600">
                              Review sign-in activity and update your security
                              preferences.
                            </DrawerDescription>

                            <ul className="mb-6 list-disc pl-5 text-gray-700">
                              <li>Passkeys enabled</li>
                              <li>2FA via authenticator app</li>
                              <li>3 signed-in devices</li>
                            </ul>

                            <div className="flex items-center justify-end gap-4">
                              <div className="mr-auto">
                                <DrawerRoot
                                  open={thirdOpen}
                                  onOpenChange={setThirdOpen}
                                >
                                  <DrawerTrigger className="-m-0.5 rounded px-1.5 py-0.5 text-base font-medium text-blue-800 hover:cursor-pointer hover:bg-blue-800/5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-blue-800/10">
                                    Advanced options
                                  </DrawerTrigger>
                                  <DrawerPortal>
                                    <DrawerViewport className="fixed inset-0 flex items-end justify-center">
                                      <DrawerPopup className={popupClassName}>
                                        <div className={handleClassName} />
                                        <DrawerContent
                                          className={contentClassName}
                                        >
                                          <DrawerTitle className="mb-1 text-center text-lg font-medium">
                                            Advanced
                                          </DrawerTitle>
                                          <DrawerDescription className="mb-6 text-center text-base text-gray-600">
                                            This drawer is taller to demonstrate
                                            variable-height stacking.
                                          </DrawerDescription>

                                          <div className="mb-4 grid gap-1.5">
                                            <label
                                              className="text-sm font-medium text-gray-700"
                                              htmlFor="device-name-tw"
                                            >
                                              Device name
                                            </label>
                                            <input
                                              id="device-name-tw"
                                              className="w-full rounded-md border border-gray-200 bg-gray-50 px-2.5 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800"
                                              defaultValue="Personal laptop"
                                            />
                                          </div>

                                          <div className="mb-6 grid gap-1.5">
                                            <label
                                              className="text-sm font-medium text-gray-700"
                                              htmlFor="notes-tw"
                                            >
                                              Notes
                                            </label>
                                            <textarea
                                              id="notes-tw"
                                              className="w-full resize-y rounded-md border border-gray-200 bg-gray-50 px-2.5 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800"
                                              defaultValue="Rotate recovery codes and revoke older sessions."
                                              rows={3}
                                            />
                                          </div>

                                          <div className="flex justify-end">
                                            <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                                              Done
                                            </DrawerClose>
                                          </div>
                                        </DrawerContent>
                                      </DrawerPopup>
                                    </DrawerViewport>
                                  </DrawerPortal>
                                </DrawerRoot>
                              </div>

                              <DrawerClose className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                                Close
                              </DrawerClose>
                            </div>
                          </DrawerContent>
                        </DrawerPopup>
                      </DrawerViewport>
                    </DrawerPortal>
                  </DrawerRoot>
                </div>

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

export default StackDrawer;

const popupClassName =
  "[--bleed:3rem] [--peek:1rem] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-step:0.05] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--scale-base:calc(max(0,1-(var(--nested-drawers)*var(--stack-step))))] [--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--shrink:calc(1-var(--scale))] [--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height))-var(--bleed)))] group/popup relative -mb-[3rem] w-full max-h-[calc(80vh+3rem)] [height:var(--drawer-height,auto)] rounded-t-2xl bg-gray-50 px-6 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+3rem)] text-gray-900 outline outline-1 outline-gray-200 overflow-y-auto overscroll-contain touch-auto shadow-[0_2px_10px_rgb(0_0_0/0.1)] data-[ending-style]:shadow-[0_2px_10px_rgb(0_0_0/0)] [transform-origin:50%_calc(100%-var(--bleed))] [transform:translateY(calc(var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--shrink)*var(--height))))_scale(var(--scale))] after:absolute after:inset-0 after:rounded-[inherit] after:bg-transparent after:pointer-events-none after:content-[''] after:transition-[background-color] after:duration-[450ms] after:ease-[cubic-bezier(0.32,0.72,0,1)] data-[swiping]:select-none data-[swiping]:duration-0 data-[nested-drawer-swiping]:duration-0 data-[ending-style]:[transform:translateY(calc(100%-var(--bleed)))] data-[starting-style]:[transform:translateY(calc(100%-var(--bleed)))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[nested-drawer-open]:h-[calc(var(--height)+var(--bleed))] data-[nested-drawer-open]:overflow-hidden data-[nested-drawer-open]:after:bg-black/5 dark:outline-gray-300 [transition:transform_450ms_cubic-bezier(0.32,0.72,0,1),height_450ms_cubic-bezier(0.32,0.72,0,1),box-shadow_450ms_cubic-bezier(0.32,0.72,0,1)]";

const contentClassName =
  "mx-auto w-full max-w-[32rem] transition-opacity duration-[300ms] ease-[cubic-bezier(0.45,1.005,0,1.005)] group-data-[nested-drawer-open]/popup:opacity-0 group-data-[nested-drawer-swiping]/popup:opacity-100";

const handleClassName =
  "mx-auto mb-4 h-1 w-12 rounded-full bg-gray-300 transition-opacity duration-[200ms] group-data-[nested-drawer-open]/popup:opacity-0 group-data-[nested-drawer-swiping]/popup:opacity-100";
