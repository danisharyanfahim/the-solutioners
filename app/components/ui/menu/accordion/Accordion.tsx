"use client";
import React, { useEffect, useState } from "react";
import AccordionRow from "./AccordionRow";

//Add animations to this and make sure it works with nested accordions, also add children as well
const Accordion = ({
  alwaysOpen = false,
  items,
}: {
  alwaysOpen?: boolean;
  items?: { title: string; children: React.ReactNode | React.ReactNode[] }[];
}) => {
  // Initialize state based on whether alwaysOpen is true
  const [active, setActive] = useState<boolean[] | number | undefined>(
    alwaysOpen ? items?.map(() => false) : -1
  );

  const toggleOpen = (index: number) => {
    if (Array.isArray(active)) {
      // When alwaysOpen, toggle the boolean array
      setActive((prev) => {
        if (Array.isArray(prev)) {
          return prev.map((item, i) => (index === i ? !item : item));
        }
      });
    } else {
      // If not alwaysOpen, set active to the index or -1 if it is already the index
      setActive((prev) => (prev === index ? -1 : index));
    }
  };

  useEffect(() => {
    setActive(alwaysOpen ? items?.map(() => false) : -1);
  }, [alwaysOpen]);

  return (
    <section
      className="accordion-menu"
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {items?.map((item, index) => {
        return (
          <AccordionRow
            onClick={() => toggleOpen(index)} // Wrap toggleOpen in a function to pass the index
            isOpen={
              alwaysOpen && Array.isArray(active)
                ? active[index]
                : active === index
            }
            index={index}
            key={index}
            title={item.title}
          >
            {item.children}
          </AccordionRow>
        );
      })}
    </section>
  );
};

export default Accordion;
