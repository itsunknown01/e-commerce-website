import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";

interface FilterListProps {
  filters: Array<{
    id: string;
    name: string;
    options: Array<{ value: string; label: string; checked: boolean }>;
  }>;
  updateFilter: (newFilters: any) => void
}

const newFilters = [
  // {
  //   id: "category",
  //   name: "Category",
  //   options: [
  //     { value: "new-arrivals", label: "New Arrivals", checked: false },
  //     { value: "sale", label: "Sale", checked: false },
  //     { value: "travel", label: "Travel", checked: true },
  //     { value: "organization", label: "Organization", checked: false },
  //     { value: "accessories", label: "Accessories", checked: false },
  //   ],
  // },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export default function FilterList({ filters }: FilterListProps) {
  const [expanded, setExpanded] = useState("panel1");

  const handleExpanedChange =
    (panel: string) => (_e: SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : "");

  const handleFilterChange = () => {}
  return (
    <Box
      my="1rem"
      width={300}
      borderRight={1}
      borderColor="gray.300"
      pr={2}
      display={{ xs: "none", sm: "block" }}
    >
      {newFilters.map((category, index) => (
        <React.Fragment key={category.id}>
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleExpanedChange(`panel${index + 1}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {category.options.map((option) => (
                <Box key={option.value} display="flex" alignItems="center">
                  <Checkbox
                    defaultChecked={option.checked}
                    inputProps={{ "aria-label": option.label }}
                  />
                  <Typography>{option.label}</Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </React.Fragment>
      ))}
    </Box>
  );
}
