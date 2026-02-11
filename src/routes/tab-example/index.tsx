import { createFileRoute } from "@tanstack/react-router";
import { TabRoot, TabList, SingleTab, TabPanel } from "../../shared/ui/Tab";

export const Route = createFileRoute("/tab-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center p-4">
      <TabRoot defaultValue="overview" variant="light">
        <TabList variant="light">
          <SingleTab value="overview" variant="light">
            Overview
          </SingleTab>
          <SingleTab value="settings" variant="light">
            Settings
          </SingleTab>
          <SingleTab value="help" variant="light">
            Help
          </SingleTab>
        </TabList>
        <TabPanel value="overview" variant="light">
          <p>Overview Content</p>
        </TabPanel>
        <TabPanel value="settings" variant="light">
          <p>Settings Content</p>
        </TabPanel>
        <TabPanel value="help" variant="light">
          <p>Help Content</p>
        </TabPanel>
      </TabRoot>
    </div>
  );
}
