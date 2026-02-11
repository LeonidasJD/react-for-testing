import { Tabs } from "@base-ui/react/tabs";
import { tabVariants, type TabVariants } from "../../variants/tabVariants";
interface TabRootProps extends TabVariants {
  children: React.ReactNode;
  defaultValue: string;
}

export const TabRoot = ({ children, defaultValue, variant }: TabRootProps) => {
  return (
    <Tabs.Root
      className={tabVariants({ variant }).root()}
      defaultValue={defaultValue}
    >
      {children}
    </Tabs.Root>
  );
};

interface TabListProps extends TabVariants {
  children: React.ReactNode;
}

export const TabList = ({ children, variant }: TabListProps) => {
  return (
    <Tabs.List className={tabVariants({ variant }).list()}>
      {children}
    </Tabs.List>
  );
};

interface SingleTabProps extends TabVariants {
  children: React.ReactNode;
  value: string | number;
}
export const SingleTab = ({ children, value, variant }: SingleTabProps) => {
  return (
    <Tabs.Tab value={value} className={tabVariants({ variant }).singleTab()}>
      {children}
    </Tabs.Tab>
  );
};

export const TabsIndicator = ({ variant }: TabVariants) => {
  return <Tabs.Indicator className={tabVariants({ variant }).indicator()} />;
};

interface TabPanelProps extends TabVariants {
  children: React.ReactNode;
  value: string | number;
}
export const TabPanel = ({ children, value, variant }: TabPanelProps) => {
  return (
    <Tabs.Panel className={tabVariants({ variant }).panel()} value={value}>
      {children}
    </Tabs.Panel>
  );
};
