export interface IEvent{
    key?: string;
    title: string;
    content: string;
}

export class EventModel implements IEvent {
    public key?: string
    public title: string
    public content: string
  }