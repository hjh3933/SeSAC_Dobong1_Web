interface List {
  id: number;
  text: string;
  done: boolean;
}
export interface RootState {
  todo: {
    list: List[];
    nextID?: number;
  };
}
export interface Payload {
  id: number;
  text: string;
}
export interface TodoState {
  list: List[];
  nextID?: number;
}
export interface Create {
  type: "todo/CREATE";
  payload: Payload;
}
export interface Done {
  type: "todo/DONE";
  id: number;
}
