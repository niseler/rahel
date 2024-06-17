import chats from './chat.json';
import { cn } from './tools/utils.ts';
export const Chat = () => {


  interface ChatData {
    date: string;
    who: string;
    message: string[];
  }
  return (
    chats.data.map((chat: ChatData, idx) => {
      return (
        <div key={idx} className={cn('bg-green-500',{'bg-blue-400':chat.who === 'Nico'})}>
          <h1 className="font-bold">{chat.date}</h1>
          <h1 className="font-bold">{chat.who}</h1>
          {chat.message.map((message, idx) => {
            return <p key={idx}>{message}</p>;
          })}
        </div>
      );
    }
  ));
}