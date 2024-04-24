import React, { useState } from 'react';

export interface RadioOption {
    label: string;
    value: string;
  }
  
export interface DataRow {
    label: string;
    radioOptions: RadioOption[];
  }
  
export const UIData: DataRow[] = [
    { 
        "label": "Azure Work", 
        "radioOptions": [
            { "label": "By Project", "value": "Give me all projects where I used Azure" },
            { "label": "By Year", "value": "Work done with Azure for each project in years" },
            { "label": "Option C", "value": "optionC" }
      ], 
    },
    { 
        "label": "Row 2", 
        "radioOptions": [
            { "label": "Option A", "value": "optionA" },
            { "label": "Option B", "value": "optionB" },
            { "label": "Option C", "value": "optionC" }
      ], 
    },
    { 
        "label": "Row 3", 
        "radioOptions": [
            { "label": "Option A", "value": "optionA" },
            { "label": "Option B", "value": "optionB" },
            { "label": "Option C", "value": "optionC" }
      ], 
    },
];

