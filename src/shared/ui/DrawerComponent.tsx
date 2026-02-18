import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";

// export default function DrawerComponent() {
//   return (
//     <Drawer.Root swipeDirection="right">
//       <Drawer.Trigger className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
//         Open drawer
//       </Drawer.Trigger>
//       <Drawer.Portal>
//         <Drawer.Backdrop className="duration-450ms data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]data-[starting-style]:opacity-0 fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.2] [--bleed:3rem] data-ending-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]" />
//         <Drawer.Viewport className="fixed inset-0 flex items-stretch justify-end p-(--viewport-padding) [--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]">
//           <Drawer.Popup className="-mr-12 h-full w-[calc(20rem+3rem)] max-w-[calc(100vw-3rem+3rem)] transform-[translateX(var(--drawer-swipe-movement-x))] touch-auto overflow-y-auto overscroll-contain bg-gray-50 p-6 pr-[calc(1.5rem+3rem)] text-gray-900 outline outline-gray-200 transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--bleed:3rem] data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-swiping:select-none supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px] supports-[-webkit-touch-callout:none]:pr-6 supports-[-webkit-touch-callout:none]:[--bleed:0px] dark:outline-gray-300">
//             <Drawer.Content className="mx-auto w-full max-w-lg">
//               <Drawer.Title className="-mt-1.5 mb-1 text-lg font-medium">
//                 Drawer
//               </Drawer.Title>
//               <Drawer.Description className="mb-6 text-base text-gray-600">
//                 This is a drawer that slides in from the side. You can swipe to
//                 dismiss it.
//               </Drawer.Description>
//               <div className="flex justify-end gap-4">
//                 <Drawer.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
//                   Close
//                 </Drawer.Close>
//               </div>
//             </Drawer.Content>
//           </Drawer.Popup>
//         </Drawer.Viewport>
//       </Drawer.Portal>
//     </Drawer.Root>
//   );
// }

interface DrawerRootProps extends ComponentProps<typeof Drawer.Root> {
  children: React.ReactNode;
}

export const DrawerRoot = ({ children, ...props }: DrawerRootProps) => {
  return <Drawer.Root {...props}>{children}</Drawer.Root>;
};

export const DrawerTrigger = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Trigger>) => {
  return <Drawer.Trigger {...props}>{children}</Drawer.Trigger>;
};

export const DrawerPortal = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Portal>) => {
  return <Drawer.Portal {...props}>{children}</Drawer.Portal>;
};

export const DrawerBackdrop = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Backdrop>) => {
  return <Drawer.Backdrop {...props}>{children}</Drawer.Backdrop>;
};

export const DrawerViewport = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Viewport>) => {
  return <Drawer.Viewport {...props}>{children}</Drawer.Viewport>;
};

export const DrawerPopup = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Popup>) => {
  return <Drawer.Popup {...props}>{children}</Drawer.Popup>;
};

export const DrawerContent = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Content>) => {
  return <Drawer.Content {...props}>{children}</Drawer.Content>;
};

export const DrawerTitle = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Title>) => {
  return <Drawer.Title {...props}>{children}</Drawer.Title>;
};

export const DrawerClose = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Close>) => {
  return <Drawer.Close {...props}>{children}</Drawer.Close>;
};

export const DrawerDescription = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Description>) => {
  return <Drawer.Description {...props}>{children}</Drawer.Description>;
};
