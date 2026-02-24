import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";

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
  return (
    <Drawer.Close {...props} className="hover:cursor-pointer">
      {children}
    </Drawer.Close>
  );
};

export const DrawerDescription = ({
  children,
  ...props
}: ComponentProps<typeof Drawer.Description>) => {
  return <Drawer.Description {...props}>{children}</Drawer.Description>;
};
