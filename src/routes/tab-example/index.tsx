import { createFileRoute } from "@tanstack/react-router";
import { TabRoot, TabList, SingleTab, TabPanel } from "../../shared/ui/Tab";
import Container from "../../shared/layout/Container";
export const Route = createFileRoute("/tab-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
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
    </Container>
  );
}
