import { Accordion } from "@base-ui/react/accordion";

export default function CustomAccordion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Accordion.Root className="flex flex-col gap-4">{children}</Accordion.Root>
  );
}
