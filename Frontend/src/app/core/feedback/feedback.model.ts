export enum FeedbackType {
  Success,
  Error
}

export interface Feedback {
  type: FeedbackType;
  message?: string;
}


