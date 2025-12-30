import { createFileRoute } from "@tanstack/react-router";
import ClassicAccordion from "../../shared/ui/ClassicAccordion";
import { Accordion } from "@base-ui/react";
import CustomAccordion from "../../shared/ui/CustomAccordion";
import { FaPlus } from "react-icons/fa";
export const Route = createFileRoute("/accordion-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  const items = [
    {
      title: "What is the capital of France?",
      content: "The capital of France is Paris.",
    },
    {
      title: "What is the capital of Germany?",
      content: "The capital of Germany is Berlin.",
    },
    {
      title: "What is the capital of Italy?",
      content: "The capital of Italy is Rome.",
    },
  ];
  return (
    <>
      <div className="w-full max-w-md">
        <p className="text-lg font-bold text-gray-800">Classic Accordion</p>
        <ClassicAccordion items={items} />
      </div>

      <div className="w-full max-w-md">
        <p className="text-lg font-bold text-gray-800">Custom Accordion</p>
        <CustomAccordion>
          <Accordion.Item value="item-1">
            <Accordion.Header className="rounded-md bg-white p-4 text-gray-800">
              <Accordion.Trigger className="flex items-center justify-between gap-4 text-left text-gray-800">
                <p>What is the capital of France?</p>
                <FaPlus className="text-gray-800" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="rounded-b-2xl bg-white p-4 text-gray-800">
              <p>The capital of France is Paris.</p>
            </Accordion.Panel>
          </Accordion.Item>
        </CustomAccordion>
      </div>
    </>
  );
}
