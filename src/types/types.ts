import React from "react";

export interface ValidationType {
  string:
    | {
    required?: {
      value: boolean
      message: string
    }
  }
    | undefined
}

export type ArrowType = {
  direction: string;
}


