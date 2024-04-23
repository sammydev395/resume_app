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
        "label": "Row 1", 
        "radioOptions": [
            { "label": "By Project", "value": "Give me all projects where I did work for Halliburton" },
            { "label": "Option B", "value": "optionB" },
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

