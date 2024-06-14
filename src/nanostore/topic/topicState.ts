import { atom } from "nanostores";

// comienzan a partir de 0

export type TopicType =
  | {
      id: number;
      title: string;
      content: {
        intro:
          | [{ type: string; text: string }]
          | [{ type: string; subtitle: string; texts: string[] }]
          | [{ type: string; items: string[]}]
          | [{ type: string; family: string; species: string[] }];
      };
    }
  | {};

export const topicInformation = atom<TopicType>({});
