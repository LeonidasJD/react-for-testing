import { Accordion } from "@base-ui/react/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  accordionVariants,
  type AccordionVariants,
} from "../../variants/accordionVariants";

interface ClassicAccordionProps extends AccordionVariants {
  items: {
    title: string;
    content: string;
  }[];
}

export default function ClasicAccordion({
  items,
  variant,
}: ClassicAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const styles = accordionVariants({ variant });

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <Accordion.Root className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openItems.includes(item.title);

        return (
          <Accordion.Item
            className={styles.item()}
            key={item.title}
            value={item.title}
          >
            <Accordion.Header className="rounded-md">
              <Accordion.Trigger
                onClick={() => toggleItem(item.title)}
                className={styles.trigger()}
              >
                <span className="font-medium">{item.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={styles.icon()}
                >
                  ▼
                </motion.span>
              </Accordion.Trigger>
            </Accordion.Header>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <Accordion.Panel className={styles.panel()}>
                    {item.content}
                  </Accordion.Panel>
                </motion.div>
              )}
            </AnimatePresence>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
